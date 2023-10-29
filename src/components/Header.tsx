import Navbar from "./Navbar";
import SettingsButton from "./SettingsButton";
import SignOutBtn from "./SignOutBtn";

const Header = () => {
  

  return (
    <header className="
      flex 
      justify-between 
      gap-2 
      items-center 
      pb-3
      relative
      after:absolute 
      after:-inset-x-4
      after:h-[1px]
      after:bg-gray-400
      after:top-full
    ">
      <Navbar />
      <div className="flex items-center gap-6">
        <SettingsButton />
        <SignOutBtn />
      </div>
    </header>
  );
};

export default Header;