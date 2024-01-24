import Link from "next/link";
const Home = () => {

  return (
    <div>
      <Link href="/todos">
      <a>
      Go to Todos Page
      </a>
     </Link>
    </div>
  )
}

export default Home;