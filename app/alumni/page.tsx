"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ==========================================
// DATA CONSTANTS
// ==========================================

const alumniList = [
  {
    name: "Harshil Mathur",
    role: "CEO of Razorpay",
    image: "https://seedlingschools.com/assets/img/harshil.png",
    tags: ["Entrepreneurship", "Fintech"],
    accent: "from-amber-400 to-orange-500",
    bg: "from-amber-50 to-orange-50",
  },
  {
    name: "Abhishek Tripathi",
    role: "Wing Commander",
    image: "https://seedlingschools.com/assets/img/abhishek.png",
    tags: ["Defence", "Leadership"],
    accent: "from-sky-400 to-blue-600",
    bg: "from-sky-50 to-blue-50",
  },
  {
    name: "Shashank Jain",
    role: "Head of Architecture & Design",
    image: "https://seedlingschools.com/assets/img/shashank.png",
    tags: ["Architecture", "Design"],
    accent: "from-emerald-400 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
  },
];

const stats = [
  {
    value: 20000,
    suffix: "+",
    label: "Students Empowered",
    description: "Across five world-class campuses in Jaipur",
    color: "from-amber-400 to-orange-500",
    icon: "🎓",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Alumni Network",
    description: "A global community of Seedling graduates",
    color: "from-emerald-400 to-teal-500",
    icon: "🌐",
  },
  {
    value: 100,
    suffix: "%",
    label: "Results",
    description: "Consistent academic excellence since 1992",
    color: "from-sky-400 to-blue-500",
    icon: "🏆",
  },
  {
    value: 50,
    suffix: "+",
    label: "Nations Represented",
    description: "Seedling alumni span the globe",
    color: "from-violet-400 to-purple-500",
    icon: "🌍",
  },
];

const achievements = [
  {
    title: "Alumni Accomplishment",
    body: "We take great pride in celebrating the remarkable achievements of our esteemed alumni — showcasing their talents, dedication, and success stories.",
    icon: "🏅",
    color: "border-amber-200 bg-amber-50",
  },
  {
    title: "NEP-Aligned Education",
    body: "Our curriculum is thoughtfully designed to align with the latest educational standards and practices outlined by the National Education Policy.",
    icon: "📜",
    color: "border-sky-200 bg-sky-50",
  },
  {
    title: "Holistic Well-being",
    body: "At Seedling, we prioritize the holistic well-being of our students, parents, and staff — nurturing academic, emotional, social, and physical growth.",
    icon: "💚",
    color: "border-emerald-200 bg-emerald-50",
  },
  {
    title: "Technology-Integrated Learning",
    body: "Interactive whiteboards, educational apps, and online resources create an engaging and dynamic learning experience for every student.",
    icon: "💡",
    color: "border-violet-200 bg-violet-50",
  },
];

const networkCards = [
  {
    icon: "https://seedlingschools.com/assets/img/news.png",
    title: "Share News",
    body: "Share your latest achievements, milestones, and updates with your alma mater and fellow alumni to inspire and stay connected.",
    cta: "Spread the word",
  },
  {
    icon: "https://seedlingschools.com/assets/img/classmate.png",
    title: "Find Your Classmate",
    body: "Find and reconnect with classmates through alumni associations, social media, or class reunion events to strengthen old bonds.",
    cta: "Reconnect now",
  },
  {
    icon: "https://seedlingschools.com/assets/img/involved.png",
    title: "Get Involved",
    body: "Stay engaged with your alma mater by attending alumni events, reunions, networking opportunities, and cultural activities.",
    cta: "Connect & learn",
  },
];

const studentsList = [
  {
    name: "Krishika Jain",
    image: "https://seedlingschools.com/assets/img/krishika.jpg",
  },
  {
    name: "Rafiya Khan",
    image: "https://seedlingschools.com/assets/img/rafiya.jpg",
  },
  {
    name: "Dr. Shubhangni Mathur",
    image: "https://seedlingschools.com/assets/img/shubhangni.jpg",
  },
  {
    name: "Priyam Sodhia",
    image: "https://seedlingschools.com/assets/img/priyam.jpg",
  },
  {
    name: "Abhijeet Agnihotri",
    image: "https://seedlingschools.com/assets/img/abhijeet.jpg",
  },
  {
    name: "Diksha Khatwani",
    image: "https://seedlingschools.com/assets/img/diksha.jpg",
  },
];


