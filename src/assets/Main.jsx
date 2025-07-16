import React from "react";
import AboutMe from "./AboutMe";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Main() {
    return (
        <div className="container-fluid bg-black min-vh-100">
            <div className="row min-vh-100 justify-content-center align-items-center">
                <div className= "col-5 d-flex flex-column align-items-center justify-content-center">
                    <Navbar />
                    <AboutMe />
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}