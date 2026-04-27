"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { Users, Globe2, Briefcase, GraduationCap, ArrowRight, Quote, Heart } from "lucide-react";
import Image from "next/image";

const alumniStories = [
  {
    name: "Rahul Sharma",
    batch: "Batch of 2012",
    achievement: "Lead Engineer @ Google",
    quote: "The analytical foundations and character building at Seedling were pivotal in my journey to Silicon Valley.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    color: "primary"
  },
  {
    name: "Priya Gupta",
    batch: "Batch of 2008",
    achievement: "Social Impact Lead @ UNICEF",
    quote: "Seedling taught me that true excellence lies in serving the community. My passion for social work started here.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    color: "secondary"
  },
  {
    name: "Anish Jain",
    batch: "Batch of 2015",
    achievement: "Founder @ FinTech Startup",
    quote: "The leadership opportunities and the encouragement to take risks at school gave me the courage to start my own venture.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    color: "primary"
  }
];

export default function AlumniPage() {
  return (
    <main className="bg-neutral-bg min-h-screen">
      <PageHero 
        title="Alumni Network"
        subtitle="Our pride, our legacy. A global community of change-makers, leaders, and pioneers who once called Seedling home."
        image="https://images.unsplash.com/photo-1523580494863-6f30312248f5?auto=format&fit=crop&q=80"
      />

      {/* Stats Dashboard */}
      <section className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="glass-white p-12 md:p-16 rounded-[4rem] border-white/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Global Alumni', val: '5,000+', icon: Users, color: 'primary' },
              { label: 'Nations Represented', val: '50+', icon: Globe2, color: 'secondary' },
              { label: 'Success Stories', val: '500+', icon: Briefcase, color: 'primary' },
              { label: 'Legacy Years', val: '30+', icon: GraduationCap, color: 'secondary' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-6`} />
                <div className="text-4xl font-black text-neutral-950 mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-32">
          <span className="text-label mb-8 block uppercase">Success Stories</span>
          <h2 className="text-heading text-6xl md:text-9xl">Pioneering Spirits.</h2>
        </div>

        <div className="space-y-48">
          {alumniStories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-24 group`}
            >
              <div className="flex-1 relative aspect-[4/5] rounded-[5rem] overflow-hidden shadow-editorial transition-transform duration-1000 group-hover:scale-[1.02]">
                <Image src={story.image} alt={story.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-${story.color}/10 group-hover:bg-transparent transition-all duration-700`} />
              </div>
              
              <div className="flex-1 space-y-10 relative">
                <div className="w-24 h-24 rounded-3xl bg-neutral-950 flex items-center justify-center text-white mb-12 shadow-2xl group-hover:bg-primary transition-colors">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div>
                  <h3 className="text-4xl md:text-6xl font-black text-neutral-950 mb-4 tracking-tighter">{story.name}</h3>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-sm font-black text-secondary uppercase tracking-[0.3em]">{story.batch}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                    <span className="text-sm font-black text-primary uppercase tracking-[0.1em]">{story.achievement}</span>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-neutral-600 font-serif italic leading-snug mb-16">
                    &quot;{story.quote}&quot;
                  </p>
                  
                  <button className="inline-flex h-20 px-10 border-2 border-neutral-950 rounded-full items-center font-black text-lg hover:bg-neutral-950 hover:text-white transition-all group">
                    View Full Story
                    <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alumni Community Section */}
      <section className="py-48 bg-neutral-950 rounded-[5rem] mx-4 md:mx-8 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <Heart className="w-16 h-16 text-secondary mb-10 drop-shadow-2xl" />
              <h2 className="text-heading text-white text-6xl md:text-8xl mb-12 italic font-serif leading-tight">
                Stay <br /> <span className="text-secondary tracking-tighter">Connected.</span>
              </h2>
              <p className="text-white/50 text-xl font-medium mb-12 leading-relaxed">
                Reignite old friendships, mentor the next generation, and be a part of our exclusive alumni events held annually across major cities.
              </p>
              <button className="h-24 px-16 bg-white text-neutral-950 rounded-full font-black text-2xl shadow-editorial hover:bg-primary hover:text-white transition-all group">
                Join Alumni Portal
                <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Mentorship", sub: "Guide young Seedlingites" },
                { title: "Networking", sub: "Connect with global peers" },
                { title: "Events", sub: "Reunion & Gala nights" },
                { title: "Job Board", sub: "Exclusive opportunities" }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <h4 className="text-white text-xl font-black mb-2">{item.title}</h4>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
