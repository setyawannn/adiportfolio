import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mt-28 w-full py-2">
      <div className="container max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-y-5 md:flex-row justify-between items-center">
          <div>
            <h1 className="font-bold text-4xl py-4">Xoxo</h1>
          </div>
          <div>
            <p className="text-base font-normal">Made with ❤️ By Prayoga Adi</p>
          </div>
          <div className="flex text-2xl gap-x-4">
            <AiOutlineGithub className="hover:cursor-pointer" />
            <AiOutlineInstagram className="hover:cursor-pointer" />
            <AiOutlineLinkedin className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
