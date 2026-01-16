import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/50769639626?text=Hola,%20me%20interesa%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Contáctanos!
      </span>
    </motion.a>
  );
};
