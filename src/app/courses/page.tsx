"use client"
import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Courses() {
  const keywords = ["JavaScript",
                    "CSS",
                    "React"]

  return (
    <div className="grid">
      <div className="flex w-full h-fit bg-white border-4 border-black rounded-box items-center justify-end">
        <input type="text" className="mx-4 w-11/12 h-10 rounded-md"></input>
        <i className="bi bi-search icon-105 mx-4"></i>
      </div>

      <span className="text-xl font-heading mt-8">Keywords to Learn</span>
      <hr />
      <div className="flex py-4">
      {keywords.map((item) => (
            <div key={item} className="flex w-fit h-fit bg-white border-2 border-black rounded-box items-center p-2 mx-2">
              <span className="text-lg">{item}</span>
            </div>
          ))}
      </div>

      <span className="text-5xl font-heading my-4 mt-8">Popular Courses</span>
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


      <span className="text-5xl font-heading my-4 mt-8">All Courses</span>
      <hr />
      <div className="grid grid-cols-3 justify-between p-4 gap-10">
        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://i.pinimg.com/564x/63/ca/29/63ca29b824b5b3307130c3208ae3a2bf.jpg"} width={200} height={100} alt="Field of Flowers" className="w-full py-4"></Image>
          <span className="text-xl font-heading my-4">Front End Development Libraries</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-md py-4">FreeCodeCamp</span>
            <Link href="https://www.freecodecamp.org/learn/front-end-development-libraries/"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>
          </div>
        </div>

        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://i.pinimg.com/564x/3d/5e/49/3d5e490dd361776eafd900ba43b2bbec.jpg"} width={200} height={50} alt="Small cafe" className="w-full py-4"></Image>
          <span className="text-xl font-heading my-4">5 React Interview Questions. I Bet the Senior Front-end Developer Can&#39;t Answer</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-md py-4">Medium.com</span>
            <Link href="https://medium.com/stackademic/5-react-interview-questions-i-bet-the-senior-front-end-developer-cant-answer-91e2e56fba92"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>

          </div>
        </div>

        <div className="w-full min-h-fit h-full px-4 bg-white border-4 border-black rounded-box box-shadow justify-between">
          <Image src={"https://i.pinimg.com/564x/98/75/27/98752771e41751cb16e463c76c951414.jpg"} width={200} height={50} alt="Library full of light" className="w-full py-4"></Image>
          <span className="text-xl font-heading my-4">Machine Learning with Python</span>
          <hr />
          <div className="flex w-full justify-between">
            <span className="text-md py-4">FreeCodeCamp</span>
            <Link href="https://www.freecodecamp.org/learn/machine-learning-with-python/"><i className="bi bi-arrow-up-right-square-fill icon-105"></i></Link>

          </div>
        </div>
      </div>
    </div>

  );
}