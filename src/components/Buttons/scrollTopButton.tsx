import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useEffect, useRef } from "react";

function ScrollTopButton() {
  const scrollBtnRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBtnRef.current) {
        scrollBtnRef.current.classList.toggle("active", window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      ref={scrollBtnRef}
      aria-label="botão voltar ao topo"
      className="scroll-button"
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="size-8 text-white" />
    </button>
  );
}

export default ScrollTopButton;
