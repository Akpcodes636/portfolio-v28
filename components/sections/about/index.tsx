"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref);

  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-base sm:text-lg md:text-xl leading-relaxed"
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex flex-col items-center gap-9 w-10/12 mx-auto p-5 rounded-lg container">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale hover:grayscale-0 transition-all object-cover"
              width={600}
              height={600}
              alt="about profile image"
              src="/imgs/computer.png"
            />
          </motion.div>
        </div>

        {/* About Me Text */}
        <div className="space-y-6 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-secondary">{"< "}</span>
            <span className="text-gradient-secondary text-4xl">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>

          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground text-center sm:text-center md:text-start lg:text-start"
          >
            Hey, I&apos;m <strong>Ewherhe Akpesiri</strong>, a passionate **Frontend Developer** who loves building digital experiences that feel smooth, intuitive, and engaging.  
            <br /><br />
            From designing **visually stunning user interfaces** to optimizing performance under the hood, I thrive on solving real-world problems through **clean, scalable, and efficient code**. Whether it&apos;s **React, Next.js, or Tailwind CSS**, I bring ideas to life with a keen eye for detail and a touch of creativity.
            <br /><br />
            
            <span className="font-semibold">📌 My Superpowers:</span>
            <ul className="list-disc pl-5">
              <li>✨ **Building Scalable Web Apps** – High-performance **React & Next.js** applications.</li>
              <li>🚀 **Performance Optimization** – Speeding up load times and ensuring **SEO-friendly** websites.</li>
              <li>🔍 **Debugging & Problem Solving** – Fixing UI bugs, API issues, and tricky layout problems.</li>
              <li>🧠 **Creative UI & UX Design** – Making interfaces **clean, responsive, and user-friendly**.</li>
            </ul>

            <br />

            <span className="font-semibold">📌 Why Work With Me?</span>
            <ul className="list-disc pl-5">
              <li>⚡ **I focus on user experience** – A website should be **fast, accessible, and engaging**.</li>
              <li>⚡ **I write clean, maintainable code** – No messy workarounds, just scalable solutions.</li>
              <li>⚡ **I work fast & efficiently** – Getting things done without unnecessary delays.</li>
            </ul>

            <br />  

            <span className="font-semibold">📌 Let&apos;s Create Something Amazing! 🚀</span>
            <br />
            If you need a frontend developer to **build, optimize, or enhance** your web application, let&apos;s connect!  
            <br /><br />
            <a href="#contact" className="text-primary hover:underline font-semibold">
              👉 Let&apos;s Talk – Contact Me Here
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
