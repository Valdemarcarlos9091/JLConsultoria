import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "h-12" }: LogoProps) => {
  return (
    <svg className={className} viewBox="0 0 548 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M92.09 115.1C40.3 115.1 0 90.0 0 58.2C0 26.4 40.3 1.3 92.09 1.3C143.88 1.3 184.18 26.4 184.18 58.2C184.18 90.0 143.88 115.1 92.09 115.1ZM92.09 9.7C46.65 9.7 8.4 31.2 8.4 58.2C8.4 85.2 46.65 106.7 92.09 106.7C137.53 106.7 175.78 85.2 175.78 58.2C175.78 31.2 137.53 9.7 92.09 9.7Z" fill="white"/>
        <path d="M92.09 93.4C65.41 93.4 44.39 77.7 44.39 58.2C44.39 38.7 65.41 23.0 92.09 23.0C118.77 23.0 139.79 38.7 139.79 58.2C139.79 77.7 118.77 93.4 92.09 93.4ZM92.09 31.4C70.65 31.4 52.79 43.7 52.79 58.2C52.79 72.7 70.65 85.0 92.09 85.0C113.53 85.0 131.39 72.7 131.39 58.2C131.39 43.7 113.53 31.4 92.09 31.4Z" fill="white"/>
        <path d="M139.5 58.2H44.6C44.2 58.2 43.9 57.9 43.9 57.5V50.1C43.9 49.7 44.2 49.4 44.6 49.4H139.5C139.9 49.4 140.2 49.7 140.2 50.1V57.5C140.2 57.9 139.9 58.2 139.5 58.2Z" fill="white"/>
        <path d="M79.9 81.3L57.8 26.0C57.7 25.7 57.9 25.3 58.2 25.2H66.0C66.3 25.2 66.6 25.4 66.7 25.7L84.6 71.6C84.7 71.9 84.5 72.3 84.2 72.4C82.7 72.8 81.3 73.4 80.0 74.1C76.4 76.1 77.0 80.8 78.5 81.6C79.0 81.9 79.0 82.1 78.6 82.2C78.0 82.4 77.5 82.5 77.0 82.5C75.2 82.5 74 81.4 73.5 80.2C72.6 78.0 73.2 74.6 75.8 72.4C77.3 71.2 79.7 69.9 82.7 69.6C83.8 69.5 84.9 69.6 85.9 69.8C86.4 69.9 86.9 69.6 87.0 69.1L87.6 67.5C87.8 67.0 87.5 66.5 87.0 66.3C79.7 63.5 75.0 57.1 75.0 49.8C75.0 39.9 82.9 32.0 92.8 32.0C102.7 32.0 110.6 39.9 110.6 49.8C110.6 59.7 102.7 67.6 92.8 67.6C90.8 67.6 89.0 67.3 87.2 66.7C86.8 66.6 86.3 66.8 86.1 67.2L85.5 68.5C85.3 68.9 85.5 69.4 85.9 69.6C86.4 69.8 86.8 70.0 87.2 70.2C96.7 74.4 104.1 70.9 107.3 68.8C109.6 67.3 109.9 64.9 109.8 63.6C109.7 62.1 109.2 58.6 105.9 56.9C104.1 56.0 102.1 56.5 101.0 58.3C100.3 59.5 100.0 61.2 100.7 62.5C101.2 63.6 102.2 64.3 103.4 64.3C103.7 64.3 104.1 64.2 104.4 64.1C104.8 63.9 104.8 63.8 104.6 63.4C104.0 62.1 104.8 59.1 107.7 57.9C109.0 57.3 110.3 57.1 111.6 57.1C117.9 57.1 124.1 61.7 124.9 71.2C124.9 71.5 125.2 71.8 125.5 71.8H133.4C133.7 71.8 134.0 71.6 134.1 71.3L148.1 31.1C148.2 30.8 148.5 30.6 148.8 30.6H164.1" stroke="white" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M92.0 49.8C92.0 49.3 92.4 48.9 92.9 48.9C93.4 48.9 93.8 49.3 93.8 49.8C93.8 50.3 93.4 50.7 92.9 50.7C92.4 50.7 92.0 50.3 92.0 49.8Z" fill="white"/>
      </g>
      <text x="210" y="70" fontFamily="Arial" fontSize="50" fontWeight="bold" fill="white">JL CONSULTORIA</text>
      <circle cx="376" cy="58" r="20" fill="#00FFA3" fillOpacity="0.3"/>
      <circle cx="500" cy="58" r="20" fill="#00FFA3" fillOpacity="0.3"/>
    </svg>
  );
};
