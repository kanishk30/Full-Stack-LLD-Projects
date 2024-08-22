import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Link } from "react-router-dom"
import Memoexample from './Components/Memoexample';
import Callbackexample from './Components/Callbackexample';

// import HomePage from './Components/HomePage';
// import About from './Components/About';
// import Contact from './Components/Contact';

const HomePage = lazy(() => import('./Components/HomePage'))
const AboutPage = lazy(() => import('./Components/About'))
const ContactPage = lazy(() => import('./Components/Contact'))

function App() {

  // const [HomePage, setHomePage] = React.useState(null);
  // const [AboutPage, setAboutPage] = React.useState(null);
  // const [ContactPage, setContactPage] = React.useState(null);

  // preloading home page with useeffect.
  React.useEffect(() => {
    // import('./Components/HomePage')
    //   .then(
    //     (module) => setHomePage(() => {
    //       console.log('Module::', module)
    //       return module.default
    //     })
    //   )
    // loadHomePage()
  }, [])

  // const loadHomePage = () => {
  //   import('./Components/HomePage').then((module) => setHomePage(() => module.default))
  // }

  // const loadAboutPage = () => {
  //   import('./Components/About').then((module) => setAboutPage(() => module.default))
  // }

  // const loadContactPage = () => {
  //   import('./Components/Contact').then((module) => setContactPage(() => module.default))
  // }

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about' >About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading.... Please wait</div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Suspense>

        <Memoexample />
        <Callbackexample />

      </div>
    </BrowserRouter >

  );
}

export default App;
