import CardAll from "@/components/CardAll";
import React from "react";
import BooksData from "@/assets/DataBooks.json";

export default function AllProduct() {
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
          {BooksData.map((item) => {
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
