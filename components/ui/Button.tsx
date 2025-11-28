import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'pill';
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  shape = 'default',
  icon: Icon, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-transparent",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    outline: "bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40",
    white: "bg-white text-slate-900 hover:bg-slate-100 border border-transparent font-semibold",
    orange: "bg-[#FF5F15] hover:bg-[#F04F05] text-white border border-transparent shadow-[0_0_20px_rgba(255,95,21,0.3)]"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-8 text-base"
  };

  const shapes = {
    default: "rounded-lg",
    pill: "rounded-full"
  };

  if (props.href) {
    return (
      <a 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {Icon && <Icon size={18} className="ml-2 -mr-1" />}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {Icon && <Icon size={18} className="ml-2 -mr-1" />}
    </button>
  );
};

export default Button;