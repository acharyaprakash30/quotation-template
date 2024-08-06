"use client";
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDownload from "./download/PdfDownload";

const Table = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white drop-shadow-md lg:w-1/2 lg:p-4 p-2 rounded-2xl">
        <table className="w-full table-fixed">
          <thead className="text-left">
            <tr className="bg-[#DEDCFE] font-semibold text-[10px] text-[#413ACA] uppercase">
              <th className="px-4 py-2.5 rounded-l-[20px]">Service</th>
              <th className="py-2.5">Hours</th>
              <th className="py-2.5">Price{"($)"}</th>
              <th className="py-2.5 rounded-r-[20px]">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-[#F8F9FC]">
              <td className="text-xs p-4 rounded-l-[20px] font-semibold">
                Branding
                <span className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                </span>
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal">04</td>
              <td className="text-[11px] text-[#04151ABF] font-normal">
                25,000
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal rounded-r-[20px]">
                34587
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F8F9FC]">
              <td className="text-xs p-4 rounded-l-[20px] font-semibold">
                Branding
                <span className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                </span>
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal">04</td>
              <td className="text-[11px] text-[#04151ABF] font-normal">
                25,000
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal rounded-r-[20px]">
                34587
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F8F9FC]">
              <td className="text-xs p-4 rounded-l-[20px] font-semibold">
                Branding
                <span className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                </span>
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal">04</td>
              <td className="text-[11px] text-[#04151ABF] font-normal">
                25,000
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal rounded-r-[20px]">
                34587
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F8F9FC]">
              <td className="text-xs p-4 rounded-l-[20px] font-semibold">
                Branding
                <span className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                </span>
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal">04</td>
              <td className="text-[11px] text-[#04151ABF] font-normal">
                25,000
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal rounded-r-[20px]">
                34587
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F8F9FC]">
              <td className="text-xs p-4 rounded-l-[20px] font-semibold">
                Branding
                <span className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                  <span className="text-[11px] text-[#04151ABF] font-normal">
                    Some service description
                  </span>
                </span>
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal">04</td>
              <td className="text-[11px] text-[#04151ABF] font-normal">
                25,000
              </td>
              <td className="text-[11px] text-[#04151ABF] font-normal rounded-r-[20px]">
                34587
              </td>
            </tr>
          </tbody>
        </table>

        <div className="p-4 lg:pr-9 bg-[#DEDCFE80] rounded-[20px]">
          <div className="flex justify-between">
            <div className="lg:w-1/2">
              <p className="uppercase text-[10px] text-[#5850EB] font-bold">
                Payment Info
              </p>
              <div className="mt-3">
                <p className="lg:text-[11px] text-[8px] font-normal mb-2">
                  Account No. :{" "}
                  <span className="font-semibold">423756495744832</span>
                </p>
                <p className="lg:text-[11px] text-[9px] font-normal">
                  Bank Name :{" "}
                  <span className="font-semibold"> HBL Bank Ltd.</span>
                </p>
              </div>
            </div>

            <div className="uppercase lg:w-1/3">
              <div className="lg:px-4 font-medium">
                <div className="flex justify-between items-center mb-2">
                  <p className="lg:text-[10px] text-[8px]">sub total</p>
                  <p className="lg:text-[11px] text-[9px]">34587</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="lg:text-[10px] text-[8px]">tax</p>
                  <p className="lg:text-[11px] text-[9px]">34587</p>
                </div>
              </div>
                <div className="text-white bg-[#5850EB] rounded-[20px] mt-3 lg:px-4 lg:py-3 p-2">
                  <div className="flex justify-between items-center font-bold">
                    <p className="lg:text-[11px] text-[8px] mr-7 lg:mr-0">total price</p>
                    <p className="lg:text-[11px] text-[9px]">34587</p>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
