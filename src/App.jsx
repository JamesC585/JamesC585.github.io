import React from 'react';

export default function App() {
  return ( 
    <div className="container-fluid">
        <div className="row">
            <nav className="col-lg-2 bg-dark min-vh-100 d-flex flex-column align-items-center justify-content-top">  
                    <button className="btn mt-5 btn-primary rounded-circle" style={{ width: "200px", height: "200px" }}>hello</button>
                    <p className="h1 text-white pt-3">James Cao</p>
                    <p id="displayButton">Software Developer</p>
                    <hr id="lineBreak"/>
                    <button id="contactButton">
                        <i className="bi bi-envelope-fill"></i> 
                        Contact Me!
                    </button>
                    <p className="infoDiv">
                        <i className="bi bi-envelope picture"></i> 
                        jamesc17@uci.edu
                    </p>
                    <p className="infoDiv">
                        <i className="bi bi-telephone picture"></i> 
                        +1(626) 228-8279
                    </p>
                    <p className="infoDiv">
                        <i className="bi bi-gift picture"></i> 
                        June 29th 2003
                    </p>
                    <p className="infoDiv">
                        <i className="bi bi-geo-alt picture"></i> 
                        Rancho Cucamonga, CA
                    </p>
                    <div id = "displayButtons">
                        <a href="https://www.linkedin.com/in/james-cao-7725bb314/" target="_blank" rel="noopener noreferrer" style={{color: "rgb(250, 192, 4)"}}>
                            <i className="bi bi-linkedin"></i> 
                        </a>
                        <a href="https://github.com/JamesC585" target="_blank" rel="noopener noreferrer" style={{color: "rgb(250, 192, 4)"}}>
                            <i className="bi bi-github"></i> 
                        </a>
                    </div>
            </nav>
            <main className= "col-md-10">
                <button>hello</button>
            </main>
        </div>
    </div>
  );
}