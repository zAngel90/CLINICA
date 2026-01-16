import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-medical-900 text-white pt-12 pb-8 md:pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-medical-900 font-bold">
                N
              </div>
              <span className="text-xl font-bold">Nervos Center Clinic</span>
            </div>
            <p className="text-medical-100 text-sm leading-relaxed mb-6">
              Comprometidos con tu salud y bienestar integral. Tecnología de vanguardia y especialistas certificados a tu servicio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-medical-800 rounded-full hover:bg-medical-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-medical-800 rounded-full hover:bg-medical-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Contacto</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 text-medical-100 text-sm md:text-base">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Panamá</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/50769639626" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-medical-100 hover:text-teal-300 transition-colors text-sm md:text-base"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>+507 6963-9626</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:nervoscenter@gmail.com"
                  className="flex items-center gap-3 text-medical-100 hover:text-teal-300 transition-colors text-sm md:text-base"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>nervoscenter@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Horarios</h3>
            <ul className="space-y-2 md:space-y-3 text-medical-100 text-sm md:text-base">
              <li className="flex justify-between border-b border-medical-800 pb-2">
                <span>Lunes - Viernes</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-medical-800 pb-2">
                <span>Sábados</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Domingos</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-medical-800 pt-8 text-center text-medical-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Nervos Center Clinic. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
