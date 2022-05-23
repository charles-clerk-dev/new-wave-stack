import { SignIn, SignedIn, SignedOut, useUser } from "@clerk/remix";
import Header from "../components/header";

export default function Index() {
  const { user } = useUser();

  return (
    <section className="bg-[url('https://cdn.pixabay.com/photo/2020/02/17/11/01/dj-4856148_1280.jpg')] bg-cover bg-no-repeat overflow-hidden">
      <Header />
      <main>
        <SignedOut>
          <div className="flex items-center justify-center w-screen h-screen">
            <SignIn />
          </div>
        </SignedOut>
        <SignedIn>
          <div className=" h-[52vh] flex flex-col justify-center items-center backdrop-blur-sm w-screen text-white">
            <h1 className="pt-10 font-bold text-9xl drop-shadow-xl">
              DISCO STACK
            </h1>
            <p className="mt-6 text-lg">
              Check out the README.md for instructions on how to get this
              project deployed.
            </p>
            <div className="flex justify-around w-1/3 my-20">
              <button className="inline-block w-1/4 py-3 text-sm font-medium leading-snug text-blue-600 uppercase transition duration-150 ease-in-out bg-white rounded shadow-md px-7 hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                Log In
              </button>
              <button className="inline-block w-1/4 py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                Sign Up
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-24 shadow-2xl bg-gradient-to-r from-white/0 to-white/50 bg-blur-lg bg-white/50">
              <div className="flex flex-row items-center justify-around w-1/2">
                <img
                  className="h-20"
                  src={
                    "https://clerk-marketing-l417w0rpi-clerk-production.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe1ql88v4%2Fproduction%2Fa736fdc35820f6f37f2b9d2445c4a87c86add7f8-1200x627.svg%3Ffit%3Dmax%26auto%3Dformat&w=384&q=75"
                  }
                />
                <img
                  src={"https://clerk.dev/images/clerk-logo.svg"}
                  className="h-10"
                />
                <img
                  src={
                    "https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
                  }
                />
                <img
                  className="h-28"
                  src={
                    "https://www.logo.wine/a/logo/Netlify/Netlify-Logo.wine.svg"
                  }
                />
              </div>
            </div>
          </div>
        </SignedIn>
      </main>
    </section>
  );
}
