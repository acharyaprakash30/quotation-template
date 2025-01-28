"use client";
import React from "react";

const Table = ({ quotationData }: any) => {
  console.log(
    quotationData?.quotationServices,
    typeof quotationData?.quotationServices
  );
  const quotationServices = JSON.parse(quotationData?.quotationServices);

  console.log(quotationServices, "quotationServices");
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <table className="w-full table-fixed">
          <thead className="text-left">
            <tr className="bg-[#DEDCFE] font-semibold text-[10px] text-[#413ACA] uppercase">
              <th className="px-4 py-2.5 rounded-l-[20px]">Service</th>
              <th className="py-2.5">Quantity</th>
              <th className="py-2.5">Price{"($)"}</th>
              <th className="py-2.5 rounded-r-[20px]">Total</th>
            </tr>
          </thead>
          <tbody>
            {quotationData &&
              quotationServices.map((item: any, index: number) => (
                <tr key={index} className="odd:bg-white even:bg-[#F8F9FC]">
                  <td className="text-xs p-4 rounded-l-[20px] font-semibold">
                    {item.service}
                    <span className="flex flex-col gap-1 mt-1">
                      <span className="text-[11px] text-[#04151ABF] font-normal">
                        {item.description}
                      </span>
                    </span>
                  </td>
                  <td className="text-[11px] text-[#04151ABF] font-normal">
                    {item.hours}
                  </td>
                  <td className="text-[11px] text-[#04151ABF] font-normal">
                    {item.price}
                  </td>
                  <td className="text-[11px] text-[#04151ABF] font-normal rounded-r-[20px]">
                    {item.total}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="p-4 lg:pr-9 bg-[#DEDCFE80] rounded-[20px] mt-4">
          <div className="flex justify-between">
            <div className="lg:w-1/2">
              <p className="uppercase text-[10px] text-[#5850EB] font-bold">
                Payment Info
              </p>
              <div className="mt-3">
                <p className="lg:text-[11px] text-[8px] font-normal mb-2">
                  Account No. :{" "}
                  <span className="font-semibold">
                    {quotationData.accountNumber}
                  </span>
                </p>
                <p className="lg:text-[11px] text-[9px] font-normal">
                  Bank Name :{" "}
                  <span className="font-semibold">
                    {" "}
                    {quotationData.bankName}
                  </span>
                </p>
              </div>
            </div>

            <div className="uppercase lg:w-1/3">
              <div className="lg:px-4 font-medium">
                <div className="flex justify-between items-center mb-2">
                  <p className="lg:text-[10px] text-[8px]">sub total</p>
                  <p className="lg:text-[11px] text-[9px]">
                    {quotationData.totalAmount}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="lg:text-[10px] text-[8px]">tax</p>
                  <p className="lg:text-[11px] text-[9px]">
                    {quotationData.taxAmount}
                  </p>
                </div>
              </div>
              <div className="text-white bg-[#5850EB] rounded-[20px] mt-3 lg:px-4 lg:py-3 p-2">
                <div className="flex justify-between items-center font-bold">
                  <p className="lg:text-[11px] text-[8px] mr-7 lg:mr-0">
                    total price
                  </p>
                  <p className="lg:text-[11px] text-[9px]">
                    {" "}
                    {quotationData.totalAmount - quotationData.taxAmount}{" "}
                  </p>
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
