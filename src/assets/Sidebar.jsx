import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="container-fluid">  
      <hr className="mt-4 mb-0" id="lineBreak"/>
      <div id="displayButtons">
        <a href="https://www.linkedin.com/in/james-cao-7725bb314/" target="_blank" rel="noopener noreferrer" style={{color: "rgb(250, 192, 4)"}}>
          <i className="bi bi-linkedin" style ={{fontSize: '50px'}}></i> 
        </a>
        <a href="https://github.com/JamesC585" target="_blank" rel="noopener noreferrer" style={{color: "rgb(250, 192, 4)"}}>
          <i className="bi bi-github" style ={{fontSize: '50px'}}> </i> 
        </a>
        <a href="mailto:jamesc17@uci.edu" target="_blank" rel="noopener noreferrer" style={{color: "rgb(250, 192, 4)"}}>
          <i className="bi bi-envelope" style ={{fontSize: '50px'}}> </i> 
        </a>
      </div>
    </aside>
  );
}