// import logo from './logo.svg';

import Navbar from './Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';
import About from './About'
// import Carousel1 from './card';
import HotelCarousel from './card';
function Home() {
  return (
    <div className="App">
     <>
     <Navbar/>
     <About/>
     <HotelCarousel/>
      </>
     
      
    </div>
  );
}

export default Home;
