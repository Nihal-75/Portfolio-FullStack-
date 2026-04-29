import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800/50 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Brand & Desc */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Nihal Pandey</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Working at Skill Vertex, building efficient web applications and delivering high-quality tech solutions.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary-400 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-400 hover:text-primary-300 font-medium transition-all flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              Follow Us
            </h3>
            <div className="flex flex-col gap-4 text-sm">
              <a href="https://linkedin.com/in/Nihal-75github" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                Linkedin
              </a>
              <a href="https://github.com/Nihal-75" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gray-700 group-hover:text-white transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                Github
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
