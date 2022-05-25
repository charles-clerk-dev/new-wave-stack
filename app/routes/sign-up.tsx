import { SignUp } from '@clerk/remix';

export default function SignUpRoute() {
  return <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />;
}
