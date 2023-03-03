"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  id: number;
  image: string;
  name: string;
  category: string;
  rating: number;
  price: number;
}

export default function CardAll(props: Props) {
  const router = useRouter();

  const ToIDR = props.price.toLocaleString("id-ID", {
    currency: "IDR",
  });

  return (
    <div
      onClick={() => router.push(`products/2`)}
      className="p-4 rounded duration-150 cursor-pointer bg-zinc-50 border border-secondary hover:bg-zinc-200"
    >
      <div className="flex gap-x-4">
        <img
          src={props.image}
          alt="Buku"
          width={200}
          height={200}
          className="w-1/3 max-h-36 rounded-sm"
        />
        <div className="w-2/3">
          <h5 className="font-bold text-lg text-secondary">{props.name}</h5>
          <p>{props.category}</p>
          <div className="flex gap-x-4">
            <span>{props.rating}</span>
            <h6>IDR {ToIDR}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
