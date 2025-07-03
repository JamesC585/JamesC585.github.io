import React from "react";
import AboutMe from "./AboutMe";
import Sidebar from "./Sidebar";
import Card from  './Card';

export default function Main() {
    return (
        <div className="container-fluid bg-black min-vh-100">
            <div className="row min-vh-100 justify-content-center align-items-center">
                <div className= "col-5 d-flex flex-column align-items-center justify-content-center">
                    <AboutMe />
                    <Sidebar/>
                </div>
            </div>
            <div className="row min-vh-100 justify-content-center align-items-center">
                <div className="col-8 d-flex flex-column align-items-center justify-content-center">
                    <Card 
                    imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxLzV8KAzovbvyTYGq8Z6c7Hyk8S2uYZtAA&s"
                    title = "HAM10000"
                    text = "Created HAM10000 AI"
                    skills = {["Python", "Pytorch", "Machine Learning"]}
                    />
                    <Card 
                    imageURL = "https://upload.wikimedia.org/wikipedia/commons/b/b1/MNIST_dataset_example.png"
                    title = "MNIST AI"
                    text = "Created MNIST AI"
                    skills = {["Python", "MLP", "Machine Learning"]}
                    />
                </div>
            </div>
        </div>
    );
}