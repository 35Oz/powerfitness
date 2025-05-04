import { useEffect } from 'react'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


import {Hero, About, Classes, 
  Trainers, Testimonials,
  Pricing, Contact} from './components/sections';


function App() {
  useEffect(() => {
    document.title = 'PowerFitness - Transforma tu cuerpo, eleva tu mente';
  }, []);

  return (
    <>
       <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero/>
      <About/>
      <Classes/>
      <Trainers/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer />
    </div>
    </>
  )
}

export default App
