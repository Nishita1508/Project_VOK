import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import Footer from './Footer'
import ContactHero from './Hero'
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      
      <Navbar/>
      {/* <ContactHero/> */}
      <main className="content">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
