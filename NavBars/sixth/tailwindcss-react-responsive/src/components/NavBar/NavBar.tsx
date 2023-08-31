import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 border-b">
      <nav
        className={`py-4 md:px-8 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="font-bold text-2xl cursor-pointer text-black">
            <a href="">Logo</a>
          </div>

          <div className="lg:flex items-center gap-2 hidden text-stone-700">
            <a href="/" className="block hover:text-gray-400 py-2 px-4">
              Home
            </a>
            <a href="/" className="block hover:text-gray-400 py-2 px-4">
              About
            </a>
            <a href="/" className="block hover:text-gray-400 py-2 px-4">
              Portfolio
            </a>
            <a href="/" className="block hover:text-gray-400 py-2 px-4">
              Blog
            </a>
          </div>

          <div className="lg:block hidden">
            <button className="btnOutline">Contact-me</button>
          </div>

          <button
            onClick={() => toggleMenu()}
            className="lg:hidden text-indigo-600 text-3xl"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 bg-indigo-500 text-white rounded">
            <a href="/" className="block hover:text-gray-400 py-2 px-6">
              Home
            </a>
            <a href="/" className="block hover:text-gray-400 py-2 px-6">
              About
            </a>
            <a href="/" className="block hover:text-gray-400 py-2 px-6">
              Portfolio
            </a>
            <a href="/" className="block hover:text-gray-400 py-2 px-6">
              Blog
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
