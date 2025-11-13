import { useState, useEffect } from 'react';
import akaTeamImg from '/src/assets/teamimages/Dr Agnihotri.jpg';
import ksTeamImg from '/src/assets/teamimages/Ms Kshyama.png';
import ssaTeamImg from '/src/assets/teamimages/Mr Shubhendu.png';
import kpTeamImg from '/src/assets/teamimages/Mr. Kshitij.png';
import rkTeamImg from '/src/assets/teamimages/Dr. Rajesh.png';

interface TeamMember {
  name: string;
  image: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. A.K. Agnihotri',
    image: akaTeamImg,
    role: 'Lead Ecologist',
    description: 'Dr. Agnihotri brings decades of experience in ecological restoration and sustainable development. His vision drives our mission to transform degraded landscapes into thriving ecosystems.'
  },
  {
    name: 'Ms. Kshyama Singh',
    image: ksTeamImg,
    role: 'Community Outreach Director',
    description: 'Ms. Kshyama leads our community engagement initiatives, connecting local communities with nature through hands-on programs and educational workshops.'
  },
  {
    name: 'Mr. Shubhendu Shekhar Awasthi',
    image: ssaTeamImg,
    role: 'Project Coordinator',
    description: 'Mr. Shubhendu oversees project implementation, ensuring each plantation drive meets our standards for ecological impact and community involvement.'
  },
  {
    name: 'Mr. Kshitij Pathak',
    image: kpTeamImg,
    role: 'Technical Lead',
    description: 'Mr. Kshitij provides technical expertise in native species selection, soil management, and sustainable agricultural practices for our food forest projects.'
  };
  {
    name: 'Dr. Rajesh Kumar',
    image: rkTeamImg,
    role: '',
    description: ''
  }
];

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-3 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentMember.name}</h3>
            <p className="text-emerald-600 font-semibold mb-4">{currentMember.role}</p>
            <p className="text-gray-600 leading-relaxed">{currentMember.description}</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-emerald-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
