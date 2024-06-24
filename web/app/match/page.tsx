'use client';
import { Button } from '@/components/ui/button';
import { logout } from '@/store/auth';

export default function MatchPage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-1 flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-2">
        <Button className="w-full" size="huge">
          Create New Session
        </Button>
        <Button variant="secondary" className="w-full" size="huge">
          Join Session
        </Button>
        <Button
          onClick={logout}
          className="w-full"
          variant="destructive"
          size="huge"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
