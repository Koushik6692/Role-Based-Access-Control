import React from 'react';

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  size?: 'sm' | 'md';
}

export default function Toggle({ enabled, onChange, size = 'md' }: ToggleProps) {
  const baseStyles = "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2";
  const toggleStyles = size === 'sm' 
    ? "h-5 w-9"
    : "h-6 w-11";
  
  const handleStyles = size === 'sm'
    ? "h-4 w-4 translate-x-0"
    : "h-5 w-5 translate-x-0";
  
  const translateX = size === 'sm' ? 'translate-x-4' : 'translate-x-5';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`
        ${baseStyles}
        ${toggleStyles}
        ${enabled ? 'bg-indigo-600' : 'bg-gray-200'}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
          ${handleStyles}
          ${enabled ? translateX : 'translate-x-0'}
        `}
      />
    </button>
  );
}