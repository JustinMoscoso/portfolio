import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animate } from "motion";
import { Home, User, Code2, Folder, Mail, Menu, X, Briefcase } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", target: "home", icon: <Home size={18} /> },
    { name: "About", target: "about", icon: <User size={18} /> },
    { name: "Skills", target: "skills", icon: <Code2 size={18} /> },
    { name: "Projects", target: "projects", icon: <Folder size={18} /> },
    { name: "Experience", target: "experience", icon: <Briefcase size={18} /> },
    { name: "Contact", target: "contact", icon: <Mail size={18} /> },
  ];

  const scrollToSection = (targetId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/?section=${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    const offset = window.innerWidth >= 1024 ? 88 : 72;
    const startY = window.scrollY;
    const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

    animate(startY, targetY, {
      duration: 0.8,
      easing: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button type="button" onClick={() => scrollToSection("home")} className="text-left">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-white">Justin</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300/80">Developer</p>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-full p-2 text-neutral-300 transition hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;