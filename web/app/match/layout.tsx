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
    <div>
      <main>{children}</main>
    </div>
  );
}
