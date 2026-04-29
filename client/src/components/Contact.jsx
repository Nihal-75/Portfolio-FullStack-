import { useState } from 'react';
import { portfolioService } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await portfolioService.submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-gray-800/50 bg-gray-950/50">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-primary-500 tracking-widest uppercase mb-2">06. What's Next?</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/60 rounded-3xl p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                placeholder="Hello! I'd like to discuss a project..."
              ></textarea>
            </div>
            
            {status === 'success' && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm text-center">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
                {errorMessage}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full btn-primary justify-center py-3.5 text-base"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            
          </form>
        </div>
        
      </div>
    </section>
  );
}
