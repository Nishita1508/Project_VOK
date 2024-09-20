// import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Home from './components/Home';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Contact/Navbar';
import Contact from './Contact/contact';
import Footer from './Contact/Footer';
import ContactHero from './Contact/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ContactHero/>
     <Contact/>
     <Footer/>
      </Router>
    </div>
  );
}

export default App;
