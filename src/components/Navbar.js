import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <h4><Link to="/">Accueil</Link>
                <Link to="/Home">Menu</Link></h4>
        </div>
    );
}

export default Navbar;