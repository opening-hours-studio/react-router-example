import { Link } from "react-router"

export function meta() {
  return [
    { title: "Home" },
    { name: "description", content: "Home" },
  ]
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/page">Page</Link>
    </div>
  )
}
