import { useState, useEffect } from 'react';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV New Nihal 1.pdf';
    link.download = 'Nihal_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-sm font-bold text-primary-500 tracking-widest uppercase mb-2">Resume</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">My Professional Journey</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://portfolio-full-stack-2py6.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-5 py-2.5 text-sm flex items-center gap-2 group border-emerald-500/30 hover:border-emerald-500/60"
            >
              <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              View Live Portfolio
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary px-5 py-2.5 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              Preview Resume
            </button>
            <button
              onClick={handleDownload}
              className="btn-primary px-5 py-2.5 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* ─── Resume Content ─── */}
        <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/60 rounded-3xl p-6 sm:p-10 md:p-16 space-y-12 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
          
          {/* Name & Contact */}
          <div className="text-center border-b border-gray-800 pb-8">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">NIHAL PANDEY</h1>
            <p className="text-gray-400 mt-2">Gorakhpur, Uttar Pradesh, India</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">📞 +91 7717794185</span>
              <span className="flex items-center gap-1">✉️ nihalpandey636@gmail.com</span>
              <a href="https://linkedin.com/in/Nihal-75github" target="_blank" rel="noreferrer" className="text-primary-400 hover:underline">LinkedIn</a>
              <a href="https://github.com/Nihal-75" target="_blank" rel="noreferrer" className="text-primary-400 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500"></span>Professional Summary
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Results-driven <strong className="text-gray-200">Software Engineer</strong> specializing in JavaScript technologies, focusing on frontend excellence and scalable system integration. Successfully engineered high-impact solutions, including a <strong className="text-gray-200">Gate Entry QR System</strong> and <strong className="text-gray-200">Food Coupon platform</strong>, collectively supporting a vast user base and generating <strong className="text-emerald-400">85,000 in revenue</strong>. Expert in utilizing AI-driven development to accelerate the SDLC. Proven ability to deliver production-grade applications with robust protection (JWT/OAuth 2.0) while maintaining <strong className="text-emerald-400">99.9% uptime</strong>.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500"></span>Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {[
                { label: 'Languages', value: 'JavaScript (ES6+), Core Java, SQL, TypeScript' },
                { label: 'Mobile App Development', value: 'React Native, Expo, Mobile UI/UX, Cross-Platform Deployment' },
                { label: 'Frontend', value: 'HTML5, CSS3, React.js, Next.js, Tailwind CSS' },
                { label: 'Backend', value: 'Node.js, Express.js, RESTful APIs, Microservices, WebSockets' },
                { label: 'AI & Frameworks', value: 'Cursor AI, Claude AI, OpenAI API, LangChain, Gemini AI, Git, GitHub, Vercel' },
                { label: 'Security & Databases', value: 'MongoDB, PostgreSQL, MySQL, JWT, OAuth 2.0, RBAC' },
              ].map((skill, i) => (
                <div key={i} className="bg-gray-950/50 border border-gray-800 rounded-xl p-4 text-center hover:border-gray-700 transition-colors">
                  <h3 className="text-primary-400 font-bold mb-2 text-base">{skill.label}:</h3>
                  <p className="text-gray-400 leading-relaxed">{skill.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500"></span>Professional Experience
            </h2>
            <div className="bg-gray-950/30 border border-gray-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg">SkillVertex Pvt. Ltd.</h3>
                  <p className="text-primary-400 text-sm font-medium italic">MERN Stack Developer</p>
                </div>
                <div className="text-gray-400 text-sm text-left sm:text-right">
                  <p className="font-bold text-gray-200 text-base">June 2024 – Jan 2026</p>
                  <p>Gorakhpur, India</p>
                </div>
              </div>
              <ul className="list-disc list-outside text-gray-400 text-sm space-y-2 ml-4">
                <li>Developed and deployed full-stack web applications, increasing user engagement by <strong className="text-emerald-400">30%</strong> through responsive UI components and optimized state management.</li>
                <li>Architected scalable backends with <strong className="text-gray-200">MongoDB</strong>, achieving <strong className="text-emerald-400">99.9% uptime</strong> and reducing API response times by <strong className="text-emerald-400">65%</strong> through efficient indexing and query optimization.</li>
                <li>Integrated <strong className="text-gray-200">OAuth 2.0</strong> authentication protocols and built <strong className="text-gray-200">RESTful services</strong> using modular architecture to ensure high security and system maintainability.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500"></span>Projects
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Job Portal',
                  tech: 'MERN Stack, Redis',
                  year: '2025',
                  points: [
                    'Engineered a comprehensive job portal enabling real-time applications and enterprise-grade recruitment management.',
                    'Utilized Redis caching to optimize response times and significantly reduce server-side computational load.',
                    'Implemented advanced search filtering and credential-based access for a user base of 2,000+.'
                  ]
                },
                {
                  title: 'Gate Entry QR System',
                  tech: 'MERN Stack, Face Detection',
                  year: 'Feb 2026',
                  points: [
                    'Awarded the Project Excellence Award (INR 10,000) for outstanding technical delivery and real-world impact.',
                    'Onboarded 6,000+ active users by integrating biometric face detection and QR technology for fraud prevention.',
                    'Generated 40,000 in revenue through strategic monetization and high platform reliability.'
                  ]
                },
                {
                  title: 'Food Coupon QR System',
                  tech: 'React.js, Node.js, MongoDB',
                  year: 'Feb 2026',
                  points: [
                    'Built a validation system with custom usage control logic, serving over 6,000 active participants.',
                    'Managed end-to-end platform operations, resulting in a total revenue of 45,000.',
                    'Designed a high-speed vendor scanning interface for instantaneous verification and backend synchronization.'
                  ]
                },
                {
                  title: 'AI Calling Agent (Voice AI)',
                  tech: 'MERN Stack, OpenAI, Twilio',
                  year: '2025',
                  points: [
                    'Developed an automated AI voice agent using OpenAI Realtime API and Twilio for seamless communication.',
                    'Integrated WebSockets for low-latency, bidirectional audio streaming between the client and AI model.',
                    'Built a dashboard in React.js to monitor logs, sentiment analysis, and transcriptions in real-time.'
                  ]
                },
                {
                  title: 'College Management System',
                  tech: 'MERN Stack, Microservices',
                  year: '2026 – Present',
                  points: [
                    'Architecting an enterprise-grade ERP system using Microservices to manage academic and faculty operations.',
                    'Implementing independent modules for attendance and finance to ensure fault tolerance and scalability.',
                    'Developing a unified frontend with Role-Based Access Control (RBAC) and real-time data synchronization.'
                  ]
                }
              ].map((project, i) => (
                <div key={i} className="bg-gray-950/30 border border-gray-800/40 rounded-2xl p-6 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                    <h3 className="text-white font-bold text-base flex flex-wrap items-center gap-2">
                      {project.title} 
                      <span className="hidden sm:inline text-gray-700">|</span> 
                      <span className="text-primary-400 font-medium italic text-sm">{project.tech}</span>
                    </h3>
                    <span className="text-gray-400 text-sm font-bold bg-gray-800 px-3 py-1 rounded-full">{project.year}</span>
                  </div>
                  <ul className="list-disc list-outside text-gray-400 text-sm space-y-2 ml-4">
                    {project.points.map((p, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: p.replace(/(Redis|6,000\+|40,000|45,000|OpenAI Realtime API|Twilio|Microservices|Role-Based Access Control \(RBAC\))/g, '<strong class="text-gray-200">$1</strong>') }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary-500"></span>Education
            </h2>
            <div className="bg-gray-950/30 border border-gray-800/40 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold text-lg">Institute of Technology and Management</h3>
                  <p className="text-gray-400 font-medium italic">Bachelor of Computer Application (BCA)</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">CGPA: 8.5/10</span>
                  </div>
                </div>
                <div className="text-gray-400 text-sm text-left sm:text-right">
                  <p className="font-bold text-gray-200 text-base">August 2023 – June 2026</p>
                  <p>Gorakhpur, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={handleDownload}
            className="btn-primary px-10 py-4 text-base shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Resume (PDF)
          </button>
          <p className="text-gray-600 text-xs mt-3">CV New Nihal 1.pdf</p>
        </div>

      </div>

      {/* Preview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 md:p-12">
          <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-5xl h-[85vh] sm:h-full max-h-[90vh] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950">
              <h3 className="text-lg font-bold text-white">Resume Preview</h3>
              <div className="flex items-center gap-4">
                <button onClick={handleDownload} className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">Download</button>
                <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors" aria-label="Close">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-gray-800">
              <object 
                data="/CV New Nihal 1.pdf" 
                type="application/pdf" 
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gray-900 text-white">
                  <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <p className="text-gray-400 mb-4">PDF Preview not available in your browser.</p>
                  <button onClick={handleDownload} className="btn-primary">Download to View</button>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
