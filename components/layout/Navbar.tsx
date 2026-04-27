"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  {
    name: "About",
    href: "/about",
    subLinks: [
      { name: "Intro", href: "/about" },
      { name: "Legacy", href: "/about/legacy" },
      { name: "Vision", href: "/about/vision" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Affiliation", href: "/about/affiliation" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    subLinks: [
      { name: "Curriculum", href: "/academics/curriculum" },
      { name: "Learning Support", href: "/academics/learning-support" },
      { name: "Roll of Honour", href: "/academics/roll-of-honour" },
      { name: "Faculty", href: "/academics/faculty" },
    ],
  },
  {
    name: "School Life",
    href: "/school-life",
    subLinks: [
      { name: "Media", href: "/school-life/media" },
      { name: "Sports", href: "/school-life/sports" },
      { name: "Beyond Academics", href: "/school-life/beyond-academics" },
    ],
  },
  {
    name: "Campus Highlights",
    href: "/campus-highlights",
    subLinks: [
      { name: "News", href: "/campus-highlights/news" },
      { name: "Events", href: "/campus-highlights/events" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    subLinks: [
      { name: "Process", href: "/admissions/process" },
      { name: "Fee Structure", href: "/admissions/fee-structure" },
      { name: "Transport", href: "/admissions/transport" },
    ],
  },
  { name: "Career", href: "/career" },
  { name: "Alumni", href: "/alumni" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-primary via-secondary to-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <nav className={`relative rounded-full transition-all duration-700 border border-white/40 shadow-editorial ${
            isScrolled ? "glass-white py-3 px-8" : "bg-transparent py-4 px-10 border-transparent shadow-none"
          }`}>
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl tracking-tighter shadow-lg transition-all duration-500 ${isScrolled ? "bg-primary text-white scale-90" : "bg-white text-primary"}`}>
                    S
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-black text-xl leading-none tracking-tight transition-colors ${isScrolled ? "text-neutral-950" : "text-white"}`}>
                      Seedling
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-black transition-colors ${isScrolled ? "text-secondary" : "text-white/60"}`}>
                      Group of Schools
                    </span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-2">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.subLinks ? (
                      <button className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-black tracking-tight transition-all rounded-full hover:bg-neutral-50 hover:text-primary whitespace-nowrap ${isScrolled ? "text-neutral-600" : "text-white"}`}>
                        {item.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-60`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-4 py-2.5 text-[13px] font-black tracking-tight transition-all rounded-full whitespace-nowrap ${isScrolled ? (pathname === item.href ? "text-primary bg-primary/5" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary") : (pathname === item.href ? "bg-white/10 text-white" : "text-white hover:bg-white/10")}`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.subLinks && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 w-[280px]">
                        <div className="relative glass-white overflow-hidden p-3 rounded-[2.5rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex flex-col gap-1">
                            {item.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className={`flex items-center justify-between px-6 py-4 text-[14px] font-black rounded-2xl transition-all ${
                                  pathname === subLink.href
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                                }`}
                              >
                                {subLink.name}
                                <ArrowUpRight className={`w-4 h-4 transition-all ${pathname === subLink.href ? "opacity-100" : "opacity-0 group-hover/sub:opacity-100"}`} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden xl:flex items-center gap-4">
                <Link
                  href="/admissions"
                  className={`px-8 py-3.5 font-black text-sm rounded-full transition-all duration-500 shadow-editorial hover:scale-[1.05] active:scale-95 ${isScrolled ? "bg-neutral-950 text-white hover:bg-primary" : "bg-white text-neutral-950 hover:bg-primary hover:text-white"}`}
                >
                  Apply Now &apos;26
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className={`p-3 rounded-2xl ${isScrolled ? "bg-neutral-100 text-neutral-950" : "bg-white/10 text-white"} transition-colors`}
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/40 backdrop-blur-md xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[400px] bg-white xl:hidden overflow-hidden flex flex-col rounded-l-[3.5rem] shadow-editorial"
            >
              <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between p-8 border-b border-black/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl">S</div>
                    <div className="flex flex-col">
                      <span className="font-black text-xl leading-tight text-neutral-950 tracking-tight">Seedling</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black">Group of Schools</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-3 text-neutral-500 hover:text-neutral-950 transition-colors bg-neutral-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-10">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <div key={item.name} className="flex flex-col">
                        {item.subLinks ? (
                          <>
                            <button
                              onClick={() => toggleAccordion(item.name)}
                              className={`flex items-center justify-between py-5 text-xl font-black transition-colors ${activeAccordion === item.name ? "text-primary" : "text-neutral-950"}`}
                            >
                              {item.name}
                              <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${activeAccordion === item.name ? "rotate-180" : "opacity-30"}`} />
                            </button>
                            <AnimatePresence>
                              {activeAccordion === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-2 pb-6 pl-6 border-l-2 border-primary/20 ml-2">
                                    {item.subLinks.map((subLink) => (
                                      <Link 
                                        key={subLink.name}
                                        href={subLink.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between p-5 rounded-2xl transition-all ${pathname === subLink.href ? "bg-primary/5 text-primary font-black" : "text-neutral-600 hover:bg-neutral-50"}`}
                                      >
                                        <span className="text-lg">{subLink.name}</span>
                                        <ArrowUpRight className="w-5 h-5 opacity-40" />
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="py-5 text-xl font-black text-neutral-950"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-10 bg-neutral-50 border-t border-black/5 mt-auto">
                   <Link
                    href="/admissions"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-4 w-full h-20 bg-neutral-950 text-white font-black text-xl rounded-3xl shadow-editorial hover:bg-primary transition-all"
                  >
                    Apply for Admission 2026
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
