"use client"
import Image from "next/image";
import FileUpload from './file-upload';
import { useState } from "react";
import React from "react";
import useDropdown from "./dropdown";
import Link from "next/link";

function ResumeInsights() {
  const { wrapperRef, setOpen, setClose, getDropdown } = useDropdown('tagMenuDrop');

  return(
    <div className="grid">
      <div className="flex w-full">
        <Image src="/sprite-left.png" priority={true} width={256} height={256} alt={"Job Bob facing right"} />
        <div className="grid items-start w-full h-fit bg-seafoam border-4 border-black rounded-box">
          <span className="font-heading p-4 text-3xl">Here are the insights based on your uploaded resume!</span>
        </div>
      </div>

      <div className="toggle" onClick={() => setOpen()}>
        {/* <HiOutlineDotsHorizontal /> */}
      </div>
      {getDropdown(
        <div ref={wrapperRef} className="tagMenuDropdown">
          <Link href="/">
              hello
            </Link>
        </div>
      )}
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
    <div className="grid p-12 bg-beige">
      <div className="w-full">
        <i className="bi bi-arrow-right-circle-fill color-black icon-105"></i>
      </div>
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
            <button id="fileUpload" className="bg-yellow border-2 border-black rounded-md hover:bg-orange" onClick={handleNextClick}>Upload</button>
          </div>
        </main>
      </div>
    </div>
  );
}