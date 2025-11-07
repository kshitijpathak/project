import { Users, Sprout, Apple, TreeDeciduous, Leaf, Trees, MapPin, FileText, Shovel, Droplets, BarChart3, Quote, ChevronLeft, ChevronRight, Layers, Network, Mountain, Globe, Heart } from 'lucide-react';
import { useState, useRef } from 'react';
import { VolunteerForm } from '../components/VolunteerForm';
import { CorporatePartnershipForm } from '../components/CorporatePartnershipForm';
import { DonationModal } from '../components/DonationModal';
import { TreeAdoptionModal } from '../components/TreeAdoptionModal';
import { ContactForm } from '../components/ContactForm';
import { TeamCarousel } from '../components/TeamCarousel';
import heroVideo from '../assets/Industrial_Suit_Transitions_to_Nature.mp4';
import foodForestImg from '../assets/gallery/foodforest.jpg';
import companionPlantingImg from '../assets/gallery/companionplanting.jpg';
import communityEventImg from '../assets/gallery/communityevent.jpg';
import youngSaplingsImg from '../assets/gallery/youngsaplings.jpg';
import harvestSeasonImg from '../assets/gallery/harvestseason.jpg';
import roadsideFoodForestImg from '../assets/gallery/roadsidefoodforest.jpg';

