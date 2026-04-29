import { useState, useEffect } from 'react';
import { portfolioService } from '../services/api';

const ServiceIcon = ({ title }) => {
  const iconProps = { className: "w-10 h-10 transition-transform duration-500 group-hover:scale-110", strokeWidth: 1.5, stroke: "currentColor", fill: "none" };
  
  if (title.includes('Mobile')) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  } else if (title.includes('Web')) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  } else if (title.includes('UI')) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 1.5" />
        <path d="M7.11 11.89l5.06-5.06" />
      </svg>
    );
  } else if (title.includes('Backend') || title.includes('API')) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  } else if (title.includes('Performance') || title.includes('SEO')) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  } else if (title.includes('Maintenance')) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    );
  }
  return <svg {...iconProps} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>;
};

export default function Services() {
  const [services, setServices] = useState([]);

  const defaultServices = [
    { 
      title: "Mobile App Development",
      description: "I develop fast, scalable, and feature-rich mobile applications using Flutter and React Native. From UI design to backend integration, I build apps that provide a smooth and modern user experience."
    },
    { 
      title: "Web Development",
      description: "Creating responsive, modern, and user-focused websites using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I build everything from business websites to powerful full-stack applications."
    },
    { 
      title: "UI / UX Design",
      description: "Designing simple, clean, and user-friendly interfaces using Figma. I focus on user experience, clarity, and elegant layouts that enhance product usability."
    },
    { 
      title: "Backend & API Integration",
      description: "Building secure and scalable backend systems with Express.js and Node.js. I handle REST APIs, authentication, database management, and third-party integrations."
    },
    { 
      title: "Website Performance & SEO",
      description: "Improving website speed, SEO score, loading time, and overall performance. I optimize images, scripts, and structure for a lightning-fast user experience."
    },
    { 
      title: "Maintenance & Support",
      description: "Providing ongoing support, updates, improvements, bug fixes, and long-term maintenance to ensure your website or app runs smoothly with zero downtime."
    }
  ];

  useEffect(() => {
    portfolioService.getServices()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setServices(defaultServices);
        } else {
          setServices(defaultServices);
        }
      })
      .catch(() => setServices(defaultServices));
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Services <span className="text-primary-500">I Offer</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Specialized solutions tailored to transform your digital presence and scale your business.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[2.5rem] bg-gray-900/40 backdrop-blur-md border border-gray-800/60 hover:border-primary-500/40 hover:bg-gray-900/60 transition-all duration-500 relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-primary-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-[2px] -z-10"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl flex items-center justify-center mb-8 border border-gray-800 group-hover:border-primary-500/30 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-500 text-primary-500">
                <ServiceIcon title={service.title} />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-8 w-12 h-1 bg-primary-500/20 rounded-full group-hover:w-full group-hover:bg-primary-500/40 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
