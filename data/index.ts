import { Github, Linkedin, Twitter } from "lucide-react";

const data = {
  home: {
    name: "Ewherhe Akpesiri",
    description: "I Fix, Optimize & Build #Next_js & #React Apps", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/Akpcodes636",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/ewherhe-akpesiri-73358819a/",
        icon: Linkedin,
      },
      {
        name: "x",
        link: "https://x.com/bigRonNY65",
        icon: Twitter,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Flextable",
        description:
          "Flextable is a Marketplace that connects remote workers, creators and Businesses to Spaces for work, Events, Meetings and Productions \n\n Technologies Used: Next.js, TailwindCss, MongoDB.",
        image: "/projects-imgs/flextable.png",
        previewLink: "https://flextable.co",
      },
      {
        id: 2,
        title: "E-commerce Platform",
        description:
          "The goal of FYSI Marketplace is to promote sustainable shopping by connecting vendors who offer eco-friendly products with conscious consumers. \n\n Technologies Used: Next.js, TailwindCss, MongoDB.",
        image: "/projects-imgs/greenhouse.png",
        previewLink: "https://greenhouse-front-end.vercel.app",
      },
      {
        id: 3,
        title: "INSTRUMENTS Brazzer E-commerce",
        description:
          "An E-commerce Website for the sales and Testing of Metrology Calibertaion Instruments. \n\n Technologies Used: Next.js, TailwindCSS. work in progress",
        image: "/projects-imgs/Brazzers.png",
        previewLink: "https://bazzar-orpin.vercel.app/",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
    ],
  },
  contact: {
    email: "ewherheakpesiri@gmail.com",
    name: "Ewherhe Akpesiri",
  },
};

export default data;
