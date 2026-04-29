import { useState, useEffect } from 'react';

// Skill icons mapping
const techIcons = {
  // Languages
  "JavaScript (ES6+)": "https://api.iconify.design/logos:javascript.svg",
  "Core Java": "https://api.iconify.design/logos:java.svg",
  "SQL": "https://api.iconify.design/logos:postgresql.svg",
  "TypeScript": "https://api.iconify.design/logos:typescript-icon.svg",
  
  // Mobile
  "React Native": "https://api.iconify.design/logos:react.svg",
  "Expo": "https://api.iconify.design/logos:expo-icon.svg",
  "Mobile UI/UX": "https://api.iconify.design/logos:figma.svg",
  "Cross-Platform Deployment": "https://api.iconify.design/logos:aws-amplify.svg",
  
  // Frontend
  "HTML5": "https://api.iconify.design/logos:html-5.svg",
  "CSS3": "https://api.iconify.design/logos:css-3.svg",
  "React.js": "https://api.iconify.design/logos:react.svg",
  "Next.js": "https://api.iconify.design/logos:nextjs-icon.svg",
  "Tailwind CSS": "https://api.iconify.design/logos:tailwindcss-icon.svg",
  
  // Backend
  "Node.js": "https://api.iconify.design/logos:nodejs-icon.svg",
  "Express.js": "https://api.iconify.design/simple-icons:express.svg?color=white",
  "RESTful APIs": "https://api.iconify.design/material-symbols:api-rounded.svg?color=white",
  "REST APIs": "https://api.iconify.design/material-symbols:api-rounded.svg?color=white",
  "Microservices": "https://api.iconify.design/carbon:carbon-ui-proxy.svg?color=white",
  "WebSockets": "https://api.iconify.design/logos:socket-io.svg",
  
  // AI & Frameworks
  "Cursor AI": "https://api.iconify.design/tabler:robot.svg?color=white",
  "Claude AI": "https://api.iconify.design/simple-icons:anthropic.svg?color=white",
  "OpenAI API": "https://api.iconify.design/logos:openai-icon.svg",
  "LangChain": "https://api.iconify.design/logos:python.svg",
  "Gemini AI": "https://api.iconify.design/google-icons:gemini.svg",
  "Git": "https://api.iconify.design/logos:git-icon.svg",
  "GitHub": "https://api.iconify.design/logos:github-icon.svg",
  "Vercel": "https://api.iconify.design/logos:vercel-icon.svg",
  
  // Security & Databases
  "MongoDB": "https://api.iconify.design/logos:mongodb-icon.svg",
  "PostgreSQL": "https://api.iconify.design/logos:postgresql.svg",
  "MySQL": "https://api.iconify.design/logos:mysql-icon.svg",
  "JWT": "https://api.iconify.design/logos:jwt-icon.svg",
  "OAuth 2.0": "https://api.iconify.design/logos:oauth.svg",
  "RBAC": "https://api.iconify.design/mdi:shield-account.svg?color=white"
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const categories = [
    { name: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Mobile", icon: "https://www.svgrepo.com/show/475670/react-color.svg" },
    { name: "AI & Tools", icon: "https://www.svgrepo.com/show/306500/openai.svg" },
    { name: "Security", icon: "https://unpkg.com/lucide-static@latest/icons/shield-check.svg" }
  ];

  const allSkills = [
    // Frontend
    { name: "React.js", level: 96, category: "Frontend", icon: techIcons["React.js"] },
    { name: "Tailwind CSS", level: 94, category: "Frontend", icon: techIcons["Tailwind CSS"] },
    { name: "JavaScript", level: 95, category: "Frontend", icon: techIcons["JavaScript (ES6+)"] },
    { name: "HTML5", level: 98, category: "Frontend", icon: techIcons["HTML5"] },
    
    // Backend
    { name: "Node.js", level: 93, category: "Backend", icon: techIcons["Node.js"] },
    { name: "Express.js", level: 95, category: "Backend", icon: techIcons["Express.js"] },
    { name: "REST APIs", level: 96, category: "Backend", icon: techIcons["RESTful APIs"] },
    { name: "Microservices", level: 88, category: "Backend", icon: techIcons["Microservices"] },
    { name: "Java", level: 88, category: "Backend", icon: techIcons["Core Java"] },
    
    // Mobile
    { name: "React Native", level: 94, category: "Mobile", icon: techIcons["React Native"] },
    { name: "Expo", level: 92, category: "Mobile", icon: techIcons["Expo"] },
    { name: "Mobile UX", level: 85, category: "Mobile", icon: techIcons["Mobile UI/UX"] },
    
    // AI & Tools
    { name: "OpenAI API", level: 90, category: "AI & Tools", icon: techIcons["OpenAI API"] },
    { name: "Gemini AI", level: 88, category: "AI & Tools", icon: techIcons["Gemini AI"] },
    { name: "LangChain", level: 85, category: "AI & Tools", icon: techIcons["LangChain"] },
    { name: "Cursor AI", level: 95, category: "AI & Tools", icon: techIcons["Cursor AI"] },
    { name: "Git & GitHub", level: 94, category: "AI & Tools", icon: techIcons["GitHub"] },
    { name: "Vercel", level: 90, category: "AI & Tools", icon: techIcons["Vercel"] },
    
    // Security & Databases
    { name: "MongoDB", level: 92, category: "Security", icon: techIcons["MongoDB"] },
    { name: "PostgreSQL", level: 86, category: "Security", icon: techIcons["PostgreSQL"] },
    { name: "JWT", level: 95, category: "Security", icon: techIcons["JWT"] },
    { name: "OAuth 2.0", level: 90, category: "Security", icon: techIcons["OAuth 2.0"] }
  ];

  const filteredSkills = allSkills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-950">
      {/* Soft Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)] -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-primary-500 tracking-widest uppercase mb-2">02. Expertise</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">Technical Proficiency</h3>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive overview of my technical stack and proficiency levels across different development domains.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Category Navigation */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === cat.name 
                  ? "bg-primary-500/10 text-primary-400 border-r-4 border-primary-500" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <img 
                  src={cat.icon} 
                  className={`w-5 h-5 ${activeTab === cat.name ? "opacity-100" : "opacity-30 grayscale"} ${
                    (cat.name === 'AI & Tools' || cat.name === 'Security') ? 'brightness-0 invert' : ''
                  }`} 
                  alt="" 
                />
                <span className="font-bold text-sm uppercase tracking-wider">{cat.name}</span>
              </button>
            ))}
          </div>
          
          {/* Right: Skills List (Compact & Premium) */}
          <div className="lg:w-3/4 bg-gray-900/30 backdrop-blur-md border border-gray-800/40 rounded-[2rem] p-6 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {filteredSkills.map((skill, idx) => (
                <div key={idx} className="group relative">
                  {/* Subtle hover background highlight */}
                  <div className="absolute -inset-3 bg-white/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  
                  {/* Skill Name & Percentage Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 p-1.5 rounded-lg bg-gray-950 border border-gray-800 group-hover:border-primary-500/30 transition-colors">
                        <img 
                          src={skill.icon || `https://ui-avatars.com/api/?name=${skill.name}&background=random`} 
                          alt={skill.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-tight">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary-500/80 group-hover:text-primary-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar (Sleek Cyan Style) */}
                  <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#00bcd4] rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_rgba(0,188,212,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Shine effect */}
                      <div className="absolute top-0 left-0 w-full h-[50%] bg-white/10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
