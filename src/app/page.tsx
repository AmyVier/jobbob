"use client"
import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import EmblaCarousel from './components/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import './components/embla.css';
// import ElasticCarousel from './components/ElasticCarousel'

export default function Home() {
  var search = "Ask B0b Anything!"
  
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
      <main className="grid">    
        {/* ask b0b anything */}
        <div className="flex w-full h-fit bg-white border-4 border-black rounded-box box-shadow items-center justify-end">
          <input type="text" className="mx-4 w-11/12 h-10 rounded-md"></input>
          <Link href="/chatbot"><i className="bi bi-chat-dots icon-105 m-4"></i></Link>
        </div>

{/* recommended jobs */}
        <div className="flex py-8 items-center">
          <div className="w-4/12">
            <Image src="/sprite-left.png" priority={true} width={400} height={400} alt={"Job Bob facing right"} />
          </div>
          <div className="grid w-full">  
            <div className="flex items-center w-full h-fit bg-seafoam border-4 border-black rounded-box box-shadow my-4">
              <span className="text-xl p-8">Here are some recommended jobs for you!</span>
            </div>
            <EmblaCarousel key="0" slides={SLIDES} options={OPTIONS} />
{/* resume scanner */}
            <div className="flex items-center w-full h-fit bg-orange border-4 border-black rounded-box box-shadow my-4">
              <Link className="text-xl p-8" href="/resume-scanner">Click here to scan your resume!</Link>
            </div>
          </div>
        </div>

        <div className="h-48">
        <div>
          <Link href="/opportunities" className="text-3xl">Local Opportunities</Link>
        </div>
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

        <div className="h-48">
        <div>
          <Link href="/courses" className="text-3xl">Technical Courses</Link>
        </div>
        <hr />
        <div className="flex justify-between p-4 gap-10">
        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://i.pinimg.com/564x/94/93/33/9493337202fbc0651ce1112bfa7efba3.jpg"} width={200} height={100} alt="Jellyfish swimming" className="w-full py-4"></Image>
          <span className="text-2xl font-heading my-4">Responsive Web Design</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-lg py-4">FreeCodeCamp</span>
            <Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>
          </div>
        </div>

        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://i.pinimg.com/564x/b5/1a/ae/b51aae7e8c5d074b072408ca6f97c2f9.jpg"} width={200} height={100} alt="Howl's Moving Castle bedroom" className="w-full py-4"></Image>
          <span className="text-2xl font-heading my-4">Create a Responsive Animated Sidebar Using React / Next.js and Tailwind CSS</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-lg py-4">Medium.com</span>
            <Link href="https://medium.com/designly/create-a-responsive-animated-sidebar-using-react-next-js-and-tailwind-css-bd5a0f42f103"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>

          </div>
        </div>
      </div>
        </div>
        </div>
      </main>
  )
}