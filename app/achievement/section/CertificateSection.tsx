import React from "react";
import Image from "next/image";

const CertificatePict = [
  { url: "1.jpg" },
  { url: "2.png" },
  { url: "3.jpg" },
  { url: "4.png" },
  { url: "5.jpg" },
  { url: "6.jpg" },
  { url: "7.jpg" },
  { url: "8.jpg" },
  { url: "9.jpg" },
  { url: "10.jpg" },
  { url: "11.jpg" },
];

export default function CertificateSection() {
  return (
    <section className="">
      <div>
        <h2 className="text-4xl font-bold mb-4">My Certificate</h2>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione
          saepe eum, necessitatibus similique earum atque architecto unde
          repudiandae veniam!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CertificatePict.map((item, index) => {
          return (
            <div
              key={index}
              className="p-2 bg-zinc-50 grid items-center border w-full"
            >
              <Image
                src={`/assets/certificate/${item.url}`}
                width={500}
                height={500}
                alt="#"
                className="w-fit h-fit"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
