import React from "react";

/**
 * Unified Button component with multiple variants and sizes
 * Ensures consistency across all CTAs and actions
 */
export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-bold transition-all duration-300 rounded-2xl inline-flex items-center justify-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30",
    secondary:
      "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/30",
    outline:
      "border-2 border-gray-300 text-gray-900 hover:bg-gray-50/50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-900/50",
    ghost:
      "text-gray-900 hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-900/50",
    whatsapp: "bg-[#25D366] text-white hover:shadow-lg hover:shadow-green-500/30",
    danger: "bg-red-600 text-white hover:shadow-lg hover:shadow-red-500/30",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const target = external ? "_blank" : undefined;
    const rel = external ? "noreferrer" : undefined;

    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
