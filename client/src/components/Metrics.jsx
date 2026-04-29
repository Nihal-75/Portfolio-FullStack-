import CountUpLib from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUp = CountUpLib.default ? CountUpLib.default : CountUpLib;

export default function Metrics() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2, // Trigger when 20% visible
  });

  const stats = [
    {
      value: 6000,
      prefix: '',
      suffix: '+',
      label: 'Active Users',
      desc: 'Scaling securely',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      value: 85000,
      prefix: '₹',
      suffix: '+',
      separator: ',',
      label: 'Generated Revenue',
      desc: 'Monetized platforms',
      color: 'from-emerald-500 to-teal-400',
    },
    {
      value: 99.9,
      prefix: '',
      suffix: '%',
      decimals: 1,
      label: 'System Uptime',
      desc: 'High availability',
      color: 'from-purple-500 to-pink-400',
    },
    {
      value: 65,
      prefix: '',
      suffix: '%',
      label: 'Faster APIs',
      desc: 'Redis caching enabled',
      color: 'from-orange-500 to-yellow-400',
    },
  ];

  return (
    <section className="py-20 relative border-t border-gray-800/50 bg-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-primary-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm hover:bg-gray-800 hover:border-gray-700 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent drop-shadow-sm whitespace-nowrap`}>
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator={stat.separator || ''}
                    decimals={stat.decimals || 0}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    useEasing={true}
                  />
                ) : (
                  <span className="opacity-0">{stat.prefix}{stat.value}{stat.suffix}</span>
                )}
              </div>
              <h4 className="text-white font-bold text-sm lg:text-base uppercase tracking-wider mb-1 text-center">
                {stat.label}
              </h4>
              <p className="text-gray-500 text-xs text-center font-mono group-hover:text-gray-400 transition-colors">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
