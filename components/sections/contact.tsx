"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/codequeen-11",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aisha-hussein-webdeveloper402/",
  },
  {
    name: "Telegram",
    href: "https://t.me/hassbieallah",
  },
];

 

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const formData = new FormData(form);

      const response = await fetch(
        "https://formsubmit.co/ajax/ayumeyra11@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.07] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-indigo-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Get In Touch
            </span>

            <span className="h-px w-8 bg-indigo-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something
            <span className="block text-muted-foreground">
              great together.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Have a project, opportunity, or idea you&apos;d like to
            discuss? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[28px] border bg-card shadow-2xl shadow-black/5"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left side */}
            <div className="relative overflow-hidden border-b bg-muted/30 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              {/* Decorative grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                  <Mail className="h-5 w-5" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Start a conversation
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Whether you&apos;re looking for a developer,
                  collaborating on a project, or simply want to connect,
                  feel free to reach out.
                </p>

                {/* Contact details */}
                <div className="mt-10 space-y-5">
                  <a
                    href="mailto:ayumeyra11@gmail.com"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background transition-colors group-hover:border-indigo-500/40 group-hover:text-indigo-500">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Email
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        your-email@example.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Based in
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Ethiopia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-10 border-t pt-7">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Find me online
                  </p>

                  <div className="mt-4 flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-indigo-500/40 hover:text-indigo-500"
                      >
                        {social.name}

                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-7 sm:p-10 lg:p-12">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit settings */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New message from Aisha's portfolio"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me a little about your project or idea..."
                    className="w-full resize-none rounded-xl border bg-background p-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Submit */}
                {/* <button
                  type="submit"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-sm font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  Send Message

                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button> */}
                <button
  type="submit"
  disabled={isSubmitting}
  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-sm font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-70"
>
  {isSubmitting ? "Sending..." : "Send Message"}

  {!isSubmitting && (
    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  )}

  {isSubmitting && (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
  )}
</button>
{status === "success" && (
  <motion.p
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
  >
    Message sent successfully! I&apos;ll get back to you soon.
  </motion.p>
)}

{status === "error" && (
  <motion.p
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center text-sm font-medium text-red-600 dark:text-red-400"
  >
    Something went wrong. Please try again or email me directly.
  </motion.p>
)}

                <p className="text-center text-xs text-muted-foreground">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}