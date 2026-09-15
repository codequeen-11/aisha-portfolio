// "use client";

// import { motion } from "framer-motion";
// import { Menu, X, Download } from "lucide-react";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/theme-toggle";

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed left-0 top-0 z-50 w-full">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <nav className="mt-4 flex h-16 items-center justify-between rounded-2xl border bg-background/80 px-4 shadow-sm backdrop-blur-xl sm:px-6">
//           {/* Logo */}
//           <a
//             href="#home"
//             className="text-lg font-bold tracking-tight sm:text-xl"
//           >
//             Aisha<span className="text-indigo-500">.</span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-6 lg:flex">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="hidden items-center gap-2 lg:flex">
//             <ThemeToggle />

//             <Button asChild className="rounded-xl">
//               <a href="/resume/Aisha-Hussein-Resume.pdf" download>
//                 <Download className="mr-2 h-4 w-4" />
//                 Resume
//               </a>
//             </Button>
//           </div>

//           {/* Mobile */}
//           <div className="flex items-center gap-2 lg:hidden">
//             <ThemeToggle />

//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </Button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="mt-2 rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur-xl lg:hidden"
//           >
//             <div className="flex flex-col gap-2">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
//                 >
//                   {item.name}
//                 </a>
//               ))}

//               <Button asChild className="mt-2">
//                 <a href="/resume/Aisha-Hussein-Resume.pdf" download>
//                   <Download className="mr-2 h-4 w-4" />
//                   Download Resume
//                 </a>
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import {
  Download,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex h-[74px] max-w-[1390px] items-center justify-between rounded-[20px] border bg-background/75 px-5 shadow-sm backdrop-blur-xl sm:px-7">
          {/* Logo */}
          <a
            href="#home"
            className="text-[24px] font-bold tracking-[-0.04em]"
          >
            Aisha_H<span className="text-violet-500">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme */}
            <button
              type="button"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-all hover:border-violet-500/40 hover:text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* Resume */}
            <a
              href="/Aisha_Hussein_Resume.pdf"
              download
              className="hidden h-10 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition-all hover:border-violet-500/40 hover:bg-muted sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              className="mx-auto mt-2 max-w-[1390px] overflow-hidden rounded-2xl border bg-background/95 shadow-xl backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col p-3">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/Aisha-Hussein-CV.pdf"
                  download
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}