import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

import { BlogSection } from './components/BlogSection';

import { WebGLBackground } from './components/WebGLBackground';
import cvData from './data/cv';


// Utility components for rendering sections
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>;
}

function EducationSection() {
  return (
    <section className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8 max-w-3xl mx-auto">
          {cvData.education.map((edu, i) => (
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

function SkillsSection() {
  return (
    <section className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Core Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Hard Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {cvData.skills.hard.map((skill, i) => (
                <li key={i} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {cvData.skills.soft.map((skill, i) => (
                <li key={i} className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-8 max-w-3xl mx-auto">
          {cvData.experience.map((exp, i) => (
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
    <section className="min-h-screen py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-8 max-w-3xl mx-auto">
          {cvData.projects.map((proj, i) => (
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
    <section className="py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Certifications, Courses & Workshops</SectionTitle>
        <ul className="flex flex-wrap gap-2 max-w-4xl mx-auto justify-center">
          {cvData.certifications.map((cert, i) => (
            <li key={i} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-2">{cert.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClubsSection() {
  return (
    <section className="py-20 snap-start">
      <div className="container mx-auto px-4">
        <SectionTitle>Clubs & Leadership</SectionTitle>
        <div className="flex flex-wrap gap-4 justify-center">
          {cvData.clubs.map((club, i) => (
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