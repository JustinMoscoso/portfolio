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
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

 const extraItems = [
  { name: "Typing Test", href: "/typing-test", icon: <Code2 size={18} /> },
  { name: "Shop", href: "#shop", icon: <ShoppingBag size={18} /> },
  { name: "Blog", href: "#blog", icon: <BookOpen size={18} /> },
  { name: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
];

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="lg:hidden fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-50">
        <h1 className="text-lg font-medium text-gray-900">Justin</h1>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-white border-b border-gray-200 z-40">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:text-black transition"
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* DESKTOP SIDEBAR (BRYL STYLE) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-100 flex-col justify-between">
        
        {/* TOP */}
        <div className="p-10">

          {/* NAME */}
          <h1 className="text-xl font-medium tracking-tight text-gray-900">
            Justin
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Full Stack Developer
          </p>

          {/* MAIN NAV */}
          <nav className="mt-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </p>

            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-black transition text-sm"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* EXTRA SECTION */}
          <nav className="mt-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Explore
            </p>

            <ul className="space-y-3">
              {extraItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-black transition text-sm"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="p-10 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-6">
            Available for freelance work and Full time work.
          </p>

          <a
            href="mailto:justin@example.com"
            className="text-sm text-gray-900 mt-4 block hover:underline"
          >
            moscosojustin384@gmail.com  
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;