export const Home = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showCorporateForm, setShowCorporateForm] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showAdoptionModal, setShowAdoptionModal] = useState(false);

  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Community Volunteer",
      location: "Bangalore, KA",
      text: "Being part of the Koramangala food forest project has completely changed how I view urban spaces. Watching our community come together to plant, nurture, and now harvest from our shared forest is incredibly fulfilling.",
      avatar: "PS"
    },
    {
      name: "Rohan Gupta",
      role: "Urban Gardener",
      location: "Delhi, DL",
      text: "I've been gardening on my terrace for years, but this project opened my eyes to regenerative practices. The biodiversity we've created supports so many birds and insects, all while providing fresh food for our neighbourhood.",
      avatar: "RG"
    },
    {
      name: "Ananya Reddy",
      role: "Education Coordinator",
      location: "Hyderabad, TS",
      text: "Teaching children about ecosystems through our community garden has been magical. They see firsthand how companion planting works and understand where their food *really* comes from. It's education that sticks.",
      avatar: "AR"
    },
    {
      name: "Vikram Singh",
      role: "Sustainability Manager (CSR)",
      location: "Mumbai, MH",
      text: "The impact on the local microclimate is remarkable. We've measured temperature reductions and improved air quality. This is how we build resilient cities, and it's a project our company is proud to support.",
      avatar: "VS"
    },
    {
      name: "Aisha Khan",
      role: "Weekend Volunteer",
      location: "Pune, MH",
      text: "I started volunteering to connect with nature and found a second family. The knowledge sharing, the physical work, and seeing tangible results every season keeps me coming back weekend after weekend.",
      avatar: "AK"
    }
  ];

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsRef.current) {
      const scrollAmount = 400;
      const newPosition = testimonialsRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      testimonialsRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-20">
        {showVolunteerForm && <VolunteerForm onClose={() => setShowVolunteerForm(false)} />}
        {showCorporateForm && <CorporatePartnershipForm onClose={() => setShowCorporateForm(false)} />}
        {showDonationModal && <DonationModal onClose={() => setShowDonationModal(false)} />}
        {showAdoptionModal && <TreeAdoptionModal onClose={() => setShowAdoptionModal(false)} />}
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
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Turning Barren Lands into Living Ecosystems
                </h1>
                <p className="text-xl leading-relaxed text-emerald-100">
                    We transform degraded lands into thriving green ecosystems through sustainable plantation programs and community engagement.
                </p>
                <div className="flex gap-4 pt-4">
                    <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                    >
                    Get Involved
                    </button>
                    <button
                    onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="px-8 py-3 border-2 border-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Learn More
                    </button>
                </div>
            </div>
            </div>
          </div>
        </section>      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">            
          <div className="mt-24">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                    <Mountain className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To restore ecosystems and rebuild biodiversity by integrating plantation drives, fruit species redevelopment, and sustainable land transformation projects that benefit both nature and local communities.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                    <Globe className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A world where every life form thrives in harmony—where fruit-bearing forests regenerate, communities prosper through nature, and the planet heals through collective action.
                </p>
              </div>
            </div>
          </div>

          <div id="whoweare" className="mt-24">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Grey to Green Foundation is a registered non-profit organization committed to ecological restoration and biodiversity revival. Founded with the mission to bring back balance between nature and human development, we transform degraded lands into thriving green ecosystems through sustainable plantation programs and the revival of vanished fruit species.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our initiatives are rooted in environmental science, community engagement, and long-term ecological impact. We believe that true development is only possible when every patch of grey turns green again.
                  </p>
                </div>

                <TeamCarousel />
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md border-t-4 border-emerald-600">
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Trees className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">50,000+</div>
                  <div className="text-sm text-gray-600 font-medium">Trees Planted</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md border-t-4 border-green-600">
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Apple className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">25</div>
                  <div className="text-sm text-gray-600 font-medium">Native Fruit Species Revived</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md border-t-4 border-lime-600">
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center">
                      <TreeDeciduous className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">10</div>
                  <div className="text-sm text-gray-600 font-medium">Community Food Forests</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md border-t-4 border-teal-600">
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">1,000+</div>
                  <div className="text-sm text-gray-600 font-medium">Participants Engaged</div>
                </div>
              </div>
            </div>
          </div>

          <div id="initiatives" className="mt-24 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
              <p className="text-lg text-gray-600">Core programs driving ecological restoration and community empowerment</p>
            </div>

            <div className="relative overflow-hidden py-2">
              <div className="flex gap-4 animate-scroll">
                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Shovel className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plantation Campaigns</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Large-scale plantation drives restoring ecological balance and biodiversity across regions.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Sprout className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Reviving Ecosystems</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Transforming degraded lands and restoring native biodiversity to heal our environment.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-green-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Apple className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fruit Species Redevelopment</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Reviving native and heritage fruit varieties to preserve food diversity and ecological heritage.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-lime-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <TreeDeciduous className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Community Food Forests</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Creating self-sustaining food systems that empower communities and regenerate environments.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Heart className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Empowering Communities</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Building capacity and creating environmental stewards through hands-on engagement programs.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Users className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Awareness & Education</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Spreading environmental awareness through workshops, training programs, and community events.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Shovel className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plantation Campaigns</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Large-scale plantation drives restoring ecological balance and biodiversity across regions.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Sprout className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Reviving Ecosystems</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Transforming degraded lands and restoring native biodiversity to heal our environment.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-green-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Apple className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fruit Species Redevelopment</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Reviving native and heritage fruit varieties to preserve food diversity and ecological heritage.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-lime-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <TreeDeciduous className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Community Food Forests</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Creating self-sustaining food systems that empower communities and regenerate environments.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Heart className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Empowering Communities</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Building capacity and creating environmental stewards through hands-on engagement programs.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 min-w-[240px] max-w-[240px] flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Users className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Awareness & Education</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Spreading environmental awareness through workshops, training programs, and community events.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="projects" className="mt-24 mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
              <p className="text-lg text-gray-600">Witness the transformation from barren land to thriving ecosystems</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-200 to-green-300 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={foodForestImg}
                      alt="Food forest"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-emerald-800 font-semibold">Food Forest</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Mature Food Forest</h3>
                    <p className="text-sm text-gray-200">Multi-layered ecosystem with diverse fruit trees, shrubs, and ground covers providing year-round abundance</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={companionPlantingImg}
                      alt="Companion Planting"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-amber-800 font-semibold">Companion Planting</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Strategic Plant Guilds</h3>
                    <p className="text-sm text-gray-200">Carefully selected companion plants supporting each other through nitrogen fixing, pest control, and mutual growth</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-cyan-300 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={communityEventImg}
                      alt="Community Event"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-blue-800 font-semibold">Community Event</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Community Planting Day</h3>
                    <p className="text-sm text-gray-200">Volunteers from all ages coming together to plant native species and build lasting connections with nature</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={youngSaplingsImg}
                      alt="Young Saplins"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-green-800 font-semibold">Young Saplings</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Early Growth Stage</h3>
                    <p className="text-sm text-gray-200">Recently planted saplings establishing roots with protective mulch layers and companion plants beginning to thrive</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={harvestSeasonImg}
                      alt="Harvest Season"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-purple-800 font-semibold">Harvest Season</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Bountiful Harvest</h3>
                    <p className="text-sm text-gray-200">Community members enjoying fresh fruits, vegetables, and herbs from the forest garden throughout the seasons</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={roadsideFoodForestImg}
                      alt="Roadside Forest"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-teal-800 font-semibold">Roadside Forest</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Green Corridors</h3>
                    <p className="text-sm text-gray-200">Transforming roadside spaces into productive green belts that provide shade, beauty, and habitat for wildlife</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="process" className="mt-24 scroll-mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-lg text-gray-600">A proven approach to creating thriving food forests</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-emerald-600"></div>

                <div className="space-y-12">
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Step 1</span>
                        <h3 className="text-2xl font-bold text-gray-900">Site Survey</h3>
                      </div>
                      <p className="text-gray-600 text-lg">We conduct comprehensive assessments of soil quality, water availability, sunlight patterns, and existing vegetation to understand your land's unique characteristics.</p>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <FileText className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Step 2</span>
                        <h3 className="text-2xl font-bold text-gray-900">Planning</h3>
                      </div>
                      <p className="text-gray-600 text-lg">Our experts design a customized food forest layout with native species selection, planting zones, and sustainable management strategies tailored to your goals.</p>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <Shovel className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Step 3</span>
                        <h3 className="text-2xl font-bold text-gray-900">Planting</h3>
                      </div>
                      <p className="text-gray-600 text-lg">Community volunteers and our team work together to plant diverse native species, creating multi-layered ecosystems that will flourish for generations.</p>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                      <Droplets className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Step 4</span>
                        <h3 className="text-2xl font-bold text-gray-900">Maintenance</h3>
                      </div>
                      <p className="text-gray-600 text-lg">Regular watering, mulching, and care during the establishment phase ensure healthy growth. We provide guidance and support throughout this critical period.</p>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">Step 5</span>
                        <h3 className="text-2xl font-bold text-gray-900">Monitoring</h3>
                      </div>
                      <p className="text-gray-600 text-lg">We track growth rates, biodiversity metrics, and ecosystem health over time, documenting the positive impact and sharing insights with the community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="volunteer" className="mt-24 mb-16 scroll-mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Testimonials</h2>
              <p className="text-lg text-gray-600">Hear from the people making a difference in their communities</p>
            </div>

            <div className="relative">
              <button
                onClick={() => scrollTestimonials('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={() => scrollTestimonials('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              <div
                ref={testimonialsRef}
                className="overflow-x-auto scrollbar-hide flex gap-6 snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] snap-center"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="w-8 h-8 text-emerald-200 absolute -top-2 -left-2" />
                        <p className="text-gray-700 leading-relaxed pl-6">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="contact" className="mt-24 mb-16 scroll-mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Your contribution can reshape landscapes and lives. Partner with us to expand our impact.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Users className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Partnerships & CSR</h3>
                <p className="text-gray-600 mb-4 text-sm">Align your business with environmental sustainability. Create lasting impact through strategic partnerships.</p>
                <button
                  onClick={() => setShowCorporateForm(true)}
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
                >
                  Learn More →
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-green-600">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <TreeDeciduous className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tree Adoption & Sponsorship</h3>
                <p className="text-gray-600 mb-4 text-sm">Sponsor a tree or an entire grove. Watch your contribution grow and make a tangible difference.</p>
                <button
                  onClick={() => setShowAdoptionModal(true)}
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors text-sm"
                >
                  Adopt a Tree →
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Heart className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteering</h3>
                <p className="text-gray-600 mb-4 text-sm">Get your hands dirty and make a direct impact. Join our community of passionate volunteers.</p>
                <button
                  onClick={() => setShowVolunteerForm(true)}
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors text-sm"
                >
                  Join Us →
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-600">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <Heart className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Donations</h3>
                <p className="text-gray-600 mb-4 text-sm">Every contribution helps us plant more trees and restore more ecosystems. Support our mission today.</p>
                <button
                  onClick={() => setShowDonationModal(true)}
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm"
                >
                  Donate Now →
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>
                </div>

                <p className="text-gray-600 mb-8">We have active food forest projects across multiple cities, each transforming urban spaces into thriving ecosystems.</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Noida Vertical Gardens</h4>
                      <p className="text-sm text-gray-600">Noida, Uttar Pradesh - High-rise greening & urban biodiversity project</p>
                      <p className="text-xs text-emerald-700 font-medium mt-1">Active since 2018</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Koramangala Green Canopy</h4>
                      <p className="text-sm text-gray-600">Bangalore, Karnataka - Tech campus & urban food forest initiative</p>
                      <p className="text-xs text-green-700 font-medium mt-1">Active since 2020</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
                    <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ekamra Urban Forest</h4>
                      <p className="text-sm text-gray-600">Bhubaneswar, Odisha - Heritage species & urban reforestation project</p>
                      <p className="text-xs text-cyan-700 font-medium mt-1">Active since 2019</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Bandra Coastal Greens</h4>
                      <p className="text-sm text-gray-600">Mumbai, Maharashtra - Saline-resistant planting & public space revival</p>
                      <p className="text-xs text-teal-700 font-medium mt-1">Active since 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  );
};