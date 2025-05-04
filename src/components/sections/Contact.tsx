import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData(initialFormState);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={ref}
            className={`section-title ${isVisible ? 'slide-up' : 'opacity-0'}`}
          >
            Contactate <span className="text-red-600">con Nosotos</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'slide-up stagger-1' : 'opacity-0'}`}>
          ¿Tiene preguntas o está listo para comenzar su viaje de acondicionamiento físico? Póngase en contacto con nosotros hoy mismo para obtener más información.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={isVisible ? 'slide-right' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6">Contacto</h3>
            <p className="text-gray-400 mb-8">
            No dude en comunicarse con nosotros si tiene alguna pregunta sobre membresías, clases o entrenamiento personal. Estamos aquí para ayudarte a alcanzar tus objetivos de fitness.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg text-red-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicacion</h4>
                  <p className="text-gray-400">123 Calle fitness, Buenos Aires, 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg text-red-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">info@powerfitness.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg text-red-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-gray-400">+54 (11) 1234-5678</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Horarios de funcionamiento</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lunes - Viernes: 6:00 AM - 10:00 PM</p>
                <p>Sábado: 7:00 AM - 8:00 PM</p>
                <p>Domingo: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className={isVisible ? 'slide-left' : 'opacity-0'}>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Mándanos un mensaje</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Tú nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="ejemplo@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Número
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="+54 (11) 1234-5678"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Tú mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 ${
                  formStatus === 'submitting' 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    <span>Enviando...</span>
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <span>Mensaje Enviado!</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;