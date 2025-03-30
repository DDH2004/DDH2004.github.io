import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Database, Globe, ExternalLink } from 'lucide-react';
import { BlogSection } from './components/BlogSection';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { WebGLBackground } from './components/WebGLBackground';

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  const cardRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={cardRef} className="hidden-element p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 transform">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech, link }: { title: string; description: string; tech: string[]; link: string }) {
  const cardRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={cardRef} className="hidden-element p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 transform h-full">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span key={item} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
            {item}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        View Project <ExternalLink size={16} />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen text-white">
      <WebGLBackground />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 animate-fade-in">
              Akhil Devarasetty
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animate-delay-200">
              Computer Science and Engineering Student
            </p>
            <div className="flex justify-center gap-6 animate-fade-in animate-delay-300">
              <a href="https://github.com/DDH2004" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/akhil-devarasetty-073a72244/" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:akhild2004@gmail.com" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard icon={<Code2 size={32} />} title="Languages" items={["Python", "C++", "R", "Matlab"]} />
            <SkillCard icon={<Terminal size={32} />} title="Tools" items={["Git", "Docker", "Linux", "VS Code"]} />
            <SkillCard icon={<Database size={32} />} title="Databases" items={["MySQL", "MongoDB"]} />
            <SkillCard icon={<Globe size={32} />} title="Web" items={["Flask", "Django", "React", "HTML/CSS"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="TBD"
              description="TBD"
              tech={["TBD"]}
              link="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently looking for early career opportunities. Let's connect!
          </p>
          <a
            href="mailto:akhild2004@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 transform"
          >
            Say Hello
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Akhil Devarasetty. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;