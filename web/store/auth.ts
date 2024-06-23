import { atom, onMount } from 'nanostores';
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { authApp } from '@/utils/firebase';

export const $userLoading = atom(true);
export const $user = atom<User | null>(null);

onMount($user, () => {
  const unsubscribe = onAuthStateChanged(authApp, (user) => {
    $user.set(user);
    $userLoading.set(false);
  });

  return () => {
    unsubscribe();
    $userLoading.set(true);
  };
});

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(authApp, provider).catch(() => {
    // TODO: Handle with auth errors in the future
  });

  return credential;
}

export function logout() {
  return signOut(authApp);
}
