import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-800">
            Contact Me
          </h2>

          <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
            Interested in working together or have a question?
            Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-stone-800 mb-6">
              Let's Talk
            </h3>

            <p className="text-stone-600 leading-8 mb-10">
              I'm always open to discussing new opportunities,
              freelance projects, work, or simply talking
              about web development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-stone-100 p-4 rounded-xl">
                  <FaEnvelope className="text-xl text-stone-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800">
                    Email
                  </h4>
                  <p className="text-stone-500">
                    moscosojustin384@gmail.com 
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-stone-100 p-4 rounded-xl">
                  <FaPhone className="text-xl text-stone-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800">
                    Phone
                  </h4>
                  <p className="text-stone-500">
                    +63 9692778767
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-stone-100 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-xl text-stone-700" />
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800">
                    Location
                  </h4>
                  <p className="text-stone-500">
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="bg-stone-100 hover:bg-stone-800 hover:text-white transition p-4 rounded-full"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="bg-stone-100 hover:bg-blue-600 hover:text-white transition p-4 rounded-full"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 rounded-3xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-stone-700 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-stone-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-stone-700"
                />
              </div>

              <div>
                <label className="block mb-2 text-stone-700 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-stone-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-stone-700"
                />
              </div>

              <div>
                <label className="block mb-2 text-stone-700 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-stone-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-stone-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-800 text-white py-4 rounded-xl font-semibold hover:bg-stone-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;