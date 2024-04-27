"use client"
import Image from "next/image";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function ResumeScanner() {
  
  return (
      <main className="grid">        
        <div className="grid items-start w-full h-fit bg-seafoam border-4 border-black rounded-box">
          <input className="font-heading p-4 text-3xl">Search Courses</input>
        </div>
      </main>
  );
}