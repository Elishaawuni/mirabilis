import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Prince Kofi Mensah',
    title: 'Researcher and Entrepreneur',
    company: 'TechCorp AI',
    image: 'https://i.imgur.com/seGNVQ7.jpg',
    content: 'For researchers thinking about accurate recording and transcription tool, and thematic analysis, Mirabilis AI Recorder Companion is that tool.  For efficiency and effectiveness in qualitative text data, trust Mirabilis AI Recorder Companion to do a perfect job.',
    rating: 5,
  },
  {
    name: 'Mr. Cyril Kobina Acquah',
    title: 'Finance Manager',
    company: 'Trust Hands Auto Centre',
    image: 'https://i.imgur.com/v0CwWE4.jpg',
    content: " The Mirabilis Solution: A Game-Changer.I started using the Mirabilis AI Recorder on November 24th, and the immediate impact on productivity was genuinely surprising. 100% Accuracy in a Technical Environment: Mirabilis's AI was able to easily transcribe complex technical discussions and industry-specific jargon with remarkable accuracy—a huge advantage in the automotive business.",
    rating: 5,
  },
  {
    name: 'Emily Zhang',
    title: 'Director of Infrastructure',
    company: 'CloudNative Inc',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Integration was seamless, and the performance has exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Roberts',
    title: 'Head of Research',
    company: 'QuantumLab',
    image: 'https://images.pexels.com/photos/1181272/pexels-photo-1181272.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The breakthrough we needed for our quantum simulation research. Absolutely transformative.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our customers are achieving with Mirabilis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-slate-200 bg-white p-8 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: -1 }}></div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-emerald-400 text-emerald-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-600">{testimonial.title}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Join leading organizations transforming their AI infrastructure
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-200">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
