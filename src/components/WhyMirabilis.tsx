import { CheckCircle2, BrainCircuit, Waves, Shield, FileText, Sparkles } from 'lucide-react';

const differentiators = [
  'Learns your speaking style over time',
  'Understands African contexts and accents',
  'Generates strategy-level insights',
  'Produces reports, minutes, proposals, briefs automatically',
  'Works offline, fast, and securely',
  'Built for professionals who think, lead, teach, and build',
];

export default function WhyMirabilis() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex justify-center">
          <img
            src="https://i.imgur.com/CDfZyDa.jpg"
            alt="Why Mirabilis"
            className="max-w-full h-auto rounded-lg object-contain"
            style={{ maxHeight: '400px'}}
            onError={(e) => {
              // Fallback to png if jpg fails
              const target = e.target as HTMLImageElement;
              if (target.src.includes('.jpg')) {
                target.src = 'https://i.imgur.com/CDfZyDa.png';
              }
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold text-blue-600">Why Mirabilis</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            The Most Intelligent Recorder Ever Built
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Because your ideas deserve clarity. Mirabilis fuses precision hardware with contextual AI that understands
            nuance, remembers how you speak, and delivers strategy-ready outputs.
          </p>

          <div className="space-y-3">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-800">
                <CheckCircle2 className="text-blue-500 mt-0.5" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2 sm:col-span-2 rounded-2xl border border-blue-100 bg-white p-5 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <BrainCircuit className="text-purple-500" size={22} />
              <p className="font-semibold text-slate-900">Contextual Memory</p>
            </div>
            <p className="text-sm text-slate-700">
              Learns your cadence, jargon, and priorities to tailor every transcript and summary.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-5 shadow-lg shadow-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Waves size={22} />
              <p className="font-semibold">Adaptive Audio</p>
            </div>
            <p className="text-sm text-white/90">
              Beamforming and noise rejection deliver pristine voice capture anywhere.
            </p>
                </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="text-blue-600" size={20} />
              <p className="font-semibold text-slate-900">Auto Documents</p>
            </div>
            <p className="text-sm text-slate-700">
              Outputs reports, minutes, proposals, and briefs moments after recording.
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-blue-100 bg-white p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-indigo-600" size={20} />
              <Sparkles className="text-purple-500" size={18} />
              <p className="font-semibold text-slate-900">Secure & Fast</p>
            </div>
            <p className="text-sm text-slate-700">
              Works offline when you need privacy; syncs securely when you want speed.
            </p>
              </div>
        </div>
        </div>
      </div>
    </section>
  );
}
