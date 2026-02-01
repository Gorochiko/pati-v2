'use client';

import React, { useState, useRef, useEffect } from 'react';
import type { DropdownOption } from './types';

interface ProductDropdownProps {
  options: DropdownOption[];
  defaultOptionId?: string;
  onSelectionChange?: (option: DropdownOption) => void;
}

export const ProductDropdown = React.memo(({ 
  options, 
  defaultOptionId,
  onSelectionChange 
}: ProductDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options.find(opt => opt.id === defaultOptionId) || options[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectionChange?.(option);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className="relative w-[280px] max-md:w-[250px] overflow-visible text-left">
      {/* Selected Option */}
      <button
        onClick={toggleDropdown}
        className="flex min-h-[42px] w-full flex-col justify-center rounded-[20px] border border-[#50000b] bg-[#f9f4f4] px-[30px] py-2 text-[#50000b] font-bold cursor-pointer relative"
      >
        <div className="min-h-[1.3em] antialiased">
          {selectedOption.altName}
        </div>
        {selectedOption.pricePerServing && (
          <div className="text-xs font-normal opacity-75">
            {selectedOption.pricePerServing}
          </div>
        )}
        
        {/* Arrow */}
        <span 
          className={`absolute right-5 top-[18px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#50000b] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute bottom-full mb-[5px] w-full list-none overflow-hidden rounded-[20px] border border-[#50000b] bg-white p-0 shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-[10000]">
          {options.map((option, index) => (
            <li
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer px-5 py-2.5 text-[#50000b] font-bold hover:bg-[#f9f4f4] ${
                index < options.length - 1 ? 'border-b border-[#f2f2f2]' : ''
              }`}
            >
              {option.altName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

ProductDropdown.displayName = 'ProductDropdown';
