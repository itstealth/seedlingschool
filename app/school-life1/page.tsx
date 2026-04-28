"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
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
  children, delay = 0, className = "", from = "bottom",
}: {
  children: React.ReactNode; delay?: number; className?: string; from?: "bottom" | "left" | "right";
}) {
  const { ref, visible } = useReveal();
  const translate = from === "left" ? "-translate-x-10" : from === "right" ? "translate-x-10" : "translate-y-8";
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-800 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`} ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
function Lightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white/60 hover:text-white text-3xl transition-colors">✕</button>
        <img src={src} alt={label} className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
        <p className="text-center text-white/60 text-sm mt-4 tracking-widest uppercase">{label}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const masonryItems = [
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=85", label: "Annual Day Performance", size: "tall" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=85", label: "Classroom Exploration", size: "normal" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=700&q=85", label: "SPS Sports Day", size: "normal" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85", label: "Founders Day Celebrations", size: "wide" },
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=85", label: "Wonderland Kids League", size: "normal" },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=85", label: "SMHS Annual Day", size: "tall" },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=85", label: "CBSE Result Celebrations", size: "normal" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=85", label: "Christmas at SMHS", size: "normal" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=85", label: "Yoga & Meditation Day", size: "wide" },
];

const sports = [
  {
    title: "Sports at Par with Academics",
    body: "At Seedling Schools, sports remain at par with academics — instilling confidence, teamwork, responsibility, discipline, and leadership. Our organised sports events span from intra-school to national levels, showcasing tremendous growth in students' techniques and performance.",
    img: "https://images.unsplash.com/photo-1546519638405-a2b265a3e2a5?w=900&q=85",
    tag: "Athletics & Team Sports",
  },
  {
    title: "SMHS Sports Carnival",
    body: "The SMHS Sports Carnival is one of the most anticipated events of the year — a celebration of physical excellence, sportsmanship, and school spirit. Students participate in a diverse range of sports including basketball, cricket, football, volleyball, and more.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=85",
    tag: "Sports Carnival",
  },
  {
    title: "Skating, Skaters Sunday Bash",
    body: "The Skaters Sunday Bash is a unique Seedling tradition — bringing students together for exhilarating skating sessions that build balance, coordination, and sheer joy. Our dedicated coaches shape well-rounded individuals, fostering a passion for all forms of physical activity.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=85",
    tag: "Skating & Recreation",
  },
];

const activities = [
  { icon: "🎭", title: "Annual Day", desc: "Grand theatrical performances, music, and cultural showcases that celebrate every student's talent and creativity.", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80" },
  { icon: "🧘", title: "Yoga & Meditation", desc: "Regular yoga and mindfulness sessions that nurture mental wellness, focus, and emotional balance across all age groups.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80" },
  { icon: "🎄", title: "Festive Celebrations", desc: "Christmas, Diwali, and cultural festivals celebrated with joy and inclusivity — building international-mindedness and community.", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80" },
  { icon: "🌸", title: "Mother's Day & Special Days", desc: "Heartfelt events honouring family bonds — from Mother's Day performances to Farewell programmes that mark every milestone.", img: "https://images.unsplash.com/photo-1490750967868-88df5691cc4c?w=600&q=80" },
  { icon: "🏆", title: "Founders Day", desc: "An annual tribute to the vision of our founder Late Ms. Mohini Bakshi — celebrated with spirit, pride, and gratitude.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { icon: "🎓", title: "Farewell Programme", desc: "A memorable send-off for outgoing students — an emotional celebration of years spent growing, learning, and belonging at Seedling.", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80" },
];

const testimonials = [
  {
    name: "Gargee Bhattacharya",
    role: "Parent",
    quote: "In the halls of knowledge, the teachers have been guiding lights, imparting not only lessons from textbooks but also invaluable life lessons. The diverse array of opportunities — academics, sports, and the arts — has allowed our children to spread their wings and soar.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
    school: "SMHS Parent",
  },
  {
    name: "Narendra & Soniya Sharma",
    role: "Parents",
    quote: "Teachers go beyond imparting knowledge; they truly understand and encourage every child. They go the extra mile to build confidence, enhance personality, and create a positive atmosphere where our ward feels valued and motivated to learn.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    school: "Seedling Parents",
  },
  {
    name: "Komal Bhatia",
    role: "Mother of Garv Bhatia, Class V",
    quote: "His overall development is very good — his aptitude and attitude is developing very well. We appreciate the efforts put by all teachers and the complete staff of Seedling, taking care of our son in a parental manner.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&q=80",
    school: "SIA Parent",
  },
];

const studentSpeak = [
  { name: "Kishika Jain", label: "Student Speaker", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" },
  { name: "Rafiya Khan", label: "Student Speaker", img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&q=80" },
  { name: "Priyam Sodhia", label: "Student Speaker", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80" },
  { name: "Abhijeet Agnihotri", label: "Student Speaker", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Diksha Khatwani", label: "Student Speaker", img: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&q=80" },
];

const stripImages = [
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1000&q=85", label: "SPS Sports Day" },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000&q=85", label: "Annual Day" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1000&q=85", label: "Cultural Events" },
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1000&q=85", label: "Wonderland Kids" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=85", label: "Founders Day" },
  { src: "https://images.unsplash.com/photo-1546519638405-a2b265a3e2a5?w=1000&q=85", label: "Sports Carnival" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SchoolLifePage() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-[#0D0D0D] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .serif { font-family: 'Fraunces', serif; }
        .duration-800 { transition-duration: 800ms; }
        .strip-scroll::-webkit-scrollbar { display: none; }
        .strip-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-inner { animation: marquee 28s linear infinite; }
        .marquee-inner:hover { animation-play-state: paused; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .float { animation: float 6s ease-in-out infinite; }
      `}</style>

      {lightbox && <Lightbox src={lightbox.src} label={lightbox.label} onClose={() => setLightbox(null)} />}

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1900&q=90"
          alt="Life at Seedling"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.04] transition-transform duration-[12s] hover:scale-100"
        />
        {/* layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        {/* subtle grain texture */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

        {/* floating accent pill */}
        <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-2 float">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-right">
            <p className="serif text-3xl font-light text-amber-300">20,000+</p>
            <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Happy Students</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-right">
            <p className="serif text-3xl font-light text-rose-300">14+</p>
            <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Annual Events</p>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold">Seedling Group of Schools</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="serif font-light text-white leading-[0.95] text-[clamp(3.5rem,10vw,8rem)] max-w-3xl">
              Life at<br />
              <em className="font-semibold italic text-amber-300">Seedling</em>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-white/55 text-lg md:text-xl mt-7 max-w-md leading-relaxed">
              Where every corridor holds a memory, every event shapes a story, and every student discovers who they are.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="flex gap-4 flex-wrap mt-10">
              <button className="group bg-amber-400 hover:bg-amber-300 text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 flex items-center gap-2">
                View Gallery
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a href="/admission-procedure" className="bg-white/10 border border-white/25 text-white hover:bg-white/20 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm">
                Book a Visit
              </a>
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-amber-400 text-black py-3 overflow-hidden">
        <div className="marquee-inner flex whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex">
              {["Founders Day", "Mother's Day", "Yoga & Meditation", "SPS Farewell", "Skaters Sunday Bash", "CBSE Result Celebrations", "SMHS Annual Day", "SPS Annual Day", "Christmas", "Sports Day", "Sports Carnival", "SMHS Farewell"].map((item, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-xs font-semibold tracking-widest uppercase px-8">{item}</span>
                  <span className="text-black/30">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          2. MASONRY GALLERY
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal className="mb-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-amber-400" />
                <span className="text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold">Snippets of Seedling</span>
              </div>
              <h2 className="serif font-light text-5xl md:text-7xl leading-[1.0]">
                Moments<br />
                <em className="font-semibold italic">Worth Keeping</em>
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed hidden md:block">
              "Part of the art of teaching is the ability to rearrange the world for students to guide them to see things in a new way." — Sunny Decker
            </p>
          </div>
        </Reveal>

        {/* Masonry grid — CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {masonryItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 60} className="break-inside-avoid mb-4">
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setLightbox({ src: item.src, label: item.label })}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.size === "tall" ? "h-80 md:h-96" : item.size === "wide" ? "h-48 md:h-56" : "h-52 md:h-64"
                  }`}
                />
                {/* dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />
                {/* label */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <p className="serif italic text-amber-300 text-xs tracking-widest uppercase mb-1">Seedling Moments</p>
                  <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
                </div>
                {/* corner zoom icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. SPORTS
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-24 text-center">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-6 h-px bg-rose-400" />
              <span className="text-rose-400 text-xs tracking-[0.25em] uppercase font-semibold">Sports & Physical Activity</span>
              <div className="w-6 h-px bg-rose-400" />
            </div>
            <h2 className="serif font-light text-5xl md:text-7xl leading-tight">
              Champions Are<br />
              <em className="font-semibold italic text-rose-400">Made Here</em>
            </h2>
          </Reveal>

          <div className="space-y-32">
            {sports.map((item, i) => (
              <Reveal key={item.title} delay={60}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                    <div className="group relative overflow-hidden rounded-2xl">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-rose-500/80 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                    <div className={i % 2 === 1 ? "md:pr-8" : "md:pl-8"}>
                      <span className="text-rose-400 text-xs tracking-[0.2em] uppercase font-semibold mb-4 block">{item.tag}</span>
                      <h3 className="serif text-4xl md:text-5xl font-light leading-tight mb-6">{item.title}</h3>
                      <div className="w-10 h-0.5 bg-rose-400 mb-6" />
                      <p className="text-white/60 leading-[1.9] text-base">{item.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. BEYOND ACADEMICS
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-6 h-px bg-violet-400" />
            <span className="text-violet-400 text-xs tracking-[0.25em] uppercase font-semibold">Events & Activities</span>
            <div className="w-6 h-px bg-violet-400" />
          </div>
          <h2 className="serif font-light text-5xl md:text-7xl">
            Beyond the<br />
            <em className="font-semibold italic text-violet-400">Classroom</em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <Reveal key={act.title} delay={i * 80}>
              <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
                <img
                  src={act.img}
                  alt={act.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* default gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                {/* hover reveal overlay */}
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/60 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-[2px]" />

                {/* Default state */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-400">
                  <span className="text-3xl mb-3 block">{act.icon}</span>
                  <h4 className="serif text-xl font-semibold text-white">{act.title}</h4>
                </div>

                {/* Hover state */}
                <div className="absolute inset-0 flex flex-col justify-center p-7 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0">
                  <span className="text-3xl mb-4 block">{act.icon}</span>
                  <h4 className="serif text-xl font-semibold text-white mb-3">{act.title}</h4>
                  <p className="text-white/80 text-sm leading-[1.8]">{act.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. STUDENT EXPERIENCES (TESTIMONIALS)
      ══════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* bg accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-6 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold">What Parents Say</span>
              <div className="w-6 h-px bg-amber-400" />
            </div>
            <h2 className="serif font-light text-5xl md:text-6xl">
              Voices That<br />
              <em className="font-semibold italic text-amber-300">Say It Best</em>
            </h2>
          </Reveal>

          {/* Main testimonial */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large feature */}
            <div className="md:col-span-2 relative bg-white/5 border border-white/10 rounded-2xl p-10 overflow-hidden">
              <div className="absolute top-6 right-8 serif text-[8rem] leading-none text-white/5 font-bold select-none">"</div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={testimonials[activeTestimonial].img}
                    alt={testimonials[activeTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/40"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].school}</p>
                  </div>
                </div>
                <blockquote className="serif italic text-xl md:text-2xl font-light text-white/85 leading-[1.7]">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                {/* dots */}
                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, ti) => (
                    <button
                      key={ti}
                      onClick={() => setActiveTestimonial(ti)}
                      className={`rounded-full transition-all duration-300 ${ti === activeTestimonial ? "w-8 h-2 bg-amber-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Student Speak thumbnails */}
            <div className="flex flex-col gap-4">
              <p className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-2">Happy Kids · Student Speak</p>
              {studentSpeak.slice(0, 4).map((s) => (
                <div key={s.name} className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-3 transition-all duration-300 cursor-pointer">
                  <img src={s.img} alt={s.name} className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{s.name}</p>
                    <p className="text-white/35 text-xs">{s.label}</p>
                  </div>
                  <div className="ml-auto w-7 h-7 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. HIGHLIGHT MOMENTS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="py-24">
        <Reveal className="max-w-7xl mx-auto px-6 mb-14">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-emerald-400" />
                <span className="text-emerald-400 text-xs tracking-[0.25em] uppercase font-semibold">Highlight Moments</span>
              </div>
              <h2 className="serif font-light text-5xl md:text-6xl">
                Grab the<br />
                <em className="font-semibold italic text-emerald-400">Headlines</em>
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => stripRef.current?.scrollBy({ left: -400, behavior: "smooth" })}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => stripRef.current?.scrollBy({ left: 400, behavior: "smooth" })}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* horizontal scroll strip — edge to edge */}
        <div ref={stripRef} className="strip-scroll flex gap-5 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-4">
          {stripImages.map((img, i) => (
            <div
              key={i}
              className="group flex-none w-[340px] md:w-[480px] h-[300px] relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox({ src: img.src, label: img.label })}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="serif italic text-emerald-300 text-xs tracking-widest uppercase mb-1.5">Seedling Memories</p>
                <p className="text-white font-semibold text-lg leading-snug">{img.label}</p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL-WIDTH EDITORIAL IMAGE BREAK */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden mx-6 rounded-3xl my-8">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85"
          alt="Campus life"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        <div className="relative z-10 h-full flex items-center px-12">
          <div>
            <p className="serif italic text-4xl md:text-6xl text-white/90 font-light max-w-2xl leading-tight">
              "Where every student matters — from Play Group to University."
            </p>
            <p className="text-white/40 text-sm mt-6 tracking-widest uppercase">Seedling Group of Schools · Est. 1992</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&q=80"
          alt="Join Seedling"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-amber-950/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold">Admissions Open · 2026–27</span>
              <div className="w-8 h-px bg-amber-400" />
            </div>
            <h2 className="serif font-light text-6xl md:text-[5.5rem] leading-[1.0] text-white mb-6">
              Come Feel<br />
              <em className="font-semibold italic text-amber-300">The Buzz.</em>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Step into a world where every day is an adventure, every student is celebrated, and every family is part of the Seedling story.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/admission-online"
                className="group bg-amber-400 hover:bg-amber-300 text-black px-10 py-5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 flex items-center gap-2"
              >
                Apply Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/admission-procedure"
                className="bg-white/10 border border-white/25 text-white hover:bg-white hover:text-black px-10 py-5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm"
              >
                Book a Campus Visit
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
              {[
                ["🌍", "50+", "Nations"],
                ["🎓", "5,000+", "Alumni"],
                ["❤️", "30+", "Years of Love"],
              ].map(([icon, val, label]) => (
                <div key={label} className="text-center">
                  <span className="text-2xl block mb-2">{icon}</span>
                  <p className="serif text-2xl font-semibold text-amber-300">{val}</p>
                  <p className="text-white/40 text-xs mt-1 tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
