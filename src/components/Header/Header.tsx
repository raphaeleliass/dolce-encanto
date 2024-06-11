import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ListItems from "./ListItems";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementsByClassName(
        "header",
      )[0] as HTMLElement;
      if (header) {
        header.classList.toggle("active", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("scroll-navigation");
  };

  return (
    <header className="header z-50">
      <div className="mx-auto flex max-w-xs items-center justify-between md:max-w-3xl lg:max-w-6xl">
        <a href="#" className="font-LobsterTwo text-4xl font-black">
          Dolce Encanto
        </a>
        <button
          className="cursor-pointer p-2 md:hidden"
          aria-label="botão do menu"
          onClick={toggleMenu}
        >
          <HamburgerMenuIcon className="size-6" />
        </button>
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul className="flex w-full flex-col items-center gap-x-2 gap-y-6 md:flex-row">
            <li className="absolute right-6 top-6">
              <button
                aria-label="botão de fechar menu"
                className="p-2 md:hidden"
                onClick={toggleMenu}
              >
                <IoCloseCircle className="size-8" />
              </button>
            </li>

            <li
              className="flex w-full items-center justify-center rounded-full"
              onClick={toggleMenu}
            >
              <ListItems href="#" text="Home" />
            </li>
            <li
              className="flex w-full items-center justify-center rounded-full"
              onClick={toggleMenu}
            >
              <ListItems href="#products" text="Products" />
            </li>
            <li
              className="flex w-full items-center justify-center rounded-full"
              onClick={toggleMenu}
            >
              <ListItems href="#about" text="About us" />
            </li>
          </ul>
        </nav>
      </div>
      {menuOpen && (
        <div
          className="fixed left-0 top-0 z-40 min-h-screen w-screen bg-black bg-opacity-70 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
