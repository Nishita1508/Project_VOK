import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./components/contact";
import BookingForm from "./components/BookingForm";
import Biography from "./components/Biography";
import AboutUs from "./components/About";
import VOKMusic from "./components/VOKMusic";
function App() {
  return (
    <Router>
    
      <Layout>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/biography" element={<Biography />} />
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path="/music" element={<VOKMusic/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
