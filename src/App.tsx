import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

import { BlogSection } from './components/BlogSection';

import { WebGLBackground } from './components/WebGLBackground';
import cvData from './data/cv';

// Simple responsive navbar
function Navbar() {
  const navItems = [
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Clubs', href: '#clubs' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <span className="font-bold text-lg text-white tracking-wide">My Portfolio</span>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-gray-200 hover:text-blue-400 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Utility components for rendering sections
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>;
}

function EducationSection() {
  return (
    <section id="education" className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8 max-w-3xl mx-auto">
          {[...cvData.education].reverse().map((edu, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{edu.date}</span>
              </div>
              {edu.honors && edu.honors.length > 0 && (
                <ul className="text-gray-400 text-sm mb-2 list-disc ml-5">
                  {edu.honors.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              )}
              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <div className="text-gray-300 text-sm">
                  <span className="font-semibold">Relevant Courses:</span> {edu.relevantCourses.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { TechnicalSkills } from './data/cv';

function SkillsSection() {
  const skills = cvData.skills;
  const skillCategories: { key: keyof TechnicalSkills; label: string; color: string }[] = [
    { key: 'programmingLanguages', label: 'Programming Languages', color: 'bg-blue-500/20 text-blue-300' },
    { key: 'frameworksLibraries', label: 'Frameworks & Libraries', color: 'bg-green-500/20 text-green-300' },
    { key: 'dataScienceAnalytics', label: 'Data Science & Analytics', color: 'bg-cyan-500/20 text-cyan-300' },
    { key: 'cloudDevOps', label: 'Cloud & DevOps', color: 'bg-purple-500/20 text-purple-300' },
    { key: 'cybersecurity', label: 'Cybersecurity', color: 'bg-red-500/20 text-red-300' },
    { key: 'databases', label: 'Databases', color: 'bg-pink-500/20 text-pink-300' },
    { key: 'blockchainWeb3', label: 'Blockchain & Web3', color: 'bg-yellow-500/20 text-yellow-700' },
    { key: 'roboticsIoT', label: 'Robotics & IoT', color: 'bg-teal-500/20 text-teal-300' },
    { key: 'aiGenerativeAI', label: 'AI & Generative AI', color: 'bg-indigo-500/20 text-indigo-300' },
  ];
  return (
  <section id="skills" className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map(({ key, label, color }) => (
            skills[key] && skills[key].length > 0 && (
              <div key={key} className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">{label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills[key].map((skill, i) => (
                    <li key={i} className={`px-3 py-1 rounded-full ${color} text-sm`}>{skill}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-8 max-w-3xl mx-auto">
          {[...cvData.experience].reverse().map((exp, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-gray-300">{exp.organization}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.date}</span>
              </div>
              {exp.description.length > 0 && (
                <ul className="text-gray-400 text-sm list-disc ml-5">
                  {exp.description.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-8 max-w-3xl mx-auto">
          {[...cvData.projects].reverse().map((proj, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
              <ul className="text-gray-300 text-sm mb-2 list-disc ml-5">
                {proj.description.map((desc, j) => <li key={j}>{desc}</li>)}
              </ul>
              {proj.links && proj.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-2">
                  {proj.links.map((l, k) => (
                    <a key={k} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors underline">
                      {l.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Certifications, Courses & Workshops</SectionTitle>
        <ul className="flex flex-wrap gap-2 max-w-4xl mx-auto justify-center">
          {[...cvData.certifications].reverse().map((cert, i) => (
            <li key={i} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-2">{cert.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClubsSection() {
  return (
    <section id="clubs" className="py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Clubs & Leadership</SectionTitle>
        <div className="flex flex-wrap gap-4 justify-center">
          {[...cvData.clubs].reverse().map((club, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 min-w-[220px]">
              <h4 className="font-semibold text-lg mb-1">{club.name}</h4>
              <div className="text-gray-300 text-sm mb-1">{club.role}</div>
              <div className="text-gray-400 text-xs">{club.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen text-white snap-y snap-mandatory overflow-y-scroll h-screen">
      <WebGLBackground />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 animate-fade-in">
              Akhil Devarasetty
            </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animate-delay-200">
                  Computer Science and Engineering Student
                </p>
                <Navbar />
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

  {/* Education Section */}
  <EducationSection />

  {/* Skills Section */}
  <SkillsSection />

  {/* Experience Section */}
  <ExperienceSection />

  {/* Projects Section */}
  <ProjectsSection />

  {/* Certifications Section */}
  <CertificationsSection />

  {/* Clubs Section */}
  <ClubsSection />

         {/* Blog Section */}
         <div className="snap-start">
           <BlogSection />
         </div>

      {/* Contact Section */}
      <section className="min-h-screen py-20 snap-start">
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