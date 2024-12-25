"use client"
import { BiUserPlus } from "react-icons/bi";
import Table from "./components/Table";
import Form from "./components/Form";
import { useState } from "react";
export default function Home() {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(!visible);
    // setVisible(visible ? false : true);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">Employee Managment App </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button onClick={handler } className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
              Add Employee <span className='px-1'><BiUserPlus size={23} /></span>
            </button>
          </div>
        </div>
        {/* collapsable form */}
          {visible ? <Form /> : <></>}
        {/* table */}
        <div className="container mx-auto">
          <Table />
        </div>
      </main>

    </div>
  );
}
