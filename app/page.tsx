"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Globe2, BookOpen, Star, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { label: "Years of Excellence", value: "30+", icon: Star, color: "text-amber-400" },
    { label: "Global Alumni", value: "5,000+", icon: Users, color: "text-blue-400" },
    { label: "Nations Represented", value: "50+", icon: Globe2, color: "text-emerald-400" },
    { label: "Expert Educators", value: "200+", icon: GraduationCap, color: "text-rose-400" },
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen relative">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/homepage_cinematic_hero_school_1776852594588.png"
            alt="Seedling Schools Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-neutral-600 border border-black/[0.03] mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Admissions Open 2026-27</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-neutral-950 leading-[0.85] mb-8">
              Excellence <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-secondary italic font-serif">by Design.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Empowering curious minds to navigate a complex world with wisdom, resilience, and global competence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/admissions"
                className="h-16 px-10 bg-primary text-white rounded-full font-bold flex items-center hover:scale-105 transition-all shadow-2xl shadow-primary/20 group"
              >
                Inquire Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="h-16 px-10 bg-white text-neutral-900 rounded-full font-bold flex items-center border border-black/5 hover:bg-neutral-50 transition-all shadow-lg">
                <Play className="mr-2 w-4 h-4 fill-primary text-primary" />
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest">Discover Seedling</span>
          <div className="w-px h-12 bg-linear-to-b from-primary/20 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section - Floating Overlap */}
      <section className="relative z-20 -mt-20 px-4 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-premium text-center group hover:-translate-y-2 transition-all duration-500"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className="text-4xl md:text-5xl font-extrabold text-neutral-950 mb-1 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW: School Portfolio - Multi-branch Explorer */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
         <div className="text-center mb-20">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">One Group. Many Worlds.</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-950">Our Educational Portfolio</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { name: "SPS", fullName: "Seedling Public School", icon: "01", desc: "Co-educational day school focusing on CBSE academic rigor." },
               { name: "SMIA", fullName: "Seedling Modern Int. Academy", icon: "02", desc: "International standards with a focus on holistic development." },
               { name: "SIA", fullName: "Seedling International Academy", icon: "03", desc: "Cambridge (CAIE) curriculum for global-minded students." },
               { name: "The K-World", fullName: "The Kiderworld", icon: "04", desc: "Nurturing environment for the early developmental years." }
            ].map((school, i) => (
               <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative bg-[#F4F4F5] p-10 rounded-[3rem] overflow-hidden transition-all duration-500"
               >
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-black/5 group-hover:text-primary/10 transition-colors">
                     {school.icon}
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-between pt-12">
                     <div>
                        <h3 className="text-3xl font-bold text-neutral-950 mb-4">{school.name}</h3>
                        <p className="text-sm font-bold text-neutral-500 mb-6 leading-relaxed uppercase tracking-wider">{school.fullName}</p>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-8">{school.desc}</p>
                     </div>
                     <Link href="/about" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
                        Explore School <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* The Seedling World - Infrastructure Grid */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Seedling World</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-tight">
              A Microcosm of <br /> Global Excellence.
            </h2>
          </div>
          <Link href="/campus-highlights" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
            View All Facilities
            <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 group relative h-[500px] rounded-[3rem] overflow-hidden border border-black/[0.03] shadow-2xl"
          >
             <Image src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_hero_educational_abstract_1776852400303.png" alt="Infrastructure" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
             <div className="absolute bottom-0 left-0 p-12 w-full">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 inline-block">Campus Highlights</span>
                <h3 className="text-4xl font-bold text-white mb-4">World-Class <br /> Architecture</h3>
                <p className="text-white/80 max-w-md font-medium leading-relaxed">
                  Designated interactive spaces that encourage collaborative learning and creative exploration.
                </p>
             </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             whileHover={{ y: -10 }}
             className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-black/[0.03] shadow-2xl"
          >
             <div className="absolute inset-0 bg-linear-to-br from-primary to-blue-800" />
             <div className="absolute inset-0 noise-bg opacity-10" />
             <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <BookOpen className="w-12 h-12 text-white/20 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-bold text-white mb-4">Global <br /> Curricula</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Affiliated with CBSE & Cambridge CAIE, preparing students for international success.
                </p>
             </div>
          </motion.div>
        </div>

        {/* NEW: Holistic Foundations - 8 Pillars */}
        <div className="mt-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                  { title: "Academic Rigor", desc: "Scientific methods of learning." },
                  { title: "Physical Growth", desc: "Olympic standard sports infra." },
                  { title: "Mental Wellness", desc: "Dedicated counseling wings." },
                  { title: "Global Outlook", desc: "International exchange programs." },
                  { title: "Tech Savvy", desc: "STEAM & Innovation labs." },
                  { title: "Arts & Culture", desc: "Performing arts & music studios." },
                  { title: "Ethical Values", desc: "Character building foundations." },
                  { title: "Social Impact", desc: "Community outreach initiatives." }
               ].map((pillar, i) => (
                  <div key={i} className="p-8 border border-black/[0.03] rounded-3xl hover:border-primary/20 transition-colors">
                     <h4 className="text-lg font-bold text-neutral-950 mb-2">{pillar.title}</h4>
                     <p className="text-xs text-neutral-500 leading-relaxed font-bold uppercase tracking-wider">{pillar.desc}</p>
                  </div>
               ))}
            </div>
        </div>
      </section>

      {/* Philosophy Section - Pure Light Style */}
      <section className="py-40 bg-neutral-50 relative overflow-hidden rounded-[2.5rem] mx-4 md:mx-8 border border-black/[0.03]">
        <div className="absolute inset-0 noise-bg opacity-[0.03]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <h3 className="text-4xl md:text-6xl font-serif italic text-neutral-900 leading-tight max-w-4xl mx-auto">
                &quot;haye nayatu na brahmgynam&quot; <br />
                <span className="text-2xl md:text-3xl font-sans not-italic text-neutral-400 block mt-6">We aim at wisdom and the ability to comprehend.</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
                 {[
                    { num: "01", title: "Critical Thinking", desc: "Analyzing situations beyond the textbook." },
                    { num: "02", title: "Global Citizens", desc: "Understanding diverse cultures and ethics." },
                    { num: "03", title: "Resilience", desc: "Preparing for a radically different world." }
                 ].map((item, i) => (
                    <div key={i} className="space-y-4">
                       <div className="text-secondary font-black text-6xl opacity-[0.05]">{item.num}</div>
                       <h4 className="text-xl font-bold text-neutral-950">{item.title}</h4>
                       <p className="text-neutral-500 font-bold uppercase tracking-wider text-xs">{item.desc}</p>
                    </div>
                 ))}
              </div>
            </motion.div>
        </div>
      </section>

      {/* NEW: Social Proof & Media Buzz */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Voices of Seedling</span>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-950 mb-12">What our <br /> Parents say.</h2>
               <div className="space-y-8">
                  {[
                     { name: "Mrs. Meeta Sharma", role: "Parent", quote: "The holistic approach at Seedling has transformed my child into a confident and curious learner. The facilities are unmatched in Jaipur." },
                     { name: "Mr. Rajat Verma", role: "Parent", quote: "SIA's international curriculum gave my daughter the edge she needed to excel in her global university applications." }
                  ].map((test, i) => (
                     <div key={i} className="p-10 bg-white border border-black/[0.03] rounded-3xl shadow-lg shadow-black/[0.01]">
                        <p className="text-neutral-600 font-medium italic mb-6 leading-relaxed">&quot;{test.quote}&quot;</p>
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">S</div>
                           <div className="text-left">
                              <p className="text-sm font-bold text-neutral-950">{test.name}</p>
                              <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">{test.role}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative aspect-square bg-[#F4F4F5] rounded-[4rem] overflow-hidden group border border-black/[0.03]">
               <Image src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_hero_educational_abstract_1776852400303.png" alt="Students Speaking" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Play className="w-8 h-8 fill-primary text-primary ml-1" />
                  </div>
               </button>
               <div className="absolute bottom-12 left-12 right-12">
                  <p className="text-white font-bold text-xl drop-shadow-lg leading-tight">Watch our 2026 Founder&apos;s Day Highlights.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section - With Inquiry Teaser */}
      <section className="py-40 px-4 bg-[#F9FAFB]">
         <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-neutral-950 mb-12">
               Future Leaders <br /> <span className="text-primary italic font-serif">Start Here.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary"><Users className="w-5 h-5" /></div>
                  <div className="text-left"><p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Applications Received</p><p className="text-sm font-bold text-neutral-950">2,500+ for 2026</p></div>
               </div>
               <div className="w-px h-12 bg-black/5 hidden md:block" />
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-secondary"><Star className="w-5 h-5" /></div>
                  <div className="text-left"><p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Limited Seats</p><p className="text-sm font-bold text-neutral-950">Grade 1, 9 & 11</p></div>
               </div>
            </div>
            <Link 
              href="/admissions"
              className="inline-flex h-20 px-12 bg-primary text-white rounded-full items-center justify-center font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-all group"
            >
               Apply for Admission 2026-27
               <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>
    </div>
  );
}