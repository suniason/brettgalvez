import React from "react";
import { useConfigContext } from "../context/appcontext";
// import { MdDarkMode } from "react-icons/md"
// import { MdLightMode } from "react-icons/md"
import { motion } from "framer-motion";
import { navreveal } from "../utils/variant";

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  const { darkMode } = useConfigContext();
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/Galvez_Resume.pdf";
    link.setAttribute("download", "brettgalvez.pdf");
    link.click();
  };

  return (
    <div>
      <div className="w-full flex justify-center -z-10">
        <motion.div
          className="w-11/12 md:w-8/12 text-text-100 flex justify-between items-center p-2"
          variants={navreveal}
          initial="hidden"
          animate="visible"
        >
          <div>
            {darkMode ? (
              <img src="/BGwhite.svg" className="w-12 mx-4" alt="" />
            ) : (
              <img src="/BGdark.svg" className="w-12 mx-4" alt="" />
            )}
          </div>
          <ul className="flex items-center">
            <li className="mx-4">
              <button
                className="text-text-800 outline outline-2 outline-primary-800 text-md px-6 py-1 hover:bg-primary-800 hover:text-text-200 transition-all duration-500 font-semibold z-10"
                onClick={handleClick}
              >
                Download Resume
              </button>
            </li>
            {/* <li className='mx-4 text-secondary-700'>
                    {darkMode?
                        <MdLightMode  onClick={()=>setDarkMode(false)} size={30}/>
                        :
                        <MdDarkMode  onClick={()=>setDarkMode(true)} size={30}/>
                    }
                </li> */}
          </ul>
        </motion.div>
      </div>
      <div>
        <div className="mt-20 md:mt-60">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
