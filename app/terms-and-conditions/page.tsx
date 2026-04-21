"use client";

import React, { useState, useEffect } from "react";
// import { Playfair_Display, DM_Sans } from "next/font/google"; // Assuming standard setup, but will use tailwind arbitrary for now to be safe

/* 
  Note: In a standard Next.js project, you would define fonts in layout.tsx or here.
  For this standalone component, I will use Tailwind's arbitrary values or local class mappings
  to ensure the premium typography requested is applied.
*/

const sections = [
  { id: "s1", title: "1. Website Information Disclaimer", content: "Seedling Group of Schools makes every effort to ensure that the information provided on this website is accurate and up to date. However, the School gives no warranty or guarantee regarding the accuracy, completeness, or suitability of the information for any specific purpose. The content available on this website does not constitute legal, professional, or educational advice.", callout: "All implied warranties and conditions are excluded to the fullest extent permitted by law. The School shall not be liable for any direct or indirect loss, damage, or inconvenience arising from the use of, or reliance upon, the information contained on this website, except in cases of death or personal injury caused by negligence." },
  { id: "s2", title: "2. Third-Party Links", content: "This website may contain links to third-party websites for convenience and informational purposes only. Seedling Group of Schools has no control over the content of such websites and accepts no responsibility or liability for their content, availability, or practices." },
  { id: "s3", title: "3. Changes to Terms", content: "The School reserves the right to modify, amend, update, or remove any part of these Terms and Conditions at any time without prior notice. By continuing to use the website, you agree to be bound by the current version of these terms. Users are advised to review this page periodically." },
  { id: "s4", title: "4. Acceptable Use", content: "You must not use this website or any of its interactive features to:", list: ["Commit or encourage unlawful activities", "Misrepresent your identity or provide false information", "Hack, attempt to hack, or interfere with the website or its systems", "Store or misuse personal data obtained from the website", "Upload, post, or transmit obscene, offensive, defamatory, or unlawful material", "Introduce viruses, malware, or any harmful data that may damage the website or its systems"] },
  { id: "s5", title: "5. Website Availability", content: "While Seedling Group of Schools endeavors to keep the website accessible at all times, it reserves the right to suspend, restrict, or withdraw access to the website (in whole or in part) at any time without notice for operational, security, or administrative reasons." },
  { id: "s6", title: "6. Disclaimer", subtitle: "Changes to Academic Information", content: "The School strives to ensure that all academic, course, admission, facility, and fee-related information published on the website is accurate at the time of publication. However, changes may become necessary due to academic, regulatory, staffing, or operational requirements. The School will make reasonable efforts to inform stakeholders of any significant changes. Users are advised to regularly check the website or contact the School directly for the latest information." },
  { id: "s7", title: "7. No Liability to Third Parties", content: "Any dealings or communications between Seedling Group of Schools and students or prospective students do not create a legal or contractual relationship with parents, guardians, sponsors, or other third parties. Use of the online prospectus and website content is subject to these Terms and Conditions." },
  { id: "s8", title: "8. Copyright", content: "All content on this website, including text, images, logos, and design, is protected by copyright and other intellectual property laws. Content may be viewed, printed, or downloaded solely for personal and non-commercial use. No material may be copied, modified, reproduced, published, or distributed without prior written permission from Seedling Group of Schools.", callout: "The name, logo, and trademarks of Seedling Group of Schools may not be used without express written authorization from the School." },
  { id: "s9", title: "9. Complaints", content: "Any complaints regarding material published on the School's website or references to the School on external websites will be reviewed and addressed as promptly as reasonably possible." },
  { id: "s10", title: "10. Governing Law", content: "These Terms and Conditions constitute the entire agreement regarding the use of this website. They shall be governed by and interpreted in accordance with the laws of India. Users submit to the non-exclusive jurisdiction of the courts of India." },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setProgress(pct);

      let current = "";
      sections.forEach((sec) => {
        const element = document.getElementById(sec.id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-[#F5F3F2] text-[#222] font-sans selection:bg-[#A41546]/20 scroll-smooth">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#175190] via-[#1a5fa8] to-[#896B85] z-10">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-24 text-center md:text-left">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
              <a href="/" className="hover:text-white transition-colors">Seedling Group of Schools</a>
              <span className="opacity-50">›</span>
              <span className="text-white">Terms & Conditions</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A41546] text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#A41546]/30">
              Legal Document
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 flex flex-col md:flex-row md:items-center md:gap-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none flex-shrink-0 uppercase">
              Terms <span className="block text-[#D6D1CF]/40">& Conditions</span>
            </h1>
            <div className="mt-8 md:mt-0 md:border-l md:border-white/10 md:pl-12 max-w-xl">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed antialiased font-light">
                By accessing this website, you accept and agree to be bound by these Terms and Conditions. Discontinue use immediately if you disagree.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Layout: Sidebar + Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar TOC */}
          <aside className="lg:w-80 flex-shrink-0 relative z-20">
            <div className="lg:sticky lg:top-10 space-y-6">
              
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full lg:hidden flex items-center justify-between bg-white border border-[#D6D1CF] rounded-2xl px-6 py-5 font-bold text-[#175190] shadow-xl"
              >
                <span className="flex items-center gap-2 uppercase tracking-widest text-xs">
                  Table of Contents
                </span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div className={`${isTocOpen ? 'block' : 'hidden'} lg:block animate-in fade-in zoom-in-95 lg:animate-none`}>
                <div className="bg-white border border-[#D6D1CF]/50 rounded-[2rem] p-8 shadow-2xl shadow-black/5">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-6 rounded-full bg-[#175190]"></div>
                    <span className="font-bold text-xs text-[#175190] uppercase tracking-[0.2em]">Navigation</span>
                  </div>

                  <nav className="space-y-1">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`group flex items-center gap-3 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl px-4 ${
                          activeSection === sec.id 
                            ? 'text-white bg-[#175190] shadow-lg shadow-[#175190]/20' 
                            : 'text-[#896B85] hover:text-[#175190] hover:bg-[#F0F4F9]'
                        }`}
                      >
                        <span className="line-clamp-1">{sec.title}</span>
                      </a>
                    ))}
                  </nav>

                  {/* Progress Indicator */}
                  <div className="mt-10 pt-8 border-t border-[#F5F3F2]">
                    <div className="flex items-center justify-between text-[10px] font-bold text-[#175190] uppercase tracking-widest mb-3">
                      <span>Read Progress</span>
                      <span className="text-[#A41546]">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F5F3F2] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#175190] to-[#A41546] rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="mt-6 bg-[#A41546] rounded-[2rem] p-8 text-white shadow-xl shadow-[#A41546]/20">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6">Legal Notice</div>
                  <div className="space-y-4 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
                      </div>
                      Laws of India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Sections */}
          <main className="flex-1 min-w-0 space-y-12 lg:space-y-16 relative z-10">
            {sections.map((sec, idx) => (
              <section 
                key={sec.id} 
                id={sec.id} 
                className="scroll-mt-32"
              >
                <div className="bg-white border border-[#D6D1CF]/50 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-500">
                  <div className="bg-[#175190] p-6 lg:px-12 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#A41546] flex items-center justify-center text-white font-bold text-lg shadow-xl">
                      {idx + 1}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">
                      {sec.title.split('. ')[1] || sec.title}
                    </h2>
                  </div>

                  <div className="p-8 md:p-12 space-y-6">
                    {sec.subtitle && (
                      <h3 className="text-sm font-bold text-[#A41546] uppercase tracking-[0.3em]">
                        {sec.subtitle}
                      </h3>
                    )}

                    <p className="text-[#444] leading-[1.8] text-base md:text-lg font-medium opacity-90">
                      {sec.content}
                    </p>

                    {sec.callout && (
                      <div className="p-6 bg-[#F5F3F2] border-l-4 border-[#A41546] rounded-r-2xl font-bold text-[#175190] text-sm md:text-base leading-relaxed tracking-wide">
                        {sec.callout}
                      </div>
                    )}

                    {sec.list && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sec.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F4F9]/50 border border-[#D6D1CF]/20 text-[#222] font-semibold text-sm">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[#175190]"></div>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}

            {/* Bottom Call to Action */}
            <div className="mt-16 p-12 bg-[#175190] rounded-[3rem] text-center text-white space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A41546] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <p className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter">
                  Agreement Acknowledged
                </p>
                <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed font-medium">
                  By continuing to use this website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                </p>
                <div className="pt-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#D6D1CF]/30">
                  © Seedling Group of Schools | Compliance Division
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#175190] border-t border-white/5 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="font-black text-2xl text-white uppercase tracking-tighter italic">Seedling Schools</div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            <a href="/privacy-policy" className="hover:text-white transition-all">Privacy</a>
            <span className="opacity-10">/</span>
            <a href="/contact" className="hover:text-white transition-all">Contact</a>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A41546]">Jaipur • Rajasthan • India</div>
        </div>
      </footer>
    </div>
  );
}
