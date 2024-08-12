import { CreateQuotationForm } from "@app/components/CreateQuotationForm";
import React from "react";

const CreateQuotation = () => {
  return (
    <div className="w-2/3 m-auto">
        <div className="py-10">
          <p className="text-2xl font-semibold"> Create Quotation</p> 
        </div>
      <CreateQuotationForm />
    </div>
  );
};

export default CreateQuotation;
