import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Check, Target, Clock, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref} 
      className={`flex items-start gap-4 ${isVisible ? `fade-in ${delay}` : 'opacity-0'}`}
    >
      <div className="bg-red-600/20 p-3 rounded-lg text-red-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver();
  const { getTransform } = useScrollAnimation();
  
  const features = [
    {
      icon: <Target size={24} />,
      title: "Entrenamiento personal",
      description: "Planes de acondicionamiento físico personalizados diseñados para cumplir con sus objetivos específicos y nivel de condición física.",
      delay: "stagger-1"
    },
    {
      icon: <Clock size={24} />,
      title: "Horarios flexibles",
      description: "Abierto desde temprano hasta tarde con disponibilidad de fin de semana para adaptarse a su apretada agenda.",
      delay: "stagger-2"
    },
    {
      icon: <Users size={24} />,
      title: "Entradores expertos",
      description: "Profesionales certificados dedicados a ayudarlo a lograr los máximos resultados.",
      delay: "stagger-3"
    }
  ];

  const stats = [
    { value: "5,000+", label: "Miembros felices" },
    { value: "25+", label: "Entrenadores expertos" },
    { value: "50+", label: "Clases semanales" },
    { value: "10+", label: "Años de experiencia" },
  ];

  return (
    <section id="about" className="section bg-gray-950">
      <div 
        className="animated-shape w-64 h-64 -left-32 top-0 opacity-20"
        style={{ transform: getTransform(30) }}
      ></div>
      <div 
        className="floating-circle w-96 h-96 -right-48 bottom-0"
        style={{ transform: getTransform(90) }}
      ></div>
      <div 
        className="gradient-blob w-[40rem] h-[40rem] left-1/4 top-1/4"
        style={{ transform: getTransform(0) }}
      ></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre <span className="text-red-600">nuestro gimnasio</span></h2>
          <p className="section-subtitle">
          Descubra el lugar perfecto para transformar su cuerpo y mente con nuestras instalaciones de última generación y la orientación de expertos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref} 
            className={isVisible ? "fade-in" : "opacity-0"}
          >
           <div className="relative w-full max-w-md mx-auto">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Modern gym interior" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute bottom-0 right-0  bg-red-600 text-white p-4 sm:p-6 rounded-lg shadow-lg transform translate-x-4 translate-y-4">
                  <p className="text-xl sm:text-2xl font-bold">10+ Años</p>
                  <p className="text-sm sm:text-base">de Excelencia</p>
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-8">
            <div className={isVisible ? "slide-left" : "opacity-0"}>
              <h3 className="text-2xl font-bold mb-4">Bienvenidos a <span className="text-red-600">PowerFitness</span></h3>
              <p className="text-gray-400 mb-6">
              Fundada en 2013, PowerFitness ha ayudado a miles de personas a transformar sus vidas a través del fitness.
Nuestras instalaciones de última generación, entrenadores expertos y comunidad de apoyo crean el ambiente perfecto para
Alcanzar tus objetivos de fitness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-red-600" />
                  <span>Equipamiento moderno</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-600" />
                  <span>Apoyo nutricional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-600" />
                  <span>Consultas gratis</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <Feature 
                  key={index} 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description}
                  delay={feature.delay}
                />
              ))}
            </div>
          </div>
        </div>

        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 text-center"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 p-6 rounded-lg ${statsVisible ? `scale-in stagger-${index + 1}` : 'opacity-0'}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;