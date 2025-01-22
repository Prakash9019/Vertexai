"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Creator",
      price: 9,
      savings: 12,
      features: ["Outreach", "Edit, comment and share", "Bookmark VC's", "Write articles"],
    },
    {
      name: "Growth",
      price: 20,
      savings: 60,
      features: [
        "Everything in Creator, and",
        "Outreach with increased limits",
        "Encrypted direct messages",
        "Access to investor maps",
        "Verified mark",
        "Creator rewards",
        "Detailed analytics",
      ],
    },
    {
      name: "Enterprise",
      price: 28,
      savings: 84,
      features: ["Everything in Growth, and", "Fully ad-free", "Vertx Flow", "Venture/Profile featuring"],
    },
  ]

  const comparisonFeatures = [
    { name: "Enhanced Experience", creator: "", growth: "", enterprise: "" },
    { name: "Outreach with increased limits", creator: "Basic", growth: "✓", enterprise: "✓" },
    { name: "Vertx Flow", creator: "", growth: "", enterprise: "✓" },
    { name: "Ad Free", creator: "", growth: "", enterprise: "Fully Ad-Free" },
    { name: "Reach", creator: "Smaller", growth: "Larger", enterprise: "Largest" },
    { name: "Investor maps", creator: "", growth: "✓", enterprise: "✓" },
    { name: "Bookmark VC's", creator: "✓", growth: "✓", enterprise: "✓" },
    { name: "Analytics", creator: "", growth: "✓", enterprise: "✓" },
    { name: "Venture/Profile featuring", creator: "", growth: "", enterprise: "✓" },
  ]

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Upgrade Plan</h1>
          <p className="text-xl text-gray-300">
            Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full ${isAnnual ? "bg-white/10" : ""}`}
          >
            Annual
            {isAnnual && <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">BEST VALUE</span>}
          </button>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full ${!isAnnual ? "bg-white/10" : ""}`}
          >
            Monthly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="mb-6 text-sm">
                ${plan.savings} saved annually
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  SAVE {plan.name === "Creator" ? "10%" : "20%"}
                </span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Compare plans and features</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800">
                  <th className="py-4 px-4">Enhanced Experience</th>
                  <th className="py-4 px-4">Creator</th>
                  <th className="py-4 px-4">Growth</th>
                  <th className="py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name} className="border-b border-gray-800">
                    <td className="py-4 px-4">{feature.name}</td>
                    <td className="py-4 px-4">{feature.creator}</td>
                    <td className="py-4 px-4">{feature.growth}</td>
                    <td className="py-4 px-4">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

