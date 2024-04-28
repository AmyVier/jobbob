"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Opportunities() {

  return(
    <div className="grid">
      <div className="flex w-full justify-center">
        <span className="text-6xl font-heading">Local Opportunities</span>
      </div>
      <div className="flex m-8 w-full">
        <Image src="/location.png" className="rounded-box border-4 border-black" width={300} height={300} alt="image of Seattle, WA"></Image>
        <div className="grid items-start w-1/2 h-fit m-8 bg-seafoam border-4 border-black rounded-box">
          <span className="font-heading p-4 text-3xl">Based on your resume, you are in the &#60;LOCATION&#62; area.</span>
        </div>
        <Image src="/sprite-right.png" priority={true} width={256} height={256} alt={"Job Bob facing left"} />
      </div>

      <span className="text-5xl font-heading my-4 mt-8">Hackathons</span>
      <hr />
      <div className="flex justify-between p-4 gap-10">
        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F743379729%2F271091991773%2F1%2Foriginal.20240415-004307?w=940&auto=format%2Ccompress&q=75&sharp=10&s=ef0dc13c2a3991fda72c273d90fb766a"} width={200} height={100} alt="Seattle Skyline Lineart" className="w-full py-4"></Image>
          <span className="text-2xl font-heading my-4">Hack NW @ Woods</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-lg py-4">Hack NW Group</span>
            <Link href="https://www.eventbrite.com/e/hack-nw-woods-tickets-887176788657"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>
          </div>
        </div>

        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=300,height=300/gallery-images/o6/663909da-e85d-4475-ad36-ab72b057cc75"} width={200} height={100} alt="Howl's Moving Castle bedroom" className="w-full py-4"></Image>
          <span className="text-2xl font-heading my-4">Open Source AI Hackathon #4</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-lg py-4">Microsoft Reactor Redmond</span>
            <Link href="https://lu.ma/iu1wijgd"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>

          </div>
        </div>
      </div>

    </div>);
}