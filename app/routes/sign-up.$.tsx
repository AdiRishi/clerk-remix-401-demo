import { SignUp } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up route</h1>
      <h4><Link to="/">Back to Home</Link></h4>
      <SignUp />
    </div>
  );
}
