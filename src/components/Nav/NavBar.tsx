import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="sm:px-16 px-6 w-full flex items-center py-5
        fixed top-0 z-20 bg-primary"
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10"  style={{ color: '#FFFFFF' }}>
            <li key={`About`}>
                <a href={`#About`}>Sobre</a>
            </li>
            <li key={`Projects`}>
                <a href={`#Projects`}>Projetos</a>
            </li>
            <li key={`Skills`}>
                <a href={`#Skills`}>Skills</a>
            </li>
            <li key={`Contact`}>
                <a href={`#Contact`}>Contato</a>
            </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28ox] h-[28px] pbject-contain cursor-pointer z-20 " 
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li key={`About`}
                className={`${
                  active === `About` ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive('About');
                  setToggle(!toggle);
                }}
              >
                <a href={`#About`}>Sobre</a>
              </li>

              <li key={`Projects`} className={`${
                active === `Projects` ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive('Projects');
                  setToggle(!toggle);
                }}
              >
                <a href={`#Projects`}>Projetos</a>
              </li>

              <li key={`Skills`} className={`${
                active === `Skills` ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive('Skills');
                  setToggle(!toggle);
                }}
              >
                <a href={`#Skills`}>Skills</a>
              </li>

              <li key={`Contact`} className={`${
                active === `Contact` ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive('Contact');
                  setToggle(!toggle);
                }}
              >
                <a href={`#Contact`}>Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;