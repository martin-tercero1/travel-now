'use client'

import { HomeIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SiX } from '@icons-pack/react-simple-icons';
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { useContext } from "react";
import { ThemeContext } from '../layout';


function Icon({section, icon }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const getIconComponent = (icon) => {
    switch (icon) {
      case "home":
        return <HomeIcon className="w-7 h-7 text-primary dark:text-white" />;
      case "heart":
        return <HeartIcon className="w-7 h-7 text-primary dark:text-white" />;
      case "search":
        return (
          <MagnifyingGlassIcon className="lg:w-8 lg:h-8 w-7 h-7 text-primary dark:text-white" />
        );
      case "profile":
        return (
          <UserIcon className="lg:w-8 lg:h-8 w-7 h-7 text-primary dark:text-white" />
        );
      case "x":
        return (
          <SiX className="lg:w-8 lg:h-8 w-7 h-7 text-primary dark:text-white" />
        );
      case "instagram":
        return (
          <SiInstagram className="lg:w-8 lg:h-8 w-7 h-7 text-primary dark:text-white" />
        );
      case "dark-mode":
        return (
          <MoonIcon
            onClick={toggleTheme}
            className="lg:w-8 lg:h-8 w-7 h-7 text-primary dark:text-white"
          />
        );
      default:
        return null; // Handle the case where icon is not recognized
    }
  };

  const iconComponent = getIconComponent(icon);

  return (
  <a href={`#${section}`}>
    {iconComponent}
    </a>);
}

export default Icon;