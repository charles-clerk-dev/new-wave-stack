import { SignIn } from "@clerk/remix";
import Header from "../components/header";

export default function Index() {
  return (
    <div>
      <Header />
      <main>
        <div className="h-screen w-screen flex justify-center items-center">
          <SignIn />
        </div>
      </main>
    </div>
  );
}
