"use client";

import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Tag / Label ──────────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-sky-200 mb-4 font-sans">
      {children}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const curricula = [
  {
    board: "CBSE",
    schools: ["Seedling Public School", "Seedling Modern High School"],
    icon: "🇮🇳",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    accent: "bg-orange-500",
    text: "text-orange-600",
    desc: "Affiliated with the Central Board of Secondary Education, our CBSE schools deliver a comprehensive, NEP-aligned curriculum that balances academic rigour with holistic development, empathy, and future-ready skills.",
    highlights: ["NEP Aligned", "100% Board Results", "Personalised Learning"],
  },
  {
    board: "Cambridge IGCSE",
    schools: ["Seedling International Academy", "Seedling Modern International Academy"],
    icon: "🌏",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    accent: "bg-sky-600",
    text: "text-sky-700",
    desc: "Internationally benchmarked Cambridge Primary, Lower Secondary, and IGCSE programmes delivered by an experienced, continuously trained faculty. Worldwide status and credibility, with a strong focus on critical thinking and independent research.",
    highlights: ["Cambridge Primary → IGCSE", "Global Credibility", "University Counselling"],
  },
  {
    board: "Early Years",
    schools: ["Seedling Wonderland Kids League"],
    icon: "🌱",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    accent: "bg-emerald-600",
    text: "text-emerald-700",
    desc: "A thoughtfully designed early-years environment at both Jawahar Nagar and Durgapura campuses. Play is the most powerful form of learning — every activity is intentional, joyful, and developmental.",
    highlights: ["Play-Based Learning", "Dual Campus", "Age 2–6 Years"],
  },
];

const learningApproaches = [
  {
    title: "Experiential & Hands-On Learning",
    body: "Learning comes alive through practical experiments, outdoor excursions, and interactive projects. We foster critical thinking, problem-solving, and a genuine love for discovery. Our students don't just read about the world — they engage with it.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    tag: "Learning Philosophy",
  },
  {
    title: "Technology-Integrated Classrooms",
    body: "Our classrooms are equipped with interactive whiteboards and we integrate educational apps and online resources. Students receive online performance tracking and are introduced to modern skills including AI, ethics, and sustainability — preparing them for a digitally driven world.",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    tag: "Innovation",
  },
  {
    title: "Trust-Based, Student-Centred Approach",
    body: "We believe every child's voice deserves to be heard and their individuality celebrated. Our broad, balanced curriculum is flexible and tailored to individual needs. School-driven formative assessments replace exam anxiety with continuous, meaningful growth.",
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
    tag: "Student Wellbeing",
  },
  {
    title: "Strong School–Parent Partnership",
    body: "Education is a community endeavour. We maintain open communication channels, conduct regular parent counselling (available both online and offline), and provide parents with timely updates on student progress — ensuring families and school move forward together.",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    tag: "Community",
  },
];

const programs = [
  {
    level: "Primary",
    range: "Classes I – V",
    desc: "Building strong foundations in literacy, numeracy, and curiosity. Early introduction to independent research, collaborative projects, and reflective thinking.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
    color: "from-amber-500/80",
  },
  {
    level: "Middle School",
    range: "Classes VI – VIII",
    desc: "Deepening knowledge across disciplines while nurturing self-confidence, ethical reasoning, and a global outlook. Students become engaged, responsible, and innovative thinkers.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
    color: "from-sky-700/80",
  },
  {
    level: "Senior Secondary",
    range: "Classes IX – XII",
    desc: "Rigorous CBSE and Cambridge IGCSE programmes with personalised career counselling, university guidance, and focused preparation for competitive exams and global higher education.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
    color: "from-emerald-700/80",
  },
];

const achievements = [
  { value: "100%", label: "Board Results", sub: "Consistently every year", icon: "🏆" },
  { value: "20,000+", label: "Students Enrolled", sub: "Across 5 schools", icon: "👩‍🎓" },
  { value: "15:1", label: "Student–Teacher Ratio", sub: "Personalised attention", icon: "📐" },
  { value: "5,000+", label: "Alumni Network", sub: "Across 50+ nations", icon: "🌍" },
  { value: "30+", label: "Years of Excellence", sub: "Since 1992", icon: "⭐" },
  { value: "2", label: "Boards Offered", sub: "CBSE & Cambridge", icon: "📜" },
];

