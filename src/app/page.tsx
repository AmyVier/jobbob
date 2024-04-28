"use client"
import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import EmblaCarousel from './components/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import './components/embla.css'
import ElasticCarousel from './components/ElasticCarousel'

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
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
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
          <ElasticCarousel />
        </div>

        <div className="h-48">
        <div>
          <Link href="/courses" className="text-3xl">Technical Courses</Link>
        </div>
        <hr />
          <ElasticCarousel />
        </div>
      </main>
  )
}