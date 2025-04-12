import React from "react";
// Importando diretamente da pasta de assets
import logoImg from "../../assets/logo.png";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "h-12" }: LogoProps) => {
  return (
    <img
      src={logoImg}
      alt="JL Consultoria Logo"
      className={`${className} w-auto`}
    />
  );
};