const learnerProfile = [
  { trait: "Confident", desc: "Students embark on a journey of self-discovery, fearlessly exploring new ideas and embracing challenges with a can-do attitude.", emoji: "💪" },
  { trait: "Reflective", desc: "We encourage students to be reflective thinkers — pondering their experiences, analysing outcomes, and adapting with informed decisions.", emoji: "🪞" },
  { trait: "Responsible", desc: "Students are accountable for their actions. We foster integrity and prepare them to make wise decisions and shape a bright future.", emoji: "🤝" },
  { trait: "Innovative", desc: "We ignite the spark of innovation through exciting projects, cutting-edge technologies, and out-of-the-box problem-solving.", emoji: "💡" },
  { trait: "Engaged", desc: "Learning comes alive as students participate in hands-on activities, collaborative projects, and interactive discussions.", emoji: "🔥" },
];

const faculty = [
  { name: "Ms. Priya Sharma", subject: "Mathematics", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
  { name: "Mr. Arjun Mehta", subject: "Science & Physics", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Dr. Sunita Rathore", subject: "English Literature", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Mr. Vikram Singh", subject: "Social Studies", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Ms. Kavita Joshi", subject: "Cambridge IGCSE", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80" },
  { name: "Mr. Rahul Gupta", subject: "Computer Science", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

const joyride = [
  "Personalised Learning Journeys — tailored to individual student needs and strengths",
  "Academic Rigor — comprehensive CBSE curriculum with critical knowledge and skills",
  "Emotional Intelligence — integrated into all aspects of learning for holistic growth",
  "Future-Ready Skills — AI, ethics, and sustainability for tomorrow's challenges",
  "Mental Wellness Focus — regular mental health support sessions",
  "Global Outlook — promoting international-mindedness and cultural awareness",
  "Career Counselling — personalised guidance for future academic and career paths",
  "Early Bird Incentives — for early registrations each session",
  "Scholarships — for meritorious students in academics and sports",
  "Safe, Secure Campus — 24/7 surveillance at all campuses",
  "University Counselling — structured pathways to top global universities",
  "Parent–Teacher Collaboration — regular, transparent updates on student progress",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AcademicsPage() {
  return (
    <main className="bg-[#F8F8F6] text-[#1A1A1A] overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[92vh] min-h-[640px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=85"
          alt="Academic Excellence"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
              Seedling Group of Schools · Academic Programmes
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="serif text-white font-light text-6xl md:text-8xl leading-[1.05] max-w-3xl mb-6">
              Academic<br />
              <em className="font-semibold">Excellence</em><br />
              <span className="text-sky-300">Redefined.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-10">
              From Playgroup to University — CBSE and Cambridge programmes designed to nurture confident, reflective, and globally-minded learners across 5 schools in Jaipur.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="flex gap-4 flex-wrap">
              <a href="/admission-procedure" className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-sky-800/40">
                Explore Programmes
              </a>
              <a href="/admission-online" className="bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm">
                Apply Now
              </a>
            </div>
          </Reveal>
        </div>

        {/* floating stat pills */}
        <div className="absolute bottom-10 right-8 z-10 hidden lg:flex flex-col gap-3">
          {[["100%", "Board Results"], ["20K+", "Students"], ["15:1", "Teacher Ratio"]].map(([v, l]) => (
            <div key={l} className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-xl">
              <span className="serif text-2xl font-semibold text-sky-300">{v}</span>
              <span className="text-xs text-white/60 tracking-wide">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. CURRICULUM OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <Tag>Curriculum Overview</Tag>
          <h2 className="serif text-5xl md:text-6xl font-light text-[#1A1A1A]">
            Two Boards.<br />
            <em className="font-semibold">One Vision.</em>
          </h2>
          <p className="text-[#666] mt-5 max-w-xl mx-auto leading-relaxed">
            Whether CBSE or Cambridge, every Seedling programme is built on the same foundation: joyful learning, holistic development, and genuine academic rigour.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {curricula.map((c, i) => (
            <Reveal key={c.board} delay={i * 120}>
              <div className={`group relative rounded-2xl p-8 h-full border ${c.border} bg-gradient-to-br ${c.color} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className={`absolute top-0 left-6 right-6 h-0.5 ${c.accent} rounded-full`} />
                <div className="text-5xl mb-5">{c.icon}</div>
                <div className={`inline-block ${c.text} text-xs font-bold tracking-widest uppercase mb-2 border ${c.border} px-3 py-1 rounded-full`}>
                  {c.board}
                </div>
                <div className="mt-3 mb-5 space-y-1">
                  {c.schools.map((s) => (
                    <p key={s} className="text-sm text-[#444] font-medium flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.accent} inline-block`} />
                      {s}
                    </p>
                  ))}
                </div>
                <p className="text-[#555] text-sm leading-[1.9] mb-7">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.highlights.map((h) => (
                    <span key={h} className={`text-xs ${c.text} border ${c.border} px-3 py-1 rounded-full font-medium`}>{h}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. LEARNING APPROACH (ZIG-ZAG)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <Tag>How We Teach</Tag>
            <h2 className="serif text-5xl md:text-6xl font-light">
              Our Learning <em className="font-semibold">Approach</em>
            </h2>
          </Reveal>

          <div className="space-y-28">
            {learningApproaches.map((item, i) => (
              <Reveal key={item.title} delay={60}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                    <div className="overflow-hidden rounded-2xl shadow-xl group">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                    <Tag>{item.tag}</Tag>
                    <h3 className="serif text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-5 leading-snug">{item.title}</h3>
                    <p className="text-[#555] leading-[1.9] text-base">{item.body}</p>
                    <div className="mt-8 w-12 h-0.5 bg-sky-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAMBRIDGE LEARNER PROFILE
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0e1e3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-sky-500/30 mb-4">
              Cambridge Learner Profile
            </span>
            <h2 className="serif text-5xl md:text-6xl font-light">
              We Shape <em className="font-semibold text-sky-300">5 Kinds</em><br />of Learners
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {learnerProfile.map((lp, i) => (
              <Reveal key={lp.trait} delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 text-center">
                  <span className="text-5xl mb-4 block">{lp.emoji}</span>
                  <h4 className="serif text-xl font-semibold text-sky-300 mb-3">{lp.trait}</h4>
                  <p className="text-white/55 text-xs leading-[1.8]">{lp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. PROGRAMME LEVELS
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <Tag>Programme Levels</Tag>
          <h2 className="serif text-5xl md:text-6xl font-light">
            A Journey From<br />
            <em className="font-semibold">First Steps to Future Paths</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <Reveal key={p.level} delay={i * 120}>
              <div className="group relative h-[480px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                <img
                  src={p.img}
                  alt={p.level}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} to-black/20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2 block">{p.range}</span>
                  <h3 className="serif text-4xl font-semibold mb-3">{p.level}</h3>
                  <p className="text-white/70 text-sm leading-[1.8] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    {p.desc}
                  </p>
                  <div className="mt-4 w-8 h-0.5 bg-white/60 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. ACHIEVEMENTS
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-gradient-to-br from-sky-600 to-blue-800 text-white relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/5 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/20 mb-4">
              Roll of Honour
            </span>
            <h2 className="serif text-5xl md:text-6xl font-light">
              Numbers That<br />
              <em className="font-semibold">Tell Our Story</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <div className="group bg-white/10 border border-white/15 rounded-2xl p-8 text-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm">
                  <div className="text-4xl mb-4">{a.icon}</div>
                  <p className="serif text-5xl font-semibold text-white mb-2">{a.value}</p>
                  <p className="text-white/90 font-semibold text-base mb-1">{a.label}</p>
                  <p className="text-white/50 text-xs tracking-wide">{a.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full-width 100% results banner */}
          <Reveal delay={200}>
            <div className="mt-16 bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
              <div>
                <p className="text-white/60 text-sm tracking-widest uppercase mb-2">Our Pride</p>
                <h3 className="serif text-4xl md:text-5xl font-semibold">100% Board Results</h3>
                <p className="text-white/65 mt-3 max-w-lg">Seedling Group of Schools has consistently achieved 100% results in both CBSE and Cambridge board examinations — every year, across all campuses.</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white/15 rounded-full flex flex-col items-center justify-center border-2 border-white/30">
                  <span className="serif text-4xl font-bold">100%</span>
                  <span className="text-xs text-white/60 mt-1">Every Year</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          JOYRIDE — WHAT SEEDLING OFFERS
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Tag>Start Your Joyride</Tag>
              <h2 className="serif text-5xl font-light leading-tight mb-6">
                12 Reasons to Choose<br />
                <em className="font-semibold">Seedling Schools</em>
              </h2>
              <p className="text-[#666] leading-relaxed mb-10">
                Every element of the Seedling experience is intentionally designed to prepare students not just academically, but for life's challenges — with confidence, compassion, and curiosity.
              </p>
              <a href="/admission-procedure" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300">
                Begin Enrolment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {joyride.map((item, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className="flex gap-3 p-4 rounded-xl bg-[#F8F8F6] border border-[#EEECEA] hover:bg-sky-50 hover:border-sky-200 transition-all duration-300 group">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-[#444] text-xs leading-[1.7]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. FACULTY
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <Tag>Our Educators</Tag>
            <h2 className="serif text-5xl md:text-6xl font-light">
              Faculty Who<br />
              <em className="font-semibold">Inspire, Not Just Instruct</em>
            </h2>
            <p className="text-[#666] mt-5 max-w-2xl mx-auto leading-relaxed">
              Our dedicated teachers create a nurturing environment for student success. They foster rapport, understand individual needs, and set high standards for both character and academic achievement — preparing students not just for exams, but for life.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {faculty.map((f, i) => (
              <Reveal key={f.name} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#EEECEA]">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="serif text-xl font-semibold text-[#1A1A1A] mb-1">{f.name}</h4>
                    <p className="text-sky-600 text-sm font-medium">{f.subject}</p>
                    <div className="mt-4 w-8 h-0.5 bg-sky-200 group-hover:w-14 group-hover:bg-sky-500 transition-all duration-300" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* faculty descriptor */}
          <Reveal delay={100}>
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { icon: "📚", title: "Experienced & Qualified", desc: "Faculty members are continuously trained, experienced, and deeply passionate about teaching — with ongoing professional development." },
                { icon: "🎯", title: "Student-Centric", desc: "A personalised, inclusive approach ensures every child receives individual attention, guidance, and care for both academics and well-being." },
                { icon: "🔄", title: "Mentors, Not Just Teachers", desc: "Our teachers go beyond knowledge delivery — they build confidence, nurture personality, and create an environment where students feel valued." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-[#EEECEA] rounded-2xl p-7 flex gap-5 items-start">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="serif text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-[#666] text-sm leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=80"
          alt="Join Seedling"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1e3a]/90 via-[#0e1e3a]/75 to-sky-900/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            <span className="inline-block bg-sky-500/25 text-sky-200 text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-sky-400/30 mb-6">
              Admissions Open 2026–27
            </span>
            <h2 className="serif text-5xl md:text-7xl font-light mb-6">
              Join the<br />
              <em className="font-semibold text-sky-300">Seedling Family</em>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Come feel the buzz. Parent counselling is available both online and offline. Early bird incentives and scholarships for meritorious students are available. Where every student matters.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/admission-online"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-10 py-5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-sky-800/50 hover:gap-4"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/admission-procedure"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#1A1A1A] px-10 py-5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm"
              >
                Enquire Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[["🎓", "University\nCounselling"], ["🏅", "Merit\nScholarships"], ["🤝", "Parent\nPartnerships"]].map(([icon, label]) => (
                <div key={label} className="text-center">
                  <span className="text-3xl block mb-2">{icon}</span>
                  <p className="text-white/50 text-xs leading-[1.6] whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
