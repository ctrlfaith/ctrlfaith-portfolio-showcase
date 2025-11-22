"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { BadgeCheck, Target, Code2, FlaskConical, Cable } from "lucide-react";

export default function Page() {
  return (
    <>
      <div id="home" className="absolute top-0" />
      <Navbar />
      <main className="px-6 pt-36 pb-24 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="glass-apple px-10 md:px-14 py-12 md:py-14 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Memoji */}
          <div className="memoji-holder shrink-0 animate-float">
            <div className="memoji-wrap">
              <Image
                src="/memoji/memoji-hi.png"
                alt="memoji-hi"
                width={240}
                height={240}
                className="memoji-img"
                priority
              />
            </div>
            <span className="badge-glass badge-top-right">
              <span className="badge-emoji">👋</span>
              <span>Available</span>
              <span className="badge-dot" />
            </span>
          </div>

          {/* Hero Text */}
          <div className="text-center md:text-left">
            <h1 className="hero-title">
              Hi there, I&apos;m Phuriphatthanachai <br /> Rattanatham
            </h1>

            <div className="mt-6 space-y-2 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>4th-year IT Student at Rambhai Barni Rajabhat University</p>
              <p>
                Passion for <strong>Web Development</strong>,{" "}
                <strong>API Development</strong>, and{" "}
                <strong>Software Testing</strong>
              </p>
              <p>
                Exploring both <strong>Dev</strong> and <strong>QA</strong>{" "}
                paths to become a well-rounded software engineer
              </p>
            </div>

            {/* Status & Focus */}
            <div className="mt-8 space-y-5">
              <div className="info-rail flex flex-wrap gap-4 md:gap-6">
                <div className="segment segment-green">
                  <BadgeCheck size={16} className="opacity-70" />
                  <span className="segment-label">STATUS</span>
                  <span className="segment-chip-green">
                    Ready for internship
                  </span>
                </div>

                <div className="segment segment-blue">
                  <Target size={16} className="opacity-70" />
                  <span className="segment-label">FOCUS</span>
                  <span className="segment-chip">
                    Web Development &amp; Testing
                  </span>
                </div>
              </div>

              <div className="tagline md:flex-nowrap">
                <span className="tag whitespace-nowrap inline-flex items-center">
                  <Code2 size={14} className="mr-1.5 shrink-0" />
                  Web Development
                </span>
                <span className="tag-sep" />
                <span className="tag whitespace-nowrap inline-flex items-center">
                  <Cable size={14} className="mr-1.5 shrink-0" />
                  API Development
                </span>
                <span className="tag-sep" />
                <span className="tag whitespace-nowrap inline-flex items-center">
                  <FlaskConical size={14} className="mr-1.5 shrink-0" />
                  Software Testing
                </span>
              </div>
            </div>
          </div>
        </section>

        <AboutSection id="about" />
        <TechStackSection id="tech-stack" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </>
  );
}
