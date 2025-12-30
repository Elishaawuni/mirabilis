import { ArrowRight, Play, Sparkles, Waves } from 'lucide-react';

export default function Hero() {
  const scrollToWaitlist = () => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToHowItWorks = () => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0c1b3f] via-[#0b1a33] to-[#1a2d5f]">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-10">
        <div className="grid max-w-6xl mx-auto w-full lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-20">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-100">
              <Sparkles size={30} className="text-cyan-300" />
              <span className="text-2xl ">Mirabilis AI Recorder</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.05]">
              Turn Every Conversation Into Clarity
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            For people whose decisions matter, and who cannot afford to miss a detail. Mirabilis captures your discussions with studio-grade microphones, transcribes African accents with precision, and transforms speech into structured, decision-ready insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200"
              >
                Pre-Order Now
                <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-colors duration-200"
              >
                <Play size={18} />
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-blue-100/70 text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Waves size={18} className="text-cyan-300" />
                Studio-level clarity
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-purple-300" />
                Accent-aware transcription
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={18} className="text-blue-300" />
                Instant insights
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-600/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-[2px]  shadow-2xl shadow-blue-800/30">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0f1f45] to-[#0b162f]">
              <img
                src="https://imgur.com/aB4huPl.jpg"
                alt="Mirabilis recorder hardware"
                className="w-full h-[380px] object-contain opacity-85 "
                onError={(e) => {
                  // Fallback to png if jpg fails
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('.jpg')) {
                    target.src = 'https://imgur.com/aB4huPl.png';
                  }
                }}
              />

                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-8 top-10 h-16 w-16 rounded-full bg-cyan-400/30 blur-2xl" />
                  <div className="absolute right-10 bottom-12 h-24 w-24 rounded-full bg-purple-500/25 blur-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.22),transparent_40%)]" />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-cyan-200/25 blur-3xl" />
                  <div className="absolute inset-x-12 bottom-8 flex justify-center gap-6 opacity-80">
                    {[...Array(6)].map((_, idx) => (
                      <span
                        key={idx}
                        className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-200/70 via-cyan-200/60 to-purple-200/70 blur-[1px] animate-pulse"
                        style={{ animationDelay: `${idx * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
