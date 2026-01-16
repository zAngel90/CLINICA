import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatear el mensaje para WhatsApp
    const mensaje = `*Nueva Solicitud de Cita* 🏥

👤 *Nombre:* ${formData.nombre || 'No especificado'}
📱 *Teléfono:* ${formData.telefono || 'No especificado'}
💉 *Servicio de interés:* ${formData.servicio || 'No especificado'}

_Mensaje enviado desde nervoscenterclinic.com_`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp con el mensaje formateado
    window.open(`https://wa.me/50769639626?text=${mensajeCodificado}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Bg Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-medical-900 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">

            {/* Info Side */}
            <div className="flex-1 p-6 md:p-10 lg:p-16 bg-medical-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-medical-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                  Agenda tu valoración
                </h2>
                <p className="text-medical-100 text-base md:text-lg mb-8 md:mb-12 max-w-md">
                  Da el primer paso hacia tu bienestar. Nuestro equipo médico está listo para atenderte con la calidez que mereces.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <a 
                    href="https://wa.me/50769639626?text=Hola,%20me%20interesa%20agendar%20una%20cita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 md:gap-5 hover:bg-white/5 p-3 -m-3 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-medical-200 uppercase tracking-wider font-semibold">WhatsApp</p>
                      <p className="text-lg md:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">+507 6963-9626</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+50769639626"
                    className="flex items-center gap-4 md:gap-5 hover:bg-white/5 p-3 -m-3 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-medical-200 uppercase tracking-wider font-semibold">Llamadas</p>
                      <p className="text-lg md:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">+507 6963-9626</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="flex-1 p-6 md:p-10 lg:p-16 bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-medical-900 mb-6 md:mb-8">Déjanos tus datos</h3>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Nombre completo</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-100 outline-none transition-all text-sm md:text-base" 
                      placeholder="Ej. Ana García" 
                      required
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Teléfono</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-100 outline-none transition-all text-sm md:text-base" 
                      placeholder="Ej. +507 6123 4567" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Servicio de interés</label>
                  <div className="relative">
                    <select 
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-3 md:py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-100 outline-none transition-all appearance-none cursor-pointer text-sm md:text-base"
                      required
                    >
                      <option value="">Selecciona un servicio...</option>
                      <option value="Armonización Facial">Armonización Facial</option>
                      <option value="Electroencefalogramas">Electroencefalogramas</option>
                      <option value="Ozonoterapia">Ozonoterapia</option>
                      <option value="Otro servicio">Otro servicio</option>
                    </select>
                    <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-medical-600 to-medical-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] mt-2 md:mt-4 group text-base md:text-lg"
                >
                  Enviar Solicitud <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
