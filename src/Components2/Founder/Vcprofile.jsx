"use client"

function VCProfile() {
  const stages = ["Prototype/MVP", "Pre Seed", "Seed", "Series"]
  const countries = [
    "KENYA",
    "NIGERIA",
    "SOUTH AFRICA",
    "ARGENTINA",
    "BRAZIL",
    "CHILE",
    "COLOMBIA",
    "MEXICO",
    "BANGLADESH",
    "INDIA",
    "INDONESIA",
    "NEPAL",
    "PHILIPPINES",
    "SINGAPORE",
    "SRI LANKA",
    "THAILAND",
    "VIETNAM",
    "EGYPT",
    "SAUDI ARABIA",
    "TURKEY",
    "UAE",
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-8">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700">
          <span className="text-lg">←</span>
          Outreach
        </button>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full border border-gray-700">
            <span className="flex items-center gap-2">
              <span>🔖</span>
              Bookmark
            </span>
          </button>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full border border-gray-700">Linkedin</button>
            <button className="px-4 py-2 rounded-full border border-gray-700">Website</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Logo Section */}
        <div className="bg-[#98f1e3] rounded-lg aspect-video flex items-center justify-center">
          <div className="w-24 h-24">
            <img
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yUIMfwOrphZ8zcyQTTbCQFl8ElXo0R.png`}
              alt="Katha VC Logo"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">Katha VC</h1>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-800 text-sm">VERIFIED</span>
              <span className="px-3 py-1 rounded-full bg-gray-800 text-sm">VC FIRM</span>
            </div>
          </div>

          {/* Ticket Size */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Stage interested in</h2>
            <div className="px-3 py-1 rounded-full bg-gray-800">$100K - $200K</div>
          </div>

          {/* Stages */}
          <div className="flex flex-wrap gap-2">
            {stages.map((stage) => (
              <span key={stage} className="px-3 py-1 rounded-full border border-gray-700">
                {stage}
              </span>
            ))}
          </div>

          <h2 className="text-2xl">Countries interested in</h2>
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <span key={country} className="px-3 py-1 rounded-full border border-gray-700">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-gray-400 mb-4">
          We invest in Pre-Seed and Seed High Growth Markets Fintech. We also consider non-fintech companies where
          embedded finance has the potential to be 25%+ of the revenue.
        </p>
        <p className="text-gray-400">Evidence of early-traction and SAM are important in my analysis.</p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Team</h2>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Team member" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Sahith Aula</h3>
            <p className="text-gray-400 mb-2">GP/MP</p>
            <button className="px-4 py-1 rounded-full border border-gray-700">Linkedin</button>
            <p className="mt-4 text-gray-300">
              "I invest in high growth markets fintech with traction at the pre-seed and seed stage."
            </p>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
          Submit Pitch
        </button>
      </div>
    </div>
  )
}

export default VCProfile

