'use client'
import Icon from "../utils/Icon";
import NavMobile from './NavMobile';

function Header() {
  return (
    <>
      <nav className="w-full h-14 hidden bg-white lg:flex p-4 justify-between fixed left-0 top-0 z-10 dark:bg-gray-800">
        <div className="h-auto w-auto">
          <p className="text-xl text-primary font-black dark:text-white">
            Travel Now
          </p>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="font-bold text-md text-primary dark:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#recommended"
              className="font-bold text-md text-primary dark:text-white"
            >
              Recommended
            </a>
          </li>
          <li>
            <a
              href="#featured"
              className="font-bold text-md text-primary dark:text-white"
            >
              Featured
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="font-bold text-md text-primary dark:text-white"
            >FAQ</a>
          </li>
          <li>
            <a
              href="#about-us"
              className="font-bold text-md text-primary dark:text-white"
            >About us</a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Icon icon={"search"} />
          <Icon icon={"dark-mode"} />
          <Icon icon={"profile"} />
        </div>
      </nav>
      <NavMobile></NavMobile>
    </>
  );
}

export default Header;
