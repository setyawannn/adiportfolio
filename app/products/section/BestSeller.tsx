"use client";
import ProCard from "@/components/ProCard";
import React, { useEffect, useState } from "react";

export default function BestSeller() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/640ed363c0e7653a0586fa4d"
        );
        const data = await response.json();
        setData(data.record);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  const BestBooks = data.filter((item: any) => item.best === true);
  return (
    <section>
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-secondary">Best Seller</h2>
        <p className="text-base font-normal text-secondary">
          Buku favorit banyak orang
        </p>
      </div>
      <div className="wrapper grid md:grid-cols-4 gap-6">
        {BestBooks.map((item: any) => {
          return (
            <ProCard
              id={item.id}
              name={item.name}
              image={item.pict}
              category={item.category}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
