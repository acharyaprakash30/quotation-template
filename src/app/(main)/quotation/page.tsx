"use client";
import React, { useState } from "react";
import { BgImg } from "@app/constants/SvgCollection";
import QuotationSheet from "@app/components/QuotationSheet";
import QuotationForm from "@app/components/QuotationForm";

const page = () => {
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  return (
    <div className="sheet-wrapper">
      <div className="relative w-full">
        <div className="absolute w-full h-[400px] lg:h-[346px] overflow-hidden z-10">
          <div className="object-cover">
            <BgImg />
          </div>
        </div>
      </div>
      <div className="lg:p-0 p-4 relative w-full border border-black flex lg:flex-row flex-col z-50">
        <div
          className={`absolute top-40 lg:w-[624px] overflow-hidden
            ${toggleForm ? "left-10" : "left-[28%]"}
             transition-all ease-in-out duration-300 z-50 bg-white  rounded-xl shadow-xl`}
        >
          <QuotationForm toggle={setToggleForm} />
        </div>

        <div
          className={`lg:w-[700px] absolute top-40 ${
            toggleForm ? "opacity-100 right-10 z-30" : "left-10 opacity-0 z-0"
          } transition-all ease-in-out duration-300`}
        >
          <QuotationSheet />
        </div>
      </div>
    </div>
  );
};

export default page;
