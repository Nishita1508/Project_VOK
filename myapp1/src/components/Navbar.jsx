// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Navbar.css'; // Import your external CSS file

// const Navbar = () => {
//   return (
//     <div className="App">
//       <header>
//         <nav className="navbar navbar-expand-sm navbar-dark">
//           <div className="container">
//             {/* Use the Link and img tag correctly */}
//             <Link to="/" className="navbar-brand">
//               <img src="/logo.jpeg" alt="VOK Logo" className="logo" height='50px' width='100px'/> {/* Adjust src path */}
//             </Link>

//             <button
//               className="navbar-toggler"
//               data-bs-toggle="collapse"
//               data-bs-target="#link"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div
//               className="collapse navbar-collapse justify-content-end text-center text-white"
//               id="link"
//             >
//               <ul className="navbar-nav nav">
//                 <li className="nav-item">
//                   <Link to="/" className="nav-link">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/music" className="nav-link">Music</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/about" className="nav-link">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/contact" className="nav-link">Contact</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/message" className="nav-link">Message</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <main>
//         <section className="home" id="home">
//           <div className="head_container">
//             <div className="box">
//               <div className="text">
//                 <section className="hero">
//                 <h1 className="animated-text">Experience Awaits!</h1>
//                   <p>Experience the music and message ministries of Sarah and Olusola Akintunde.</p>
//                 </section>
//               </div>
//             </div>
//             <div className="image">
//               <img
//                 src="/Home/bg1 (2).jpg" // Adjust the path to the public folder
//                 className="slide"
//                 alt="Saffron Sunset Hotel" // Add an alt attribute for accessibility
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src="/logo.jpeg" alt="Saffron Sunset Logo" className="logo"  height='50px' width='100px' />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/music" className="nav-link">Music</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/message" className="nav-link">Message</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="home" id="home">
          <div className="head_container">
            <div className="box">
              <div className="text">
                <h1 className="animated-text">Experience Awaits!</h1>
                {/* <p>Experience the music and message ministries of Sarah and Olusola Akintunde.</p> */}
              </div>
            </div>
            <div className="image">
              <img
                src="/Home/bg1 (2).jpg"
                className="slide"
                alt="Saffron Sunset Hotel"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Navbar;
