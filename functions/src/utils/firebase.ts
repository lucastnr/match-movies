import admin from 'firebase-admin';

const app = admin.initializeApp();
export const realtimeDb = app.database();
