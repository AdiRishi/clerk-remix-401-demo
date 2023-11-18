import { SignIn } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In route</h1>
      <h4><Link to="/">Back to Home</Link></h4>
      <SignIn />
    </div>
  );
}
