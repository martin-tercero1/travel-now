import { Squash as Hamburger } from "hamburger-react";
import { useState, useRef, useContext } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../routes";
import Icon from "../utils/Icon";
import { ThemeContext } from "../layout";

function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  /* The component uses useClickAway hook from React-Use library to detect when a user clicks outside the menu. 
   * When this happens, it triggers a function that closes the menu by setting isOpen to false.   */
  useClickAway(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="w-full h-14 bg-white fixed left-0 top-0 shadow-md flex items-center z-10 lg:hidden dark:bg-gray-800"
    >
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        color={theme === "dark" ? "#fff" : "#CC2D4A"}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-screen fixed left-0 shadow-4xl right-0 top-[3.5rem] z-30 p-4 bg-white border-b-white/20 dark:bg-gray-800"
          >
            <ul className="grid gap-2">
              {routes.map((route, index) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    key={route.title}
                    className="w-full shadow-xl p-[0.08rem] rounded-xl border dark:border-white bg-gradient-to-tr from-white-800 via-white-950 to-white-700 "
                  >
                    <a
                      onClick={() => {
                        setOpen((prev) => !prev);
                        route.title === "Dark Mode" ? toggleTheme() : undefined;
                      }}
                      className="flex items-center justify-between w-full p-5 rounded-xl text-white"
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg text-primary dark:text-white">
                        {route.title}
                      </span>
                      <Icon
                        section={route.href}
                        icon={route.icon}
                        className="lg:w-8 lg:h-8 w-7 h-7 text-primary dark:text-white "
                      />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavMobile;
