//"use client"
import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { api } from "~/app/trpc/server";


export default function Home() {
  return (
      <main className="grid">        
        <div className="flex items-start w-full h-fit bg-white border-4 border-black rounded-box box-shadow items-center justify-end">
          <input type="text" value="Ask B0b Anything" className="m-4 w-11/12"></input>
          <Link href="/chatbot"><i className="bi bi-chat-dots icon-105 m-4"></i></Link>
        </div>
      </main>
  );
}