import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Table from "../Table";
import PdfDownload from "@app/components/download/PdfDownload";

const QuotationSheet = ({ quotationData }: any) => {
  const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
      ssr: false,
    }
  );

  const dateString = quotationData.company.createdAt;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-CA");

  return (
    <div className="bg-white drop-shadow-md rounded-2xl">
      <div className="lg:py-12 p-4 lg:px-6 ">
        <div className="flex justify-between xl:gap-16 gap-10 text-black uppercase">
          <div>
            {quotationData.company.logo && (
              <div className="lg:w-[133.49px] w-[50px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.logo}`}
                  alt="logo"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
            )}
            <p className="lg:text-4xl xl:text-6xl font-semibold mt-2">
              Quotation
            </p>
          </div>
          <div className="lg:text-[10px] text-[8px] font-semibold flex lg:gap-4 xl:gap-10">
            <div className="flex-1 ">
              <div>
                <p>quotation no.</p>
                <p className="lg:text-sm text-[10px] font-normal text-black/60 capitalize">
                  {quotationData.quotationNumber}
                </p>
              </div>
              <div className="lg:mt-10 mt-2">
                <p>invoice to</p>
                <p className="lg:text-sm text-[10px] font-normal text-black/60 capitalize">
                  {quotationData.invoiceTo}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <p>created date</p>
                <p className="lg:text-sm text-[10px]  font-normal text-black/60 capitalize">
                  {formattedDate}
                </p>
              </div>
              <div className="lg:mt-10 mt-2">
                <p>phone</p>
                <p className="lg:text-sm text-[10px]  font-normal text-black/60 capitalize">
                  {quotationData.company.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-4 p-2">
        <Table quotationData={quotationData} />
      </div>
      <div className="py-5 lg:px-6 ">
        <div className=" m-auto float-right">
          <PDFDownloadLink
            document={<PdfDownload quotationData={quotationData} />}
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
                {quotationData.termsAndConditions}
              </p>
            </div>
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.managerSignature}`}
                alt="signature"
                className="w-1/2 m-auto"
                width={100}
                height={100}
              />

              <div className="px-8 py-2 border-t border-black text-center">
                <p className="lg:text-xs text-[10px] font-semibold">
                  {quotationData.company.manager}
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
