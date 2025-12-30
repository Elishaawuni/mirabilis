import { Play, Mic2, Sparkles, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Capture',
    description: 'Records meetings, negotiations, strategy sessions, interviews, and briefings accurately, securely, and without distraction.',
    icon: Mic2,
  },
  {
    number: '02',
    title: 'Clarify',
    description: 'Transforms conversations into structured transcripts and summaries that understand context, not just words.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Command',
    description: 'Synthesizes discussions into insights that support judgment, strategy formulation, compliance awareness, and decision-making.',
    icon: FileText,
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4">Capture → Understand → Transform</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="relative">
                {!isLast && (
                  <div className="hidden lg:block absolute top-24 -right-5 w-10 h-px bg-gradient-to-r from-blue-400 to-purple-400" />
                )}
                <div className="h-full rounded-2xl border border-slate-200 bg-gradient-to-b from-white via-blue-50/30 to-white p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-semibold text-blue-600">Step {step.number}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-purple-600 transition-colors">
            <Play size={18} />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
