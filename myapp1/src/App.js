import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Contact/Layout";
import Contact from "./Contact/contact";
import BookingForm from "./Contact/BookingForm";

function App() {
  return (
    <Router>
      
      <Layout>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
