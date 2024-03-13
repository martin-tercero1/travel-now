import Icon from '../utils/Icon';

function TabBar() {
  return (
    <div
      className="w-full h-14 bg-white fixed left-0 bottom-0 shadow-md flex space-x-4 items-center justify-center z-10 lg:hidden dark:bg-gray-800"
      id="tab_bar"
    >
      <Icon section="home" icon={"home"} />
      <Icon section="recommended" icon={"search"} />
      <Icon section="featured" icon={"heart"} />
      <Icon section="" icon={"profile"} />
      <Icon section="" icon={"dark-mode"} />
    </div>
  );
}

export default TabBar