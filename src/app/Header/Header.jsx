import Icon from "../utils/Icon";

function Header() {
  return (
    <nav className="w-full h-14 hidden bg-white lg:flex p-4 justify-between fixed z-10 dark:bg-gray-800">
      <div className="h-auto w-auto">
        <p className="text-xl text-primary font-black dark:text-white">
          Travel Now
        </p>
      </div>
      <div className="flex space-x-8">
        <a
          href="#home"
          className="font-bold text-md text-primary dark:text-white"
        >
          Home
        </a>
        <a
          href="#recommended"
          className="font-bold text-md text-primary dark:text-white"
        >
          Recommended
        </a>
        <a
          href="#featured"
          className="font-bold text-md text-primary dark:text-white"
        >
          Featured
        </a>
        <a
          href="#faq"
          className="font-bold text-md text-primary dark:text-white"
        >
          FAQ
        </a>
        <a
          href="#about-us"
          className="font-bold text-md text-primary dark:text-white"
        >
          About us
        </a>
      </div>
      <div className="flex space-x-4">
        <Icon icon={"search"} />
        <Icon icon={"dark-mode"} />
        <Icon icon={"profile"} />
      </div>
    </nav>
  );
}

export default Header;
