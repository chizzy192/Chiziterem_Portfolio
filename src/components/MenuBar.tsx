import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
type NavLink = {
  link: string,
  name:string
}

const navLinks: NavLink[] =[{
  link: '/about',
  name: 'About'
}, {
  link: '/skills',
  name: 'Skills'
}, {
  link: '/projects',
  name: 'Projects'
}, {
  link: '/experience',
  name: 'Experience'
}, {
  link: '/contact',
  name: 'Contact'
}]

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuBarRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (isOpen && menuBarRef.current && !menuBarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
  <div className={`w-screen flex justify-center items-center h-auto fixed z-5 bottom-0 my-2 sm:my-10 lg:my-13 font-medium`}>
    <nav className="hidden w-5/6 md:w-2/3 sm:flex justify-center items-center h-10 lg:h-13 fixed z-5 overflow-x-auto bg-[#bc8f8f] rounded-3xl box-shadow ">
      <ol className="w-full flex justify-around text-md lg:text-xl font-mono whitespace-nowrap max-sm:gap-5 max-sm:px-3">

        {navLinks.map((navLink, i) => (
          <li key={i}>
            <Link to={navLink.link} className="cursor-pointer text-white hover:text-(--accent-font)">{navLink.name}</Link>
          </li>
        ))}
        
      </ol>
    </nav>

    <nav className={`relative sm:hidden w-9/10 flex justify-start items-center min-h-11 overflow-x-auto bg-[#bc8f8f] rounded-3xl px-4  ${!isOpen && 'box-shadow'}`}>

      {!isOpen && (
        <p className="font-playwrite text-(--accent-font)">Oluchkwu(Oluchi)</p>
      )}

    <button 
      onClick={(e)=> {e.stopPropagation(); setIsOpen(true)}} 
      className={`absolute  text-white right-0 w-5 h-5 ${isOpen ? "hidden" : "flex"} justify-center items-center outline-white outline-2 hover:text-white/50 hover:outline-white/50 rounded-4xl cursor-pointer active:scale-95 mx-5`} 
    >
      <Menu className="w-5 h-5"/>
    </button>

    {isOpen && (
      <ol ref={menuBarRef} className={`relative w-full flex flex-col justify-around text-md font-mono whitespace-nowrap gap-5 py-4 animate-in slide-in-from-bottom-10 fade-in duration-1000`}>
        <button onClick={(e)=> {e.stopPropagation(); setIsOpen(false)}} className="absolute text-white right-0 top-0 w-5 h-5 my-4 flex justify-center items-center outline-white outline-2 hover:text-white/50 hover:outline-white/50 rounded-4xl cursor-pointer active:scale-95">
          <X className="w-5 h-5"/>
        </button>

        {navLinks.map((navLink, i) => (
          <li key={i}>
            <Link to={navLink.link} className="cursor-pointer text-white hover:text-(--accent-font)">{navLink.name}</Link>
          </li>
        ))}

      </ol>
    )}
      
    </nav>
  </div>
  );
};

export default MenuBar;

