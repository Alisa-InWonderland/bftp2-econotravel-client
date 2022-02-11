import React from "react";
import {TopNavBar} from './TopNavBar'
import Image from "../assets/Image.png";
import Decore from "../assets/Decore.png";
import {CallToAction} from "./CallToAction";

export const Header = () => {
    return (
        <header className="header">

            <TopNavBar/>

            <CallToAction/>
        </header>
    );
};