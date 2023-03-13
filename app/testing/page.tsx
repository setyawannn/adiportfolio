"use client";
import { useState, useEffect } from "react";

export default function MyComponent() {
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

  console.log(data);

  return (
    <></>
    // <div>
    //   {data.map((item) => (

    //   ))}
    // </div>
  );
}
