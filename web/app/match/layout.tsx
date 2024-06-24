'use client';
import { Button } from '@/components/ui/button';
import { $user, $userLoading, logout } from '@/store/auth';
import { useStore } from '@nanostores/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userLoading = useStore($userLoading);
  const user = useStore($user);
  const { push } = useRouter();

  useEffect(() => {
    if (!userLoading && !user) {
      push('/');
    }
  }, [userLoading, user]);

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="grid w-full grid-cols-3 grid-rows-1 items-center bg-black p-4">
        {/* TODO: remove these if not adding anything else here */}
        <span />
        <span />
        <div className="justify-self-end">
          <Button variant="secondary" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
