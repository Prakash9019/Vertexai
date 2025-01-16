import { useState } from "react";
import logo1 from "./assets/logo1.png";

const categories = [
  "Aerospace",  "Agriculture",  "Adtech",  "Analytics",  "B2B/B2C",
  "Biotech",  "Climate",  "Community",  "Construction",  "Crypto/Blockchain",  "Cyber security",  "Developer tools",  "Ecommerce",  "Energy",  "Entertainment",  "Fintech",
  "Fitness",  "Food/Beverage",  "Freight",  "Gaming",  "Government",  "Hard tech",  "Hardware",  "Health care",  "Insurance",  "Language Learning",  "LLM",  "Lending/Loan Management",  "Marketplace",
  "Media",  "Medical devices",  "Mental Health",  "Personal Finance",  "Real Estate",  "Retail",
  "Recruiting",  "Robotics",  "Sales Enablement",  "Security",  "Transportation",  "Travel/tourism",  "VR/AR",  "Wellness",
];

export default function CategorySelection() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col text-xl font-semibold text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="min-h-screen bg-black text-white md:p-20 sm:p-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={logo1}
                alt="Vertx Logo"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>

            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                What categories do you want to see on Vertx?
              </h1>
              <p className="text-gray-400 text-base">
                Select at least 5 interests to personalize your Vertx
                experience.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="overflow-y-auto h-[60vh]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className="text-left"
                    aria-pressed={selectedCategories.includes(category)}
                  >
                    <div
                      className={`p-6 h-32 flex items-center justify-center border border-gray-800 hover:border-gray-600 transition-colors
                  ${selectedCategories.includes(category)
                          ? "border-white bg-white/10"
                          : "bg-black"
                        }
                `}
                    >
                      <span className="text-lg font-semibold">{category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Count */}
            <div className="text-center">
              <p className="text-gray-400">
                Selected: {selectedCategories.length} / 5 minimum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
