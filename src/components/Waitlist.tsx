import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdlnGJavd_BjDti2tbqhW8gRcSxIP_wrzagPvLG7R2RkyF38g/viewform?embedded=true';

export default function Waitlist() {
  const showWarning = !GOOGLE_FORM_URL;

  return (
    <section id="waitlist" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Join Our Waitlist ( Early Access & Pre-Order Priority )
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We are opening early access to a limited group of professionals who want priority preordering, launch updates, and first availability of Mirabilis AI Recorder.
          Sign up below to secure your place
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          {showWarning && (
            <div className="bg-amber-50 border-b border-amber-200 p-6 flex items-start gap-4">
              <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  Google Form not configured
                </h3>
                <p className="text-sm text-amber-800">
                  To add your Google Form, replace the <code className="bg-amber-100 px-2 py-1 rounded text-xs">GOOGLE_FORM_URL</code> in the Waitlist component with your form's embed iframe src attribute.
                </p>
              </div>
            </div>
          )}

          <div className="p-8 sm:p-12">
            {GOOGLE_FORM_URL ? (
              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="700"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Waitlist Form"
                className="rounded-lg"
              >
                Loading form...
              </iframe>
            ) : (
              <div className="space-y-6">
                <div className="h-12 bg-slate-200 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-slate-200 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-slate-200 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-slate-200 rounded-lg animate-pulse w-1/3"></div>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-600 text-center">
                    Placeholder for your Google Form. The form will appear here once you add your embed link.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            We respect your privacy. No spam, just important updates about our launch.
          </p>
        </div>
      </div>
    </section>
  );
}
