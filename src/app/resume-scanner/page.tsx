"use client"
import Image from "next/image";
import {pdfjs, Document, Page} from 'react-pdf';

    import { useState } from "react";
     function FileUploader() {
      const [file, setFile] = useState<File | null>(null);

      function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
      }

      function handleClick() {
        try {
          const formData = new FormData();
          formData.append("file", file || "");
          fetch("/api/upload", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        } catch (error) {
          console.error(error);
        }
      }

      return (
        <div className="grid w-50">
          {/* https://dev.to/es404020/file-upload-in-next-js-12i6 */}
          <input className="" type="file" id="fileInput" accept=".pdf" onChange={handleFileChange} />
          <button className="bg-yellow border-2 border-black rounded-md hover:bg-orange" onClick={handleClick}>Upload</button>
        </div>
      );
    }

    export default function Home() {
      return (
        <div className="grid p-12 bg-beige">
          <div className="w-full">
            <i className="bi bi-arrow-right-circle-fill color-black icon-105"></i>
          </div>
          <div className="flex">
            <aside className="hidden lg:h-5/6 sticky px-5 lg:grid lg:w-5/12 w-full">
              <div className="w-full min-h-96 h-full bg-orange border-4 border-black rounded-md"></div>
              <FileUploader />
            </aside>
            <main className="flex min-h-screen flex-col items-center  lg:w-7/12 w-full">

            </main>
          </div>
        </div>
      );
    }