import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/20 py-3' 
          : 'bg-gray-950/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold text-sm group-hover:bg-primary-400 transition-colors shadow-lg shadow-primary-500/20">
            N
          </span>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-primary-100 transition-colors">
            Nihal
          </span>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `ml-4 text-xs py-2 ${isActive ? 'btn-primary opacity-80' : 'btn-primary'}`
            }
          >
            Resume
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl animate-fade-in-up">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink to="/resume" className="btn-primary text-xs py-3 justify-center mt-2">
              Resume
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
