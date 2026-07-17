import * as motion from "motion/react-client";
import Navbar from "../components/navbar";
import { Briefcase } from "lucide-react";
import cityHallImage from "../assets/websitengBinan.png";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "City Hall of Biñan",
      date: "2024 - Present",
      icon: <Briefcase size={22} />,
      description: [
        "Built government service portals with CodeIgniter 4 and Bootstrap.",
        "Integrated backend workflows, REST APIs, and MySQL databases.",
        "Delivered responsive, accessible UI for city hall staff and citizens.",
      ],
      skills: ["CodeIgniter 4", "Bootstrap", "PHP", "MySQL", "HTML/CSS"],
    },
  ];

  return (
    <>
    <Navbar />
    <section
      id="experience"
      className="min-h-screen  bg-stone-50 pt-10"
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
              className="relative overflow-hidden rounded-3xl shadow-sm border border-gray-200 transition duration-300 hover:shadow-xl"
              style={{
                backgroundImage: `url(${cityHallImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="relative p-8">
                <div className="flex justify-between items-start flex-wrap gap-4">

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="text-slate-200">
                        {item.company}
                      </p>

                    </div>

                  </div>

                  <span className="text-sm bg-white/20 px-4 py-2 rounded-full text-white">
                    {item.date}
                  </span>

                </div>

                <ul className="mt-8 space-y-3">
                  {item.description.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-100"
                    >
                      <span className="text-blue-300 mt-1">•</span>
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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