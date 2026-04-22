"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-secondary origin-left z-[60]"
        style={{ scaleX }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`relative rounded-3xl transition-all duration-500 border border-black/3 shadow-2xl shadow-black/2 ${
            isScrolled ? "bg-white/80 backdrop-blur-xl" : "bg-white/40 backdrop-blur-md"
          }`}>
            <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-10">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary to-blue-800 text-white flex items-center justify-center font-bold text-2xl tracking-tighter shadow-lg group-hover:scale-105 transition-transform duration-300">
                    S
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl leading-tight text-neutral-950 tracking-tight">
                      Seedling
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
                      Group of Schools
                    </span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-1">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.subLinks ? (
                      <button className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-bold text-neutral-700 hover:text-primary transition-all rounded-full hover:bg-neutral-100 whitespace-nowrap">
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-60" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-[13px] font-bold transition-all rounded-full hover:bg-neutral-100 whitespace-nowrap ${
                          pathname === item.href
                            ? "text-primary bg-primary/5"
                            : "text-neutral-700 hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.subLinks && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[240px]">
                        <div className="relative bg-white shadow-2xl rounded-[1.5rem] overflow-hidden border border-black/5 p-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="absolute inset-0 noise-bg pointer-events-none opacity-[0.03]" />
                          
                          <div className="relative z-10 flex flex-col">
                            {item.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className={`flex items-center px-4 py-3 leading-none text-[13px] rounded-xl transition-all ${
                                  pathname === subLink.href
                                    ? "bg-primary/5 text-primary font-bold"
                                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                                }`}
                              >
                                <div className={`w-1 h-1 rounded-full bg-primary mr-3 transition-all ${pathname === subLink.href ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                                {subLink.name}
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
                  className="px-6 py-2.5 bg-linear-to-br from-primary to-blue-800 text-white text-sm font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95"
                >
                  Apply Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2.5 bg-neutral-100 rounded-xl text-neutral-700 hover:text-neutral-950 transition-colors"
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
              className="fixed inset-0 z-50 bg-neutral-950/20 backdrop-blur-sm xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[360px] bg-white shadow-2xl xl:hidden overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 noise-bg pointer-events-none opacity-[0.02]" />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between p-6 border-b border-black/3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg">
                      S
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg leading-tight text-neutral-950">Seedling</span>
                      <span className="text-[9px] uppercase tracking-wider text-secondary font-bold">Group of Schools</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-950 transition-colors bg-neutral-100 rounded-full"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <div key={item.name} className="flex flex-col">
                        {item.subLinks ? (
                          <>
                            <button
                              onClick={() => toggleAccordion(item.name)}
                              className={`flex items-center justify-between py-4 text-[15px] font-bold transition-colors ${activeAccordion === item.name ? "text-primary" : "text-neutral-950"}`}
                            >
                              {item.name}
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  activeAccordion === item.name ? "rotate-180" : "opacity-40"
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeAccordion === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-2 pb-4 pl-4 border-l-2 border-primary/10 ml-1">
                                    {item.subLinks.map((subLink) => (
                                      <div key={subLink.name} className="group/item">
                                        <Link 
                                          href={subLink.href}
                                          onClick={() => setIsOpen(false)}
                                          className="block p-4 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-black/5 transition-all"
                                        >
                                          <span className="block text-sm font-bold text-neutral-900 group-hover/item:text-primary transition-colors">{subLink.name}</span>
                                        </Link>
                                      </div>
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
                            className="py-4 text-[15px] font-bold text-neutral-950"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-neutral-50 border-t border-black/3 mt-auto">
                   <Link
                    href="/admissions"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-2 w-full px-6 py-4 bg-linear-to-br from-primary to-blue-800 text-white font-bold rounded-2xl shadow-xl shadow-primary/20"
                  >
                    Apply for Admission 2026
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
