"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoPlus, GoDash, GoTrashcan } from "react-icons/go";
import BooksData from "@/assets/DataBooks.json";

export default function page({ params }: { params: { slug: number } }) {
  const id = Number(params.slug);
  const [count, setCount] = useState<number>(1);
  const Book = BooksData.filter((item) => item.id === id);

  const ToIDR = (price: number) => {
    const newPrice = price.toLocaleString("id-ID", {
      currency: "IDR",
    });
    return newPrice;
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) {
      setCount(1);
    }
  };

  const handlePlus = () => {
    if (count < 5) {
      setCount(count + 1);
    } else if (count === 5) {
      setCount(5);
    }
  };

  return (
    <section>
      <div className="container relative top-40 max-w-[1200px] m-auto">
        {Book.map((item) => {
          return (
            <div key={item.id} className="flex gap-10">
              <div className="w-1/5">
                <Image
                  src={item.pict}
                  alt="mindset"
                  width={400}
                  height={400}
                  className="w-full h-fit"
                />
              </div>
              <div className="w-3/5 py-4">
                <h3 className="text-4xl font-semibold">{item.name}</h3>
                <h5 className="text-lg font-medium mt-2">{item.category}</h5>
                <div className="w-52 p-4 bg-zinc-100 mt-6 border border-secondary rounded cursor-pointer hover:bg-zinc-300 duration-100">
                  <span className="text-base font-medium">SOFT COVER</span>
                  <p className="text-xl text-secondary font-medium">
                    IDR {ToIDR(item.price)}
                  </p>
                </div>
                <div className="mt-10">
                  <h4 className="text-xl font-bold">Deskripsi Buku</h4>
                  <p className="text-lg mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, quo error? Labore, numquam! Recusandae veritatis
                    eius cupiditate autem odit soluta doloremque et ipsam, vel
                    sed, itaque expedita possimus sapiente quae totam facere!
                    Modi praesentium aut perspiciatis quia sit magni esse.
                    Quibusdam laudantium libero assumenda fugiat veniam ratione
                    architecto corrupti natus!
                  </p>
                </div>
              </div>
              <div className="w-1/5 h-fit bg-zinc-100 p-5 rounded-md border border-secondary">
                <div>
                  <h5 className="text-lg font-semibold text-zinc-700">
                    Ingin beli berapa?
                  </h5>
                  <h6 className="text-base font-medium text-secondary">
                    Jumlah Barang
                  </h6>
                </div>
                <div className="flex mt-4 gap-4 items-center">
                  <GoDash
                    onClick={handleMinus}
                    className="text-xl cursor-pointer"
                  />
                  <h6 className="text-xl font-bold">{count}</h6>
                  <GoPlus
                    onClick={handlePlus}
                    className="text-xl cursor-pointer"
                  />
                  <GoTrashcan onClick={() => setCount(1)} />
                </div>
                <div className="h-[1px] w-full bg-secondary my-8"></div>
                <div className="flex justify-between">
                  <h5 className="text-base font-bold text-zinc-500">
                    Subtotal
                  </h5>
                  <h6 className="text-base font-bold text-secondary">
                    IDR {ToIDR(item.price * count)}
                  </h6>
                </div>
                <div className="mt-6 w-full">
                  <button className="bg-secondary text-zinc-100 w-full py-2 rounded hover:bg-zinc-700 duration-100">
                    Masukan Keranjang
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
