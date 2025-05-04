import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClassItem {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: 'Inicial' | 'Intermedio' | 'Avanzado';
  capacity: number;
  trainer: string;
}

const classesData: ClassItem[] = [
  {
    id: 1,
    title: "Entrenamiento HIT",
    description: "Entrenamiento en intervalos de alta intensidad que alterna entre ráfagas intensas de actividad y períodos fijos de actividad o descanso menos intensos.",
    image: "https://images.pexels.com/photos/6389070/pexels-photo-6389070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "45 min",
    level: "Intermedio",
    capacity: 20,
    trainer: "Mike Johnson"
  },
  {
    id: 2,
    title: "Yoga",
    description: "Un enfoque basado en el fitness para el yoga de estilo vinyasa que desarrolla la fuerza, la flexibilidad y el equilibrio.",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "60 min",
    level: "Inicial",
    capacity: 15,
    trainer: "Sarah Chen"
  },
  {
    id: 3,
    title: "Entrenamiento de fuerza",
    description: "Concéntrese en desarrollar masa muscular y fuerza utilizando los principios de resistencia y sobrecarga progresiva.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "50 min",
    level: "Avanzado",
    capacity: 12,
    trainer: "Chris Davis"
  },
  {
    id: 4,
    title: "Funcional",
    description: "Entrenamientos de ciclismo indoor de alta energía que combinan entrenamiento cardiovascular y de fuerza para un ejercicio de cuerpo completo.",
    image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "45 min",
    level: "Intermedio",
    capacity: 18,
    trainer: "Lisa Miller"
  },
  {
    id: 5,
    title: "CrossFit",
    description: "Movimientos funcionales constantemente variados realizados a alta intensidad. Combina elementos de HIIT, halterofilia olímpica y más.",
    image: "https://images.pexels.com/photos/4720836/pexels-photo-4720836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "60 min",
    level: "Avanzado",
    capacity: 15,
    trainer: "Jason Smith"
  },
  {
    id: 6,
    title: "Pilates",
    description: "Ejercicio de bajo impacto que tiene como objetivo fortalecer los músculos a la vez que mejora la flexibilidad y la postura.",
    image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "55 min",
    level: "Inicial",
    capacity: 12,
    trainer: "Emma Wilson"
  }
];

const ClassCard: React.FC<{ classItem: ClassItem; index: number }> = ({ classItem, index }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Inicial':
        return 'bg-green-700';
      case 'Intermedio':
        return 'bg-yellow-600';
      case 'Avanzado':
        return 'bg-red-700';
      default:
        return 'bg-gray-700';
    }
  };

  return (
    <motion.div
      ref={ref}
      className="card group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={classItem.image} 
          alt={classItem.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-red-500" />
              <span>{classItem.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-red-500" />
              <span>Max {classItem.capacity}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(classItem.level)}`}>
              {classItem.level}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 mb-4">{classItem.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Entrenador: <span className="text-white">{classItem.trainer}</span></span>
          <button className="btn btn-primary py-2 px-4">Únete a la clase</button>
        </div>
      </div>
    </motion.div>
  );
};

const Classes: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { getTransform } = useScrollAnimation();

  return (
    <section id="classes" className="section bg-gray-900">
      <div 
        className="animated-shape w-72 h-72 -right-36 top-1/4 opacity-5"
        style={{ transform: getTransform(120) }}
      ></div>
      <div 
        className="floating-circle w-[30rem] h-[30rem] -left-48 bottom-1/4"
        style={{ transform: getTransform(60) }}
      ></div>
      <div 
        className="gradient-blob w-[50rem] h-[50rem] right-1/4 top-1/2"
        style={{ transform: getTransform(180) }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Nuestras <span className="text-red-600">Clases</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Descubra nuestra variedad de clases diseñadas para ayudarlo a alcanzar sus objetivos de acondicionamiento físico con la orientación de expertos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((classItem, index) => (
            <ClassCard key={classItem.id} classItem={classItem} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-secondary">
            Ve todas nuestras clases
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;