import AOS from 'aos';
import 'aos/dist/aos.css';
import Bookticket from './components/BookTicket'
import Hero from './components/Hero'
import Tickets from './components/Tickets'
import { Toaster} from 'sonner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  
  return (
    <>
      
      <Toaster/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/book' element={<Bookticket/>} />
      <Route path='/tickets' element={<Tickets />} />
     </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
