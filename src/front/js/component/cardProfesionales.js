import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/cardProfesionales.css';

const CardProfesionales = () => {
    const navigate = useNavigate();

    return (
        <div className="centered-container">
            <div className="card">
                <div>
                    {/* <img 
                            src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="Professional" 
                            classNameName="card-image" 
                    /> */}
                </div>
                <div className="card-details">
                    <p className="text-title">David</p>
                    <p className="text-body">Soy un apasionado cocinero especializado en comida peruana y pastelería. Con más...</p>
                </div>
                <button className="card-button">More info</button>
            </div>
            <br></br>
            <div className="card">
                <div>
                    {/* <img 
                            src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="Professional" 
                            classNameName="card-image" 
                    /> */}
                </div>
                <div className="card-details">
                    <p className="text-title">Miguel</p>
                    <p className="text-body">Soy un apasionado cocinero especializado en comida peruana y pastelería. Con más...</p>
                </div>
                <button className="card-button">More info</button>
            </div>
            <br></br>
            <div className="card">
                <div>
                    {/* <img 
                            src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="Professional" 
                            classNameName="card-image" 
                    /> */}
                </div>
                <div className="card-details">
                    <p className="text-title">Manu</p>
                    <p className="text-body">Soy un apasionado cocinero especializado en comida peruana y pastelería. Con más...</p>
                </div>
                <button className="card-button">More info</button>
            </div>
            <br></br>       
            <div className="card">
                <div>
                    {/* <img 
                            src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="Professional" 
                            classNameName="card-image" 
                    /> */}
                </div>
                <div className="card-details">
                    <p className="text-title">Ainhoa</p>
                    <p className="text-body">Soy un apasionado cocinero especializado en comida peruana y pastelería. Con más...</p>
                </div>
                <button className="card-button">More info</button>
            </div>   
        </div>
    );
};

export default CardProfesionales;
