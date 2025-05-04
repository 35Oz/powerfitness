import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Check, X } from 'lucide-react';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  popular: boolean;
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Básico",
    price: 29.99,
    period: "mensual",
    description: "Perfecto para principiantes que comienzan su viaje de acondicionamiento físico",
    features: [
      { text: "Acceso a las instalaciones del gimnasio", included: true },
      { text: "Uso del equipo estándar", included: true },
      { text: "Acceso a los vestuarios", included: true },
      { text: "2 clases grupales por semana", included: true },
      { text: "Evaluación física", included: false },
      { text: "Sesiones de entrenamiento personal", included: false },
      { text: "Consulta nutricional", included: false },
      { text: "Acceso 24/7", included: false },
    ],
    popular: false,
    buttonText: "Empezar"
  },
  {
    id: 2,
    name: "Premium",
    price: 59.99,
    period: "mensual",
    description: "Nuestro plan más popular para los amantes del fitness",
    features: [
    { text: "Acceso a las instalaciones del gimnasio", included: true },
    { text: "Uso de todo el equipo", included: true },
    { text: "Acceso a los vestuarios", included: true },
    { text: "Clases grupales ilimitadas", included: true },
    { text: "Evaluación de fitness", included: true },
    { text: "2 sesiones de entrenamiento personal", included: true },
    { text: "Consulta nutricional", included: false},
    { text: "Acceso 24/7", included: true },
    ],
    popular: true,
    buttonText: "Únete ahora"
    },
  {
  id: 3,
 name: "Élite",
  price: 99.99,
  period: "mensual",
  description: "La experiencia fitness definitiva con beneficios exclusivos",
  features: [
  {text: "Acceso a las instalaciones del gimnasio", included: true},
  {text: "Uso de todo el equipo", included: true},
  {text: "Vestuario premium", included: true},
  {text: "Clases grupales ilimitadas", included: true},
  {text: "Evaluación física mensual", included: true},
  {text: "4 sesiones de entrenamiento personal", included: true},
  {text: "Consulta nutricional", included: true},
  {text: "Acceso 24/7 con servicio de toallas", included: true},
  ],
  popular: false,
  buttonText: "Hazte Élite"
  }
  ];
const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      ref={ref}
      className={`relative rounded-xl ${isVisible ? `scale-in stagger-${index + 1}` : 'opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white py-1 px-4 rounded-full text-sm font-bold">
          Más popular
        </div>
      )}
      
      <div className={`card h-full p-8 border-2 transition-all duration-300 ${
        plan.popular 
          ? 'border-red-600 shadow-lg shadow-red-600/10' 
          : isHovered 
            ? 'border-gray-700 shadow-lg' 
            : 'border-gray-800'
      }`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
          <div className="flex items-end justify-center">
            <span className="text-5xl font-bold">${plan.price}</span>
            <span className="text-gray-400 ml-2">/{plan.period}</span>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check size={20} className="text-green-500 mt-0.5" />
              ) : (
                <X size={20} className="text-gray-500 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.text}</span>
            </div>
          ))}
        </div>
        
        <button 
          className={`w-full py-3 rounded-lg transition-all duration-300 font-semibold ${
            plan.popular 
              ? 'bg-red-600 hover:bg-red-700 text-white' 
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="section bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={ref}
            className={`section-title ${isVisible ? 'slide-up' : 'opacity-0'}`}
          >
            Planes <span className="text-red-600">de Membrecia</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'slide-up stagger-1' : 'opacity-0'}`}>
          Elige el plan de membresía perfecto para alcanzar tus objetivos de fitness con acceso a nuestras instalaciones premium.
          </p>

          <div className={`inline-flex items-center bg-gray-800 p-1 rounded-lg space-x-1 mt-6 ${isVisible ? 'fade-in stagger-2' : 'opacity-0'}`}>
            <button 
              className={`px-6 py-2 rounded-md transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensual
            </button>
            <button 
              className={`px-6 py-2 rounded-md transition-all ${
                billingPeriod === 'yearly' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Anual
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">20% descuento</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <div className="text-center mt-16 bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">¿Necesita un plan personalizado?</h3>
          <p className="text-gray-400 mb-6">
          Contáctenos para conocer opciones de membresía personalizadas adaptadas a sus necesidades y objetivos específicos.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;