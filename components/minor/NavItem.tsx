import Link from "next/link";
import React from "react";
import router from "next/router";

type Props = {
  link: string;
  text: string;
};

function NavItem({ link, text }: Props) {
  const isCurrentPage = link === router.route;
  return (
    <li
      className={`${
        isCurrentPage
          ? "opacity-70 font-bold ring-2 ring-offset-2 ring-black ring-offset-white"
          : "opacity-30 font-normal"
      } backdrop-blur-xl hover:opacity-100 bg-gradient-to-r from-blue-400 to-red-400 hover:font-bold hover:scale-105 transition-all duration-200 text-white rounded-md w-max px-4 h-10 flex items-center justify-center cursor-pointer`}
    >
      <Link href={link}>{text}</Link>
    </li>
  );
}

export default NavItem;
