"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  BrainCircuit,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    type: "experience",
    icon: BriefcaseBusiness,
    role: "Full-Stack Developer Intern",
    organization: "Full-Stack Development Internship",
    date: "Jul/2025 - Sep/2025",
    description:
      "Worked on real-world full-stack applications while gaining practical experience in frontend development, backend architecture, APIs, databases, and production workflows.",
    achievements: [
      "Built responsive and user-focused web interfaces",
      "Worked with modern frontend and backend technologies",
      "Practiced API integration, database management, and deployment",
      "Collaborated on real-world development tasks",
    ],
  },
  {
    type: "experience",
    icon: BrainCircuit,
    role: "AI / Machine Learning Program",
    organization: "10 Academy",
    date: "May/2026 - Aug/2026",
    description:
      "Completed an intensive practical program focused on machine learning, data analysis, model development, communication, and professional growth.",
    achievements: [
      "Built practical machine learning projects using Python",
      "Worked with data processing and feature engineering",
      "Developed and evaluated predictive models",
      "Applied model explainability and communicated technical results",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    role: "BSc in Computer Science",
    organization: "Arsi University",
    date: "2023 - 2026",
    description:
      "Studied computer science with a strong interest in software development, problem solving, artificial intelligence, and building practical technology solutions.",
    achievements: [
      "Developed a foundation in algorithms and software engineering",
      "Built web applications through hands-on projects",
      "Explored databases, programming, and system development",
      "Applied academic knowledge to practical software projects",
    ],
  },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Building scalable, responsive, and user-friendly web applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Exploring practical ways to use data and AI to solve real problems.",
  },
  {
    icon: Sparkles,
    title: "Continuous Growth",
    text: "Learning new technologies through projects and real-world experience.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y bg-muted/20 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[450px] w-[450px] translate-x-1/3 rounded-full bg-indigo-500/[0.06] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-indigo-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Experience & Education
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The journey behind
            <span className="text-muted-foreground">
              {" "}
              the work.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            A timeline of the experiences, education, and learning that
            have shaped how I approach technology and problem solving.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.role}-${item.organization}`}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="relative grid md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-md md:left-1/2 md:-translate-x-1/2">
                    <Icon className="h-4 w-4 text-indigo-500" />
                  </div>

                  {/* Desktop date - left/right depending on item */}
                  <div
                    className={`hidden items-start md:flex ${
                      isEven
                        ? "justify-end pr-12"
                        : "order-2 justify-start pl-12"
                    }`}
                  >
                    <div
                      className={`pt-7 ${
                        isEven ? "text-right" : "text-left"
                      }`}
                    >
                      <span className="text-sm font-semibold text-indigo-500">
                        {item.date}
                      </span>

                      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {item.type === "education"
                          ? "Education"
                          : "Experience"}
                      </p>
                    </div>
                  </div>

                  {/* Main card */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      !isEven ? "md:order-1" : ""
                    }`}
                  >
                    <motion.article
                      whileHover={{ y: -4 }}
                      className={`rounded-3xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8 ${
                        isEven
                          ? "md:mr-0"
                          : "md:ml-0"
                      }`}
                    >
                      {/* Mobile date */}
                      <div className="mb-4 flex items-center gap-2 md:hidden">
                        <span className="text-sm font-semibold text-indigo-500">
                          {item.date}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-border" />

                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.type === "education"
                            ? "Education"
                            : "Experience"}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                            {item.role}
                          </h3>

                          <p className="mt-1 font-medium text-indigo-500">
                            {item.organization}
                          </p>
                        </div>

                        <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 sm:flex">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-6 space-y-3">
                        {item.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-start gap-3 text-sm"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />

                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="rounded-[28px] border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                    <Sparkles className="h-4 w-4" />
                  </span>

                  <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
                    What I&apos;m focused on
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Building, learning, and solving meaningful problems.
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  I&apos;m interested in opportunities where I can combine
                  software engineering with AI and continue growing
                  through challenging, real-world projects.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Let&apos;s work together

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Focus areas */}
            <div className="mt-8 grid gap-3 border-t pt-8 sm:grid-cols-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="rounded-2xl border bg-muted/30 p-5"
                  >
                    <Icon className="h-5 w-5 text-indigo-500" />

                    <h4 className="mt-4 text-sm font-semibold">
                      {area.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {area.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}