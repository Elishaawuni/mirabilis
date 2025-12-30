import { Database, Cpu, Zap, Gauge } from 'lucide-react';

const specs = [
  {
    category: 'Speech detection -> Processing-> and Synthesis->',
    icon: Cpu,
    items: [
      { label: 'Mirabilis dwells in domain knowledge - laws, regulations, professional norms, and decision logic, allowing it to synthesize conversations the way a serious professional thinks, not the way a generic tool transcribes' },
      // { label: 'Cores', value: '40,000+' },
      // { label: 'Clock Speed', value: '2.5 GHz' },
      // { label: 'Peak FP32 Performance', value: '1 Exaflops' },
    ],
  },
 
];

export default function Hardware() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            <h3 className='text-white sm:text-1.5xl font-bold'>This is not a note-taking app.</h3>
            <h3 className='text-white sm:text-1.5xl font-bold'>This is not a voice recorder.</h3>
          </p>
        </div>

        <div className="">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Icon size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">{spec.category}</h3>
                </div>

                <div className="space-y-4">
                  {spec.items.map((item, idx) => (
                    <div key={idx} className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">1,000x</div>
              <p className="text-slate-300">Faster than CPU</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">40x</div>
              <p className="text-slate-300">More efficient than GPU</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">99.99%</div>
              <p className="text-slate-300">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
