import Link from "next/link";
import React from "react";

export default function WhoSection() {
  return (
    <section className="container mt-20 relative max-w-[680px] m-auto">
      <div className="">
        <h2 className="text-4xl font-bold mb-6">Who is Adi?</h2>
        <p className=" text-lg font-normal leading-loose">
          Saya merupakan designer sekaligus web developer dari{" "}
          <Link
            target="_blank"
            href={"https://instagram.com/ciboox.id/"}
            className="bg-orange-400 px-2 py-1 rounded-md"
          >
            Ciboox Indonesia
          </Link>
          , sebuah start-up yang saya dirikan dengan teman-teman saya yang
          sekarang bergerak pada bidang Web developer dan Game Developer, Saya
          juga merupakan pelajar yang sedang menempuh pendidikan di
          <Link
            target="_blank"
            href={"https://smktelkom-mlg.sch.id/"}
            className="bg-pink-400 px-2 py-1 rounded-md"
          >
            SMK Telkom Malang
          </Link>
          . Untuk saat ini saya hanya memiliki 2 tahun pengalaman di bidang
          design dan web development, namun saya akan terus berkembang dengan
          semakin banyaknya tantangan yang akan saya hadapi.
        </p>
      </div>
    </section>
  );
}
