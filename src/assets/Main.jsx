import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Sidebar from "./Sidebar";
import Card from  './Card';
import "./Main.css";

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
                    imageURL = "https://media.istockphoto.com/id/1221154640/photo/the-sun-shining-through-the-trees-of-a-park.jpg?s=612x612&w=0&k=20&c=FATUB_nw6IjkoOwo3GFQHsdCRpHmZr_26n6aX1TEC5I="
                    title = "HAM10000"
                    text = "Created HAM10000 AI"
                    skills = {["Python", "Pytorch", "Machine Learning"]}
                    />
                    <Card 
                    imageURL = "https://upload.wikimedia.org/wikipedia/commons/b/b1/MNIST_dataset_example.png"
                    title = "MNIST AI"
                    text = "Created MNIST AI"
                    skills = {["Python", "Pytorch", "Machine Learning"]}
                    />
                </div>
            </div>
        </div>
    );
}