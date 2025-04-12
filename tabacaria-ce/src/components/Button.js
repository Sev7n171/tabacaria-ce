import React from "react";

export function Button({ children, variant, className, ...props }) {
  const baseStyle = "px-4 py-2 rounded";
  const variantStyle = variant === "ghost" ? "bg-transparent border border-yellow-400" : "bg-yellow-500 hover:bg-yellow-600 text-black";
  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}