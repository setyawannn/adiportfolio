"use client";
import CardAll from "@/components/CardAll";
import React, { useState, useEffect } from "react";

export default function AllProduct() {
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

  return (
    <section>
      <div className="mt-20">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-secondary">All Book</h2>
          <p className="text-base font-normal text-secondary">
            Semua buku yang saya terbitkan
          </p>
        </div>
        <div className="wrapper grid md:grid-cols-3 gap-6">
          {data.map((item: any) => {
            return (
              <CardAll
                id={item.id}
                image={item.pict}
                name={item.name}
                category={item.category}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
