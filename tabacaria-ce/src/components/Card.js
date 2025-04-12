import React from "react";

export function Card({ children, className, ...props }) {
  return (
    <div className={`shadow-lg ${className}`} {...props}>
      {children}
    </div>
  );
}