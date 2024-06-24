'use client';
import { Button } from '@/components/ui/button';
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
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <Button className="flex flex-row gap-2 text-xl p-6" onClick={loginWithGoogle}>
        Sign In With Google
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
}
