import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-200 ">
        <div className="container mx-auto p-3 flex justify-end">
            <Link to="/" className="pr-4 text-lg font-medium hover:font-semibold">Problem One</Link>
            <Link to="/problemtwo" className="text-lg font-medium hover:font-semibold">Problem Two</Link>
        </div>
    </div>
  )
}

export default Navbar