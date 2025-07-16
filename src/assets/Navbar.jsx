import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const activeButton = location.pathname === '/' ? 'home' : 
                         location.pathname === '/Portfolio' ? 'portfolio' : '';
    
    return(
        <nav className="btn-group bg-dark position-fixed m-0 p-0" role="group" aria-label="NavBar" style = {{borderRadius: '15px', top: '2%'}}>
            <button type="button" className= {`btn ${activeButton === 'home' ? 'active-btn' : 'buttons'}`} style={{color:"white"}} onClick={() => {navigate('/')}}>Home</button>
            <button type="button" className={`btn ${activeButton === 'portfolio' ? 'active-btn' : 'buttons'}`} style={{color:"white"}} onClick={() => {navigate('/Portfolio')}}>Projects</button>
            
        </nav>
    )
}
