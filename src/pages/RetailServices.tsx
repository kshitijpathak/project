import heroVideo from '../assets/Rooftop_Transformation_to_Luxury_Garden.mp4';

interface RetailServicesProps {
  onClose?: () => void;
}

export default function RetailServices({ onClose }: RetailServicesProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-20">
      <section className="relative w-full h-[60vh] md:h-[72vh] lg:h-[80vh] overflow-hidden">
        {/* Video background */}
        <video
          muted
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* subtle overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content overlay */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Space with Customised Roof, Terrace & Private Gardens
            </h1>
            <p className="mt-4 text-xl md:text-xl text-emerald-100">
              Turn grey, unused spaces into vibrant green oases with the Grey2Greens Foundation.
            </p>

            <div className="mt-6">
              <button
                onClick={() => onClose && onClose()}
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Retail Services</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We design and implement customised green solutions for roofs, terraces, and private gardens — tailored to your space, budget, and climate.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-2">Design & Consultancy</h3>
            <p className="text-gray-600">Site assessments, planting plans, and ongoing maintenance strategies to ensure long-term success.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-2">Installation</h3>
            <p className="text-gray-600">Full installation of planters, soil substrates, irrigation, and planting using native and climate-appropriate species.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-2">Maintenance & Support</h3>
            <p className="text-gray-600">Scheduled checkups, seasonal pruning, and a maintenance handover to keep your green space thriving.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
