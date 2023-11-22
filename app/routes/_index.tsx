import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/remix";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Clerk Demo - 401s on cold page view</h1>
      <ul>
        <SignedOut>
          <li>
            <Link to="/sign-in" rel="noreferrer">
              Login Page
            </Link>
          </li>
          <li>
            <Link to="sign-up">Sign up Page</Link>
          </li>
        </SignedOut>
        <SignedIn>
          <li>
            <p>Account View</p>
            <UserButton />
          </li>
          <li>
            <SignOutButton />
          </li>
        </SignedIn>
      </ul>
    </div>
  );
}
