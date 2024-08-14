import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Table from "../Table";
import PdfDownload from "@app/components/download/PdfDownload";
import logo from "@app/assets/images/logo.png";

const QuotationSheet = () => {
  const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
      ssr: false,
    }
  );
  return (
    <div className="bg-white drop-shadow-md rounded-2xl">
      <div className="lg:py-12 p-4 lg:px-6 ">
        <div className="flex justify-between lg:gap-16 gap-10 text-black uppercase">
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
                <p className="lg:text-sm text-[10px] font-normal text-black/60 capitalize">
                  44832
                </p>
              </div>
              <div>
                <p>created date</p>
                <p className="lg:text-sm text-[10px]  font-normal text-black/60 capitalize">
                  Jun 4, 2024
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-2 lg:gap-10 lg:mt-10 mt-2">
              <div>
                <p>invoice to</p>
                <p className="lg:text-sm text-[10px] font-normal text-black/60 capitalize">
                  Mike Johnson
                </p>
              </div>
              <div>
                <p>phone</p>
                <p className="lg:text-sm text-[10px]  font-normal text-black/60 capitalize">
                  +977-9843229846
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-4 p-2">
        <Table />
      </div>
      <div className="py-5 lg:px-6 ">
        <div className=" m-auto float-right">
          <PDFDownloadLink
            document={<PdfDownload />}
            fileName="quotation"
            className="px-4 py-2 bg-[#5850EB] text-white rounded-lg"
          >
            Download
          </PDFDownloadLink>
        </div>
        <div className="mt-20 lg:px-0 px-2">
          <div className="flex items-end justify-between">
            <div className="lg:w-2/3 w-1/2 ">
              <p className="text-[10px] uppercase text-[#5850EB]">
                terms & conditions
              </p>
              <p className="lg:text-[11px] text-[8px] lg:leading-[17px] mt-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking there.
              </p>
            </div>
            <div>
              <div className="px-8 py-2 border-t border-black text-center">
                <p className="lg:text-xs text-[10px] font-semibold">
                  Merlyn Devon
                </p>
                <p className="lg:text-[11px] text-[8px] text-[#04151ABF]">
                  Associate Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-[26px] py-4 text-center bg-[#5850EB0D]">
          <p className="text-[10px] text-[#04151A]">
            Please confirm your acceptance of this quote. Thank you!
          </p>
        </div>
    </div>
  );
};

export default QuotationSheet;
