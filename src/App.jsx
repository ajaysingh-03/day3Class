
import './App.css'
import Header from '../Components/Header/header';
import Hero from '../Components/Hero/hero';
import Card from '../Components/Card/card';
import Grid from '../Components/Grid/grid,';
import Footer from '../Components/Footer/footer';
import Quote from '../Components/Quote/quote';
import Home from '../Components/Home/home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../Components/Home/home';

function App() {
  return (
    <>
      <Router>
          <Header/>
          {/* <Hero /> */}
          <Routes>
            <Route path="/" element={<Home/>} /> 
            {/* <Route path="/quote" element={<Quote/>} /> */}
            <Route path="/quote" element={<Quote />} />

          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
