import * as motion from "motion/react-client";
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import {
  Briefcase,
  GraduationCap,
  Shield,
} from "lucide-react";

import {
  containerVariants,
  cardVariants,
  badgeVariants,
} from "../utils/animation";
function Experience() {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "ABC Company",
      date: "2025",
      icon: <Shield size={22} />,
      description: [
        "Performed vulnerability assessments.",
        "Created penetration testing reports.",
        "Monitored network traffic.",
      ],
      skills: ["Nmap", "Burp Suite", "Wireshark", "Linux"],
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      date: "2024 - Present",
      icon: <Briefcase size={22} />,
      description: [
        "Developed management systems.",
        "Built REST APIs.",
        "Designed responsive interfaces.",
      ],
      skills: [
        "React",
        "PHP",
        "CodeIgniter",
        "MySQL",
        "Supabase",
      ],
    },
    {
      title: "BS Information Technology",
      company: "University",
      date: "2022 - Present",
      icon: <GraduationCap size={22} />,
      description: [
        "Focused on Software Development.",
        "Studied Networking.",
        "Learning Cybersecurity.",
      ],
      skills: ["Java", "Python", "C#", "Assembly"],
    },
  ];

  return (
    <>
    <Navbar />
    <section
      id="experience"
      className="min-h-screen lg:ml-72 bg-stone-50 py-24"
    >
      <motion.div
  className="max-w-6xl mx-auto px-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

        <p className="text-blue-600 font-semibold mb-2">
          MY JOURNEY
        </p>

        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Experience
        </h2>

        <p className="text-gray-600 max-w-2xl mb-16">
          My professional experience in software development,
          cybersecurity, and academic projects.
        </p>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-start flex-wrap gap-4">

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-500">
                      {item.company}
                    </p>

                  </div>

                </div>

                <span className="text-sm bg-gray-100 px-4 py-2 rounded-full text-gray-600">
                  {item.date}
                </span>

              </div>

              <ul className="mt-8 space-y-3">
                {item.description.map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="text-blue-600 mt-1">•</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-8">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
</motion.div>
    </section>
    </>
  );
}

export default Experience;