import React from 'react';
import founder from '../../assets/personal-photo.jpg';
import aslam from '../../assets/aslam.jpg';
import abhash from '../../assets/abhash.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

const teamMembers = [
  {
    name: 'Mamlesh VA, Founder and CEO',
    photo: founder,
    linkedin: 'CEO_LinkedIn_URL',
    description: 'Experienced leader with a passion for innovation and growth. Driving strategic vision and fostering a collaborative culture to achieve remarkable success.',
  },
  {
    name: 'Abhash Das, SDE (intern)',
    photo: abhash,
    linkedin: 'Team_Member_LinkedIn_URL',
    description: 'Creative thinker and expert developer, committed to delivering exceptional user experiences.',
  },
  {
    name: 'Mirza Aslam Beg, SDE (intern)',
    photo: aslam,
    linkedin: 'CTO_LinkedIn_URL',
    description: 'Technical wizard and problem solver, dedicated to advancing technology solutions and ensuring robust.',
  }
  // Add more team members here
];

const AboutUs = () => {
  return (
    <div className='bg-[#181818] min-h-screen'>
      <Navbar />
      <div className="w-4/5 mx-auto py-12 px-6 bg-[#181818] text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-10 text-center">
          ChatterPy: Your AI-powered assistant for smarter conversations, seamless integrations, and streamlined workflows.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-center">Meet the ChatterPy Team</h2>
        <div className="flex flex-col items-center my-12">
          <div className="hanging-dot"></div>
          <div className="hanging-point"></div>
          <div 
            className={`card text-center bg-gradient-to-r from-white via-gray-100 to-white shadow-lg rounded-lg p-6 text-black border-[10px] h-[auto] w-full max-w-sm mx-auto rounded-tl-[30%] rounded-br-[30%] relative`}
          >
            <img src={teamMembers[0].photo} alt={teamMembers[0].name} className="rounded-[12px] w-[60%] h-[60%] mx-auto mb-4 border-2 border-[#6a0dad]" />
            <h3 className="text-xl font-semibold">{teamMembers[0].name}</h3>
            <p className="text-sm mb-4">{teamMembers[0].description}</p>
            <a href={teamMembers[0].linkedin} className="text-[#6a0dad] hover:underline mt-2 block">LinkedIn</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 relative">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="hanging-dot"></div>
              <div className="hanging-point"></div>
              <div 
                className={`card text-center bg-gradient-to-r from-white via-gray-100 to-white shadow-lg rounded-lg p-6 text-black border-[10px] h-[auto] w-full max-w-sm mx-auto rounded-tl-[30%] rounded-br-[30%] relative`}
              >
                <img src={member.photo} alt={member.name} className="rounded-[12px] w-[60%] h-[60%] mx-auto mb-4 border-2 border-[#6a0dad]" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm mb-4">{member.description}</p>
                <a href={member.linkedin} className="text-[#6a0dad] hover:underline mt-2 block">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Our Achievements</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-4">
          <button className="bg-[#6a0dad] text-white py-3 px-8 rounded mb-2 md:mb-0 hover:bg-[#6a0dad] text-center shadow-lg">
            <span className="text-sm">Launched In</span>
            <br />
            <span className="text-4xl font-bold">2024</span>
          </button>
          <button className="bg-[#6a0dad] text-white py-3 px-8 rounded mb-2 md:mb-0 hover:bg-[#6a0dad] text-center shadow-lg">
            <span className="text-sm">Servers Running</span>
            <br />
            <span className="text-4xl font-bold">2</span>
          </button>
          <button className="bg-[#6a0dad] text-white py-3 px-8 rounded hover:bg-[#6a0dad] text-center shadow-lg">
            <span className="text-sm">Total Customers</span>
            <br />
            <span className="text-4xl font-bold">10+</span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
