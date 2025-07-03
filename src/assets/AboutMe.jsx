import React from "react";
import Label from "./Label";
import "./AboutMe.css";

export default function AboutMe(){
    return(
        <div className = "container-fluid d-flex align-items-start justify-content-center">
            <img src="https://media.istockphoto.com/id/1221154640/photo/the-sun-shining-through-the-trees-of-a-park.jpg?s=612x612&w=0&k=20&c=FATUB_nw6IjkoOwo3GFQHsdCRpHmZr_26n6aX1TEC5I=" 
                    style = {{width : '400px', height : '520px', borderRadius : '15px' }}/>
            
            <div className="ms-3 p-2 w-50 bg-dark" style = {{borderRadius : '15px'}}>
                <h1 className="d-inline" style={{color: 'white', fontWeight: 'bold'}}>
                    Hi! I'm James Cao
                    <br />
                    A Software Engineer
                </h1>
                <p className="mt-2 mb-1"style={{color: 'white'}}>
                    I am a full-stack software engineer with experience in languages such Python, Javascript and C++.
                    
                    <br />
                    <br />
                    I am most familiar with the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. 
                    
                    <br />
                    <br />
                    My cloud technology proficiency includes AWS cloud services, leveraging API calls, Implementing CI/CD pipelines, and managing databases.

                    <br />
                    <br />
                    I am also familiar with other domains such as Networking with Cisco, Machine Learning using Pytorch, and VR/AR with Unity.
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