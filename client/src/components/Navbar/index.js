import React from "react";


function Navbar() {
    return(
        
        <nav className="navbar navbar-light">
            <div>
            <li className="nav-item">
            <a className="navbar-brand" href="/">
                Search
            </a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="/saved">
                Saved
            </a>
            </li>
            </div>
        </nav>
    )
}

export default Navbar;