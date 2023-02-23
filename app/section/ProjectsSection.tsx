import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsSection() {
  return (
    <section className="container min-h-screen mt-20 relative max-w-[680px] m-auto">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-8">Latest Project</h2>
        <p className="text-lg mb-8">
          Project yang ada di bawah merupakan project terakhir yang saya
          kerjakan dan kemungkin juga sedang dalam tahap penggarapan
        </p>
        <div className="flex w-full justify-between gap-8">
          <div className="w-1/2 p-5 border bg-gray-50 border-secondary">
            <div className="w-full h-40 bg-green-300"></div>
            <h6 className="mt-4 px-3 py-1 w-fit font-bold text-secondary bg-lime-500">
              UI/UX
            </h6>
            <h4 className="font-semibold text-xl mt-1">Sport Analytic</h4>
            <p className="font-normal text-secondary mt-1 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              qui in aliquam placeat
            </p>
            <div className="w-full flex text-center items-center h-10 mt-4 border-t border-secondary">
              <Link
                href={"#"}
                className="w-full font-semibold text-blue-700 text-base pt-3 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="w-1/2 p-5 border bg-gray-50 border-secondary">
            <div className="w-full h-40 bg-green-300"></div>
            <div className="flex gap-x-2">
              <h6 className="mt-4 px-3 py-1 w-fit font-bold text-secondary bg-lime-500">
                UI/UX
              </h6>
              <h6 className="mt-4 px-3 py-1 w-fit font-bold text-secondary bg-pink-400">
                Frontend
              </h6>
            </div>
            <h4 className="font-semibold text-xl mt-1">PPDB MIN 1 Malang</h4>
            <p className="font-normal text-secondary mt-1 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              qui in aliquam placeat
            </p>
            <div className="w-full flex text-center items-center h-10 mt-4 border-t border-secondary">
              <Link
                href={"#"}
                className="w-full font-semibold text-blue-700 text-base pt-3 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
