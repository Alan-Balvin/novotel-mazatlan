import { useState } from "react";
import { motion } from "motion/react";



type Link = {
  label: string;
  href: string;
};

type NavbarProps = {
  title: string;
  links: Link[];
  onLinkClick?: (section: string) => void;
};

function Navigation({ links, onLinkClick }: { links: Link[], onLinkClick?: (section: string) => void }) {
  return (
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.href} className="nav-li">
         <a
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              e.preventDefault(); 
              onLinkClick && onLinkClick(link.label); 
            }}
            className="nav-link"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar: React.FC<NavbarProps> = ({ title, links, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            {title}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation links={links} onLinkClick={onLinkClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
           <Navigation links={links} onLinkClick={onLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
