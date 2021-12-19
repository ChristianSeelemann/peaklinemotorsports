import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/client";
import { signIn } from "next-auth/client";
import { signOut } from "next-auth/client";

const Home: NextPage = () => {
  const [session, loading] = useSession();

  console.log(session);

  return (
    <div>
      <Head>
        <title>Peakline Motorsports</title>
        <meta name="description" content="Simracing Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Peakline Motorsports Website</main>
      <div>
        {!session && <button onClick={() => signIn()}>Login</button>}
        {session && session.user && `Hi ${session.user.name}`}
      </div>
      {session && <button onClick={() => signOut()}>Logout</button>}
    </div>
  );
};

export default Home;
