import { useOxyAuth } from "@oxyhq/services";

function MyComponent() {
  const { session, status, signIn, signOut } = useOxyAuth();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <button onClick={signIn}>Sign In</button>;
  }

  return (
    <div>
      Welcome, {session.user.email}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default MyComponent;
