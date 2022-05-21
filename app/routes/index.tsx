import { SignIn, SignedIn, SignedOut, useUser } from "@clerk/remix";
import Header from "../components/header";

export default function Index() {
  const { user } = useUser();

  return (
    <div>
      <Header />
      <main>
        <SignedOut>
          <div className="h-screen w-screen flex justify-center items-center">
            <SignIn />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="h-[80vh] w-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl text-bold text-shadow text-blue-600">
              Hey {user?.firstName}.
            </h1>
            <p className="py-4 text-5xl text-bold italic">Let's boogie!</p>
          </div>
        </SignedIn>
      </main>
    </div>
  );
}
