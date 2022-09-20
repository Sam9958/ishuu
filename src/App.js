import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init();
}, []);
  return (
    <>
    <Navbar/>
    <About/>
    <Work/>
   
    <Footer/>
    </>
  );
}

export default App;
