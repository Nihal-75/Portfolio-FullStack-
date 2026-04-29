import { useState, useEffect } from 'react';
import { portfolioService } from '../services/api';

export default function Education() {
  const [education, setEducation] = useState([]);

  const defaultEducation = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Institute of Technology and Management, Gorakhpur",
      year: "2023 — 2026",
      cgpa: "8.5",
      description: "Successfully completed my graduation with a strong focus on full-stack development and system architecture. Maintained a consistent academic record while building production-grade applications.",
      highlights: [
        "Specialized in MERN Stack & AI Integration",
        "8.5 CGPA (Academic Excellence)",
        "Completed with multiple real-world projects"
      ]
    },
    {
      degree: "Intermediate (Class XII)",
      college: "Bihar School Examination Board (BSEB), Patna",
      year: "2021 — 2023",
      cgpa: "65%",
      description: "Achieved 1st Division in the Bihar Board Examination. Developed a strong logical foundation in Mathematics and Science, paving the way for a career in technology.",
      highlights: [
        "1st Division Rank",
        "Focus on Mathematics & Computer Science",
        "Strong fundamental understanding"
      ]
    }
  ];

  useEffect(() => {
    portfolioService.getEducation()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setEducation(res.data);
        } else {
          setEducation(defaultEducation);
        }
      })
      .catch(() => setEducation(defaultEducation));
  }, []);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-widest">
            Education
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Academic <span className="text-primary-500">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Combining theoretical excellence with hands-on technical expertise to build production-ready applications.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          {education.map((edu, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 border-4 border-gray-950 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block"></div>
              
              <div className="md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
                <div className="p-8 rounded-3xl bg-gray-900/40 backdrop-blur-md border border-gray-800/60 hover:border-primary-500/40 hover:bg-gray-900/60 transition-all duration-500 relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-tr-3xl rounded-bl-[100%] -z-10"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <span className="inline-block px-3 py-1 rounded-lg bg-primary-500/10 text-primary-400 text-xs font-mono font-bold">
                      {edu.year}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-400 font-medium mb-6 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {edu.college}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {edu.highlights && (
                      <ul className="grid gap-2">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-gray-500">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500/50 rounded-full shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Statement Block */}
        <div className="mt-20 p-8 rounded-3xl bg-primary-500/5 border border-primary-500/20 text-center">
          <p className="text-gray-300 italic text-sm leading-relaxed">
            "This combination of theoretical knowledge and hands-on experience has helped me develop a problem-solving mindset and the ability to design scalable, efficient, and production-ready applications."
          </p>
        </div>
      </div>
    </section>
  );
}
