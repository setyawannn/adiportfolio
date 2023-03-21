import TabsPage from "@/components/TabsPage";
import Link from "next/link";
import React from "react";
import { BsDownload, BsInfoLg } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="min-h-fit bg-secondary">
      <div className="max-w-[90%] m-auto">
        <div className="flex gap-y-10 flex-col justify-between">
          <div className=" w-full md:w-1/2">
            <div>
              <h1 className="text-primary text-4xl md:text-5xl font-bold leading-tight">
                Bringing Digital Solutions to Life
              </h1>
              <p className="text-primary text-lg md:text-xl font-normal mt-7 leading-snug">
                Hai, saya Prayoga Adi Setyawan. Saya bertekad untuk
                mengembangkan skill saya di bidang design dan web development,
                sangat terbuka untuk berkolaborasi demi suatu inovasi.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-primary text-2xl font-semibold">
                Download my CV
              </h3>
              <div className="mt-7 bg-neutral-800 p-4 rounded-md border border-amber-500">
                <div className="decoration-zinc-200 flex items-center gap-4">
                  <BsInfoLg className="text-amber-400 text-base" />
                  <Link
                    href={
                      "https://drive.google.com/file/d/16PJqMIXfWRr6M2NUwF5dPk6-wYD0jBIi/view?usp=share_link"
                    }
                    target="_blank"
                    className="text-zinc-200 text-base hover:underline"
                  >
                    Bit.ly/CV_PrayogaAdiSetyawan
                  </Link>
                  <BsDownload className="ml-auto text-zinc-200 text-xl hover:text-amber-400 cursor-pointer" />
                </div>
              </div>
              <div className="text-neutral-400 mt-4">
                <span>Terakhir diperbarui 30 Juli 2022</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <TabsPage />
          </div>
        </div>
      </div>
    </section>
  );
}
