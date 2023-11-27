
type Todos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data: Todos[] = await res.json();
  
    // Pass data to the page via props
    return { props: { data } };
  }

export default getServerSideProps;