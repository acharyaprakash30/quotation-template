import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Table from "../Table";
import PdfDownload from "@app/components/download/PdfDownload";
import moment from "moment";

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
          <div className="flex flex-col ">
       
            <p className="lg:text-xl xl:text-4xl font-semibold mt-2 mb-2">
              Quotation
            </p>
            <p className="lg:text-xs text-xs font-normal text-black ml-1 ">
          {moment(quotationData.quotationDate).format("Do MMMM YYYY")}
              </p>
            <p className="lg:text-xs text-xs font-normal  text-[#413ACA] ml-1 "><span className="text-black text-bold">Quotation Number: </span> #{quotationData.quotationNumber}</p>

      

            {/* <p className="text-xs font-normal text-black">Date: {quotationData.quotationDate} </p> */}
            {/* <p className="text-xs font-normal text-black">Valid Till Date: {quotationData.validDate}</p> */}

          </div>
          <div className="flex flex-col gap-1 justify-center items-end">
    
            <Image src="https://www.milologic.com/_next/static/media/logo-milologic.1b06414e.svg" alt="logo" width={200} height={40} />
            <p className="lg:text-xs text-xs font-normal text-black ">{quotationData.company.email}</p>
            <p className="lg:text-xs text-[10px] font-normal text-black ">{quotationData.company.address}</p>
          </div>

        </div>
        <p className="lg:text-sm xl:text-sm font-normal mt-10 mb-2">
              Quotation For
            </p>
        <table className="w-full table-fixed ">
          <thead className="text-left">
            <tr className="bg-[#DEDCFE] font-semibold text-[10px] text-[#413ACA] uppercase">
              <th className="px-4 py-2.5 rounded-l-[20px]">Business Name</th>
              <th className="py-2.5">Business Email</th>
              <th className="py-2.5">Business Address</th>
              <th className="py-2.5">Valid Till Date</th>
            </tr>
          </thead>
          <tbody>
         
                <tr className="odd:bg-white even:bg-[#F8F9FC]">
                  <td className=" p-4 text-[11px] text-[#04151ABF] font-normald">
                    {quotationData.clientName}
                  </td>
                  <td className=" p-4 text-[11px] text-[#04151ABF] font-normald">
                    {quotationData.clientEmail}
                  </td>
                  <td className=" p-4 text-[11px] text-[#04151ABF] font-normal">
                    {quotationData.clientAddress}
                  </td>
                  <td className=" p-4 text-[11px] text-[#04151ABF] font-normal">
                  {moment(quotationData.validDate).format("Do MMMM YYYY")}
                  </td>
             
                </tr>
           
          </tbody>
        </table>


      </div>
    
      <div className="lg:p-4 p-2">
      <p className="lg:text-sm xl:text-sm font-normal mb-2">
              Quotations 
            </p>
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
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.managerSignature}`}
                alt="signature"
                className="w-1/2 m-auto"
                width={100}
                height={100}
              /> */}

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
