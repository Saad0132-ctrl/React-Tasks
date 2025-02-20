function NavBar(){
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center p-4 shadow-md">
               <h1 className="text-xl font-bold">Navbar</h1>
            <ul className="p-4 gap-6 text-lg flex justify-between items-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
export default NavBar