"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Grid2X2,
  Server,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
  // SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type CategoryId = "all" | "frontend" | "backend" | "database" | "ai";

type Skill = {
  name: string;
  category: Exclude<CategoryId, "all">;
  icon: React.ElementType;
};

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
  },
  {
    name: "HTML",
    category: "frontend",
    icon: SiHtml5,
  },
  // {
  //   name: "CSS",
  //   category: "frontend",
  //   // icon: SiCss3,
  // },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: Server,
  },

  // Database & Tools
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    category: "database",
    icon: SiMysql,
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: SiPostgresql,
  },
  {
    name: "Prisma",
    category: "database",
    icon: SiPrisma,
  },
  {
    name: "Git",
    category: "database",
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "database",
    icon: SiGithub,
  },
  {
    name: "Docker",
    category: "database",
    icon: SiDocker,
  },

  // AI / ML
  {
    name: "Python",
    category: "ai",
    icon: SiPython,
  },
  {
    name: "Pandas",
    category: "ai",
    icon: SiPandas,
  },
  {
    name: "Scikit-learn",
    category: "ai",
    icon: SiScikitlearn,
  },
  {
    name: "Machine Learning",
    category: "ai",
    icon: BrainCircuit,
  },
  {
    name: "Generative AI",
    category: "ai",
    icon: BrainCircuit,
  },
  {
    name: "Data Analysis",
    category: "ai",
    icon: Database,
  },
];

const categories = [
  {
    id: "all" as CategoryId,
    name: "All",
    icon: Grid2X2,
  },
  {
    id: "frontend" as CategoryId,
    name: "Frontend",
    icon: Code2,
  },
  {
    id: "backend" as CategoryId,
    name: "Backend",
    icon: Server,
  },
  {
    id: "database" as CategoryId,
    name: "Database & Tools",
    icon: Database,
  },
  {
    id: "ai" as CategoryId,
    name: "AI & Machine Learning",
    icon: BrainCircuit,
  },
];

const categoryNames: Record<CategoryId, string> = {
  all: "All Technologies",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database & Tools",
  ai: "AI & Machine Learning",
};

export function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("frontend");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-10 sm:py-14 lg:py-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-indigo-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Tech Stack
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I use to
            <span className="text-muted-foreground">
              {" "}
              build things.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore the technologies and tools I use across frontend
            development, backend engineering, databases, and AI.
          </p>
        </motion.div>

        {/* Tech Stack Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[28px] border bg-card/60 shadow-2xl shadow-black/5 backdrop-blur-xl"
        >
          {/* Fake browser/header */}
          <div className="flex h-12 items-center border-b bg-muted/30 px-4 sm:h-14 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            <div className="mx-auto hidden h-8 w-72 items-center justify-center rounded-lg bg-background/70 text-xs text-muted-foreground sm:flex">
              aisha.dev / tech-stack
            </div>

            <div className="w-14" />
          </div>

          <div className="grid min-h-140 lg:grid-cols-[250px_1fr]">
            {/* Sidebar */}
            <aside className=" min-w-0 border-b bg-muted/20 p-3 sm:p-4 lg:border-b-0 lg:border-r lg:p-5">
              <div className="mb-5 px-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Stack
                </p>
              </div>

              {/* <nav className=" flex min-w-0 overflow-hidden min-w-0 gap-2 overflow-x-auto pb-1  [-ms-overflow-style:none]   lg:flex-col lg:overflow-visible lg:gap-0"> */}
              <nav
  className="
    flex w-full min-w-0 flex-wrap gap-2
    lg:flex-col
  "
>
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive =
                    activeCategory === category.id;

                  const count =
                    category.id === "all"
                      ? skills.length
                      : skills.filter(
                          (skill) =>
                            skill.category === category.id
                        ).length;

                  return (
                    <button
                      key={category.id}
                      onClick={() =>
                        setActiveCategory(category.id)
                      }
                      className={`group relative flex shrink-0 min-w-fit items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left transition-all duration-200 sm:px-4 sm:py-3 lg:w-full ${
                        isActive
                          ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px] ${
                            isActive
                              ? "text-white"
                              : "text-muted-foreground"
                          }`}
                        />

                        <span className="whitespace-nowrap text-xs font-medium sm:text-sm">
                          {category.name}
                        </span>
                      </div>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Main content */}
            <div className="min-w-0 p-4 sm:p-6 lg:p-7">
              {/* Content header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mb-8 flex items-end justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {categoryNames[activeCategory]}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {filteredSkills.length}{" "}
                      {filteredSkills.length === 1
                        ? "technology"
                        : "technologies"}
                    </p>
                  </div>

                  {/* Decorative lines */}
                  <div className="hidden items-center gap-2 sm:flex">
                    <span className="h-2 w-9 rounded-full bg-indigo-500/30" />
                    <span className="h-2 w-9 rounded-full bg-indigo-500/20" />
                    <span className="h-2 w-9 rounded-full bg-indigo-500/10" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Technology cards */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5"
                >
                  {filteredSkills.map((skill, index) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          y: 15,
                          scale: 0.96,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.045,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                        }}
                        className="group flex  min-w-0 min-h-[100px] cursor-default flex-col items-center justify-center rounded-xl border bg-background/60 p-3 text-center shadow-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-background hover:shadow-xl sm:min-h-[110px] sm:rounded-2xl sm:p-4"
                      >
                        <div className="flex h-11 w-11 items-center justify-center">
                          <SkillIcon className="h-7 w-7 text-foreground/80 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-500 sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
                        </div>

                        <span className="mt-3 text-xs font-semibold sm:mt-4 sm:text-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Wrench className="h-4 w-4" />

          <span>
            Always learning, experimenting, and adding new tools to
            my stack.
          </span>
        </motion.div> */}
      </div>
    </section>
  );
}