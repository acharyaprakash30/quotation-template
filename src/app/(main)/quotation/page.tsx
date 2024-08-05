"use client";
import React from "react";
import Image from "next/image";
import Table from "@app/components/Table";
import { BgImg } from "@app/constants/SvgCollection";
import logo from "@app/assets/images/logo.png";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDownload from "@app/components/download/PdfDownload";

const page = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full h-[346px] overflow-hidden z-10">
          <div className="object-cover">
            <BgImg />
          </div>
        </div>
        <div className="relative z-20 w-1/2 pt-12 pb-6 m-auto">
          <div className="flex justify-between gap-28 text-white uppercase">
            <div>
              <div className="w-[133.49px]">
                <Image src={logo} alt="logo" className="w-full" />
              </div>
              <p className="text-6xl font-semibold mt-2">Quotation</p>
            </div>
            <div className="text-[10px] font-semibold">
              <div className="flex justify-start flex-wrap gap-10">
                <div>
                  <p>quotation no.</p>
                  <p className="text-sm font-normal text-[#FFFFFFB2] capitalize">
                    44832
                  </p>
                </div>
                <div>
                  <p>created date</p>
                  <p className="text-sm font-normal text-[#FFFFFFB2] capitalize">
                    Jun 4, 2024
                  </p>
                </div>
                <div>
                  <p>invoice to</p>
                  <p className="text-sm font-normal text-[#FFFFFFB2] capitalize">
                    Mike Johnson
                  </p>
                </div>
                <div>
                  <p>phone</p>
                  <p className="text-sm font-normal text-[#FFFFFFB2] capitalize">
                    +977-9843229846
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <Table />
      </div>
      <div className="w-1/3 m-auto float-right mt-5">
        <PDFDownloadLink
          document={<PdfDownload />}
          fileName="quotation"
          className="px-4 py-2 bg-[#5850EB] text-white rounded-lg"
        >
          Download
        </PDFDownloadLink>
      </div>
      <div className="mt-20 w-1/2 m-auto">
        <div className="flex items-end justify-between">
          <div className="w-2/3 ">
            <p className="text-[10px] uppercase text-[#5850EB]">
              terms & conditions
            </p>
            <p className="text-[11px] leading-[17px] mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking there.
            </p>
          </div>
          <div>
            <div className="px-8 py-2 border-t border-black text-center">
              <p className="text-xs font-semibold">Merlyn Devon</p>
              <p className="text-[11px] text-[#04151ABF]">Associate Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[26px] py-4 text-center bg-[#5850EB0D]">
        <p className="text-[10px] text-[#04151A]">
          Please confirm your acceptance of this quote. Thank you!
        </p>
      </div>
    </>
  );
};

export default page;
