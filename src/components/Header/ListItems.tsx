import React from "react";

// Definindo uma interface para as props
interface ListItemsProps {
  href: string;
  text: string;
}

const ListItems: React.FC<ListItemsProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="mx-2 flex w-full items-center justify-center text-nowrap rounded-full px-2 py-2 text-2xl font-semibold text-slate-800 transition-all hover:bg-gray-100 hover:text-rose-500 md:hover:bg-transparent"
    >
      {text}
    </a>
  );
};

export default ListItems;
