import Head from "next/head";
import auth from "@/firebase/firebase.auth.js"
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const {data: session} = useSession();
  const [user, loading, error] = useAuthState(auth);
  console.log("from home ", user);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {/* <h2 style={{ textAlign: "center" }}>logged in user:{session?.user?.name}</h2> */}

        {user?.email && <h2 style={{ textAlign: "center" }}>logged in email:{user?.email}</h2>}
    </div>
  );
};

export default HomePage;
