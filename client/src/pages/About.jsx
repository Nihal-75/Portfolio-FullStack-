const stack = [
  {
    title: 'React + Vite',
    desc: 'Lightning-fast HMR and optimized builds with the latest React ecosystem.',
    icon: '⚛️',
    color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20',
  },
  {
    title: 'Tailwind CSS',
    desc: 'Utility-first styling with a custom design system and dark mode baked in.',
    icon: '🎨',
    color: 'from-violet-500/10 to-purple-500/10 border-violet-500/20',
  },
  {
    title: 'Node + Express',
    desc: 'Scalable REST API with CORS, rate limiting, and a clean MVC structure.',
    icon: '🚀',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
  },
  {
    title: 'MongoDB + Mongoose',
    desc: 'Flexible document database with schema validation and connection pooling.',
    icon: '🍃',
    color: 'from-green-500/10 to-lime-500/10 border-green-500/20',
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-28 pb-20 max-w-5xl mx-auto px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">About This Boilerplate</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          A production-ready starting point that takes the boilerplate pain away
          so you can focus on building features, not plumbing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {stack.map(({ title, desc, icon, color }) => (
          <div
            key={title}
            className={`bg-gradient-to-br ${color} border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200`}
          >
            <div className="text-4xl mb-3">{icon}</div>
            <h2 className="text-white font-bold text-lg mb-1">{title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="card text-center">
        <h3 className="text-white font-semibold text-lg mb-2">Ready to build?</h3>
        <p className="text-gray-400 text-sm mb-5">
          Clone the repo, add your <code className="text-primary-400 bg-primary-500/10 px-1.5 py-0.5 rounded">.env</code> files, and start shipping.
        </p>
        <a href="/" className="btn-primary mx-auto w-fit">
          Back to Home
        </a>
      </div>
    </main>
  );
}
