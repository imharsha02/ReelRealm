"use client";
import Logo from "@/app/ui/logo";
import Link from "next/link";
import { useState } from "react";
import { RxExit } from "react-icons/rx";

const Menu = () => {
  const [iconClicked, setIconClicked] = useState(false);
  return (
    <div className="flex items-center justify-between overflow-auto lg:hidden bg-slate-300 rounded-md p-2">
      <Logo />

      {/* Button 👇 */}
      <div
        className="space-y-1 sticky top-0"
        onClick={() => {
          setIconClicked(!iconClicked);
        }}
      >
        <div className="bg-black h-px w-5"></div>
        <div className="bg-black h-px w-5"></div>
        <div className="bg-black h-px w-5"></div>

        {/* Links */}
        <div className={iconClicked ? "flex flex-col space-y-1" : "hidden"}>
          <div className="flex items-center">
            <Link href="/movies" className="flex items-center space-x-3">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/movies/add">Add movie</Link>
          </div>
          <div className="flex items-center space-x-2">
            Sign out
            <RxExit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
