import { Link } from "react-router"

export function meta() {
  return [
    { title: "Page" },
    { name: "description", content: "Page" },
  ]
}

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <Link to="/">Home</Link>
    </div>
  )
}
