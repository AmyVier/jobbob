"use client"
import Image from "next/image";
import FileUpload from './file-upload';
import { useState } from "react";
import React from "react";
import Link from "next/link";

function ResumeInsights() {
  var insights = "wow such cool insights!";
  var keywords = "these are the keywords that match :)";

  return(
    <div className="grid">
      <div className="flex w-full">
        <Image src="/sprite-left.png" priority={true} width={256} height={256} alt={"Job Bob facing right"} />
        <div className="grid items-start w-full h-fit bg-seafoam border-4 border-black rounded-box">
          <span className="font-heading p-4 text-3xl">Here are the insights based on your uploaded resume!</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-fit bg-white border-4 border-black rounded-box my-8 box-shadow">
        <div className="my-4">
          <span className="font-heading text-center px-20 text-xl">	&#60; Software Engineer &#62;</span>
        </div>
        <i className="bi bi-caret-down-square-fill h1"></i>
      </div>
      
      <div className="flex items-center justify-center w-full h-fit bg-white border-4 border-black rounded-box my-8 box-shadow">
        <div className="my-4">
          <span className="font-heading text-center px-8 text-xl">{insights}</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-fit bg-white border-4 border-black rounded-box my-8 box-shadow">
        <div className="my-4">
          <span className="font-heading text-center px-8 text-xl">{keywords}</span>
        </div>
      </div>
    </div>);
}

function ResumeUploadNeeded() {
  return (
    <div className="flex w-full">
      <Image src="/sprite-left.png" priority={true} width={256} height={256} alt={"Job Bob facing right"} />
      <div className="grid items-start w-full h-fit bg-seafoam border-4 border-black rounded-box">
        <span className="font-heading p-4 text-3xl">Please upload your resume to recieve insights!</span>
      </div>
    </div>
  );
}

export default function ResumeScanner() {
  const [showText, setShowText] = useState(false);

  function handleNextClick() {
    setShowText(true);
  }

  let Component = showText === true ? ResumeInsights : ResumeUploadNeeded;

  return (
      <div className="flex">
        <aside className="hidden lg:h-5/6 sticky px-5 lg:grid lg:w-6/12 w-full">
          <div className="w-full min-h-96 h-fit bg-orange border-4 border-black rounded-box py-3">
            {/* Document Preview */}
            <div className="p-6 items-center">
              <FileUpload />
              <button id="fileUpload" className="bg-yellow border-2 border-black rounded-md hover:bg-orange" onClick={handleNextClick}>
                <div className="p-3">Gather Insights</div>
              </button>
            </div>
          </div>
        </aside>
        <main className="flex min-h-screen flex-col items-center lg:w-6/12 w-full">
          <Component />

          {/* Resume Preview */}
          <div className="lg:hidden px-5 w-full">
            <div className="w-full min-h-96 h-full bg-orange border-4 border-black rounded-md py-6">
              {/* Document Preview */}
              <div className="p-6 items-center">
                <FileUpload />
                <button id="fileUpload" className="bg-yellow border-2 border-black rounded-md hover:bg-orange" onClick={handleNextClick}>
                  <div className="p-3">Gather Insights</div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}