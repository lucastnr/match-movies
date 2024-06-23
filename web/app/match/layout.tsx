'use client';
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
    <div className="flex flex-col h-screen w-full">
      <header className="flex flex-row justify-between items-center bg-black text-white p-4">
        <h1>Match Movies</h1>
        <button
          className="text-sm p-2 bg-white text-black rounded-xl"
          onClick={() => logout()}
        >
          Logout
        </button>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
