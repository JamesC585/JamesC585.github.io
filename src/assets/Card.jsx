import React from 'react';
import Label from './Label';

export default function Card({title, text, imageURL, skills, ref}) {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center m-2">

            <a href={ref} target="_blank" rel="noopener noreferrer">
                <img src={imageURL} style={{width :"500px", height:"280px", objectFit: "cover", borderRadius:"15px"}}/>
            </a>

            <div className= "bg-dark ms-3" style = {{color : "white", borderRadius : "15px", padding : "10px", width : "500px", height : "280px", overflowY: "auto"}}>
                <h3 className="d-inline" style = {{color : "white", fontWeight: "bold"}}>
                    {title}
                </h3>
                <br />
                <p className="d-inline">
                    {text}
                </p>
                <br />
                {skills.map((skill, index) => (
                    <Label key={index} text={skill} />
                ))}
            </div>
        </div>
    );
}