"use client";

import { motion } from "framer-motion";
import { Quote, Plus, ArrowRight } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Late Ms. Mohini Bakshi",
    title: "Founder Director",
    quote: "The life of one we love is never lost. Its influence goes on through all the lives it ever touched.",
    role: "Visionary",
  },
  {
    name: "Dr. Sandeep Bakshi",
    title: "CEO & Director",
    quote: "To make education monumentally effective, we must teach young people to grow their own plants rather than giving them cut flowers.",
    role: "Steward",
  },
  {
    name: "Dr. Preeti Bakshi",
    title: "Executive Director",
    quote: "Give the Pupils Something to do, not something to learn; and the doing is of such a nature as to demand thinking; learning naturally results.",
    role: "Innovator",
  },
  {
    name: "Ms. Akansha Bakshi",
    title: "Joint Director",
    quote: "Adaptability to change is itself a hallmark of Successful education.",
    role: "Strategist",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    title: "Joint Director",
    quote: "The only person who is educated is the one who has Learned how to learn...and change.",
    role: "Mentor",
  }
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 pt-24 pb-40 relative overflow-hidden">
      
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <Image 
           src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/leadership_abstract_portrait_bg_1776852505928.png"
           alt="Leadership Abstract Background"
           fill
           className="object-cover scale-110 blur-sm"
         />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment */}
        <div className="max-w-3xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-6 block">The Architects of Excellence</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-neutral-950 leading-[0.9]">
              Our Visionary <br /> Leadership
            </h1>
            <p className="text-xl text-neutral-600 font-medium leading-relaxed">
              Guided by a legacy of three decades, our leaders blend traditional wisdom with modern innovation to build a future-proof educational sanctuary.
            </p>
          </motion.div>
        </div>

        {/* Floating Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative h-full p-10 rounded-[3rem] bg-neutral-50 border border-black/3 transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-black/2 overflow-hidden flex flex-col">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="mb-10 flex justify-between items-start">
                   <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-neutral-200 to-neutral-100 p-px shadow-xl">
                      <div className="w-full h-full rounded-[calc(1.5rem-1px)] bg-white flex items-center justify-center">
                         <span className="text-2xl font-bold text-neutral-300">{leader.name[0]}</span>
                      </div>
                   </div>
                   <div className="px-4 py-1.5 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-secondary group-hover:border-secondary transition-colors">
                      {leader.role}
                   </div>
                </div>

                <div className="flex-1">
                   <h3 className="text-3xl font-black text-neutral-950 tracking-tighter mb-2 group-hover:text-primary transition-colors italic">
                      {leader.name}
                   </h3>
                   <p className="text-neutral-500 font-bold text-sm tracking-wide mb-8 uppercase">
                      {leader.title}
                   </p>
                   
                   <div className="relative mt-auto">
                      <Quote className="absolute -top-6 -left-6 w-12 h-12 text-black/[0.02]" />
                      <p className="relative z-10 text-neutral-600 font-serif italic text-lg leading-relaxed">
                         &quot;{leader.quote}&quot;
                      </p>
                   </div>
                </div>

                {/* Interactive Link */}
                <div className="mt-12 flex items-center justify-between text-neutral-400 group-hover:text-primary transition-colors">
                   <span className="text-xs font-bold uppercase tracking-widest">Full Profile</span>
                   <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                      <ArrowRight className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
