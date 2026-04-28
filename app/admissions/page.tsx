"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children, delay = 0, className = "",
}: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TAG LABEL — same as Academics page
───────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-[#E8E3DA] rounded-2xl overflow-hidden transition-all duration-300 ${open ? "shadow-md" : "shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left bg-white hover:bg-emerald-50 transition-colors duration-200"
      >
        <span className="display font-semibold text-[#1C1C1E] text-lg leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 ${open ? "border-emerald-600 bg-emerald-600 text-white rotate-45" : "border-[#DDD] text-[#999]"} flex items-center justify-center transition-all duration-300 text-lg font-light`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-64" : "max-h-0"}`}>
        <p className="px-7 pb-6 text-[#555] leading-[1.9] text-sm bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const schools = [
  "Seedling Public School (CBSE) — Jawahar Nagar",
  "Seedling International Academy (Cambridge) — Jawahar Nagar",
  "Seedling Modern High School (CBSE) — Durgapura",
  "Seedling Modern International Academy (Cambridge) — Durgapura",
  "Seedling Wonderland Kids League — Jawahar Nagar",
  "Seedling Wonderland Kids League — Durgapura",
];

const whyUs = [
  { icon: "🏅", title: "100% Board Results", desc: "Consistent 100% results in both CBSE and Cambridge board examinations — every year, across all campuses." },
  { icon: "📋", title: "NEP Aligned", desc: "Curriculum thoughtfully designed to align with the National Education Policy for a future-ready education." },
  { icon: "🌍", title: "Dual Board Offering", desc: "Choose from CBSE or Cambridge IGCSE — the same Seedling values, globally recognised credentials." },
  { icon: "👨‍👩‍👧", title: "15:1 Teacher Ratio", desc: "Small class sizes ensure every child receives personalised attention, guidance, and genuine care." },
  { icon: "🏛️", title: "State-of-the-Art Facilities", desc: "Modern classrooms, science labs, digital whiteboards, outdoor spaces — all designed for deep learning." },
  { icon: "❤️", title: "Holistic Well-being", desc: "Academic growth, emotional intelligence, sports, arts — we nurture the complete child, not just the student." },
];

const steps = [
  {
    num: "01",
    title: "Visit the Official Website",
    desc: "Go to seedlingschools.com and click on the Admissions tab. Select your preferred school — CBSE or Cambridge, Jawahar Nagar or Durgapura.",
    icon: "🌐",
  },
  {
    num: "02",
    title: "Fill the Online Application Form",
    desc: "Complete the Online Form with your child's details, preferred class, and contact information. Submit the non-refundable application amount along with the form.",
    icon: "📝",
  },
  {
    num: "03",
    title: "Admission Team Connects",
    desc: "Our Admissions Counsellor will contact you to explain the complete process, answer your questions, and schedule the next steps. Counselling is available both online and offline.",
    icon: "📞",
  },
  {
    num: "04",
    title: "Interaction & Assessment",
    desc: "A friendly interaction/assessment is conducted for the child (age-appropriate). This is not a high-stakes test — it helps us understand your child's learning style and place them correctly.",
    icon: "🤝",
  },
  {
    num: "05",
    title: "Document Submission",
    desc: "Submit the required documents at the school office. Our team will verify and process everything smoothly and guide you at every step.",
    icon: "📂",
  },
  {
    num: "06",
    title: "Confirmation & Welcome",
    desc: "Receive your admission confirmation. Pay the fee as per the schedule and collect the joining kit. Welcome to the Seedling Family!",
    icon: "🎉",
  },
];

const documents = [
  { doc: "Transfer Certificate (TC)", note: "From previous school" },
  { doc: "Birth Certificate", note: "Original + photocopy" },
  { doc: "Residence Proof", note: "Aadhar / utility bill" },
  { doc: "Child's Photograph", note: "Passport size, recent" },
  { doc: "Parents' / Guardian's Photograph", note: "Passport size" },
  { doc: "Marksheet / Report Card", note: "If applicable (Class I+)" },
  { doc: "Medical Reports", note: "If any" },
  { doc: "Character Certificate", note: "From previous school" },
  { doc: "Aadhar Card — Child", note: "Original + photocopy" },
  { doc: "Aadhar Card — Parents", note: "Original + photocopy" },
  { doc: "Achievement Certificates", note: "Sports / academics / arts" },
  { doc: "Category Verification Certificate", note: "If applicable" },
];

const feeRows = [
  { school: "Seedling Public School (CBSE)", level: "Nursery – Class XII", annual: "₹39,500", admission: "On enquiry", transport: "On enquiry", note: "" },
  { school: "Seedling Modern High School (CBSE)", level: "Nursery – Class XII", annual: "₹39,500", admission: "On enquiry", transport: "On enquiry", note: "" },
  { school: "Seedling International Academy (Cambridge)", level: "Play Group – IGCSE", annual: "₹40,000+", admission: "₹8,540", transport: "On enquiry", note: "Others: ₹7,700" },
  { school: "Seedling Modern International Academy (Cambridge)", level: "Play Group – IGCSE", annual: "₹60,000+", admission: "On enquiry", transport: "On enquiry", note: "" },
  { school: "Seedling Wonderland Kids League", level: "Play Group – UKG", annual: "On enquiry", admission: "On enquiry", transport: "On enquiry", note: "Both campuses" },
];

const transport = [
  { icon: "🚌", title: "Fleet Coverage", desc: "GPS-enabled buses covering all major residential areas across Jaipur — Jawahar Nagar, Durgapura, and surrounding localities." },
  { icon: "📍", title: "Route Planning", desc: "Dedicated routes planned for both Jawahar Nagar and Durgapura campuses. Contact the school office for your nearest pickup point and route details." },
  { icon: "🔒", title: "Safety First", desc: "All buses are equipped with CCTV cameras on premises. Trained drivers and attendants escort students on every route, every day." },
  { icon: "📲", title: "Real-Time Updates", desc: "Parents receive timely communication about bus timings and any changes via the school's communication channels and ERP system." },
];

const faqs = [
  { q: "What boards do Seedling Schools follow?", a: "Seedling Group operates under two boards — CBSE (Central Board of Secondary Education) at Seedling Public School and Seedling Modern High School, and Cambridge Assessment International Education (CAIE) at Seedling International Academy and Seedling Modern International Academy. Early years are offered through Seedling Wonderland Kids League at both campuses." },
  { q: "What is the age criterion for admission?", a: "The minimum age for Day School (Playgroup / Nursery) is 3 years as of 31st March of the admission year. Age eligibility for each class follows CBSE / Cambridge board norms. For exact age requirements per class, please contact the school's admission counsellor." },
  { q: "Is there an admission test?", a: "An age-appropriate interaction or friendly assessment may be conducted for the child. This is not a high-pressure entrance exam — it helps the school understand the child's learning style and place them in the right environment." },
  { q: "Can I apply online?", a: "Yes. Visit seedlingschools.com, click on Admissions → Online Form. Fill in the required details, select your preferred school, and submit. Our admission team will reach out to guide you through the next steps." },
  { q: "Are scholarships available?", a: "Yes. Seedling Schools offers merit scholarships for academically outstanding students and for students with achievements in sports. Early bird incentives are also available for registrations completed early in the admission season. Contact the school for current scholarship criteria." },
  { q: "Is transportation available?", a: "Yes. Transportation is available for students across both campuses — Jawahar Nagar and Durgapura. GPS-enabled buses with trained attendants cover major routes across Jaipur. For route details and fees, contact the school office directly." },
  { q: "What is the Student-Teacher ratio?", a: "Seedling maintains a 15:1 student-to-teacher ratio, ensuring that every child receives personalised attention, mentoring, and academic support throughout their schooling journey." },
  { q: "Is re-admission done for Class XI?", a: "All successful students of Class X may apply for Class XI admission. Re-admission is processed through the school office. Students must apply on the prescribed form along with the non-refundable application amount." },
];

const campusLocations = [
  {
    name: "Jawahar Nagar Campus",
    address: "Sector-4, Park Lane, Jawahar Nagar, Jaipur, Rajasthan – 302004",
    phone: "+91 74130 12351",
    schools: ["Seedling Public School (CBSE)", "Seedling International Academy (Cambridge)", "Seedling Wonderland Kids League"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3!2d75.803!3d26.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db174e7a1a1a1%3A0x1!2sSeedling+Public+School%2C+Jawahar+Nagar!5e0!3m2!1sen!2sin!4v1600000000000",
  },
  {
    name: "Durgapura Campus",
    address: "Ashok Marg, Mahaveer Nagar-II, Durgapura, Jaipur, Rajasthan – 302018",
    phone: "+91 95877 72837",
    schools: ["Seedling Modern High School (CBSE)", "Seedling Modern International Academy (Cambridge)", "Seedling Wonderland Kids League"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.784!3d26.894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db174e7a1a1a1%3A0x2!2sSeedling+Modern+High+School%2C+Durgapura!5e0!3m2!1sen!2sin!4v1600000000001",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function AdmissionsPage() {
  const [sticky, setSticky] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", school: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FAFAF7] text-[#1C1C1E] overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .display { font-family: 'Cormorant Garamond', serif; }
        .duration-400 { transition-duration: 400ms; }
      `}</style>

      {/* ── STICKY CTA BAR ── */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${sticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
        <div className="bg-white border-t border-[#E8E3DA] shadow-2xl px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="display font-semibold text-lg text-[#1C1C1E]">Admissions Open 2026–27</p>
              <p className="text-[#777] text-xs mt-0.5">Seats are limited — early bird incentives available</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="#enquire" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg">
                Apply Now
              </a>
              <a href="tel:+917413012351" className="border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1900&q=85"
          alt="Admissions at Seedling"
          className="absolute inset-0 w-full h-full object-cover object-top scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Left — headline */}
          <div>
            <Reveal>
              <p className="display text-emerald-400 text-xl italic tracking-widest mb-4 uppercase">
                Admissions Open · 2026–27
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display text-white font-light leading-[1.05] text-6xl md:text-7xl lg:text-[5.5rem] mb-6">
                Begin Your<br />
                <em className="font-semibold">Seedling</em><br />
                Journey.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                Seedling Group of Schools — 5 schools, 2 campuses, CBSE & Cambridge boards. Prioritising student well-being and community interests since 1992.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="flex gap-4 flex-wrap">
                <a href="#process" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/30">
                  How to Apply
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#enquire" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-[#1C1C1E] px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300">
                  Enquire Now
                </a>
              </div>
            </Reveal>

            {/* trust micro-badges */}
            <Reveal delay={480}>
              <div className="flex gap-4 flex-wrap mt-10">
                {["100% Board Results", "Est. 1992", "20,000+ Students", "CBSE & Cambridge"].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full backdrop-blur-sm">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — enquiry form */}
          <Reveal delay={200} className="hidden md:block">
            <div id="enquire" className="bg-white rounded-3xl shadow-2xl p-8 border border-[#F0EDE8]">
              <div className="mb-6">
                <p className="display text-2xl font-semibold text-[#1C1C1E] mb-1">Enquire Now</p>
                <p className="text-[#777] text-sm">Our team will respond within 24 hours.</p>
              </div>
              {submitted ? (
                <div className="text-center py-8">
                  <span className="text-5xl block mb-4">✅</span>
                  <p className="display text-2xl font-semibold text-emerald-700 mb-2">Thank You!</p>
                  <p className="text-[#555] text-sm leading-relaxed">Our admissions team will contact you within 24 hours. Welcome to the Seedling family!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Parent Name *</label>
                      <input required type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Phone *</label>
                      <input required type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Email</label>
                    <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Select School *</label>
                    <select required value={formData.school} onChange={e => setFormData({ ...formData, school: e.target.value })}
                      className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 bg-white">
                      <option value="">Choose a school…</option>
                      {schools.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Message</label>
                    <textarea placeholder="Any specific queries?" rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-semibold tracking-wide text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200">
                    Send Enquiry →
                  </button>
                  <p className="text-[#AAA] text-xs text-center">We typically respond within 24 hours · No spam, ever</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* STATS BAND — matches About page exactly */}
      <section className="bg-[#2D6A4F] text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/20">
            {[
              { value: "20,000+", label: "Students" },
              { value: "15:1", label: "Teacher Ratio" },
              { value: "5,000+", label: "Alumni" },
              { value: "100%", label: "Board Results" },
              { value: "50+", label: "Nations" },
              { value: "1992", label: "Est." },
            ].map((s) => (
              <div key={s.label} className="px-4 py-4 text-center">
                <p className="display text-3xl md:text-4xl font-semibold">{s.value}</p>
                <p className="text-white/60 text-xs mt-1 tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <Tag>Why Seedling</Tag>
          <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
            Six Reasons Parents<br />
            <em className="font-semibold">Choose Us</em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="group bg-white border border-[#E8E3DA] rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="text-4xl mb-5 block">{w.icon}</span>
                <h4 className="display text-xl font-semibold text-[#1C1C1E] mb-3">{w.title}</h4>
                <p className="text-[#666] text-sm leading-[1.9]">{w.desc}</p>
                <div className="mt-5 w-8 h-0.5 bg-emerald-400 group-hover:w-14 transition-all duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. ADMISSION PROCESS TIMELINE
      ══════════════════════════════════════════════════ */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <Tag>Admission Process</Tag>
            <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
              Six Simple Steps<br />
              <em className="font-semibold">to Join Us</em>
            </h2>
            <p className="text-[#666] mt-5 max-w-xl mx-auto leading-relaxed">
              We've made the admission process as clear and frictionless as possible. Our team is with you at every step.
            </p>
          </Reveal>

          {/* Vertical timeline */}
          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 md:-translate-x-px hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    {/* dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-emerald-600 rounded-full ring-4 ring-emerald-100 z-10 hidden sm:block" />

                    {/* card — left or right */}
                    <div className="md:w-5/12">
                      <div className={`bg-[#FAFAF7] border border-[#E8E3DA] rounded-2xl p-7 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center text-2xl">
                              {step.icon}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="display text-4xl font-light text-emerald-100 leading-none">{step.num}</span>
                              <h3 className="display text-xl font-semibold text-[#1C1C1E]">{step.title}</h3>
                            </div>
                            <p className="text-[#666] text-sm leading-[1.9]">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* spacer */}
                    <div className="md:w-2/12" />
                    <div className="md:w-5/12" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* inline CTA after process */}
          <Reveal className="mt-20 text-center">
            <div className="bg-emerald-600 rounded-3xl p-10 text-white">
              <p className="display italic text-xl text-emerald-200 mb-2">Ready to take the first step?</p>
              <h3 className="display text-4xl font-semibold mb-6">Start Your Application Today</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://seedlingschools.com/admission-online.php" target="_blank" rel="noopener noreferrer"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg">
                  Fill Online Form
                </a>
                <a href="tel:+917413012351" className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300">
                  Call +91 74130 12351
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. DOCUMENTS REQUIRED
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <Tag>Eligibility & Requirements</Tag>
            <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E] mb-6">
              Documents<br />
              <em className="font-semibold">Required</em>
            </h2>
            <p className="text-[#666] leading-[1.9] mb-8">
              Please keep the following documents ready at the time of admission. For Class I and above, bring the marksheet or report card from the previous school. Original documents must be presented for verification.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <p className="display text-lg font-semibold text-emerald-700 mb-3">📌 Important Notes</p>
              <ul className="space-y-2 text-sm text-[#555] leading-relaxed">
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">•</span>All applications must be submitted on the prescribed form with a non-refundable amount.</li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">•</span>Re-admission is done in Class XI. All Class X students must re-apply.</li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">•</span>Minimum age for Nursery/Playgroup: 3 years as of 31st March of the admission year.</li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">•</span>Parent counselling is available both online and offline — we're here to help.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-3">
              {documents.map((d, i) => (
                <div key={d.doc}
                  className="flex items-center gap-4 bg-white border border-[#E8E3DA] rounded-xl px-5 py-4 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200 group">
                  <div className="w-8 h-8 bg-emerald-100 group-hover:bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1C1C1E] text-sm font-semibold">{d.doc}</p>
                    <p className="text-[#999] text-xs mt-0.5">{d.note}</p>
                  </div>
                  <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-medium flex-shrink-0">Required</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. FEE STRUCTURE
      ══════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Tag>Fee Structure</Tag>
            <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
              Transparent &<br />
              <em className="font-semibold">Straightforward</em>
            </h2>
            <p className="text-[#666] mt-5 max-w-lg mx-auto leading-relaxed">
              Indicative fee structure for 2025–26. Current fees may vary — contact the school office for the latest confirmed schedule. Early bird discounts and merit scholarships are available.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[#E8E3DA] shadow-md">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="bg-[#2D6A4F] text-white">
                    <th className="text-left px-6 py-5 font-semibold tracking-wide display text-base">School</th>
                    <th className="text-left px-5 py-5 font-semibold tracking-wide">Level</th>
                    <th className="text-center px-5 py-5 font-semibold tracking-wide">Annual Fee</th>
                    <th className="text-center px-5 py-5 font-semibold tracking-wide">Admission Fee</th>
                    <th className="text-center px-5 py-5 font-semibold tracking-wide">Transport</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, i) => (
                    <tr key={row.school}
                      className={`border-t border-[#F0EDE8] transition-colors duration-200 hover:bg-emerald-50 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]"}`}>
                      <td className="px-6 py-5">
                        <p className="font-semibold text-[#1C1C1E] leading-snug">{row.school}</p>
                        {row.note && <p className="text-emerald-600 text-xs mt-1">{row.note}</p>}
                      </td>
                      <td className="px-5 py-5 text-[#666]">{row.level}</td>
                      <td className="px-5 py-5 text-center">
                        <span className="display text-lg font-semibold text-emerald-700">{row.annual}</span>
                      </td>
                      <td className="px-5 py-5 text-center text-[#666]">{row.admission}</td>
                      <td className="px-5 py-5 text-center">
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-3 py-1 rounded-full font-medium">{row.transport}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#AAA] text-xs mt-4 text-center">
              * Fees are indicative and subject to revision. Contact the school office for the current, confirmed fee schedule. · Scholarships available for meritorious students.
            </p>
          </Reveal>

          {/* scholarship highlight */}
          <Reveal delay={100}>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                { icon: "🥇", title: "Merit Scholarships", desc: "Available for academically outstanding students across all schools. Contact the admissions office for eligibility criteria and application process." },
                { icon: "🏅", title: "Sports Scholarships", desc: "Exceptional athletes may be eligible for fee concessions. Seedling values sports performance at par with academic achievement." },
                { icon: "⏰", title: "Early Bird Incentive", desc: "Register early in the admission season to benefit from early bird incentives. Seats are limited — don't wait!" },
              ].map((s) => (
                <div key={s.title} className="bg-[#FAFAF7] border border-[#E8E3DA] rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h4 className="display text-xl font-semibold text-[#1C1C1E] mb-2">{s.title}</h4>
                  <p className="text-[#666] text-sm leading-[1.8]">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. TRANSPORT
      ══════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Tag>Transport Facility</Tag>
            <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
              Safe & Reliable<br />
              <em className="font-semibold">School Transport</em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {transport.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="bg-white border border-[#E8E3DA] rounded-2xl p-7 flex gap-5 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group">
                  <span className="text-4xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <h4 className="display text-xl font-semibold text-[#1C1C1E] mb-2">{t.title}</h4>
                    <p className="text-[#666] text-sm leading-[1.9]">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Campus Maps — tabbed */}
          <Reveal>
            <div className="bg-white border border-[#E8E3DA] rounded-3xl overflow-hidden shadow-md">
              {/* tab switcher */}
              <div className="flex border-b border-[#E8E3DA]">
                {campusLocations.map((campus, i) => (
                  <button key={campus.name} onClick={() => setActiveTab(i)}
                    className={`flex-1 px-6 py-5 text-sm font-semibold transition-all duration-200 text-left ${activeTab === i ? "bg-emerald-600 text-white" : "bg-white text-[#555] hover:bg-emerald-50"}`}>
                    <span className="block text-xs opacity-70 uppercase tracking-widest mb-0.5">Campus</span>
                    {campus.name}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2">
                {/* map iframe placeholder */}
                <div className="h-72 md:h-80 bg-[#EAF2EF] relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-6">
                    <span className="text-5xl">📍</span>
                    <p className="display text-2xl font-semibold text-[#2D6A4F]">{campusLocations[activeTab].name}</p>
                    <p className="text-[#555] text-sm leading-relaxed max-w-xs">{campusLocations[activeTab].address}</p>
                    <a href={`https://www.google.com/maps/search/${encodeURIComponent(campusLocations[activeTab].address)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-5 py-2.5 rounded-full font-semibold tracking-wide transition-all duration-200">
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>

                {/* campus info */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <p className="display text-2xl font-semibold text-[#1C1C1E] mb-5">{campusLocations[activeTab].name}</p>
                    <div className="space-y-4 mb-6">
                      <div className="flex gap-3">
                        <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">📍</span>
                        <p className="text-[#555] text-sm leading-relaxed">{campusLocations[activeTab].address}</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">📞</span>
                        <a href={`tel:${campusLocations[activeTab].phone}`} className="text-emerald-700 font-semibold text-sm hover:underline">
                          {campusLocations[activeTab].phone}
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#999] mb-3">Schools at this campus</p>
                      <div className="space-y-2">
                        {campusLocations[activeTab].schools.map(s => (
                          <div key={s} className="flex items-center gap-2 text-sm text-[#444]">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#F0EDE8] flex gap-3">
                    <a href={`tel:${campusLocations[activeTab].phone}`}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200">
                      Call Campus
                    </a>
                    <a href="#enquire"
                      className="flex-1 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200">
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. CAMPUS VISIT CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80"
          alt="Book a campus visit"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/90 via-[#1a4030]/80 to-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="display text-emerald-300 text-2xl italic mb-4">Experience Seedling Firsthand</p>
            <h2 className="display text-5xl md:text-7xl font-light leading-[1.05] mb-6">
              Book a<br />
              <em className="font-semibold">Campus Visit</em>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Walk through our campuses, meet our teachers, and feel the Seedling difference. Parent counselling is available both online and offline. Come feel the buzz.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+917413012351"
                className="inline-flex items-center gap-2 bg-white text-[#2D6A4F] hover:bg-emerald-50 px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-2xl">
                📞 Call to Book a Visit
              </a>
              <a href="#enquire"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300">
                Enquire Online
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                ["🏫", "In-Person", "Campus Tour"],
                ["💻", "Online", "Counselling"],
                ["📅", "Flexible", "Scheduling"],
                ["🆓", "Completely", "Free"],
              ].map(([icon, line1, line2]) => (
                <div key={line2} className="text-center">
                  <span className="text-3xl block mb-2">{icon}</span>
                  <p className="text-white/50 text-xs leading-[1.6]">{line1}<br />{line2}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <Tag>Common Questions</Tag>
          <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
            Parents Ask,<br />
            <em className="font-semibold">We Answer</em>
          </h2>
          <p className="text-[#666] mt-5 max-w-lg mx-auto leading-relaxed">
            Everything you need to know before making your decision. Can't find your answer? Call us directly.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <Reveal key={faq.q}>
              <FAQItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-[#777] text-sm mb-4">Still have questions? We'd love to talk.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:+917413012351" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg">
              📞 +91 74130 12351 (Jawahar Nagar)
            </a>
            <a href="tel:+919587772837" className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300">
              📞 +91 95877 72837 (Durgapura)
            </a>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-40 bg-[#1C1C1E] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&q=80"
          alt="Join Seedling"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E]/90 to-emerald-950/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="display text-emerald-400 text-xl italic mb-4">The Seedling Family Awaits</p>
            <h2 className="display text-6xl md:text-8xl font-light leading-[1.0] mb-6">
              Where Every<br />
              <em className="font-semibold text-emerald-400">Student</em><br />
              Matters.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Admissions are open for 2026–27. Seats are limited. Enrol your child today and give them the Seedling advantage — from Play Group to University.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://seedlingschools.com/admission-online.php" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:gap-4">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="tel:+917413012351"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-[#1C1C1E] px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300">
                Call Us Now
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {["🎓 CBSE & Cambridge", "🌿 Est. 1992", "📍 2 Campuses in Jaipur", "❤️ 20,000+ Students"].map((b) => (
                <span key={b} className="bg-white/8 border border-white/15 text-white/60 text-xs px-5 py-2 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
