import { https } from 'firebase-functions/v1';
import { HttpsError } from 'firebase-functions/v1/auth';
import { realtimeDb } from './utils/firebase';
import { MatchSession } from '@match-movies/types';

export const createSession = https.onCall(async (_, context) => {
  const userId = context.auth?.uid;

  if (!userId) {
    throw new HttpsError(
      'unauthenticated',
      'You must be signed in to create a session'
    );
  }

  const newSession: MatchSession = {
    owner: userId,
    members: {
      [userId]: true,
    },
  };

  const db = await realtimeDb.ref('sessions').push(newSession);

  return { id: db.ref.key, data: newSession };
});

export const deleteSession = https.onCall(
  async (data: { sessionId: string }, context) => {
    const userId = context.auth?.uid;

    if (!userId) {
      throw new HttpsError(
        'unauthenticated',
        'You must be signed in to delete a session'
      );
    }

    const sessionRef = realtimeDb.ref(`sessions/${data.sessionId}`);
    const sessionData = (await sessionRef.get()).val() as
      | MatchSession
      | undefined;

    if (sessionData?.owner !== userId) {
      throw new HttpsError(
        'permission-denied',
        'You must be the owner to delete a session'
      );
    }

    await sessionRef.remove();

    return {
      id: sessionRef.key,
      data: sessionData,
    };
  }
);

export const joinSession = https.onCall(
  async (data: { sessionId: string }, context) => {
    const userId = context.auth?.uid;
    if (!userId) {
      throw new HttpsError(
        'unauthenticated',
        'You must be signed in to join a session'
      );
    }

    const sessionData = (
      await realtimeDb.ref(`sessions/${data.sessionId}`).get()
    ).val() as MatchSession | undefined;

    if (!sessionData) {
      throw new HttpsError('not-found', 'Session not found');
    }

    if (!sessionData.members[userId]) {
      sessionData.members[userId] = true;
      await realtimeDb
        .ref(`sessions/${data.sessionId}/members/${userId}`)
        .set(true);
    }

    return { id: data.sessionId, data: sessionData };
  }
);

export const leaveSession = https.onCall(
  async (data: { sessionId: string }, context) => {
    const userId = context.auth?.uid;
    if (!userId) {
      throw new HttpsError(
        'unauthenticated',
        'You must be signed in to leave a session'
      );
    }

    await realtimeDb
      .ref(`sessions/${data.sessionId}/members/${userId}`)
      .remove();

    return { removed: true };
  }
);
