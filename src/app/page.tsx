import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24 bg-beige w-100%">
      <div className="flex color-black w-100%">
      <i className="bi bi-arrow-right-circle-fill color-black icon-105"></i>

      <i className="bi bi-arrow-90deg-right relative top-0 left-0"></i>
      <div className=" bg-white h-20 w-100 border-2 border-black name rounded-sm">
        <input className = "object-contain" type="text"/>
      </div>
      </div>
    </main>
  );
}
