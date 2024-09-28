import React from "react";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactHero from "./Hero";
import { Router } from "react-router-dom";
 

function Main ()
{
    return(
        <>
        <Router>
        <Navbar/>
        </Router>
        <ContactHero/>
        <BookingForm/>
        <Footer/>
        </>
    )
}

export default Main