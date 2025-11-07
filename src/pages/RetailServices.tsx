import { useState } from 'react';
import { Leaf, Users, CheckSquare, ClipboardList, FileText, Shovel, Heart, Mail, Phone, ChevronDown } from 'lucide-react';
import { ConsultationForm } from '../components/ConsultationForm';
import { FAQ } from '../components/FAQ';
import heroVideo from '../assets/Rooftop_Transformation_to_Luxury_Garden.mp4';
import balconygreens from '../assets/gallery/balconygreens.jpg'
import communityspace from '../assets/gallery/communityspace.jpg'
import modernterrace from '../assets/gallery/modernterrace.jpg'
import privateoasis from '../assets/gallery/privateoasis.jpg'
import rooftopgarden from '../assets/gallery/rooftopgarden.jpg'
import waterwise from '../assets/gallery/waterwise.jpg'

// A simple gallery item component for visual consistency
const GalleryItem = ({ src, alt, title }: { src: string, alt: string, title: string }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="aspect-[4/3]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
      </div>
    </div>
  </div>
);

export default function RetailServices() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const scrollToQuote = () => {
    document.getElementById('get-a-quote')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const services = [
    {
      title: "1. Roof & Terrace Garden Design",
      icon: Leaf,
      points: [
        "Comprehensive onsite assessment of your roof or terrace.",
        "Custom design and plant selection based on sunlight, wind, and usage.",
        "Waterproofing and drainage solutions for long-term durability.",
        "Lightweight soil and high-efficiency irrigation systems."
      ]
    },
    {
      title: "2. Private/Independent Home Gardens",
      icon: Users,
      points: [
        "Personalized landscape designs for yards, courtyards, balconies, or any open private space.",
        "Selection of flowering, edible, or medicinal plants to meet your needs.",
        "Lawn installation and maintenance plans available."
      ]
    },
    {
      title: "3. End-to-End Implementation",
      icon: CheckSquare,
      points: [
        "Project planning, procurement, and installation managed entirely by our expert team.",
        "Ongoing maintenance options and green care packages.",
        "Design documentation with plant species details and care instructions."
      ]
    }
  ];

  const processSteps = [
    { title: "Consultation & Assessment", description: "Get started with a free site visit and consultation to discuss your vision and assess your space’s potential.", icon: ClipboardList, color: "emerald" },
    { title: "Custom Design Proposal", description: "Receive a personalized garden design plan and detailed quotation, tailored to your budget and preferences.", icon: FileText, color: "blue" },
    { title: "Implementation & Greening", description: "Watch your terrace, rooftop, or private area transform as our team brings the green vision to life.", icon: Shovel, color: "amber" },
    { title: "Aftercare & Support", description: "Enjoy ongoing support with scheduled maintenance, plant care tips, and troubleshooting from our garden experts.", icon: Heart, color: "green" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[72vh] lg:h-[80vh] overflow-hidden">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Space with Customised Roof, Terrace & Private Gardens
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-100">
              Turn grey, unused spaces into vibrant green oases. We specialize in innovative gardens perfectly tailored to your needs and local ecosystem.
            </p>
            <div className="mt-8">
              <button
                onClick={scrollToQuote}
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-lg"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Grey to Greens?</h2>
            <p className="text-lg text-gray-600">
              We root our designs in science, community, and a deep respect for nature.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-emerald-600">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expertise in Greening</h3>
              <p className="text-gray-600">Decades of experience transforming urban spaces into lush, living environments.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customized Designs</h3>
              <p className="text-gray-600">Unique garden solutions to fit your specific requirements, local climate, and site conditions.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-teal-600">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Eco-Friendly Practices</h3>
              <p className="text-gray-600">Prioritizing biodiversity and sustainability with native plants and water-wise designs.</p>
            </div>
          </div>
        </section>

        {/* Our Services Section (Accordion) */}
        <section id="services" className="mb-24 py-16 bg-gray-50 rounded-3xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">From concept to completion, we provide a full suite of greening services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index + 1)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <service.icon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-xl font-bold text-gray-900">{service.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform ${openAccordion === (index + 1) ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openAccordion === (index + 1) ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-6 pt-2 pl-16">
                    <ul className="list-disc space-y-2 text-gray-600">
                      {service.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process Section (Timeline) */}
        <section id="process" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">A clear and simple path to your new green space.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-emerald-600 rounded-full"></div>
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative pl-20">
                    <div className={`absolute left-0 w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-bold text-${step.color}-600 bg-${step.color}-50 px-3 py-1 rounded-full`}>Step {index + 1}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-lg text-gray-600">Explore projects that showcase creative rooftop, terrace, and home garden solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem src={rooftopgarden} alt="Lush rooftop garden" title="Lush Rooftop Garden" />
            <GalleryItem src={modernterrace} alt="Modern terrace garden" title="Modern Terrace" />
            <GalleryItem src={privateoasis} alt="Private home garden oasis" title="Private Oasis" />
            <GalleryItem src={balconygreens} alt="Balcony garden with vegetables" title="Balcony Greens" />
            <GalleryItem src={waterwise} alt="Water-wise garden design" title="Water-Wise Design" />
            <GalleryItem src={communityspace} alt="Community garden space" title="Community Space" />
          </div>
        </section>

        {/* Consultation Form Section */}
        <section id="get-a-quote" className="scroll-mt-24 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
            <p className="text-lg text-gray-600">
              Tell us about your space and vision, and we'll help you create the perfect green oasis.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ConsultationForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="scroll-mt-24">
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-3xl shadow-xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Need More Information?</h2>
                <p className="text-lg text-emerald-100 mb-8">
                  Have questions before booking? Feel free to reach out to us directly.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email Us</h4>
                      <a href="mailto:info@greytogreens.org" className="text-lg text-emerald-100 hover:text-white">
                        info@greytogreens.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Call Us</h4>
                      <a href="tel:+91 9810397005" className="text-lg text-emerald-100 hover:text-white">
                        +91 9810397005
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>                   
          </div>
          <div className="mt-14">
              <FAQ />
          </div>     
        </section>
      </div>
    </div>
  );
}