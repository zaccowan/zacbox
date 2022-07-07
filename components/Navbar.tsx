import React, { useState } from "react";
import NavItem from "./NavItem";
import { MenuAlt4Icon } from "@heroicons/react/solid";

function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-2 left-4 z-[1000]">
      <ul className="flex-col space-y-4">
        <MenuAlt4Icon
          className={`"w-8 h-8 mx-4 my-2 text-black cursor-pointer transition-all ${
            navOpen ? "translate-x-4 scale-125" : "translate-x-0 scale-100"
          }`}
          onClick={() => setNavOpen(!navOpen)}
        />
        {navOpen && (
          <>
            <NavItem link="/" text="Home" />
            <NavItem link="/about" text="About" />
            <NavItem link="/unreal" text="Unreal Mockup" />
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
