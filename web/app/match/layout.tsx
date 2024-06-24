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
      <header className="flex flex-row items-center justify-between bg-black p-4">
        <h1 className="text-white">Match Movies</h1>
        <Button
          size="lg"
          variant="secondary"
          className="text-md"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
