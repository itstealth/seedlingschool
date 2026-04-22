import React from "react";
import type { Metadata } from "next";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container } from "@/components/ui/Layout";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy | Seedling Group of Schools",
  description:
    "Official privacy policy of Seedling School. Learn how we collect, use, and protect your data when using our mobile application and digital services.",
  keywords:
    "Seedling School Privacy Policy, Data Protection, School App Privacy, Device ID Usage, Location Tracking Policy",
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <div className="space-y-4">
        <Text>
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for the School App is managed with the help of standard privacy policy frameworks.
        </Text>
        <Text>
          We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
        </Text>
        <Text>
          This Privacy Policy applies to the mobile application and digital services operated by Seedling School.
        </Text>
      </div>
    ),
  },
  {
    id: "device-id",
    title: "Usage Device ID for Mobile App",
    content: (
      <div className="space-y-4">
        <Text>Our app may collect device IDs for the following purposes:</Text>
        <ul className="list-none space-y-3">
          {[
            { label: "Analytics", text: "To understand app usage and improve performance" },
            { label: "App Functionality", text: "To ensure smooth operation of core features" },
            { label: "Security", text: "To prevent misuse, fraud, and illegal activities" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <Text>
                <strong className="text-primary font-bold">{item.label}:</strong> {item.text}
              </Text>
            </li>
          ))}
        </ul>
        <Text className="mt-4">
          We may share this data with trusted third-party partners only for the purposes mentioned above. All data is encrypted in transit to ensure user privacy and security.
        </Text>
        <Text>
          Users can request deletion of their data by contacting us at the email provided below.
        </Text>
      </div>
    ),
  },
  {
    id: "location",
    title: "Usage of Location",
    content: (
      <div className="space-y-4">
        <Text>
          Our school ERP solutions may include real-time location tracking, particularly for school transportation services. By enabling background location services, the app provides accurate updates of school bus locations, helping enhance student safety and operational efficiency.
        </Text>
        <Text>
          Location data is used strictly for safety, tracking, and operational purposes and is not shared for commercial use.
        </Text>
      </div>
    ),
  },
  {
    id: "usage-data",
    title: "Usage Data",
    content: (
      <div className="space-y-4">
        <Text>
          We may collect information that your browser or device sends whenever you access our Service ("Usage Data"). This may include:
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {[
            "Internet Protocol (IP) address",
            "Browser type and version",
            "Pages visited within the app or website",
            "Time and date of access",
            "Time spent on specific features",
            "Mobile device type & OS",
            "Unique device identifiers",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "Tracking & Cookies Data",
    content: (
      <div className="space-y-4">
        <Text>
          We use cookies and similar tracking technologies to track activity on our Service and store certain information.
          Cookies are small data files containing anonymous identifiers sent to your device.
        </Text>
        <div className="bg-primary/5 border-l-4 border-secondary p-6 rounded-r-2xl">
          <Text variant="small" className="text-primary font-bold">
            You may choose to refuse cookies through your browser settings; however, some portions of the Service may not function properly.
          </Text>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { tag: "Session Cookies", desc: "To operate the Service" },
            { tag: "Preference Cookies", desc: "To remember settings" },
            { tag: "Security Cookies", desc: "To enhance protection" },
          ].map((cookie, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 hover:border-secondary/20 transition-all duration-300 group hover:bg-slate-50">
              <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">{cookie.tag}</div>
              <Text variant="small">{cookie.desc}</Text>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Data",
    content: (
      <div className="space-y-3">
        <Text className="mb-4">Seedling School uses collected data for the following purposes:</Text>
        <div className="space-y-2">
          {[
            "To provide and maintain the Service",
            "To notify users about updates or changes",
            "To enable interactive features",
            "To provide customer support",
            "To improve app functionality and user experience",
            "To monitor usage and performance",
            "To detect, prevent, and resolve technical issues",
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <Text variant="small" className="font-bold">{point}</Text>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "transfer",
    title: "Transfer of Data",
    content: (
      <div className="space-y-4">
        <Text>
          Your information, including Personal Data, may be transferred to and maintained on servers located outside your state or country, where data protection laws may differ.
        </Text>
        <Text>
          If you are located outside India and choose to provide information, you consent to the transfer and processing of your data in India.
        </Text>
        <Text className="font-bold text-primary">
          Seedling School ensures that adequate security measures are in place to protect your data during such transfers.
        </Text>
      </div>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure of Data",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Legal Requirements</span>
        </div>
        <Text>Seedling School may disclose your Personal Data if required to:</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
          {[
            "Comply with legal obligations",
            "Protect the rights or property of the school",
            "Prevent or investigate wrongdoing",
            "Ensure the safety of users or the public",
            "Protect against legal liability",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-secondary" />
              <Text variant="small" className="font-medium">{item}</Text>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "security",
    title: "Security of Data",
    content: (
      <div className="space-y-4">
        <Text>
          The security of your data is important to us. While we use commercially acceptable measures to protect Personal Data, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
        </Text>
      </div>
    ),
  },
  {
    id: "service-providers",
    title: "Service Providers & Analytics",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <Text>We may engage third-party companies or individuals ("Service Providers") to:</Text>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 marker:text-secondary">
            <li><Text variant="small" className="font-bold">Facilitate the Service</Text></li>
            <li><Text variant="small" className="font-bold">Provide services on our behalf</Text></li>
            <li><Text variant="small" className="font-bold">Assist in analyzing Service usage</Text></li>
          </ul>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <Text variant="muted">
              These third parties are granted access to Personal Data only to perform assigned tasks and are contractually obligated to protect confidentiality.
            </Text>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <Heading variant="h4" className="mb-3 text-primary">Google Analytics</Heading>
          <Text className="mb-6">
            Google Analytics is a web analytics service provided by Google Inc. Google uses collected data to track and monitor usage of the Service. This information may be shared with other Google services.
          </Text>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="sm">
              Review Google’s Privacy Policy
              <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "links",
    title: "Links to Other Sites",
    content: (
      <Card variant="slate" padding="small">
        <Text>
          Our Service may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. Users are advised to review the privacy policies of any external sites they visit.
        </Text>
      </Card>
    ),
  },
  {
    id: "changes",
    title: "Changes to Policy",
    content: (
      <div className="space-y-4">
        <Text>
          We may update this Privacy Policy from time to time. Updates will be posted on this page and, where appropriate, notified via email or app notifications.
        </Text>
        <Text className="text-primary font-bold">Changes become effective once published.</Text>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Text>If you have any questions regarding this Privacy Policy, please contact us:</Text>
          <div className="p-4 bg-white rounded-xl shadow-premium border border-slate-100 flex items-center gap-4 hover:shadow-premium-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Email</div>
              <a href="mailto:seedlingacademy@hotmail.com" className="text-secondary font-bold text-sm">seedlingacademy@hotmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="p-4 bg-white rounded-xl shadow-premium border border-slate-100 flex items-center gap-4 hover:shadow-premium-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Website</div>
              <a href="https://seedlingschools.com/" target="_blank" className="text-primary font-bold text-sm">seedlingschools.com</a>
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-premium border border-slate-100 flex items-center gap-4 hover:shadow-premium-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Contact No</div>
              <a href="tel:01413623000" className="text-primary font-bold text-sm">0141-3623000</a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-bg selection:bg-secondary/20">
      {/* Hero Section */}
      <Section 
        padding="hero" 
        className="bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden"
        containerClassName="relative z-10 text-center"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-8 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-secondary/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Compliance Policy
        </div>
        <Heading className="text-white mb-8 uppercase italic">
          Privacy <span className="text-white/40 not-italic font-light tracking-widest">Policy</span>
        </Heading>
        <Text variant="lead" className="max-w-3xl mx-auto text-white/90">
          Your privacy is our priority. This document outlines how Seedling School handles data 
          with transparency, security, and integrity across all our digital platforms.
        </Text>
      </Section>

      {/* Main Content Area */}
      <Container className="py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-2 bg-white p-8 rounded-premium border border-neutral-bg/50 shadow-premium hidden lg:block overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8">
                Table of Contents
              </div>
              <nav className="space-y-1.5 relative z-10">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-accent hover:text-primary hover:bg-slate-50 transition-all duration-300"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Sections */}
          <main className="lg:w-3/4 space-y-12 pb-20">
            {sections.map((section, idx) => (
              <section 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-32 group"
              >
                <Card padding="none" className="hover:shadow-premium-hover translation-all duration-500">
                  <CardHeader className="bg-primary/95 group-hover:bg-primary transition-colors duration-500 p-6 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white font-black text-lg shadow-xl shadow-black/20">
                      {idx + 1}
                    </div>
                    <Heading variant="h3" className="text-white text-xl md:text-2xl uppercase tracking-[0.2em] italic font-black">
                      {section.title}
                    </Heading>
                  </CardHeader>
                  <CardContent className="p-8 md:p-12">
                    <div className="max-w-none">
                      {section.content}
                    </div>
                  </CardContent>
                </Card>
              </section>
            ))}

            {/* Final CTA */}
            <Card variant="primary" className="mt-16 text-center space-y-8 p-12 md:p-20 relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Heading variant="h2" className="text-white mb-6 uppercase italic font-black tracking-tighter">
                  Privacy Secured
                </Heading>
                <Text className="text-white/70 max-w-xl mx-auto mb-10 font-bold">
                  We are committed to maintaining the highest standards of data protection. 
                  If you have concerns, our team is here to help.
                </Text>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:seedlingacademy@hotmail.com">
                    <Button variant="secondary">Contact Support</Button>
                  </a>
                  <a href="/terms-and-conditions">
                    <Button variant="ghost" className="text-white hover:bg-white/10">Terms of Service</Button>
                  </a>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </Container>

      {/* Footer Section */}
      <footer className="bg-primary py-16 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>
        <Container className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-2xl">
              <div className="w-full h-full bg-primary rounded-xl flex items-center justify-center text-white font-black uppercase tracking-widest text-lg italic">
                S
              </div>
            </div>
            <div>
              <span className="block font-black text-xl text-white uppercase italic tracking-tighter">Seedling Schools</span>
              <span className="text-white/40 text-[10px] font-black tracking-[0.4em] uppercase">Compliance Division</span>
            </div>
          </div>
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
            © {new Date().getFullYear()} | Mandatory Disclosure Compliant | Jaipur • Rajasthan
          </div>
          <div className="flex gap-8">
            <a href="/terms-and-conditions" className="text-[10px] font-black text-white/40 hover:text-white uppercase tracking-[0.3em] transition-colors">Terms</a>
            <a href="#introduction" className="text-[10px] font-black text-white/40 hover:text-white uppercase tracking-[0.3em] transition-colors">Top</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
