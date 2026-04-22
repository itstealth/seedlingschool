import Link from "next/link";
import { MoveRight, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 flex flex-col space-y-8 pr-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-blue-800 text-white flex items-center justify-center font-bold text-2xl tracking-tighter shadow-lg shadow-primary/20">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-tight text-neutral-950 tracking-tight">
                  Seedling
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
                  Group of Schools
                </span>
              </div>
            </div>
            <p className="text-base leading-relaxed text-neutral-600 font-medium">
              Dedicated to academic excellence and holistic growth. We empower students with the knowledge, values, and skills to thrive in a global society.
            </p>
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-neutral-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  <Globe className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-secondary font-black text-xs tracking-[0.3em] uppercase">Discover</h3>
            <ul className="space-y-4">
              {['Our Legacy', 'Leadership', 'Affiliations', 'Admissions', 'Career'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center text-sm font-bold text-neutral-500 hover:text-primary transition-colors">
                    <MoveRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Schools */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-secondary font-black text-xs tracking-[0.3em] uppercase">Our Schools</h3>
            <ul className="space-y-4">
              {['Seedling Public School', 'Seedling Modern High School', 'Seedling International Academy', 'The Kiderworld'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-sm font-bold text-neutral-500 hover:text-primary transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 mr-2 group-hover:bg-primary group-hover:scale-125 transition-all" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-secondary font-black text-xs tracking-[0.3em] uppercase">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <p className="text-sm font-bold text-neutral-600 leading-snug">
                  Sector-4, Jawahar Nagar, <br /> Jaipur, Rajasthan 302004
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+911412654395" className="text-sm font-bold text-neutral-600 hover:text-primary transition-colors">+91 141 265 4395</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@seedlingschools.com" className="text-sm font-bold text-neutral-600 hover:text-primary transition-colors">info@seedlingschools.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-neutral-400">
            &copy; {new Date().getFullYear()} Seedling Group of Schools. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {['Privacy Policy', 'Terms & Conditions', 'Mandatory Disclosure'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm font-bold text-neutral-400 hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

