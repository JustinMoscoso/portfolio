import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.jpg";
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-stone-50 text-white flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-cyan-950 font-semibold text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-olive-950">
  <TypeAnimation
    sequence={[
      "Justin",
      2000,
      "Full Stack Developer",
      2000,
      "Android Developer",
      2000,
      "React Developer",
      2000,
      "PHP Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h1>



            <p className="text-stone-900 mt-6 leading-8 max-w-xl">
              I build responsive web applications, Android apps, and
              management systems using React, PHP, Laravel, Kotlin,
              MySQL, and Supabase.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="border border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
              >
                <FaDownload />
                Resume
              </a>

            </div>

            {/* Social Icons */}
           <div className="flex gap-5 mt-8 text-3xl">

  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noreferrer"
    className="text-stone-900 hover:text-stone-600 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noreferrer"
    className="text-stone-900 hover:text-stone-600 transition"
  >
    <FaLinkedin />
  </a>

</div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-stone-950 shadow-2xl">

              <img
  src={profileImg}
  alt="Justin"
  className="w-full h-full object-cover"
/>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;