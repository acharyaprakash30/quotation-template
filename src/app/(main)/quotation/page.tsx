"use client";
import React, { useState } from "react";
import { BgImg } from "@app/constants/SvgCollection";
import QuotationSheet from "@app/components/QuotationSheet";
import QuotationForm from "@app/components/QuotationForm";
import { PostQuotation } from "@app/app/api/submission";
import toast from "react-hot-toast";

const page = () => {
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const [subTotal, setSubTotal] = React.useState<number>(0);
  const [quotationData, setQuotationData] = useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = (values: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("acountName", values.acountName);
    formData.append("swiftCode", values.swiftCode);
    formData.append("name", values.name);
    formData.append("manager", values.manager);
    formData.append("quotationNumber", values.quotationNo);
    formData.append("quotationDate", values.quotationDate);
    formData.append("validDate", values.validDate);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("accountNumber", values.accountNumber);
    formData.append("bankName", values.bankName);
    // formData.append("logo", values.logo);
    formData.append("managerSignature", values.managerSignature);
    formData.append("termsAndConditions", values.termsAndConditions);
    formData.append("taxAmount", values.taxAmount);
    formData.append("totalAmount", String(subTotal));
    // formData.append("clientLogo", values.clientLogo);
    formData.append("clientName", values.clientName);
    formData.append("clientAddress", values.clientAddress);
    formData.append("address", values.address);
    formData.append("email", values.email);
    formData.append("clientEmail", values.clientEmail);


    formData.append(
      "quotationServices",
      JSON.stringify(values.quotationServices)
    );
    PostQuotation(formData)
      .then((response) => {
        setLoading(false);
        if (response?.data) {
          setQuotationData(response?.data?.data?.quotationData);
          setToggleForm(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.error.logo) {
          toast.error(error.response.data.error.logo);
        } else {
          toast.error("Error Generating Quotation!");
        }
        setToggleForm(false);
      });
  };

  return (
    <div className="sheet-wrapper">
      <div className="relative w-full">
        <div className="absolute w-full h-[400px] lg:h-[346px] overflow-hidden z-10">
          <div className="object-cover">
            <BgImg />
          </div>
        </div>
      </div>
      <div className="lg:p-0 p-4 relative w-full flex lg:flex-row flex-col gap-10 z-50">
        <div
          className={`lg:absolute top-40 overflow-hidden
            ${toggleForm ? "lg:left-4 xl:left-6 lg:w-[48%]" : "left-[28%] lg:w-1/2"}
             transition-all ease-in-out duration-300 z-50 bg-white rounded-xl shadow-xl`}
        >
          <QuotationForm
            subTotal={subTotal}
            setSubTotal={setSubTotal}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>

        <div
          className={`lg:absolute top-40 lg:my-0 my-10 ${
            toggleForm ? "opacity-100 lg:right-4 xl:right-6 z-30 lg:w-[48%]" : "left-10 opacity-0 z-0 w-1/2"
          } transition-all ease-in-out duration-300`}
        >
          {quotationData && 
          <QuotationSheet quotationData={quotationData} />
          }
        </div>
      </div>
    </div>
  );
};

export default page;
