"use client";
import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import InputField from "./shared/InputField";
import * as yup from "yup";
import { validationSchema } from "@app/constants/Validations";
import FileUpload from "./shared/FileUpload";

export const CreateQuotationForm = ({
  toggle,
}: {
  toggle: (value: boolean) => void;
}) => {
  const handleSubmit = (values: any) => {
    console.log(values);
    toggle(true);
  };
  return (
    <div>
      <Formik
        initialValues={{
          company: "",
          name:"",
          designation:"",
          quotationNo: "",
          createdAt: "",
          invoiceTo: "",
          phone: "",
          accNo: "",
          bank: "",
          logo: "",
          signature: "",
          quotation: [
            {
              service: "",
              hours: "",
              price: "",
              total: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, setFieldValue }) => (
          <Form className="px-5 py-10">
            <div>
              <p className="text-2xl font-semibold py-4">Details</p>
              <div className="grid grid-cols-2 gap-4 items-start ">
                <FileUpload
                  value={setFieldValue}
                  name={"logo"}
                  label="Upload Logo"
                />
                <InputField
                  name={"company"}
                  label="Company Name"
                  placeholder="eg: Milo Logic Pvt. Ltd."
                />
                <InputField
                  name={"name"}
                  label="Name"
                  placeholder="eg: Bipin Pathak"
                />
                <InputField
                  name={"designation"}
                  label="Designation"
                  placeholder="eg: Associate Manager"
                />
                <InputField
                  name={"quotationNo"}
                  label="Quotation No"
                  placeholder="eg: 124532"
                />
                <InputField
                  name={"invoiceTo"}
                  label="Invoice To"
                  placeholder="eg: Mr.Harihar"
                />
                <InputField
                  name={"phone"}
                  label="Phone"
                  placeholder="eg: 9806960766"
                />
                <InputField
                  name={"bank"}
                  label="Bank"
                  placeholder="eg: NMB Bank"
                />
                <InputField
                  name={"accNo"}
                  label="Account Number"
                  placeholder="eg: 15776457738972"
                />
                <FileUpload
                  value={setFieldValue}
                  name={"signature"}
                  label="Upload Signature"
                />
              </div>
            </div>
            <FieldArray
              name="quotation"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-4 mt-8">
                  {values.quotation &&
                    values.quotation.length > 0 &&
                    values.quotation.map((item, index) => (
                      <div key={index}>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <p className="text-2xl font-semibold py-4">
                            Quotation
                          </p>
                          <div className="mt-2 flex items-center justify-end gap-2">
                            <button
                              type="button"
                              disabled={values.quotation.length === 1}
                              onClick={() => arrayHelpers.remove(index)}
                              className={`${
                                values.quotation.length === 1
                                  ? "bg-gray-500 cursor-not-allowed"
                                  : "bg-red-500 cursor-pointer"
                              } text-white px-5 py-2 rounded-xl w-fit`}
                            >
                              -
                            </button>
                            {index === values.quotation.length - 1 && (
                              <button
                                type="button"
                                className="bg-green-600 text-white px-5 py-2 rounded-xl w-fit"
                                onClick={() =>
                                  arrayHelpers.push({
                                    service: "",
                                    hours: "",
                                    price: "",
                                    total: "",
                                  })
                                }
                              >
                                +
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 items-start">
                          {Object.keys(item).map((key, subIndex) => (
                            <div key={subIndex} className="w-full">
                              <InputField
                                key={key}
                                name={`quotation[${index}].${key}`}
                                placeholder={
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                }
                                label={
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  <div className="mt-8 text-right">
                    <button
                      type="submit"
                      className="text-white bg-green-500 px-5 py-2 rounded-full "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
