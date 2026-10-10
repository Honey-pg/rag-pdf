import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs';
import React from 'react';

export default function SignInButton() {
  const { signIn, signOut } = useClerk();

  return (
    <div>
      <SignedIn>
        <button onClick={() => signOut()} className="btn-signout">
          Sign Out
        </button>
      </SignedIn>
      <SignedOut>
        <button onClick={() => signIn()} className="btn-signin">
          Sign In
        </button>
      </SignedOut>
    </div>
  );
}
