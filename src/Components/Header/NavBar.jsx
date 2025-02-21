import { Link } from "react-router-dom"
function NavBar(){
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center p-4 shadow-md">
               <h1 className="text-xl font-bold">Navbar</h1>
            <ul className="p-4 gap-6 text-lg flex justify-between items-center">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link>
                </li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar