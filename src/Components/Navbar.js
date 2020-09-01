import React from "react";
import { Link } from "react-router-dom";

import "../CSS/navbar.css";

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={require("../img/Hololive_production_Logo.png")} alt="Hololive Logo" ></img>{" "}
                <span>Hololive Miwwie 
                </span> 
            </Link>
        </nav>
    );
}