import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  children, 
  ...props 
}) => {
  const variants = {
    primary: 'bg-medical-800 text-white hover:bg-medical-900 shadow-lg shadow-medical-900/20 border border-transparent',
    secondary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/20 border border-transparent',
    outline: 'bg-transparent border-2 border-medical-800 text-medical-800 hover:bg-medical-50',
    ghost: 'bg-transparent text-medical-800 hover:bg-medical-50',
    white: 'bg-white text-medical-900 hover:bg-gray-50 shadow-soft-lg border border-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
