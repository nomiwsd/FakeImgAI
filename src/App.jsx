import './App.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    Aos.init(
      {
        duration: 1000,
        offset: 200
      }
    );
  })
  return (
    <div className='bg-mainbg min-h-screen'>
      <Header />
      <HeroSection />
      <Footer/>
    </div>
  )
}

export default App
