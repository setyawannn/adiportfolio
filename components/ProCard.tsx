"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  category: string;
  price: number;
  id: number;
}

export default function ProCard(props: Props) {
  const router = useRouter();

  const ToIDR = props.price.toLocaleString("id-ID", {
    currency: "IDR",
  });

  return (
    <div className="min-h-min bg-zinc-50 rounded border border-secondary">
      <div className="p-5">
        <Image
          src={props.image}
          alt="The Art Of Design"
          width={200}
          height={200}
          className="w-full max-h-60 rounded-sm object-cover"
        />
        <div className="mt-4">
          <h4 className="text-lg font-bold mb">{props.name}</h4>
          <p className="text-base font-normal text-zinc-700">
            {props.category}
          </p>
        </div>
        <div className="mt-5">
          <div className="w-full h-[.8px] bg-secondary my-3"></div>
          <div className="flex justify-between">
            <h6 className="font-bold">IDR {ToIDR}</h6>
            <p
              onClick={() => router.push(`/products/${props.id}`)}
              className="text-blue-700 font-medium cursor-pointer hover:underline"
            >
              See Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
