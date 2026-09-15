"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
//   Github,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiQwen,
  SiStreamlit,
  
} from "react-icons/si";
import Image from "next/image";

type ProjectCategory = "All" | "Frontend" | "Full-Stack" | "AI / ML";

type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  image?: string;
  description: string;
  technologies: {
    name: string;
    icon?: React.ElementType;
  }[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

function TechnologyBadge({
  technology,
}: {
  technology: {
    name: string;
    icon?: React.ElementType;
  };
}) {
  const Icon = technology.icon;

  return (
    <div className="inline-flex items-center gap-1.5 rounded-lg border  bg-muted/40 px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
      <span>{technology.name}</span>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "EthioTravel Hub",
    category: "Full-Stack",
    image: "/projects/ethio-travel.png",
    description:
      "A modern travel and tour management platform designed for Ethiopian travel agencies, tour operators, hotels, guides, and travelers.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
    github: "https://github.com/codequeen-11",
    demo: "#",
    featured: true,
  },
   {
    title: "Foodie Finder",
    category: "Frontend",
    image: "/projects/foodie-finder.png",
    description:
      "A responsive recipe discovery platform that helps users explore meals, search recipes, filter categories, and save their favorite dishes.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      // { name: "TheMealDB API", icon: SiThemealdb },
    ],
    github: "https://github.com/codequeen-11",
    demo: "https://foodie-finder-web-app.netlify.app/",
    featured: true,
  },

   {
    title: "Smart Support Automation",
    category: "Full-Stack",
    image: "/projects/smart-support.png",
    description:
      "A customer support automation application designed to streamline support workflows using modern web technologies and AI-inspired automation.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    github: "https://github.com/codequeen-11",
    demo: "https://smart-email-support.vercel.app",
  },

  // {
  //   title: "UnlockGen Travel AI",
  //   category: "AI / ML",
  //   description:
  //     "An AI-powered travel platform focused on improving travel planning through intelligent recommendations and personalized travel experiences.",
  //   technologies: [
  //     { name: "Python", icon: SiPython },
  //     { name: "React", icon: SiReact },
  //     { name: "Generative AI", icon: Sparkles },
  //     { name: "Node.js", icon: SiNodedotjs },
  //   ],
  //   github: "https://github.com/codequeen-11",
  //   demo: "#",
  //   featured: true,
  // },
  {
    title: "Credit Risk Modeling",
    category: "AI / ML",
    image: "/projects/credit-risk-modeling.png",
    description:
      "A machine learning project for predicting credit risk using transaction data, feature engineering, model pipelines, evaluation, and explainability.",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
    github: "https://github.com/codequeen-11/credit-risk-model",
    // demo: "#",
  },
  {
  title: "RAG Complaint Chatbot",
  category: "AI / ML",
  description:
    "An AI-powered complaint analysis system that uses semantic search and RAG to retrieve relevant consumer financial complaints from the CFPB dataset.",
  image: "/projects/rag-complaint-chatbot.png",
  technologies: [
     { name: "Python", icon: SiPython },
    { name: "ChromaDB" },
    { name: "Sentence Transformers"},
    { name: "Qwen", icon: SiQwen },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "LangChain" },
    
  ],
  github: "https://github.com/codequeen-11/rag-complaint-chatbot",
  // demo: "#",
  featured: true,
},

{
  title: "Medical Telegram Warehouse",
  category: "AI / ML",
  image: "/projects/medical-telegram-warehouse.png",
  description:
    "An end-to-end data warehouse pipeline that collects Ethiopian medical business data from Telegram and transforms it into analytics-ready models.",
  technologies: [
    { name: "Python", icon: SiPython },
    { name: "Telethon" },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQLAlchemy" },
    { name: "dbt" },
  ],
  github: "https://github.com/codequeen-11/medical-telegram-werehouse",
  // demo: "#",
  featured: true,
},

  {
    title: "Amazon E-commerce Clone",
    category: "Full-Stack",
    description:
      "A full-stack e-commerce application inspired by modern online shopping platforms, with product browsing, authentication, cart functionality, and a structured backend.",
    image: "/projects/amazon.png",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
    ],
    github: "https://github.com/codequeen-11",
    demo: "https://amazon-website-full-app-trial.netlify.app/",
    featured: true,
  },
  
  {
    title: "Netflix Clone",
    category: "Frontend",
    image: "/projects/netflix-clone.png",
    description:
      "A responsive streaming-platform interface built to practice modern React development, component architecture, and responsive UI design.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/codequeen-11",
    demo: "https://clone-nefflix-app.netlify.app/",
  },
  {
    title: "Ethiopian Food Menu",
    category: "Frontend",
    image: "/projects/ethiopian-food.jpg",
    description:
      "A modern interactive food menu application showcasing Ethiopian dishes through a clean and responsive interface.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/codequeen-11",
    demo: "https://ethiopian-cultural-little-menu.netlify.app/",
    // https://amazon-website-full-app-trial.netlify.app/
  },
];

const filters: ProjectCategory[] = [
  "All",
  "Frontend",
  "Full-Stack",
  "AI / ML",
];

export function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects I&apos;ve
              <span className="text-muted-foreground">
                {" "}
                built.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              A collection of projects where I turn ideas into
              practical digital products and intelligent solutions.
            </p>
          </div>

          {/* Project count */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            {filteredProjects.length} projects
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-indigo-500 bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-card text-muted-foreground hover:border-indigo-500/40 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Projects */}
        <div className="mt-10">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Project visual */}
      <div className="relative aspect-[16/9] overflow-hidden border-b bg-muted/40">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[70px] transition-all duration-500 group-hover:h-56 group-hover:w-56" />

        {/* Fake product window */}
        <div className="absolute inset-6 overflow-hidden rounded-2xl border bg-background/90 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.025] sm:inset-8">
          {/* Window header */}
          {/* <div className="flex h-9 items-center gap-1.5 border-b px-3">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-500/70" />
          </div> */}

          {/* Preview */}
          {/* Project Image */}
<div className="relative h-full w-full overflow-hidden">
  <Image
    src={project.image}
    alt={`${project.title} project preview`}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
    sizes="(max-width: 768px) 100vw, 50vw"
  />

  {/* Image overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

  {/* Project label */}
  <div className="absolute bottom-4 left-4">
    <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
      {project.category}
    </span>
  </div>
</div>
          {/* <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                <Sparkles className="h-7 w-7" />
              </div>

              <p className="mt-3 text-sm font-semibold">
                {project.title}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {project.category}
              </p>
            </div>
          </div> */}
        </div>

        {/* Project number */}
        <div className="absolute left-5 top-5 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
          0{index + 1}
        </div>

        {/* Category */}
        <div className="absolute right-5 top-5 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-500" />
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechnologyBadge
             key={technology.name} 
             technology={technology} />))}
            {/* const Icon = technology.icon; */}

            {/* return (
              <div
                key={technology.name}
                className="flex items-center gap-1.5 rounded-lg border bg-muted/40 px-2.5 py-1.5 text-xs font-medium"
              >
                <Icon className="h-3.5 w-3.5" />

                <span>{technology.name}</span>
              </div>
            ); */}
          
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all hover:border-indigo-500/40 hover:bg-muted"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}