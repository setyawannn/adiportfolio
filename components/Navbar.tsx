"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState<Boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-secondary">
      <div className="max-w-[1100px] m-auto flex py-4 justify-between items-center text-primary">
        <Link href={"/"}>
          <h1 className="font-bold text-4xl py-4">Xoxo</h1>
        </Link>
        <ul className="hidden sm:flex text-xl font-medium">
          <li className="px-4 py-6 duration-200 hover:text-[21px] hover:underline">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-4 py-6 duration-200 hover:text-[21px] hover:underline">
            <Link href={"/achievement"}>Achievement</Link>
          </li>
          <li className="px-4 py-6 duration-200 hover:text-[21px] hover:underline">
            <Link href={"/products"}>Products</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block text-white cursor-pointer sm:hidden z-10"
        >
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-zinc-500">
              <Link onClick={handleNav} href={"/"}>
                Home
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-zinc-500">
              <Link onClick={handleNav} href={"/achievement"}>
                Achievement
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-zinc-500">
              <Link onClick={handleNav} href={"/products"}>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
