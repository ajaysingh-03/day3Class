
import './App.css'
import Header from '../Components/Header/header';
import Hero from '../Components/hero/hero';
import Card from '../Components/Card/card';
import Grid from '../Components/Grid/grid,';
import Footer from '../Components/Footer/footer';
<<<<<<< HEAD

=======
import Quote from '../Components/Quote/quote';
import Home from '../Components/Home/home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../Components/Home/home';
>>>>>>> c6fdb0426aa217b90bc2a866345a5585ae825594

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header/>
      <Hero />
      <Card/>
      <Grid/>
      <Footer/>
=======
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
>>>>>>> c6fdb0426aa217b90bc2a866345a5585ae825594
    </>
  )
}

export default App
