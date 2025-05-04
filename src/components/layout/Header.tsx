import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', link: '#home' },
  { label: 'Sobre nosotros', link: '#about' },
  { label: 'Clases', link: '#classes' },
  { label: 'Staff', link: '#trainers' },
  { label: 'Testimonios', link: '#testimonials' },
  { label: 'Precios', link: '#pricing' },
  { label: 'Contacto', link: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Nuevo estado para saber si es móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      // Detectamos si la ventana es menor a 1024px para identificar un dispositivo móvil
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Para detectar cambios de tamaño de la ventana
    handleResize(); // Para establecer el valor inicial cuando se monta el componente

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cambiar el comportamiento del header dependiendo de si es móvil
  const headerClasses = isMobile || scrollPosition <= 50
    ? '' // Si es móvil o si el scroll está en la parte superior, no cambia el fondo
    : 'bg-gray-900/95 shadow-lg backdrop-blur-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 text-white z-50 relative">
            <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
            <span className="font-bold text-lg sm:text-xl">Power<span className="text-red-600">Fitness</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.link} 
                className="nav-link text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.link}
              className={`text-xl nav-link ${isOpen ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <button 
            className="btn btn-primary mt-8"
            onClick={toggleMenu}
          >
            Únete a nosotros
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
