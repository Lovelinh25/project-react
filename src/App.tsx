
import './App.css';
import { Banner } from './layouts/components/Banner/Banner';
import { MainCarousel } from './layouts/components/HomeCarousel/MainCarousel';
import { Navbar } from './layouts/components/navigation/Navbar';
import { HomePage } from './Page/components/HomePage/HomePage';
import {Footer} from './layouts/components/Footers/Footer'
import { useEffect, useState } from 'react';

function App() {

  const [size, setSize] =useState([window.innerWidth, window.innerHeight]);

  useEffect(()=>{
    const handleResize = () =>{
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  
  return (
    
    <div className="App">
      <div>
        <Navbar/> 
      <MainCarousel/>
      </div>
      <div>
        <HomePage/>
        
      </div>
     <Banner/>
     <Footer/>
    </div>
  );
}

export default App;
