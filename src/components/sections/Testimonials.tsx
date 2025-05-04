import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Miembro por 2 años",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "PowerFitness transformó por completo mi forma de entrenar. Los entrenadores son expertos y la comunidad me apoya muchísimo. ¡He perdido 14 kilos y he ganado confianza!",
    rating: 5
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    role: "Miembro por 1 año",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Después de probar varios gimnasios, PowerFitness se siente como en casa. Las clases son desafiantes pero divertidas, y he visto resultados increíbles. Las instalaciones siempre están limpias y bien cuidadas.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Miembro por 3 años",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Como alguien a quien le intimidaban los gimnasios, PowerFitness me hizo sentir como en casa desde el primer día. Los programas de entrenamiento personalizados me ayudaron a alcanzar metas que jamás imaginé.",
    rating: 4
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Miembro por 6 meses",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "La variedad de clases me mantiene motivada y los entrenadores me llevan al límite. Nunca me he sentido más fuerte ni más segura. ¡Los consejos nutricionales también han sido invaluables!",
    rating: 5
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Miembro por 1 año y medio",
    image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "¡Las clases de HIIT son mis favoritas! He bajado dos tallas y tengo más energía que nunca. Los entrenadores saben cómo hacer que cada sesión sea desafiante, pero alcanzable.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (isVisible) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isVisible, isAnimating]);

  return (
    <section id="testimonials" className="section bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={ref}
            className={`section-title ${isVisible ? 'slide-up' : 'opacity-0'}`}
          >
            Lo que los <span className="text-red-600"> miembros dicen</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'slide-up stagger-1' : 'opacity-0'}`}>
          Lea historias de éxito de nuestra comunidad de entusiastas del fitness y vea cómo PowerFitness ha transformado sus vidas.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`relative bg-gray-800 rounded-lg p-6 md:p-10 shadow-xl overflow-hidden ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`}
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-red-600/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-red-600"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonials[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className={`${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <svg className="w-10 h-10 text-red-600/50 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H2v4h4a10 10 0 0010-10V8h-6zm16 0v6a6 6 0 01-6 6h-2v4h4a10 10 0 0010-10V8h-6z"/>
                  </svg>
                  <p className="text-lg md:text-xl italic text-gray-300 mb-6">{testimonials[currentIndex].quote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2  md:-translate-x-16 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2  md:translate-x-16 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;