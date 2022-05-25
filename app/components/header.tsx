import { SignedIn, UserButton, SignedOut } from '@clerk/remix';

export default function Header() {
  return (
    <>
      <SignedIn>
        <header className="flex items-center justify-between w-screen px-10 shadow bg-white/70 h-[10vh]">
          <span className="flex">
            <div className="text-2xl text-gray-800">powered by</div>
            <img
              src={'https://clerk.dev/images/clerk-logo.svg'}
              className="h-10 mx-6"
            />
          </span>
          <UserButton />
        </header>
      </SignedIn>
      <SignedOut>
        <header className="h-[10vh]"></header>
      </SignedOut>
    </>
  );
}
