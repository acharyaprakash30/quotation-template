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
      <div className="lg:py-8 p-4 lg:px-6 ">
        <div className="flex flex-wrap justify-between">
          <p className="lg:text-xl xl:text-4xl font-semibold mt-2">
            Quotation
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <p className=" text-xs text-black capitalize">Quotation Number</p>
            <p className="lg:text-xs text-xs font-medium text-black/60 "> {quotationData.quotationNumber}</p>
            <p className="text-xs text-black capitalize">Date</p>
            <p className="lg:text-xs text-xs font-medium text-black/60 "> {quotationData.quotationDate}</p>
            <p className="text-xs text-black capitalize">Valid Till Date</p>
            <p className="lg:text-xs text-xs font-medium text-black/60 "> {quotationData.validDate}</p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <p className="text-xs font-normal ">Quotation From: </p>

            <div className="flex gap-4 my-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.logo}`}
                alt="logo"
                className="w-[80px] h-[80px] "
                width={100}
                height={100}
              />
              <div>
                <p className="lg:text-xs text-xs font-normal text-black capitalize">
                  {quotationData.clientName}
                </p>
                <p className="text-[10px] font-normal text-black/60 capitalize">
                  {quotationData.clientEmail}
                </p>
                <p className="text-[10px] font-normal text-black/60 capitalize">
                  {quotationData.clientAddress}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-normal">Quotation To: </p>
            <div className="flex justify-end gap-4 my-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.logo}`}
                alt="logo"
                className="w-[80px] h-[80px] "
                width={100}
                height={100}
              />

              <div>
                <p className="lg:text-xs text-xs font-semibold text-black capitalize">{quotationData.company.name}</p>
                <p className="lg:text-[10px] text-[10px] font-normal text-black/60 ">{quotationData.company.email}</p>
                <p className="lg:text-[10px] text-[10px] font-normal text-black/60 ">{quotationData.company.address}</p>
                <p className="lg:text-[10px] text-[10px] font-normal text-black/60 ">{quotationData.company.phoneNumber}</p>
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
