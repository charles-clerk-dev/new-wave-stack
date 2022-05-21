import { SignedIn, UserButton } from "@clerk/remix";

export default function Header() {
  return (
    <header className="w-screen h-28 flex flex-row justify-between px-10 items-center shadow">
      <span className="text-2xl text-bold underline">Disco Stack</span>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
