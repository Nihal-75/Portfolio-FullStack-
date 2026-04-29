import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioService } from '../services/api';

export default function Hero() {
  const [profile, setProfile] = useState(null);
  
  // Provide beautiful static fallbacks while API is empty
  const defaultProfile = {
    name: "Nihal Pandey",
    title: "MERN Stack Developer",
    tagline: "Building scalable and secure web apps.",
    location: "India"
  };

  useEffect(() => {
    portfolioService.getProfile()
      .then(res => {
        if (res.data) setProfile(res.data);
      })
      .catch(err => console.log("Using static fallback data due to API error/empty DB."));
  }, []);

  const data = profile || defaultProfile;

  const techStack = [
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", bg: "bg-white/90 p-0.5 rounded-sm" },
    { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", invert: true }
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden px-4 md:px-8">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/20 rounded-full blur-[100px] md:blur-[150px] -z-10 mix-blend-screen pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/15 rounded-full blur-[100px] md:blur-[150px] -z-10 mix-blend-screen pointer-events-none animate-float-delayed"></div>
      
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-semibold tracking-widest uppercase animate-pulse">
            Available for work
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            Hi there, I am <br className="hidden sm:block" /><span className="bg-gradient-to-r from-primary-400 via-purple-400 to-primary-400 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent">Nihal Pandey</span>
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
            I have been working as a Full-Stack Developer at SkillVertex for the past 1.6 years.
          </p>
          
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
            {data.tagline} Based in {data.location}.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <Link to="/contact" className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base shadow-primary-500/40 hover:scale-105 transition-transform duration-300 justify-center">
              Hire Me
            </Link>
            <Link to="/projects" className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-base hover:bg-gray-800 transition-colors duration-300 justify-center">
              Latest Projects
            </Link>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-gray-800/50 pt-8 w-full">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">1</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">10+</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">98%</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Faster Delivery</p>
            </div>
          </div>
        </div> 
        
        {/* Visual Element (Profile Image) */}
        <div className="relative hidden lg:flex items-center justify-center z-10 w-full h-full">
           <div className="relative w-[400px] h-[500px] group">
             {/* Dynamic Background Glows */}
             <div className="absolute -inset-10 bg-primary-500/10 rounded-full blur-[100px] group-hover:bg-primary-500/20 transition-all duration-1000 animate-pulse"></div>
             <div className="absolute top-0 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[80px] animate-float"></div>
             
             {/* Main Image Container */}
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-800/50 bg-gray-900/40 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-2 group-hover:border-primary-500/30">
               <img 
                 src="/img.jpg.jpeg" 
                 alt="Nihal Pandey" 
                 className="w-full h-full object-cover object-[center_15%] grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 brightness-90 group-hover:brightness-110"
                 onError={(e) => {
                   e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500";
                   e.target.className = "w-full h-full object-cover opacity-20 grayscale";
                 }}
               />
               
               {/* Premium Overlays */}
               <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
               
               {/* Floating Info Tag */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] p-4 rounded-2xl bg-gray-950/60 backdrop-blur-xl border border-gray-800 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                     <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Current Focus</span>
                   </div>
                   <p className="text-sm font-semibold text-white">Scaling AI-Driven Systems</p>
                 </div>
               </div>
             </div>
             
             {/* Decorative Accent Lines */}
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary-500/30 rounded-tl-[2.5rem] -z-10 group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-purple-500/30 rounded-br-[2.5rem] -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500"></div>
           </div>
        </div>
      </div>

      {/* Tech Stack Sliding Marquee (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-gray-800/50 bg-gray-950/80 backdrop-blur-md py-4 z-20">
        {/* We use two identical lists side-by-side to create a seamless infinite loop */}
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center px-4">
            {techStack.map((tech, i) => (
              <span key={`a-${i}`} className="flex items-center gap-2.5 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 font-semibold text-sm whitespace-nowrap shadow-lg">
                <img src={tech.icon} alt={tech.name} className={`w-5 h-5 ${tech.invert ? 'invert' : ''} ${tech.bg || ''}`} />
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center px-4">
            {techStack.map((tech, i) => (
              <span key={`b-${i}`} className="flex items-center gap-2.5 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 font-semibold text-sm whitespace-nowrap shadow-lg">
                <img src={tech.icon} alt={tech.name} className={`w-5 h-5 ${tech.invert ? 'invert' : ''} ${tech.bg || ''}`} />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
