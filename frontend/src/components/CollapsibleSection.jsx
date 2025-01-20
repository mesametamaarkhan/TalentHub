import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black rounded-lg mb-6">
      <div
        className="flex justify-between items-center bg-black p-4 cursor-pointer rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {isOpen ? (
          <ChevronUp className="text-white h-6 w-6" />
        ) : (
          <ChevronDown className="text-white h-6 w-6" />
        )}
      </div>
      {isOpen && (
        <div className="p-6 bg-black rounded-lg transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
