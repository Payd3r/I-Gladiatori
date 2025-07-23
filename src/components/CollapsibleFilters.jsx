import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaFilter } from 'react-icons/fa';

function CollapsibleFilters({ children, title = "Filtri" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-secondary-gray-light">
      <button
        onClick={toggleExpanded}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary-gray-light/20 transition-colors duration-300 rounded-t-2xl"
      >
        <div className="flex items-center gap-3">
          <FaFilter className="text-2xl text-secondary-gray-dark" />
          <h2 className="font-heading text-2xl text-secondary-gray-dark">{title}</h2>
        </div>
        {isExpanded ? (
          <FaChevronUp className="text-primary-yellow" size={20} />
        ) : (
          <FaChevronDown className="text-secondary-gray" size={20} />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-4 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleFilters; 