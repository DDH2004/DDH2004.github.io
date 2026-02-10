import { Github, FileText, ExternalLink, ArrowUpRight } from "lucide-react";
import { Navbar } from "./components/Navbar";
import cvData from "./data/cv";

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-300">
      <Navbar resumePath={cvData.resumePath} />

      {/* ── Hero ── */}
      <header className="pt-32 pb-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
            {cvData.name}
          </h1>
          <p className="text-lg md:text-xl text-accent font-medium mb-4 animate-fade-in animate-delay-100">
            {cvData.role}
          </p>
          <p className="text-base text-gray-400 max-w-xl mb-8 animate-fade-in animate-delay-200">
            {cvData.summary}
          </p>
          <div className="flex gap-3 animate-fade-in animate-delay-300">
            <a
              href={cvData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] rounded-md text-sm text-white transition-colors"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href={cvData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] rounded-md text-sm text-white transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-10">
            Projects
          </h2>
          <div className="space-y-16">
            {cvData.projects.map((proj, i) => (
              <article key={i} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {proj.title}
                  </h3>
                  <span className="text-sm text-gray-500">{proj.context}</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-2xl">{proj.summary}</p>
                <ul className="space-y-1.5 mb-4">
                  {proj.built.map((line, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-400 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-600"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-2">
                  {proj.stack.map((tech, k) => (
                    <span
                      key={k}
                      className="text-xs px-2.5 py-1 rounded bg-white/[0.04] text-gray-500 border border-white/[0.06]"
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

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-10">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {cvData.skills.map((group, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-white mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]"
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

      {/* ── About ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-10">
            About
          </h2>
          <div className="max-w-2xl space-y-4">
            {cvData.about.map((paragraph, i) => (
              <p key={i} className="text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex gap-6 mt-8 text-sm">
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
        <div className="max-w-[1100px] mx-auto text-xs text-gray-600">
          © {new Date().getFullYear()} {cvData.name}
        </div>
      </footer>
    </div>
  );
}

export default App;