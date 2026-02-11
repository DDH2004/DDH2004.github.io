import { useEffect, useRef } from "react";
import { Github, FileText, ExternalLink, ArrowUpRight } from "lucide-react";
import { Navbar } from "./components/Navbar";
import cvData from "./data/cv";

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Section header with accent line ── */
function SectionHeader({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-12 reveal">
      <div className="accent-line" />
      <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-gray-500">
        {children}
      </h2>
    </div>
  );
}

/* ── Gradient divider between sections ── */
function Divider() {
  return (
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-accent/10 via-accent/5 to-transparent" />
    </div>
  );
}

function App() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="min-h-screen font-body text-muted">
      <Navbar resumePath={cvData.resumePath} />

      {/* ── Hero ── */}
      <header className="pt-32 pb-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent mb-3 animate-fade-in">
            {cvData.name}
          </h1>
          <p className="font-display text-lg md:text-xl text-accent font-medium mb-4 animate-fade-in animate-delay-100">
            {cvData.role}
          </p>
          <p className="text-base text-muted max-w-xl mb-8 animate-fade-in animate-delay-200">
            {cvData.summary}
          </p>
          <div className="flex gap-3 animate-fade-in animate-delay-300">
            <a
              href={cvData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 rounded-md text-sm text-white transition-all duration-300"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href={cvData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 rounded-md text-sm text-white transition-all duration-300"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </div>
      </header>

      <Divider />

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>Projects</SectionHeader>
          <div className="space-y-10 reveal-group">
            {cvData.projects.map((proj, i) => (
              <article
                key={i}
                className="reveal group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 transition-all duration-500 hover:border-accent/20 hover:bg-white/[0.03] hover:shadow-[0_0_30px_-10px_rgba(94,234,212,0.08)]"
              >
                {/* top-left accent notch */}
                <div className="absolute top-0 left-6 w-8 h-px bg-gradient-to-r from-accent/40 to-transparent" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {proj.title}
                  </h3>
                  <span className="text-sm text-gray-500">{proj.context}</span>
                </div>
                <p className="text-muted mb-4 max-w-2xl">{proj.summary}</p>
                <ul className="space-y-1.5 mb-5">
                  {proj.built.map((line, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent/40"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-2">
                  {proj.stack.map((tech, k) => (
                    <span
                      key={k}
                      className="text-xs px-2.5 py-1 rounded bg-accent/[0.06] text-accent/70 border border-accent/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.links &&
                    proj.links.length > 0 &&
                    proj.links.map((link, l) => (
                      <a
                        key={l}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:text-white transition-colors ml-2"
                      >
                        {link.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>Skills</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 reveal-group">
            {cvData.skills.map((group, i) => (
              <div key={i} className="reveal">
                <h3 className="font-display text-sm font-semibold text-white mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded bg-white/[0.03] text-muted border border-white/[0.06] hover:border-accent/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── About ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader>About</SectionHeader>
          <div className="max-w-2xl space-y-4 reveal">
            {cvData.about.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex gap-6 mt-8 text-sm reveal">
            <a
              href={`mailto:${cvData.email}`}
              className="text-accent hover:text-white transition-colors"
            >
              {cvData.email}
            </a>
            <a
              href={cvData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:text-white transition-colors"
            >
              LinkedIn
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center">
          <span className="text-xs text-gray-600">
            © {new Date().getFullYear()} {cvData.name}
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-accent/20 to-transparent" />
        </div>
      </footer>
    </div>
  );
}

export default App;