'use client';

import { $user, loginWithGoogle } from '@/store/auth';
import { useStore } from '@nanostores/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Index() {
  const user = useStore($user);
  const { push } = useRouter();

  useEffect(() => {
    if (user) push('/match');
  }, [user]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        className="text-2xl p-4 bg-black text-white rounded-xl flex flex-row items-center gap-2"
        onClick={loginWithGoogle}
      >
        Sign In With Google
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
