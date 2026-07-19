import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck, Layers3 } from "lucide-react";

const SKILLS = [
  "React",
  "PHP",
  "CodeIgniter",
  "Kotlin",
  "MySQL",
  "Python",
  "C#",
  "JavaScript",
  "Assembly",
  "Supabase",
];

const highlights = [
  {
    title: "Full-stack mindset",
    text: "I enjoy building complete experiences that connect thoughtful interfaces with reliable backend systems.",
    icon: <Layers3 size={18} />,
  },
  {
    title: "Practical development",
    text: "My work focuses on clean structure, maintainable code, and solutions that are easy to scale.",
    icon: <Code2 size={18} />,
  },
  {
    title: "Security awareness",
    text: "I value secure design, careful data handling, and creating systems that users can trust.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Database-driven thinking",
    text: "I like turning complex requirements into organized databases and efficient workflows.",
    icon: <Database size={18} />,
  },
];

function About() {
  return (
    <section id="about" className="bg-zinc-50 px-6 py-24 text-zinc-900 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">About Me</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">I build practical digital solutions with curiosity and care.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              I’m a developer focused on turning ideas into useful, polished products. My background spans web development, systems thinking, and problem-solving with a strong interest in building experiences that feel smooth, reliable, and modern.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              I enjoy working across different layers of a project, from interfaces and user experience to backend logic and databases. Whether I’m creating a website, a service portal, or a custom tool, I aim for clarity, performance, and thoughtful design.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-zinc-50 p-4">
                  <div className="flex items-center gap-2 text-purple-600">
                    {item.icon}
                    <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="skills" className="mt-16 rounded-3xl border border-zinc-200 bg-neutral-950 p-8 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">Skills</p>
              <h3 className="mt-2 text-2xl font-semibold">Core technologies I work with</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              I continue to grow across modern web tools, backend frameworks, and system-level concepts while building practical solutions.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-zinc-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
