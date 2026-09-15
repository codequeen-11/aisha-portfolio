"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Lightbulb,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building modern applications from polished interfaces to scalable backend systems.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, data-driven applications, and practical AI solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking complex challenges into thoughtful, practical, and maintainable solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies and improving through hands-on projects.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building with curiosity,
            <br className="hidden sm:block" />
            learning with purpose.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-7 text-muted-foreground lg:text-[17px]"
          >
            <p>
              I&apos;m Aisha Hussein, a Computer Science graduate and
              developer who enjoys turning ideas into useful digital
              experiences.
            </p>

            <p>
              My journey into software development started with curiosity
              about how technology works and quickly grew into a passion for
              building applications that solve real-world problems.
            </p>

            <p>
              Today, I work primarily with modern web technologies and
              continue expanding my knowledge in Full-Stack Development,
              Artificial Intelligence, and Machine Learning.
            </p>

            <p>
              I enjoy the process of learning, experimenting, solving
              problems, and transforming an idea into something people can
              actually use.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ x: 5 }}
              className="group inline-flex items-center gap-2 pt-1 font-medium text-foreground"
            >
              Explore my projects

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}