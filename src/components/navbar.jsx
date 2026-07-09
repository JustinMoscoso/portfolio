import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  Code2,
  Folder,
  Mail,
  Menu,
  X,
  ShoppingBag,
  BookOpen,
  Briefcase,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  const extraItems = [
    { name: "Typing Test", href: "/typing-test", icon: <Code2 size={18} /> },
    { name: "Shop", href: "#shop", icon: <ShoppingBag size={18} /> },
    { name: "Blog", href: "#blog", icon: <BookOpen size={18} /> },
    { name: "Experience", href: "/Experience", icon: <Briefcase size={18} /> },
  ]; 

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="lg:hidden fixed top-0 left-0 w-full h-16 bg-neutral-950 border-b border-neutral-900 flex items-center justify-between px-6 z-50">
        <h1 className="text-lg font-bold tracking-tight text-white uppercase">Justin</h1>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-neutral-400 hover:text-white transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-neutral-950 border-b border-neutral-900 z-40">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition"
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
            {extraItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition"
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-neutral-950 border-r border-neutral-900 flex-col justify-between z-50">
        
        {/* TOP */}
        <div className="p-10">

          {/* NAME */}
          <h1 className="text-xl font-black tracking-tight text-white uppercase">
            Justin
          </h1>

          <p className="text-xs font-medium text-purple-400/80 tracking-wide mt-1">
            Full Stack Developer
          </p>

          {/* MAIN NAV */}
          <nav className="mt-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-4">
              Navigation
            </p>

            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-all text-sm py-2 px-3 rounded-xl hover:bg-neutral-900/40 border border-transparent hover:border-neutral-800/60"
                  >
                    <span className="text-neutral-500 group-hover:text-purple-400 transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* EXTRA SECTION */}
          <nav className="mt-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-4">
              Explore
            </p>

            <ul className="space-y-2">
              {extraItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-all text-sm py-2 px-3 rounded-xl hover:bg-neutral-900/40 border border-transparent hover:border-neutral-800/60"
                  >
                    <span className="text-neutral-500 group-hover:text-purple-400 transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="p-10 border-t border-neutral-900">
          <p className="text-xs text-neutral-500 leading-relaxed font-normal">
            Available for freelance work and full-time positions.
          </p>

          <a
            href="mailto:moscosojustin384@gmail.com"
            className="text-xs text-purple-300 font-medium mt-4 block hover:text-purple-400 hover:underline transition-colors"
          >
            moscosojustin384@gmail.com  
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;