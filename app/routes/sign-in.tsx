import { SignIn } from '@clerk/remix';

export default function SignInRoute() {
  return <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />;
}
