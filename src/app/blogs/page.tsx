import Link from "next/link";
import React from "react";


  

const Blogs = async() => {

  const fetchData = await fetch("http://localhost:3000/api/blogs")
  const res = await fetchData.json()

  return (
    <div className="w-full p-4 sm:p-6">
      {res.map((item: any, i: number) => {
        return (
            <ul key={i} className="">
              <li className="border-b-2 pb-2">
                <h1 className="scroll-m-20 mb-2 mt-4 text-xl font-bold tracking-tight sm:text-2xl xxl:text-5xl">
                  {item.title}
                </h1>
                <p className="mb-2">{item.shortDescription}</p>
                <Link href={`/blogs/${item.id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">
                  View More ...
                </button></Link>
              </li>
            </ul>
        );
      })}
    </div>
  );
};

export default Blogs;
