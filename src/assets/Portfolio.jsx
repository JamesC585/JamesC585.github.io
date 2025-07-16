import React from "react";
import Card from  './Card';
import Navbar from "./Navbar";

export default function Portfolio() {
    return (
        <div className="container-fluid bg-black min-vh-100">
            <div className="row min-vh-100 justify-content-center align-items-center">
                <div className="col-8 d-flex flex-column align-items-center justify-content-center">
                    <Navbar />
                    <Card 
                    imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxLzV8KAzovbvyTYGq8Z6c7Hyk8S2uYZtAA&s"
                    title = "HAM10000"
                    text = "I implemented and fine-tuned Resnet50 model on Ham10000 dataset for skin lesion classification. I 
                    achieved +90% on accuracy, f1-score, recall, and precision. For data pre-processing pipeline, I used openCV and Pandas for data augmentation and dataset joining. 
                    Due to small dataset sizes and imbalanced class weights, I leveraged oversampling to improve model performance and reduction in bias."
                    skills = {["Python", "Pytorch", "Pandas", "OpenCV", "Machine Learning"]}
                    ref = "https://github.com/JamesC585/HAM10000"
                    />
                    <Card 
                    imageURL = "https://upload.wikimedia.org/wikipedia/commons/b/b1/MNIST_dataset_example.png"
                    title = "MNIST AI"
                    text = "I created a simple AI that can classify handwritten digits using the MNIST dataset. To achieve this, I implemented a Multi-Layer Perceptron (MLP) model using only Python and Numpy. The
                    model uses one hidden layer with 128 neurons and ReLU activation Function. For the output layer, I used softmax activation function to classify the digits. The end result was a model that had accuracy of +90%"
                    skills = {["Python", "MLP", "Numpy", "Machine Learning"]}
                    ref = "https://github.com/JamesC585/MNIST_AI"
                    />
                </div>
            </div>
        </div>
    );
}