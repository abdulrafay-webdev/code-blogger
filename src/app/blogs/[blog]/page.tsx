import Link from "next/link";
import React from "react";

export default async function blog({ params }: { params: { blog: string } }) {
  const fetchData = await fetch(
    `http://localhost:3000/api/blogs/${params.blog}`
  );
  const res = await fetchData.json();

  return (
    <div className="p-5 md:p-8 md:mt-12">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">{res.title}</h1>
      <h4 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">{res.shortDescription}</h4>
      <p className="leading-7 md:text-lg [&:not(:first-child)]:mt-6">{res.longContent}</p>
      {/* buttons  */}
      <div className="w-full flex justify-between mt-9 px-2">
      <Link href={`/blogs/${res.id - 1}`}>
        <button className="btn hover:bg-gray-700 bg-black text-white sm:btn-sm md:btn-md">
          Previous
        </button>
      </Link>
      <Link href={`/blogs/${res.id + 1}`}>
        <button className="btn hover:bg-gray-700 bg-black text-white sm:btn-sm md:btn-md">
          Next
        </button>
      </Link>
      </div>
    </div>
  );
}
