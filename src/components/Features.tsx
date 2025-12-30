import { Mic2, Type, BrainCircuit, Layers3 } from 'lucide-react';

const features = [
  {
    icon: Mic2,
    title: 'Real-Time Recording',
    description: 'Capture every word with studio-level clarity using beamformed, high-fidelity microphones.',
  },
  {
    icon: Type,
    title: 'Intelligent Transcription',
    description: 'Accent-trained for African speech patterns, delivering precise, context-aware transcripts.',
  },
  {
    icon: BrainCircuit,
    title: 'Deep Summaries & Insights',
    description: 'Generates executive briefs, action items, and decisions moments after the conversation ends.',
  },
  {
    icon: Layers3,
    title: 'Industry-Smart Intelligence',
    description: 'Understands law, finance, education, ministry, healthcare, and more—tailored to your domain.',
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Record. Understand. Transform.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mirabilis AI Recorder is your thinking partner on the go.
            It captures critical conversations, transcribes them with precision, and synthesizes 
            insights using domain knowledge including laws, regulations, professional dictates, and 
            contextual nuance so you don’t just remember meetings, you extract meaning and 
            command outcomes.
            {/* Mirabilis listens like a person, transcribes like a linguist, and thinks like a strategy team—all inside a
            card-like AI recorder. */}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-blue-100/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-colors">
                  <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
