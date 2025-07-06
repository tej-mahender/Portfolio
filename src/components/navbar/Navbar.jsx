import { Home, User, Folder, Mail } from "lucide-react";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-white shadow-lg rounded-full p-2 flex gap-6 z-50">
    <NavItem icon={<Home />} label="Home" onClick={() => scroll.scrollToTop({duration:0})} />
    <NavItem icon={<User />} label="About" to="about" />
    <NavItem icon={<Folder />} label="Projects" to="projects" />
    <NavItem icon={<Mail />} label="Contact" to="contact" />
  </nav>
  );
}
function NavItem({ icon, label, to, onClick }) {
    if (to) {
      return (
        <Link
          to={to}
          smooth={true}
          duration={0}
          offset={0}
          className="group relative cursor-pointer"
        >
          <div className="p-2 hover:bg-gray-100 rounded-full transition">{icon}</div>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            {label}
          </span>
        </Link>
      );
    }
  
    return (
      <button onClick={onClick} className="group relative">
        <div className="p-2 hover:bg-gray-100 rounded-full transition">{icon}</div>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          {label}
        </span>
      </button>
    );
  }
  
  export default NavBar;
