export default function About() {
  const achievements = [
    { label: "Active Users", value: "6,000+", detail: "Across production platforms" },
    { label: "Experience", value: "1.6 Years", detail: "Full-stack development" },
    { label: "Systems Built", value: "QR & AI", detail: "High-impact solutions" },
    { label: "Reliability", value: "99.9%", detail: "Uptime & Performance" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-widest">
              My Journey
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
              Crafting Digital Excellence with <span className="text-primary-500">MERN Stack</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m a results-driven <span className="text-white font-medium">MERN Stack Developer</span> with a relentless focus on building scalable, secure, and high-performance web applications. I specialize in JavaScript technologies and thrive on turning complex ideas into robust, real-world solutions.
              </p>
              
              <p>
                My track record includes architecting production-grade systems—from <span className="text-white font-medium">QR-based platforms to AI-powered applications</span>—that have served over <span className="text-primary-400 font-semibold">6,000+ users</span> and generated measurable business impact.
              </p>
              
              <p>
                I am deeply passionate about <span className="text-white font-medium">System Design</span>, Microservices, and the seamless integration of AI. Whether it's optimizing API performance or implementing secure authentication via <span className="text-white font-medium">JWT and OAuth 2.0</span>, I build applications that are as technically robust as they are user-friendly.
              </p>
            </div>

            {/* Tech Focus Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {["System Design", "Microservices", "AI Integration", "API Optimization", "Security Architecture"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 text-sm font-medium hover:border-primary-500/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Content: Achievements Grid */}
          <div className="lg:w-2/5 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/50 hover:bg-gray-900 transition-all duration-500"
              >
                <span className="block text-3xl font-black text-white mb-1 group-hover:text-primary-400 transition-colors">
                  {item.value}
                </span>
                <span className="block text-sm font-bold text-gray-300 mb-2">
                  {item.label}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
            
            {/* Call to Action Card */}
            <div className="sm:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-purple-600 text-white mt-4 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Ready to scale?</h4>
                <p className="text-primary-100 text-sm mb-6 opacity-90">Let's collaborate to build your next production-ready system.</p>
                <button className="px-6 py-2.5 bg-white text-primary-600 rounded-xl font-bold text-sm hover:shadow-lg transition-all active:scale-95">
                  Get in touch
                </button>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
