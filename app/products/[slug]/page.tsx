"use client";
import React from "react";

export default function page({ params }: { params: { slug: number } }) {
  const id = Number(params.slug);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      id barang : {id}
    </div>
  );
}
