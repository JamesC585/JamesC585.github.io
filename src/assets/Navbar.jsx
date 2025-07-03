import "./Navbar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md col-5 p-0 d-flex justify-content-end align-items-end ">
            <button className="navbar-toggler m-3" style={{ backgroundColor: 'rgb(250, 192, 4)' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav d-flex p-3 justify-content-end align-items-end">
                    <li className="nav-item">
                    <a className="nav-link active navBarColor" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navBarColor" href="#"> Resume </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navBarColor" href="#"> Portfolio </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
