//import { Button } from "antd";

import { useRouter } from 'next/router';
import auth from "@/firebase/firebase.auth.js"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form"

const LoginPage = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const router = useRouter(); // Initialize the router

  console.log(user);

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        // Redirect after successful login
        router.push('/profile');
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  }

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={() => signIn("google", {
            callbackUrl: "http://localhost:3000/",
          })} />
          <GithubOutlined onClick={() => signIn("github", {
            callbackUrl: "http://localhost:3000/",
          })} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })} type="email" />
          <label htmlFor="">Your Password</label>
          <input {...register("password", { required: true })} type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


// import { useRouter } from 'next/router';
// import auth from "@/firebase/firebase.auth.js"
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
// import Head from "next/head";
// import styles from "@/styles/Login.module.css";
// import { signIn } from "next-auth/react";
// import { useForm } from "react-hook-form"
// const LoginPage = () => {
//   const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useCreateUserWithEmailAndPassword(auth);
//   const router = useRouter(user);
//   console.log(user);

  
//   const {
//     register,
//     handleSubmit,
//   } = useForm()

//   const onSubmit = (data) => {
//     createUserWithEmailAndPassword(data.email, data.password)
//     router.push('/profile')
//   }
//   return (
//     <div>
//       <Head>
//         <title>Next Login</title>
//       </Head>
//       <div className={styles.form}>
//         <h3>LOGIN</h3>
//         <div className={styles.social_icons}>
//           <GoogleOutlined onClick={() => signIn("google", {
//             callbackUrl: "http://localhost:3000/",
//           })} />
//           <GithubOutlined onClick={() => signIn("github", {
//             callbackUrl: "http://localhost:3000/",
//           })} />
//         </div>
//         <hr />
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label htmlFor="">Your Email</label>
//           <input {...register("email", { required: true })} type="email" />
//           <label htmlFor="">Your Password</label>
//           <input {...register("password", { required: true })} type="password" />
//           <button  type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
