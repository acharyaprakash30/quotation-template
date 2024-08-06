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
        <div className="absolute w-full h-[400px] lg:h-[346px] overflow-hidden z-10">
          <div className="object-cover">
            <BgImg />
          </div>
        </div>
        <div className="relative z-20 lg:w-1/2 lg:pt-12 p-4 lg:pb-6 lg:p-0 m-auto">
          <div className="flex justify-between lg:gap-28 gap-10 text-white uppercase">
            <div>
              <div className="lg:w-[133.49px] w-[50px]">
                <Image src={logo} alt="logo" className="w-full" />
              </div>
              <p className="lg:text-6xl font-semibold mt-2">Quotation</p>
            </div>
            <div className="lg:text-[10px] text-[8px] font-semibold">
              <div className="flex justify-start gap-2 lg:gap-10">
                <div>
                  <p>quotation no.</p>
                  <p className="lg:text-sm text-[10px] font-normal text-[#FFFFFFB2] capitalize">
                    44832
                  </p>
                </div>
                <div>
                  <p>created date</p>
                  <p className="lg:text-sm text-[10px]  font-normal text-[#FFFFFFB2] capitalize">
                    Jun 4, 2024
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-2 lg:gap-10 lg:mt-10 mt-2">
                <div>
                  <p>invoice to</p>
                  <p className="lg:text-sm text-[10px] font-normal text-[#FFFFFFB2] capitalize">
                    Mike Johnson
                  </p>
                </div>
                <div>
                  <p>phone</p>
                  <p className="lg:text-sm text-[10px]  font-normal text-[#FFFFFFB2] capitalize">
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
      <div className="lg:w-1/3 m-auto float-right mt-5">
        <PDFDownloadLink
          document={<PdfDownload />}
          fileName="quotation"
          className="px-4 py-2 bg-[#5850EB] text-white rounded-lg"
        >
          Download
        </PDFDownloadLink>
      </div>
      <div className="mt-20 lg:w-1/2 m-auto lg:px-0 px-2">
        <div className="flex items-end justify-between">
          <div className="lg:w-2/3 w-1/2 ">
            <p className="text-[10px] uppercase text-[#5850EB]">
              terms & conditions
            </p>
            <p className="lg:text-[11px] text-[8px] lg:leading-[17px] mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking there.
            </p>
          </div>
          <div>
            <div className="px-8 py-2 border-t border-black text-center">
              <p className="lg:text-xs text-[10px] font-semibold">Merlyn Devon</p>
              <p className="lg:text-[11px] text-[8px] text-[#04151ABF]">Associate Manager</p>
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
