import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <NavLink className="links" exact to={"/"}>Home</NavLink>
            <NavLink className="links" to={"/login"}>Sign Out</NavLink>
        </nav>
    )
}

export default NavBar;