// ==========================================
// SUB-COMPONENTS
// ==========================================

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function AlumniCard({
  alumniItem,
  index,
}: {
  alumniItem: typeof alumniList[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("opacity-100", "translate-y-0"), index * 150);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out group"
    >
      <div
        className={`rounded-2xl overflow-hidden bg-gradient-to-b ${alumniItem.bg} border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={alumniItem.image}
            alt={alumniItem.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${alumniItem.accent}`} />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-1">{alumniItem.name}</h3>
          <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${alumniItem.accent} mb-4`}>
            {alumniItem.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {alumniItem.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-slate-500 bg-white border border-slate-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// ==========================================
// SECTIONS
// ==========================================

function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("opacity-100", "translate-y-0");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-amber-200 rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-amber-700 tracking-widest uppercase">
            Since 1992
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-slate-800 leading-[1.05] mb-6 tracking-tight">
          Celebrating Our{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-600">
              Alumni
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/60 rounded -z-0" />
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-light text-slate-500 mb-4 tracking-wide">
          Community. Connection. Collaboration.
        </p>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Every Seedling alumnus carries a story of growth, resilience, and perseverance —
          a testament to what nurturing the right environment can accomplish.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { value: "20,000+", label: "Students" },
            { value: "5,000+", label: "Alumni Network" },
            { value: "100%", label: "Results" },
            { value: "50+", label: "Nations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function FeaturedAlumni() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("opacity-100", "translate-y-0");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-px bg-amber-400" />
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-widest">
            Featured Story
          </span>
        </div>

        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="relative min-h-[420px] md:min-h-[560px] overflow-hidden group">
              <Image
                src="https://seedlingschools.com/assets/img/harshil.png"
                alt="Harshil Mathur – CEO of Razorpay"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  The Pride of Seedling
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 md:p-14 text-white">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Seedling Public School Alumni
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                Harshil Mathur
              </h2>
              <p className="text-xl text-amber-300 font-medium mb-8">
                CEO, Razorpay
              </p>

              <blockquote className="relative">
                <div className="text-7xl text-amber-400/20 font-serif absolute -top-4 -left-2 leading-none select-none">
                  "
                </div>
                <p className="text-slate-300 text-lg leading-relaxed pl-4 border-l-2 border-amber-400/50">
                  We take great pride in celebrating the remarkable achievements of our
                  esteemed alumni — showcasing their talents, dedication, and success
                  stories. Discover journeys of growth, resilience, and perseverance, and
                  gain insights into how Seedling School played a pivotal role in shaping
                  their path to success.
                </p>
              </blockquote>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-amber-400/40" />
                <span className="text-slate-400 text-sm">
                  Joyous Tidings — Alumni Accomplishment
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Entrepreneurship", "Fintech", "Leadership", "Innovation"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 border border-white/10 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlumniGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-widest">
              Alumni Stories
            </span>
            <div className="w-8 h-px bg-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            The Pride of Seedling
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Our graduates go on to lead, create, and serve at the highest levels —
            each carrying the Seedling spirit forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {alumniList.map((a, i) => (
            <AlumniCard key={a.name} alumniItem={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-widest">
              By the Numbers
            </span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Empowering Educational Excellence{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-500">
              Globally
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r rounded-t-2xl" style={{backgroundImage: `linear-gradient(to right, var(--from), var(--to))`}} />
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-slate-700 mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className={`rounded-2xl border-2 ${a.color} p-7 transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{a.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{a.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniNetwork() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("opacity-100", "translate-y-0");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-widest">
              Stay Connected
            </span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nurture the Network!
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            The Seedling Tribe with its Happy Vibe — a community that extends far
            beyond graduation day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {networkCards.map((card, i) => (
            <div
              key={card.title}
              className="group rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-400/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative w-14 h-14 mb-6">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{card.body}</p>
              <button className="text-amber-400 text-sm font-semibold group-hover:underline flex items-center gap-2">
                {card.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  return (
    <section className="py-24 bg-amber-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-widest">
                Happy Kids Make a Happy School
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Students Speak
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
            Voices from our vibrant student community — each one a growing Seedling story.
          </p>
        </div>
      </div>

      <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 pb-4 snap-x snap-mandatory">
        {studentsList.map((s) => (
          <div
            key={s.name}
            className="group flex-shrink-0 snap-start w-56 md:w-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">{s.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("opacity-100", "scale-100");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="opacity-0 scale-95 transition-all duration-700 ease-out rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-white/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-white/10 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 text-center py-20 px-8">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold uppercase tracking-widest">
                Admissions Open 2026–27
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join the Seedling{" "}
              <span className="relative">
                Alumni Network
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded" />
              </span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Be part of a global community that celebrates growth, resilience,
              and collaboration. Connect with your alma mater — Seedling Group of Schools.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://seedlingschools.com/alumni.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-widest"
              >
                Join Our Alumni Network
              </a>
              <a
                href="https://seedlingschools.com/admission-procedure.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border-2 border-white/60 font-bold px-8 py-4 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-widest"
              >
                Enquire Now
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              <span>SPS & SIA: <a href="tel:+917413012351" className="text-white font-semibold hover:underline">+91 74130 12351</a></span>
              <span>SMHS & SMIA: <a href="tel:+919587772837" className="text-white font-semibold hover:underline">+91 95877 72837</a></span>
              <span className="text-white/50">Office Hours: 8:30 AM – 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ==========================================
// MAIN PAGE EXPORT
// ==========================================

/*
  Note: In Next.js App Router, you cannot export `metadata` from a "use client" file.
  Since this entire consolidated file requires client-side features (hooks, refs),
  it's marked with "use client". If you need SEO metadata, you should either move
  it to `layout.tsx` or wrap this page in a Server Component that exports metadata.
*/

/*
export const metadata = {
  title: "Alumni | Seedling Group of Schools",
  description:
    "Celebrating the remarkable achievements of our esteemed alumni. Discover their journeys of growth, resilience, and perseverance.",
};
*/

export default function AlumniPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedAlumni />
      <AlumniGrid />
      <AchievementsSection />
      <AlumniNetwork />
      <GalleryStrip />
      <CTASection />
    </main>
  );
}
