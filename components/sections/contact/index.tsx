// "use client";
// import { Globe } from "lucide-react";
// import ChatAssistant from "./chat-assistant";
// import { ContactForm } from "./contact-form";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import useCurSection from "@/hooks/use-cur-section";
// import data from "@/data";
// import Image from "next/image";

// export default function ContactSection() {
//   const [gameTurnsLeft, setGameTurnsLeft] = useState(1);
//   const ref = useRef(null);
//   useCurSection(ref, 0.5);
//   return (
//     <div
//       ref={ref}
//       id="contact"
//       className="w-full flex flex-col items-center container py-32"
//     >
//       <Image
//         src="/imgs/logo.png"
//         alt="Contact"
//         width={150}
//         height={150}
//         className="my-4"
//       />
//       <h1 className="text-center text-2xl md:text-4xl  mb-12">
//         <span className="text-gradient-primary">{"{ "}</span>
//         Contact Me
//         <span className="text-gradient-primary">{" }"}</span>
//       </h1>
//       <div className="flex items-center gap-6 flex-col lg:flex-row justify-around w-full h-full">
//         <div className="flex flex-col items-center gap-2 text-center w-[450px]">
//           <ChatAssistant />
//         </div>

//         <motion.div
//           layout
//           className="w-[450px] h-[500px] rounded-2xl bg-muted border overflow-hidden"
//         >
//           <div className="flex justify-between flex-shrink-0 px-4 pt-2">
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Globe size={18} />
//               <span>{data.contact.email}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="block rounded-full size-3 bg-green-500 ml-auto" />
//               <span className="block rounded-full size-3 bg-yellow-500" />
//               <span className="block rounded-full size-3 bg-red-500 " />
//             </div>
//           </div>
//           <div className="p-6">
//             <ContactForm />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscMail } from 'react-icons/vsc';

export default function ContactMe() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const contactLines = [
    { code: "const ContactMe = () => {", type: "function" },
    { code: "  const contactInfo = {", type: "variable" },
    { code: "    name: 'Ewherhe Akpesiri',", type: "array-item" },
    { code: "    role: 'Frontend Developer',", type: "array-item" },
    { code: "    email: 'ewherheakpesiri@gmail.com,", type: "array-item" },
    { code: "    message: 'Let&apos;s build something amazing!';", type: "array-item" },
    { code: "  };", type: "array-end" },
    { code: "", type: "blank" },
    { code: "  return (", type: "return-object" },
    { code: "    <section className=\"contact-container\">", type: "object-method" },
    { code: "      <h2>Contact Me</h2>", type: "object-method" },
    { code: "      <p>{contactInfo.message}</p>", type: "object-method" },
    { code: "      <a href={`mailto:${contactInfo.email}`}>", type: "object-method" },
    { code: "        Send Email", type: "object-method" },
    { code: "      </a>", type: "object-method" },
    { code: "    </section>", type: "object-method" },
    { code: "  );", type: "close" },
    { code: "};", type: "close-function" },
    { code: "", type: "blank" },
    { code: "export default ContactMe;", type: "function-call" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % contactLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [contactLines.length]);

  return (
    <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-6 rounded-[var(--radius)] border border-[hsl(var(--border))] shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-[hsl(var(--primary))]">Work With Me!</h2>
        <p className="text-[hsl(var(--muted-foreground))] mt-2">Have an exciting project? Connect with me and build something amazing!</p>
          <div className="mt-4">
            <Link href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-4 py-2 text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] rounded-md hover:bg-opacity-80 transition">
              Contact Me <VscMail />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[hsl(var(--card))] p-4 rounded-lg border border-[hsl(var(--border))] shadow-inner">
          <div className="font-mono text-sm">
            {contactLines.map((line, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${index === activeLineIndex ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))]'}`}
              >
                {line.code}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
