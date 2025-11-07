import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

// Define the FAQ items
const faqData = [
  {
    question: "What kind of spaces do you service in cities like Delhi NCR, Mumbai, and Bangalore?",
    answer: "We specialize in transforming any urban space, big or small. This includes residential balconies, apartment terraces, independent home rooftops, and courtyards. Our designs are tailored for urban environments, managing factors like sunlight, wind, and space constraints common in Indian cities."
  },
  {
    question: "Do you only work on large rooftops, or can you design for a small apartment balcony?",
    answer: "We love small balconies! Our expertise lies in maximizing green space in compact areas. We use vertical gardens, custom-fit planters, and smart plant selection to create a lush, productive oasis, even on the smallest balconies in cities like Mumbai or Bangalore."
  },
  {
    question: "How much does a custom terrace or balcony garden cost?",
    answer: "The cost varies greatly depending on the size of your space, the complexity of the design (e.g., custom planters, irrigation systems), and the types of plants you choose. We offer a 'Free Assessment & Quote' to provide a detailed, no-obligation proposal tailored to your specific budget and vision."
  },
  {
    question: "How much maintenance do your gardens require?",
    answer: "We design gardens to match your lifestyle. We can create extremely low-maintenance, water-wise gardens using native, hardy plants. We also offer optional 'Aftercare & Support' packages where our team handles all the maintenance for you."
  },
  {
    question: "Why choose a non-profit (Grey to Greens) for my private garden?",
    answer: "When you hire our retail services, you're not just getting a beautiful garden; you're funding our mission. A portion of the proceeds from every private garden we build is directly reinvested into our community food forest projects and ecological restoration efforts. You get a world-class garden while directly contributing to a greener, healthier city."
  }
];

export const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="faq" className="mb-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">
          Your questions about transforming urban spaces, answered.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-500 transition-transform ${openAccordion === index ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-6 pb-6 pt-2 pl-16">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};