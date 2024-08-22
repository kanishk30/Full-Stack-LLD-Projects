



import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Link } from "react-router-dom"

// import HomePage from './Components/HomePage';
// import About from './Components/About';
// import Contact from './Components/Contact';

function App() {

  const [HomePage, setHomePage] = React.useState(null);
  const [AboutPage, setAboutPage] = React.useState(null);
  const [ContactPage, setContactPage] = React.useState(null);

  // preloading home page with useeffect.
  React.useEffect(() => {
    // import('./Components/HomePage')
    //   .then(
    //     (module) => setHomePage(() => {
    //       console.log('Module::', module)
    //       return module.default
    //     })
    //   )
    loadHomePage()
  }, [])

  const loadHomePage = () => {
    import('./Components/HomePage').then((module) => setHomePage(() => module.default))
  }

  const loadAboutPage = () => {
    import('./Components/About').then((module) => setAboutPage(() => module.default))
  }

  const loadContactPage = () => {
    import('./Components/Contact').then((module) => setContactPage(() => module.default))
  }

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/' onClick={loadHomePage}>Home</Link>
            </li>
            <li>
              <Link to='/about' onClick={loadAboutPage}>About</Link>
            </li>
            <li>
              <Link to='/contact' onClick={loadContactPage}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={HomePage ? <HomePage /> : <div>Loading...</div>} />
          <Route path='/about' element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
          <Route path='/contact' element={ContactPage ? <ContactPage /> : <div>Loading...</div>} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
