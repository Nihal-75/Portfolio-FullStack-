import { useState, useEffect } from 'react';
import { portfolioService } from '../services/api';

// Simple function to highlight numbers/metrics in text
const HighlightMetrics = ({ text }) => {
  if (!text) return null;
  // Regex to match numbers with optional symbols like +, ₹, K, M, %
  const parts = text.split(/((?:₹|\$)?\d+(?:,\d+)*(?:\.\d+)?[+KMB%]?)/i);
  
  return (
    <span>
      {parts.map((part, i) => {
        if (/((?:₹|\$)?\d+(?:,\d+)*(?:\.\d+)?[+KMB%]?)/i.test(part)) {
          return <strong key={i} className="text-emerald-400 font-extrabold px-1 bg-emerald-400/10 rounded">{part}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const defaultProjects = [
    {
      title: "Gate Entry QR System",
      description: "A secure, high-performance QR-based entry management system designed to streamline access control and monitor attendance in real-time.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Admin Panel", "JWT", "Token"],
      impact: "Successfully managed 6000+ users and generated a revenue of ₹40K.",
      github: "https://github.com/Nihal-75/Nextflow",
      demo: "https://github.com/Nihal-75/Nextflow"
    },
    {
      title: "Food Coupon System",
      description: "Digital coupon generation and redemption platform designed to eliminate paper waste and track food distribution efficiently during large-scale events.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Admin Panel", "JWT", "Token"],
      impact: "Handled 6000+ participants flawlessly with a total transaction volume of ₹45K.",
      github: "https://github.com/Nihal-75/Interview_creater_portal",
      demo: "https://github.com/Nihal-75/Interview_creater_portal"
    },
    {
      title: "AI Calling Agent",
      description: "An automated voice-based AI assistant capable of handling inbound inquiries, scheduling appointments, and providing intelligent, context-aware responses.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Admin Panel", "JWT", "Token"],
      impact: "Reduced manual call handling time by 80% with human-like interactions.",
      github: "https://github.com/Nihal-75/Calling-AI-assistance",
      demo: "https://github.com/Nihal-75/Calling-AI-assistance"
    },
    {
      title: "Job Portal",
      description: "A highly responsive job board connecting recruiters and job seekers, featuring advanced filtering, instant notifications, and lightning-fast search.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Admin Panel", "JWT", "Token"],
      impact: "Implemented Redis caching to reduce API response times by 65%.",
      github: "https://github.com/Nihal-75/job-portal",
      demo: "https://github.com/Nihal-75/job-portal"
    },
    {
      title: "Nextflow",
      description: "A comprehensive full-stack project management and workflow automation system built for scalability.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB", "React.js"],
      impact: "Streamlined complex development workflows with 40% better task tracking.",
      github: "https://github.com/Nihal-75/Nextflow",
      demo: "https://github.com/Nihal-75/Nextflow"
    },
    {
      title: "Instagram Platform Clone",
      description: "A real-time video-sharing social platform with advanced UI/UX and media processing capabilities.",
      tech: ["React.js", "Node.js", "MongoDB", "WebSockets", "CSS3"],
      impact: "Engineered for high-concurrency video streaming and user engagement.",
      github: "https://github.com/Nihal-75/online-video-instagram-platform",
      demo: "https://github.com/Nihal-75/online-video-instagram-platform"
    },
    {
      title: "Interview Creator Portal",
      description: "End-to-end recruitment platform for creating assessments and managing candidate interviews.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      impact: "Automated candidate screening process for 500+ applicants.",
      github: "https://github.com/Nihal-75/Interview_creater_portal",
      demo: "https://github.com/Nihal-75/Interview_creater_portal"
    },
    {
      title: "Tudo Chatboard",
      description: "Real-time communication platform with instant messaging and multi-user chat support.",
      tech: ["Node.js", "Socket.io", "React", "MongoDB"],
      impact: "Supports 100+ concurrent real-time connections with zero latency.",
      github: "https://github.com/Nihal-75/Tudo_Chatboard_web",
      demo: "https://github.com/Nihal-75/Tudo_Chatboard_web"
    },
    {
      title: "Hospital Management",
      description: "Digital transformation suite for hospitals, managing patient records, doctor appointments, and billing.",
      tech: ["MERN Stack", "RBAC", "Cloudinary", "JWT"],
      impact: "Optimized patient queue management by 35% using smart scheduling.",
      github: "https://github.com/Nihal-75/Hoshpital_Management_System",
      demo: "https://github.com/Nihal-75/Hoshpital_Management_System"
    }
  ];

  useEffect(() => {
    // Attempt to fetch from API, but use the rich default data if empty or error
    portfolioService.getProjects()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setProjects(res.data);
        } else {
          setProjects(defaultProjects);
        }
      })
      .catch(() => setProjects(defaultProjects));
  }, []);

  return (
    <section id="projects" className="py-24 relative border-t border-gray-800/50 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary-500 tracking-widest uppercase mb-2">03. Work</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Projects I've built.</h3>
        </div>
        
        {/* CSS Grid for Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col justify-between bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-7 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-500),0.3)] transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="z-10">
                {/* Header: Icons + Title */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Impact Metrics */}
                {project.impact && (
                  <div className="mb-6 text-sm text-gray-300 bg-gray-950/80 p-4 rounded-xl border border-gray-800/50 shadow-inner">
                    <HighlightMetrics text={project.impact} />
                  </div>
                )}
              </div>
              
              {/* Footer: Tech Stack */}
              <div className="z-10 mt-auto pt-4 border-t border-gray-800">
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-gray-500">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="px-2 py-1 bg-gray-800/50 rounded text-gray-400 border border-gray-700/50">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
