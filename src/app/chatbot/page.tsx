"use client"
import Image from "next/image";
import { useState } from "react";
import React from "react";

export default function Chatbot() {
  var insights = "wow such cool insights!";
  var keywords = "these are the keywords that match :)";

  return(
    <div className="flex w-full h-full bg-seafoam border-4 border-black rounded-box items-end">
        <Image src="/sprite-left.png" priority={true} width={128} height={128} alt={"Job Bob facing right"} />
        <div className="flex w-full h-fit bg-white border-4 border-black rounded-box items-center justify-end m-4">
          <input type="text" className="mx-4 w-11/12 h-10 rounded-md"></input>
          <i className="bi bi-send icon-105 mx-4"></i>
        </div>
      </div>
  );
}