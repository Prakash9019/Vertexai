

import * as React from "react";

export function CategoryItem({ name, isSelected, onSelect }) {
  return (
    <div 
      className={`grow shrink gap-2.5 self-stretch px-4 py-10 whitespace-nowrap rounded-xl border border-solid 
        ${isSelected ? 'border-blue-500 bg-blue-900/20' : 'border-neutral-500'} 
        min-h-[100px] w-[117px] cursor-pointer transition-all duration-200 hover:border-blue-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black`}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-pressed={isSelected}
    >
      {name}
    </div>
  );
}