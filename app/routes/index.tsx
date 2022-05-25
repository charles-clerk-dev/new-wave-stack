import {
  SignInButton,
  SignedIn,
  SignUpButton,
  SignedOut,
  useUser
} from '@clerk/remix';
import Header from '../components/header';
import LogoBanner from '../components/logo-banner';

export default function Index() {
  const { user } = useUser();

  return (
    <section className="h-screen w-screen bg-[url('https://cdn.pixabay.com/photo/2020/02/17/11/01/dj-4856148_1280.jpg')] bg-cover bg-no-repeat overflow-hidden">
      <Header />
      <main className="h-[60vh] flex flex-col items-center justify-center w-screen text-white backdrop-blur-sm">
        <div>
          <h1 className="pt-10 font-bold text-9xl text-shadow-lg">
            DISCO STACK
          </h1>
          <p className="mt-6 text-lg text-center text-shadow-lg">
            Check out the README.md for instructions on how to get this project
            deployed.
          </p>
        </div>
        <SignedOut>
          <div className="flex flex-row justify-around w-1/4 m-auto text-2xl text-white">
            <button className="inline-block w-1/3 py-3 text-lg font-medium leading-snug text-blue-600 uppercase transition duration-150 ease-in-out bg-white rounded shadow-md px-7 hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
              <SignInButton />
            </button>
            <button className="inline-block w-1/3 py-3 text-lg font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
              <SignUpButton />
            </button>
          </div>
        </SignedOut>
        <SignedIn>
          <h2 className="my-20 text-5xl text-shadow-lg">
            Hey there {user?.firstName}. Let's boogie...
          </h2>
        </SignedIn>
        <LogoBanner />
      </main>
    </section>
  );
}
