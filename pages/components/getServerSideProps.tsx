import type { InferGetServerSidePropsType } from "next";
type Todos = {
    name: string;
    path: string;
    targets: string;
  };

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/ambil.json`);
    const data: Todos[] = await res.json();
  
    // Pass data to the page via props
    return { props: { data } };
  }