"use client";
import { Form, Formik } from "formik";
import React from "react";
import InputField from "./shared/InputField";
import { formItems } from "@app/constants/options";
import { useRouter } from "next/navigation";

const CreateQuotationForm = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ service: "" }}
      onSubmit={() => router.push("/quotation")}
    >
      <Form className="w-full  px-5 py-10 mt-4 rounded-xl shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-2">
          {formItems.map((item, index) => (
            <div key={index} className="w-[49%]">
              <InputField
                name={item.name}
                placeholder={item.placeholder}
                label={item.label}
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <button
            type="submit"
            className="text-white bg-green-500 px-5 py-2 rounded-full "
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CreateQuotationForm;
