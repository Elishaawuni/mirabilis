import {
  Briefcase,
  GraduationCap,
  Scale,
  BookOpen,
  ClipboardList,
  Home,
  HeartPulse,
  Globe2,
  Clapperboard,
} from 'lucide-react';

const industries = [
  { icon: Briefcase, label: 'Business leaders & Executives ' },
  { icon: GraduationCap, label: 'Lecturers, researchers & Students' },
  { icon: Scale, label: 'Lawyers & Legal Professionals' },
  { icon: BookOpen, label: 'Policy and governance professionals' },
  { icon: ClipboardList, label: 'Consultants & Strategists' },
  { icon: Home, label: 'Entrepreneurs & Innovators' },
  { icon: HeartPulse, label: 'Healthcare & Public Health' },
  { icon: Globe2, label: 'NGOs & Development Workers' },
  { icon: Clapperboard, label: 'Creatives & Media Teams' },
];

export default function Industries() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/40 via-white to-purple-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-8 flex justify-center">
            <img
              src="https://imgur.com/FvV9aIv.jpg"
              alt="Industries"
              className="max-w-full h-auto rounded-lg object-contain"
              style={{ maxHeight: '350px' }}
              onError={(e) => {
                // Fallback to png if jpg fails
                const target = e.target as HTMLImageElement;
                if (target.src.includes('.jpg')) {
                  target.src = 'https://imgur.com/FvV9aIv.png';
                }
              }}
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Built for Every Professional</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mirabilis adapts to the way you speak, work, and deliver results—across every professional context.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-blue-100/70 bg-white/80 backdrop-blur-sm hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-100/50 via-white to-purple-100/50"
                  style={{ zIndex: -1 }}
                />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
                    <Icon size={22} />
                  </div>
                  <p className="font-semibold text-slate-900">{industry.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-slate-600">
        If your work involves consequence, Mirabilis belongs with you.
        </div>
      </div>
    </section>
  );
}
