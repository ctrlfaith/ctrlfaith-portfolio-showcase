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
      <main className="px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 max-w-6xl mx-auto">
        <section className="glass-apple px-6 sm:px-8 md:px-14 py-10 sm:py-12 md:py-14 flex flex-col md:flex-row items-center gap-8 md:gap-16">
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

          <div className="text-center md:text-left w-full">
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Hi there, I&apos;m
              <br className="hidden sm:block" />
              <span className="block sm:inline">Phuriphatthanachai</span>
              <br />
              Rattanatham
            </h1>

            <div className="mt-5 sm:mt-6 space-y-2 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
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

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              <div className="info-rail flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-6">
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
                  <span className="segment-chip text-xs sm:text-sm">
                    Web Dev &amp; Testing
                  </span>
                </div>
              </div>

              <div className="tagline flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
                <span className="tag whitespace-nowrap inline-flex items-center text-xs sm:text-sm">
                  <Code2 size={14} className="mr-1.5 shrink-0" />
                  Web Development
                </span>

                <span className="tag-sep" />

                <span className="tag whitespace-nowrap inline-flex items-center text-xs sm:text-sm">
                  <Cable size={14} className="mr-1.5 shrink-0" />
                  API Development
                </span>

                <span className="tag-sep" />

                <span className="tag whitespace-nowrap inline-flex items-center text-xs sm:text-sm">
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
