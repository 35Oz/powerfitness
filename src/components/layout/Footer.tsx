import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
  { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
];

const quickLinks: FooterLink[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre nosotros', href: '#about' },
  { label: 'Clases', href: '#classes' },
  { label: 'Staff', href: '#trainers' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Contacto', href: '#contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="flex items-center gap-2 text-white mb-4">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl">Power<span className="text-red-600">Fitness</span></span>
            </a>
            <p className="mb-6">
              Transforma tu cuerpo, eleva tu mente y libera tu potencial con nuestros entrenadores expertos e instalaciones de última generación.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  aria-label={link.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-red-600 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Horarios</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between mt-4 text-red-500 font-semibold">
                <span>Feriados:</span>
                <span>8:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <span>123 Calle Fitness, Buenos Aires, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-red-600 flex-shrink-0" />
                <span>011 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-600 flex-shrink-0" />
                <span>info@powerfitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PowerFitness. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">Políticas de privacidad</a>
            {' | '}
            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">Términos y servicios</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;