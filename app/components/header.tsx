import { SignedIn, UserButton, SignedOut } from '@clerk/remix';

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-screen px-10 shadow bg-white/70 h-[10vh]">
      <div className="flex flex-row items-center w-screen text-6xl font-bold text-blue-700">
        Disco Stack
      </div>
      <SignedOut>
        <span className="text-2xl text-white whitespace-nowrap">
          powered by
        </span>
        <img
          src={'https://clerk.dev/images/clerk-logo.svg'}
          className="h-10 mx-6"
        />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
