import React from "react";
import {TopNavBar} from './TopNavBar'
import Image from "../assets/Image.png";
import Decore from "../assets/Decore.png";

export const Header = () => {
    return (
        <header className="header">

            <div className="decoreImg-container">

                <img className="decoreImg" src={Decore} alt={"Decore"}/>

            </div>

            <TopNavBar/>
        </header>
    );
};