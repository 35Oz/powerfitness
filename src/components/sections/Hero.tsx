import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:'linear-gradient(rgba(0,0,0,0.6),  rgba(0, 0, 0, 0.8)), url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
         backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/90"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 ${isLoaded ? 'slide-up' : 'opacity-0'}`}
        >
          CONSTRUYE TU <span className="text-red-600">MEJOR VERSIÓN</span>
        </h1>
        <p 
          className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 ${isLoaded ? 'slide-up stagger-1' : 'opacity-0'}`}
        >
          Transforma tu físico y eleva tu rendimiento con nuestros entrenadores expertos
          e instalaciones de última generación. Comience su viaje de acondicionamiento físico hoy.
        </p>
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 ${isLoaded ? 'slide-up stagger-2' : 'opacity-0'}`}>
          <a href="#classes" className="btn btn-primary w-full sm:w-auto">
           Clases
          </a>
          <a href="#about" className="btn btn-secondary w-full sm:w-auto">
          ¿Quienes somos?
          </a>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${isLoaded ? 'fade-in stagger-4' : 'opacity-0'}`}
      >
        <a href="#about" className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Aprete para desplazar</span>
          <ChevronRight className="w-6 h-6 rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;