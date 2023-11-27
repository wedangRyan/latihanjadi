import Head from "next/head";
import Image from "next/image";
import styles from "../app/Home.module.css";
import type { InferGetServerSidePropsType } from "next";
import BasicCard from "./components/BasicCard";
import ModalLogin from "./components/ModalLogin";
import ResponsiveAppBarSSR from "./components/ResponsiveAppBar";

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const login = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Change your life by joining the JustSigNow (JSN) Program. New opportunities with the concept of 100% full decentralization !!!"
        />
      </Head>
      <ResponsiveAppBarSSR />
      <main className={styles.main}>
        {data.map((todo) => {
          return (
            <div className={styles.container} key={todo.id}>
              <div className={`card_mid`}></div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/ambil.json`);
  const data: Todos[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default login;
