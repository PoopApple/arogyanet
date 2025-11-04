import React from "react";
import Header from "./Header";
import BackgroundArt from "./BackgroundArt";
import BackgroundArtRotated90 from "./BackgroundArtRotated90";
import BackgroundArtRotatedNeg90 from "./BackgroundArtRotatedNeg90";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// @ts-ignore
import doctorPhoto from "../../assets/dr_circle_photo.webp";

const LandingPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-backg-950">
      <Header />

      {/* Fixed Background Arts - Stay constant in background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        
      </div>

      {/* Main Land Section */}
      <section id="main-land" className="relative min-h-screen bg-backg-950 z-10">
      <BackgroundArt />
        
        {/* Hero Section - Add padding-top to account for fixed header */}
        <div className="relative max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center">
          {/* AROGYANET Title - Positioned between header and doctor photo */}
          <div className="text-center whitespace-nowrap mb-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-sans"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-neutral-300 text-5xl md:text-7xl lg:text-[96px]">
                A
              </span>
              <span className="text-neutral-300 text-4xl md:text-6xl lg:text-[72px]">
                ROGYA
              </span>
              <span className="text-primary-800 text-5xl md:text-7xl lg:text-[96px]">
                N
              </span>
              <span className="text-primary-800 text-4xl md:text-6xl lg:text-[72px]">
                ET
              </span>
            </motion.h1>
          </div>

          {/* Main Content Row - Buttons and Doctor Photo */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 lg:gap-16 mt-24 md:mt-32 px-4">
            {/* Why It Matters Card - Left */}
            <div className="w-full md:w-auto flex-shrink-0">
              <motion.button 
                onClick={() => scrollToSection("why-it-matters")}
                className="w-full md:w-[280px] h-[150px] rounded-2xl bg-backg-950 shadow-lg hover:shadow-xl transition-shadow border border-neutral-800 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="text-center">
                  <h2 className="text-white font-sans mb-1">
                    <span className="text-3xl">W</span>
                    <span className="text-2xl">HY </span>
                    <span className="text-3xl">I</span>
                    <span className="text-2xl">T</span>
                  </h2>
                  <h2 className="text-white font-sans">
                    <span className="text-3xl">M</span>
                    <span className="text-2xl">ATTERS</span>
                  </h2>
                  <span className="text-primary-800 text-6xl font-sans block mt-1">
                    ?
                  </span>
                </div>
              </motion.button>
            </div>

            {/* Center Circle with Doctor Image */}
            <div className="relative z-10 flex-shrink-0">
              <div
                className="relative w-[180px] h-[180px] rounded-full flex items-center justify-center"
                style={{
                  boxShadow:
                    "0 0 90px 0 #D9D9D9, 0 0 50px 0 #D9D9D9, 0 0 30px 0 #D9D9D9, 0 0 15px 0 #D9D9D9",
                }}
              >
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-[9px] border-neutral-300/80" />

                {/* Inner Circle with Image */}
                <div className="w-[172px] h-[172px] rounded-full bg-gradient-to-br from-cyan-200 to-cyan-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={doctorPhoto}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Our Way Forward Card - Right */}
            <div className="w-full md:w-auto flex-shrink-0">
              <motion.button 
                onClick={() => scrollToSection("our-way-forward")}
                className="w-full md:w-[280px] h-[150px] rounded-2xl bg-backg-950 shadow-lg hover:shadow-xl transition-shadow border border-neutral-800 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.04 }}
              >
                <div className="text-center">
                  <h2 className="text-white font-sans mb-1">
                    <span className="text-3xl">O</span>
                    <span className="text-2xl">UR </span>
                    <span className="text-3xl">W</span>
                    <span className="text-2xl">AY</span>
                  </h2>
                  <h2 className="text-white font-sans">
                    <span className="text-3xl">F</span>
                    <span className="text-2xl">ORWARD</span>
                  </h2>
                  <span className="text-primary-800 text-6xl font-sans block mt-1">
                    !
                  </span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-20 md:mt-24 text-center px-4 max-w-3xl mx-auto">
            <p className="text-base md:text-2xl lg:text-3xl font-sans leading-relaxed">
              <span className="text-neutral-300 text-xl md:text-3xl lg:text-4xl">
                R
              </span>
              <span className="text-neutral-300 text-base md:text-2xl lg:text-3xl">
                EVOLUTIONISING{" "}
              </span>
              <span className="text-neutral-300 text-xl md:text-3xl lg:text-4xl">
                T
              </span>
              <span className="text-neutral-300 text-base md:text-2xl lg:text-3xl">
                HE{" "}
              </span>
              <span className="text-green-700 text-xl md:text-3xl lg:text-4xl">
                D
              </span>
              <span className="text-green-700 text-base md:text-2xl lg:text-3xl">
                IGITAL{" "}
              </span>
              <span className="text-green-700 text-xl md:text-3xl lg:text-4xl">
                H
              </span>
              <span className="text-green-700 text-base md:text-2xl lg:text-3xl">
                EALTHCARE{" "}
              </span>
              <span className="text-neutral-300 text-xl md:text-3xl lg:text-4xl">
                I
              </span>
              <span className="text-neutral-300 text-base md:text-2xl lg:text-3xl">
                NDUSTRY
              </span>
              <br />
              <span className="text-neutral-300 text-base md:text-2xl lg:text-3xl">
                ONE STEP AT A TIME
              </span>
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-it-matters" className="relative min-h-screen bg-backg-950 py-24 px-6 z-10">
      <BackgroundArtRotatedNeg90 />
      
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans mb-8">
                <span className="text-white text-4xl md:text-6xl lg:text-7xl">W</span>
                <span className="text-white text-3xl md:text-5xl lg:text-6xl">HY </span>
                <span className="text-white text-4xl md:text-6xl lg:text-7xl">I</span>
                <span className="text-white text-3xl md:text-5xl lg:text-6xl">T </span>
                <span className="text-primary-800 text-4xl md:text-6xl lg:text-7xl">M</span>
                <span className="text-primary-800 text-3xl md:text-5xl lg:text-6xl">ATTERS</span>
              </h2>
            </div>

            <div className="space-y-6 text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              <p>
                Healthcare today is fragmented, slow, and often insecure, with patients juggling multiple apps for appointments, reports, and follow-ups.
              </p>

              <p>
                Sensitive medical data remains vulnerable to breaches, and teleconsultation rarely replicates the experience of a real doctor visit.
              </p>

              <p>
                ArogyaNet matters because it bridges these gaps by creating a unified, secure, and user-friendly platform.
              </p>

              <p>
                It empowers patients with easier access to doctors, ensures their records are protected through a Hybrid Encryption Framework (HEF), and reduces human error with AI-driven assistance.
              </p>

              <p>
                By merging convenience, privacy, and intelligent support, it helps make healthcare faster, safer, and more reliable for everyone.
              </p>
            </div>

            {/* Navigation to Other Sections */}
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("our-way-forward")}
                className="px-6 py-3 rounded-lg bg-backg-950 border border-neutral-700 text-white hover:border-primary-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Way Forward →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Way Forward Section */}
      <section id="our-way-forward" className="relative min-h-screen bg-backg-950 py-24 px-6 z-10">
      <BackgroundArtRotated90 />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans mb-8">
                <span className="text-white text-4xl md:text-6xl lg:text-7xl">O</span>
                <span className="text-white text-3xl md:text-5xl lg:text-6xl">UR </span>
                <span className="text-white text-4xl md:text-6xl lg:text-7xl">W</span>
                <span className="text-white text-3xl md:text-5xl lg:text-6xl">AY </span>
                <span className="text-primary-800 text-4xl md:text-6xl lg:text-7xl">F</span>
                <span className="text-primary-800 text-3xl md:text-5xl lg:text-6xl">ORWARD</span>
              </h2>
            </div>

            <div className="space-y-6 text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              <p>
                We plan to expand Arogya Net into a more comprehensive digital health ecosystem.
              </p>

              <p className="font-medium">Future development will focus on:</p>

              <p>
                Integrating e-pharmacy and diagnostic labs for seamless prescription fulfillment and test result delivery
              </p>

              <p>
                Strengthening AI features to handle complex triage and symptom-based guidance
              </p>

              <p>
                Keeping our encryption and compliance in line with evolving global health standards like HIPAA and GDPR.
              </p>

              <p>
                Scaling the platform to handle more users, improving the chatbot's medical intelligence, and ensuring top-level security will drive its adoption and make it a trusted, future-ready healthcare solution.
              </p>
            </div>

            {/* Navigation to Other Sections */}
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <motion.button
                onClick={() => scrollToSection("why-it-matters")}
                className="px-6 py-3 rounded-lg bg-backg-950 border border-neutral-700 text-white hover:border-primary-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Why It Matters
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
