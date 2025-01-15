


import * as React from "react";
import { CategoryItem } from "./CatList";
const categories = [
  "AI", "Aerospace", "Agriculture", "Adtech", "Analytics", 
  "B2B/B2C", "Biotech", "Climate", "Community", "Construction",
  "Crypto/Blockchain", "Cyber security", "Developer tools",
  "Ecommerce", "Energy", "Entertainment"
];

export function Categories() {
  const [selectedCategories, setSelectedCategories] = React.useState(new Set());

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col px-px w-full bg-black rounded-3xl max-md:max-w-full">
      <div className="flex flex-col items-center px-20 pt-9 pb-2.5 text-4xl bg-black rounded-none max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[630px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c512861316b27a0f461c6ab1c0a3a58abeef893050475df9aa2159b8643f22?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            className="object-contain self-center aspect-square w-[60px]"
            alt="Vertx logo"
          />
          <h1 className="mt-7 max-md:max-w-full">
            What categories you want to see on Vertx?
          </h1>
        </div>
      </div>
      
      <button
        onClick={scrollToBottom}
        className="object-contain z-10 self-end mt-4 w-5 aspect-[0.06] max-md:hidden max-md:mr-2 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
          transition-transform duration-200 hover:scale-110"
        aria-label="Scroll to bottom"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ca6c96f53dbed47178bbe2a208bf2fce671914e48f262d46e52d84a097f33bc?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
          alt="Scroll down"
          className="w-full h-full"
        />
      </button>

      <div className="flex flex-wrap gap-4 items-start self-center mt-0 w-full text-base max-w-[629px] max-md:mt-0 max-md:max-w-full">
        {categories.map((category) => (
          <CategoryItem
            key={category}
            name={category}
            isSelected={selectedCategories.has(category)}
            onSelect={() => toggleCategory(category)}
          />
        ))}
      </div>
      
      <div className="flex z-10 shrink-0 -mt-28 h-28 bg-black rounded-none border-t-[3px] border-zinc-800 max-md:max-w-full" />
    </div>
  );
}