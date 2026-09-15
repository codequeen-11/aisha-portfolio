import {
  ArrowUp,
//   Github,
//   Linkedin,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              Aisha
              <span className="text-indigo-500">.</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              Full-Stack Developer & AI/ML Enthusiast building useful
              digital experiences and exploring intelligent solutions.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-5 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aisha Hussein. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/codequeen-11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:border-indigo-500/40 hover:text-indigo-500"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:border-indigo-500/40 hover:text-indigo-500"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:border-indigo-500/40 hover:text-indigo-500"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background transition-transform hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}