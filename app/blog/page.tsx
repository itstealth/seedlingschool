"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { Search, Calendar, User, ArrowRight, Share2, Filter } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "Nurturing Emotional Intelligence in the Digital Age",
    author: "Mrs. Mohini Bakshi",
    role: "Founding Director",
    date: "April 10, 2026",
    category: "Parenting",
    image: "https://images.unsplash.com/photo-1544717297-fa154da09f9d?auto=format&fit=crop&q=80",
    desc: "How we can guide children to navigate the complex world of digital interactions while staying rooted in emotional maturity."
  },
  {
    title: "The Future of STEAM Education: Beyond Coding",
    author: "Dr. Sandeep Bakshi",
    role: "Director",
    date: "March 28, 2026",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1564910443496-5fd2d068ddca?auto=format&fit=crop&q=80",
    desc: "Exploring how interdisciplinary learning is shaping the innovative minds of tomorrow's global citizens."
  },
  {
    title: "Holistic Growth: The Role of Competitive Sports",
    author: "Coach Aryan Sharma",
    role: "Sports Coordinator",
    date: "March 15, 2026",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1526676023131-d356ded0e3d8?auto=format&fit=crop&q=80",
    desc: "Lessons of discipline, resilience, and teamwork that are best learned on the sports field."
  },
  {
    title: "International Mindedness in the CBSE Curriculum",
    author: "Ms. Preeti Bakshi",
    role: "Executive Director",
    date: "February 22, 2026",
    category: "Global Education",
    image: "https://images.unsplash.com/photo-1523580494863-6f30312248f5?auto=format&fit=crop&q=80",
    desc: "How Seedling bridges the gap between traditional board requirements and international learning standards."
  },
  {
    title: "Art Therapy: Expressing Through Colors",
    author: "Ms. Ananya Ray",
    role: "Visual Arts Mentor",
    date: "February 05, 2026",
    category: "Creative Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
    desc: "Encouraging students to find their voice and process emotions through creative visual expression."
  },
  {
    title: "Developing Leadership: Student Council Experience",
    author: "Aditya Verma",
    role: "Head Boy '25",
    date: "January 20, 2026",
    category: "Student Speak",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    desc: "A personal account of how being part of the student council transformed my perspective on responsibility."
  }
];

export default function BlogPage() {
  return (
    <main className="bg-neutral-bg min-h-screen">
      <PageHero 
        title="Our Blog"
        subtitle="Insights from our mentors and students. Exploring the nuances of education, parenting, and growth in the 21st century."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
      />

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24 items-center">
          <div className="flex-1 relative w-full lg:w-auto">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-neutral-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search articles, authors, categories..." 
              className="w-full h-24 pl-20 pr-10 rounded-full bg-white border border-black/5 shadow-editorial focus:ring-2 focus:ring-primary focus:outline-hidden transition-all text-xl font-medium"
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none h-24 px-12 bg-white rounded-full border border-black/5 shadow-editorial flex items-center justify-center gap-4 font-black text-sm uppercase tracking-widest hover:bg-neutral-50 transition-all">
              <Filter className="w-5 h-5 text-secondary" />
              Categories
            </button>
            <button className="flex-1 lg:flex-none h-24 px-12 bg-neutral-950 text-white rounded-full shadow-editorial flex items-center justify-center gap-4 font-black text-sm uppercase tracking-widest hover:bg-primary transition-all">
              Latest Posts
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-4/3 rounded-[4rem] overflow-hidden mb-10 shadow-editorial">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 rounded-full glass-white text-neutral-950 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-xs font-black text-neutral-400 uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    {post.date}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                  <div className="flex items-center gap-2 text-xs font-black text-neutral-400 uppercase tracking-widest">
                    <User className="w-3.5 h-3.5 text-secondary" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-neutral-950 tracking-tighter leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-lg text-neutral-500 font-medium leading-relaxed flex-1">
                  {post.desc}
                </p>
                
                <div className="pt-10 border-t border-black/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Written By</span>
                    <span className="text-sm font-black text-neutral-950">{post.role}</span>
                  </div>
                  <button className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all group/btn shadow-inner">
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-32 flex justify-center items-center gap-4">
           {[1, 2, 3, "...", 12].map((p, i) => (
             <button 
              key={i} 
              className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black transition-all ${
                i === 0 ? "bg-primary text-white shadow-lg" : "bg-white text-neutral-400 border border-black/5 hover:bg-neutral-50"
              }`}
             >
               {p}
             </button>
           ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-48 bg-neutral-950 rounded-[5rem] mx-4 md:mx-8 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-10 text-center">
          <span className="text-label text-secondary mb-8 block uppercase tracking-[0.4em]">Stay in the loop</span>
          <h2 className="text-heading text-white text-6xl md:text-8xl mb-12 italic font-serif leading-tight">
            The Seedling <br /> <span className="text-secondary tracking-tighter">Journal.</span>
          </h2>
          <p className="text-white/50 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Get the latest educational insights, campus news, and parenting tips delivered directly to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 h-20 px-10 rounded-full bg-white/5 border border-white/10 text-white focus:outline-hidden focus:ring-2 focus:ring-primary transition-all font-medium text-lg"
            />
            <button className="h-20 px-12 bg-white text-neutral-950 rounded-full font-black text-xl hover:bg-primary hover:text-white transition-all shadow-editorial">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
