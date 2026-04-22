"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[var(--color-secondary)]/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Layered Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 w-full items-center">
          
          {/* Text Content - Floating Layer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-7 z-20 relative"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-widest leading-none">Establishing Excellence Since 1992</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-950 leading-[0.9] mb-8">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-secondary italic font-serif">Tomorrow&apos;s</span> <br />
              Leaders.
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-xl font-medium leading-relaxed mb-12">
              Beyond just classroom learning, Seedling prioritizes student well-being and community interests, preparing curious minds for a world in constant flux.
            </p>

            <motion.div 
              style={{ opacity }}
              className="flex items-center gap-6"
            >
              <button className="h-14 px-8 bg-primary text-white rounded-full font-bold flex items-center group transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                Explore Our Legacy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Image Layer - Offset & Decorative */}
          <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
             <motion.div
               style={{ y: y1 }}
               className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white"
             >
                <Image 
                  src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_hero_educational_abstract_1776852400303.png"
                  alt="Modern Campus Architecture"
                  fill
                  className="object-cover"
                  priority
                />
             </motion.div>
             
             {/* Decorative Background Plate */}
             <motion.div
               style={{ y: y2 }}
               className="absolute -bottom-10 -right-10 w-full h-full bg-neutral-100 rounded-[3rem] -z-10 border border-black/[0.03] shadow-inner"
             />
             
             {/* Floating Medal/Badge */}
             <motion.div
               initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="absolute -top-12 -left-12 w-32 h-32 bg-white rounded-2xl shadow-premium border border-black/[0.03] flex flex-col items-center justify-center p-4 z-30"
             >
                <span className="text-primary font-black text-3xl">30+</span>
                <span className="text-[10px] uppercase font-bold text-center leading-tight text-neutral-500">Years of <br /> Heritage</span>
             </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Leadership Messages */}
      <section className="py-40 bg-[#F9FAFB] border-y border-black/3">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Pathfinders</span>
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-950">Messages from Leadership</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {[
                  { name: "Mr. Bakshi", role: "Chairperson", quote: "Education is not the learning of facts, but the training of the mind to think." },
                  { name: "Mr. Hardeep Bakshi", role: "CEO", quote: "Our goal is to create an ecosystem where innovation and tradition coexist harmoniously." },
                  { name: "Mr. Sandeep Bakshi", role: "COO", quote: "We don't just build students, we build leaders prepared for the complexities of the 21st century." }
               ].map((leader, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="relative h-full bg-white rounded-premium p-10 border border-black/3 shadow-2xl shadow-black/2 transition-all duration-500 hover:shadow-premium-hover hover:-translate-y-2 group/card overflow-hidden"
                  >
                     <span className="absolute -top-12 -right-8 text-[12rem] font-black text-black/2 group-hover/card:text-primary/5 transition-colors duration-700 pointer-events-none">
                        {i + 1}
                     </span>
                     <div className="relative z-10">
                        <p className="text-lg font-medium text-neutral-600 mb-10 leading-relaxed italic">&quot;{leader.quote}&quot;</p>
                        <div className="flex flex-col">
                           <span className="text-xl font-bold text-neutral-950 leading-tight">{leader.name}</span>
                           <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mt-2">{leader.role}</span>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Vision & Mission - Refined Light Cards */}
      <section className="py-40 relative z-10 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-full bg-white rounded-premium p-12 border border-black/3 shadow-2xl shadow-black/2 transition-all duration-500 hover:shadow-premium-hover hover:-translate-y-2 overflow-hidden flex flex-col group"
          >
            <div className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center mb-10 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
              <Target className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter uppercase italic">Our Mission</h2>
            <p className="text-xl text-neutral-600 leading-relaxed font-medium">
              To provide a joyful learning environment that empowers students to reach their educational and personal potential while nurturing self-confidence.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-full bg-white rounded-premium p-12 border border-black/3 shadow-2xl shadow-black/2 transition-all duration-500 hover:shadow-premium-hover hover:-translate-y-2 overflow-hidden flex flex-col group"
          >
            <div className="w-20 h-20 rounded-3xl bg-secondary text-white flex items-center justify-center mb-10 shadow-xl shadow-secondary/20 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter uppercase italic">Our Vision</h2>
            <p className="text-xl text-neutral-600 leading-relaxed font-medium">
              To inspire students to become confident, compassionate global citizens, carrying forward the rich legacy of Seedling with integrity and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-40 bg-neutral-950 relative overflow-hidden rounded-premium mx-4 md:mx-8">
         <div className="absolute inset-0 noise-bg opacity-10" />
         <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Seedling Way</span>
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
               {[
                  { title: "Honesty", desc: "Upholding truth in all endeavors." },
                  { title: "Integrity", desc: "Unity of thought, word, and deed." },
                  { title: "Compassion", desc: "Empathy for every living soul." },
                  { title: "Resilience", desc: "Strength to overcome adversity." },
                  { title: "Excellence", desc: "Continuous pursuit of greatness." }
               ].map((value, i) => (
                  <div key={i} className="text-center group">
                     <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                        <span className="text-2xl font-black text-white">{i+1}</span>
                     </div>
                     <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                     <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider leading-relaxed">{value.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Ancient Philosophy Quote - Refined Light Style */}
      <section className="py-60 relative overflow-hidden text-center bg-white">
        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 className="text-4xl md:text-7xl font-serif italic text-neutral-900 leading-tight">
                &quot;haye nayatu na brahmgynam&quot;
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-16 h-1 bg-secondary mb-6" />
                <span className="text-primary uppercase tracking-[0.4em] font-black text-sm">We aim at wisdom and comprehension</span>
              </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
