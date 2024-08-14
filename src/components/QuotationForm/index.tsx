import React from "react";
import { CreateQuotationForm } from "../CreateQuotationForm";

const QuotationForm = ({ toggle }: { toggle: (value: boolean) => void }) => {
  return (
    <>
      <CreateQuotationForm toggle={toggle}/>
    </>
  );
};

export default QuotationForm;
