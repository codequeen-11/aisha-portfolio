"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Main purple glow */}
        <div className="absolute left-[38%] top-[15%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.08] blur-[140px]" />

        {/* Right glow */}
        <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-118px)] max-w-[1390px] items-center px-6 py-6 sm:px-8 lg:px-10 xl:px-0">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          
          {/* ========================================= */}
          {/* LEFT CONTENT */}
          {/* ========================================= */}

          <div className="max-w-[820px]">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-violet-500" />

              <span>
                Full-Stack Developer & Junior AI/ML Engineer. 
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[58px] font-bold leading-[0.98] tracking-[-0.055em] sm:text-[68px] md:text-[76px] lg:text-[82px] xl:text-[88px]"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Aisha
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Hussein.
              </span>
            </motion.h1>

            {/* Main statement */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-6 max-w-[760px] text-[24px] font-semibold leading-[1.25] tracking-[-0.025em] sm:text-[28px] md:text-[31px] lg:text-[34px]"
            >
              I build modern web applications and explore the world of AI.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-6 max-w-[690px] text-[15px] leading-7 text-muted-foreground sm:text-base lg:text-lg"
            >
              I&apos;m a Computer Science graduate and developer
              passionate about creating scalable, user-friendly
              applications while continuously exploring Artificial
              Intelligence and Machine Learning.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                View My Work

                <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-xl border bg-background/60 px-5 text-sm font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-muted"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href="https://github.com/codequeen-11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-violet-500/40 hover:text-violet-500"
              >
                <FaGithub className="h-4 w-4" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-violet-500/40 hover:text-violet-500"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* ========================================= */}
          {/* PHOTO */}
          {/* ========================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden justify-center lg:flex"
          >
            {/* Glow behind photo */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[100px]" />

            {/* Photo frame */}
            <div className="relative h-[470px] w-[370px] overflow-hidden rounded-[32px] border bg-muted/20 shadow-2xl shadow-violet-500/5">
              
              {/* Decorative gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-violet-500/10" />

              {/* Photo */}
              <Image
                src="/photo.jpg"
                alt="Aisha Hussein"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Corner decoration */}
              <div className="absolute -right-8 -top-8 z-20 h-24 w-24 rounded-full border border-violet-500/20 bg-violet-500/10 blur-sm" />

              <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  Aisha Hussein
                </p>

                <p className="mt-0.5 text-xs text-white/60">
                  Full-Stack Developer · Junior AI/ML Engineer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted-foreground sm:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}