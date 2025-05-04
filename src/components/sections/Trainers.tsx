import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Facebook, Instagram, Twitter } from 'lucide-react';


interface Trainer {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

const trainersData: Trainer[] = [
  {
    id: 1,
    name: "Mike Johnson",
    role: "Entrenador principal",
    image: "https://images.pexels.com/photos/31849591/pexels-photo-31849591/free-photo-of-muscular-man-posing-confidently-in-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Con más de 10 años de experiencia, Mike se especializa en entrenamiento de fuerza y ​​fitness funcional.",
    specialties: ["Entrenador de Fuerza", "Aptitud funcional", "Nutrición"],
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Instructora de Yoga",
    image: "https://images.pexels.com/photos/5928631/pexels-photo-5928631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sarah es una instructora de yoga certificada con una pasión por ayudar a los clientes a mejorar la flexibilidad y la atención plena.",
    specialties: ["Yoga", "Pilates", "Meditación"],
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Chris Davis",
    role: "Instructor de Fuerza",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Chris se especializa en levantamiento de pesas y rendimiento atlético, ayudando a los clientes a superar sus límites.",
    specialties: ["Powerlifting", "Levantamiento Olimpico", "Rendimiento Deportivo"],
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Desmod Miles",
    role: "Especialista en Cardio",
    image: "https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Desmond es un entrenador enérgico que se especializa en clases de spinning y entrenamientos HIIT para quemar la máxima cantidad de calorías.",
    specialties: ["Spinning", "HIIT", "Entrenasmiento de Resistencia"],
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  }
];

const TrainerCard: React.FC<{ trainer: Trainer; index: number }> = ({ trainer, index }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el breakpoint si es necesario
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => isMobile && setIsOpen(!isOpen)} // Solo habilitar el toggle en móviles
      className={`relative group cursor-pointer ${isVisible ? `stagger-${index % 41 + 1}` : 'opacity-100'}`} // Se asegura que las cards se vean siempre
      onMouseEnter={() => !isMobile && setIsHovered(true)} // Hover solo si no es móvil
      onMouseLeave={() => !isMobile && setIsHovered(false)} // Hover solo si no es móvil
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={trainer.image}
          alt={trainer.name}
          className={`w-full h-96 object-cover object-top transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold">{trainer.name}</h3>
          <p className="text-red-500 font-medium mb-3">{trainer.role}</p>
          <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{trainer.bio}</p>

          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {trainer.specialties.map((specialty, i) => (
              <span key={i} className="bg-gray-800 text-xs px-2 py-1 rounded-full">
                {specialty}
              </span>
            ))}
          </div>

          <div className="flex space-x-3 opacity-0 group-hover:opacity-0 transition-opacity duration-500">
            <a
              href={trainer.social.facebook}
              className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href={trainer.social.instagram}
              className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href={trainer.social.twitter}
              className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

     
    </div>
  );
};

const Trainers: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="trainers" className="section bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={ref} className={`section-title ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            Nuestro <span className="text-red-600">Entrenadores</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'slide-up stagger-1' : 'opacity-0'}`}>
            Conozca a nuestro equipo de profesionales del fitness certificados dedicados a ayudarle a alcanzar sus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {trainersData.map((trainer, index) => ( <TrainerCard key={trainer.id} trainer={trainer} index={index} /> ))} 
          </div> 
          </div> 
        </section> ); };

export default Trainers;