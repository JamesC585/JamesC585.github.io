import React from "react";

export default function Label({text}){
    return(
        <p className="label bg-secondary d-inline-block m-0 p-1 ps-2 pe-2 me-2 mb-2" style = {{borderRadius: '15px', color : "white"}}>
            {text}
        </p>
    );
}