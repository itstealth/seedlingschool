import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Seedling Group of Schools",
  description:
    "Official privacy policy of Seedling School. Learn how we collect, use, and protect your data when using our mobile application and digital services.",
  keywords:
    "Seedling School Privacy Policy, Data Protection, School App Privacy, Device ID Usage, Location Tracking Policy",
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for the School App is managed with the help of standard privacy policy frameworks.
        </p>
        <p>
          We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
        </p>
        <p>
          This Privacy Policy applies to the mobile application and digital services operated by Seedling School.
        </p>
      </div>
    ),
  },
  {
    id: "device-id",
    title: "Usage Device ID for Mobile App",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">Our app may collect device IDs for the following purposes:</p>
        <ul className="list-none space-y-3">
          {[
            { label: "Analytics", text: "To understand app usage and improve performance" },
            { label: "App Functionality", text: "To ensure smooth operation of core features" },
            { label: "Security", text: "To prevent misuse, fraud, and illegal activities" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span className="text-slate-600">
                <strong className="text-slate-900 font-semibold">{item.label}:</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 mt-4">
          We may share this data with trusted third-party partners only for the purposes mentioned above. All data is encrypted in transit to ensure user privacy and security.
        </p>
        <p className="text-slate-600">
          Users can request deletion of their data by contacting us at the email provided below.
        </p>
      </div>
    ),
  },
  {
    id: "location",
    title: "Usage of Location",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          Our school ERP solutions may include real-time location tracking, particularly for school transportation services. By enabling background location services, the app provides accurate updates of school bus locations, helping enhance student safety and operational efficiency.
        </p>
        <p>
          Location data is used strictly for safety, tracking, and operational purposes and is not shared for commercial use.
        </p>
      </div>
    ),
  },
  {
    id: "usage-data",
    title: "Usage Data",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">
          We may collect information that your browser or device sends whenever you access our Service ("Usage Data"). This may include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {[
            "Internet Protocol (IP) address",
            "Browser type and version",
            "Pages visited within the app or website",
            "Time and date of access",
            "Time spent on specific features",
            "Mobile device type & OS",
            "Unique device identifiers",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-sm">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "Tracking & Cookies Data",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          We use cookies and similar tracking technologies to track activity on our Service and store certain information.
          Cookies are small data files containing anonymous identifiers sent to your device.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-sm text-blue-800">
            You may choose to refuse cookies through your browser settings; however, some portions of the Service may not function properly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { tag: "Session Cookies", desc: "To operate the Service" },
            { tag: "Preference Cookies", desc: "To remember settings" },
            { tag: "Security Cookies", desc: "To enhance protection" },
          ].map((cookie, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors group">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">{cookie.tag}</div>
              <div className="text-slate-600 text-sm">{cookie.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Data",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 mb-4">Seedling School uses collected data for the following purposes:</p>
        <div className="space-y-2">
          {[
            "To provide and maintain the Service",
            "To notify users about updates or changes",
            "To enable interactive features",
            "To provide customer support",
            "To improve app functionality and user experience",
            "To monitor usage and performance",
            "To detect, prevent, and resolve technical issues",
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0 text-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {point}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "transfer",
    title: "Transfer of Data",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          Your information, including Personal Data, may be transferred to and maintained on servers located outside your state or country, where data protection laws may differ.
        </p>
        <p>
          If you are located outside India and choose to provide information, you consent to the transfer and processing of your data in India.
        </p>
        <p className="font-medium text-slate-900">
          Seedling School ensures that adequate security measures are in place to protect your data during such transfers.
        </p>
      </div>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure of Data",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Legal Requirements</span>
        </div>
        <p className="text-slate-600">Seedling School may disclose your Personal Data if required to:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
          {[
            "Comply with legal obligations",
            "Protect the rights or property of the school",
            "Prevent or investigate wrongdoing",
            "Ensure the safety of users or the public",
            "Protect against legal liability",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-700 text-sm">
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "security",
    title: "Security of Data",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          The security of your data is important to us. While we use commercially acceptable measures to protect Personal Data, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </div>
    ),
  },
  {
    id: "service-providers",
    title: "Service Providers & Analytics",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-slate-600">We may engage third-party companies or individuals ("Service Providers") to:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 marker:text-blue-500">
            <li>Facilitate the Service</li>
            <li>Provide services on our behalf</li>
            <li>Assist in analyzing Service usage</li>
          </ul>
          <p className="text-sm italic text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
            These third parties are granted access to Personal Data only to perform assigned tasks and are contractually obligated to protect confidentiality.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h4 className="text-lg font-semibold text-slate-900 mb-3">Google Analytics</h4>
          <p className="text-slate-600 mb-4">
            Google Analytics is a web analytics service provided by Google Inc. Google uses collected data to track and monitor usage of the Service. This information may be shared with other Google services.
          </p>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            Review Google’s Privacy Policy
            <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "links",
    title: "Links to Other Sites",
    content: (
      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
        <p className="text-slate-600 leading-relaxed">
          Our Service may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. Users are advised to review the privacy policies of any external sites they visit.
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    title: "Changes to Policy",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          We may update this Privacy Policy from time to time. Updates will be posted on this page and, where appropriate, notified via email or app notifications.
        </p>
        <p className="text-slate-900 font-medium">Changes become effective once published.</p>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-slate-600">If you have any questions regarding this Privacy Policy, please contact us:</p>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium uppercase">Email</div>
              <a href="mailto:seedlingacademy@hotmail.com" className="text-blue-600 font-medium">seedlingacademy@hotmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium uppercase">Website</div>
              <a href="https://seedlingschools.com/" target="_blank" className="text-slate-900 font-medium">seedlingschools.com</a>
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium uppercase">Contact No</div>
              <a href="tel:01413623000" className="text-slate-900 font-medium">0141-3623000</a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F3F2] font-sans selection:bg-[#A41546]/20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#175190] via-[#1a5fa8] to-[#896B85] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#A41546] rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-8 right-0 w-96 h-96 bg-[#175190] rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A41546] text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#A41546]/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            Compliance Policy
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Privacy Policy
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Your privacy is our priority. This document outlines how Seedling School handles data 
            with transparency, security, and integrity across all our digital platforms.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-2 bg-white p-8 rounded-[2rem] border border-[#D6D1CF]/50 shadow-xl shadow-black/5 hidden lg:block overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#175190]" />
              <h3 className="text-xs font-bold text-[#175190] uppercase tracking-[0.2em] mb-8">
                Table of Contents
              </h3>
              <nav className="space-y-1.5 relative z-10">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#896B85] hover:text-[#175190] hover:bg-[#F0F4F9] transition-all duration-300"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Scalable Content Sections */}
          <main className="lg:w-3/4 space-y-12 pb-20">
            {sections.map((section, idx) => (
              <section 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-32 group"
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden border border-[#D6D1CF]/50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="bg-[#175190] p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A41546] flex items-center justify-center text-white font-bold text-sm shadow-xl shadow-black/20">
                      {idx + 1}
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-wide">
                      {section.title}
                    </h2>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="prose prose-slate max-w-none">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#175190] py-16 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#A41546] blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2 shadow-xl">
              <div className="w-full h-full bg-[#175190] rounded-xl flex items-center justify-center text-white font-bold uppercase tracking-widest text-xs">
                S
              </div>
            </div>
            <div>
              <span className="block font-bold text-lg text-white">Seedling Group of Schools</span>
              <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Compliance Unit</span>
            </div>
          </div>
          <div className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} | Mandatory Disclosure Compliant.
          </div>
          <div className="flex gap-8">
            <a href="/terms-and-conditions" className="text-sm font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
            <a href="#introduction" className="text-sm font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors">Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
