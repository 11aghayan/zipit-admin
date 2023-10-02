import Navbar from "./Navbar";
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
      <SignOutBtn />
    </header>
  );
};

export default Header;