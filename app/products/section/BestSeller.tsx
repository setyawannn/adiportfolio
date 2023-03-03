import ProCard from "@/components/ProCard";
import React from "react";
import BooksData from "@/assets/DataBooks.json";

export default function BestSeller() {
  const BestBooks = BooksData.filter((item) => item.best === true);
  return (
    <section>
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-secondary">Best Seller</h2>
        <p className="text-base font-normal text-secondary">
          Buku favorit banyak orang
        </p>
      </div>
      <div className="wrapper grid md:grid-cols-4 gap-6">
        {BestBooks.map((item) => {
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
