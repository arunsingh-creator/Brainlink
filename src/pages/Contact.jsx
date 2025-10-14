import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Contacts from "../common/Contacts";
import "../css/index.css";
import Services from  "../common/Services";
import logo from "../assets/logo/logo.png";

export default function Contact(){
    return(
        <>
        <Header />
        <Contacts />
        <Footer />
        </>
    );
}