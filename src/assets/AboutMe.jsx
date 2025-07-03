import React from "react";
import Label from "./Label";

export default function AboutMe(){
    return(
        <div className = "container-fluid d-flex align-items-start justify-content-center">
            <img src="https://media.istockphoto.com/id/1221154640/photo/the-sun-shining-through-the-trees-of-a-park.jpg?s=612x612&w=0&k=20&c=FATUB_nw6IjkoOwo3GFQHsdCRpHmZr_26n6aX1TEC5I=" 
                    style = {{width : '50%', borderRadius : '15px' }}/>
            
            <div className="ms-3 p-2 w-50 bg-dark" style = {{borderRadius : '15px'}}>
                <h2 className="d-inline" style={{color: 'white', fontWeight: 'bold', fontFamily: 'Arial'}}>
                    Hi! I'm James Cao
                    <br />
                    A Software Engineer
                </h2>
                <p className="mt-2 mb-1"style={{color: 'white'}}>
                    I am a full-stack software engineer with experience in languages such Python, Javascript and C++.
                    
                    <br />
                    <br />
                    I am most familiar with Web Development stack, 
                    including HTML, CSS, and React.js for the frontend, and Node.js for the backend. 
                    I have also worked with Python for backend development and data processing.

                    <br />
                    <br />
                    My cloud technology proficiency includes AWS cloud services, leveraging API calls, Implementing CI/CD pipelines, and managing databases.
                </p>
                <Label text="Python"/>
                <Label text="Javascript"/>
                <Label text="HTML"/>
                <Label text="CSS"/>
                <Label text="C++"/>
                <Label text="React"/>
                <Label text="AWS Lambda"/>
                <Label text="Pytorch"/>
                <Label text="Unity"/>

            </div>
        </div>

    )
}