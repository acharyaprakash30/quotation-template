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
  const [subTotal, setSubTotal] = React.useState<number>(0);
  const calculateTotal = (hours: number | string, price: number | string): number => {
    const validHours = parseFloat(hours as string) || 0;
    const validPrice = parseFloat(price as string) || 0;
    return validHours * validPrice;
  };
  
  const handleSubmit = (values: any) => {
    console.log(values);
    toggle(true);
  };
  const calculateSubtotal = (quotation: any[]): number => {
    return quotation.reduce((acc, curr) => acc + (parseFloat(curr.total) || 0), 0);
  };
  return (
    <div>
      <Formik
        initialValues={{
          name:"",
          manager:"",
          quotationNo: "",
          invoiceTo: "",
          phoneNumber: "",
          accountNumber: "",
          bankName: "",
          logo: "",
          managerSignature: "",
          quotation: [
            {
              service: "",
              hours: "",
              price: "",
              total: "",
              description: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, setFieldValue }) => (
          <Form className="px-5 py-10">
            <div>
              <p className="text-2xl font-semibold py-4">Company Details</p>
              <div className="grid grid-cols-2 gap-4 items-start ">
                
                <FileUpload
                  value={setFieldValue}
                  name={"logo"}
                  label="Upload Logo"
                />
                <InputField
                  name={"name"}
                  label="Company Name"
                  placeholder="eg: Milo logic"
                />
                <InputField
                  name={"manager"}
                  label="Manager Name"
                  placeholder="eg: Manager Name"
                />
                    <InputField
                  name={"phoneNumber"}
                  label="Phone Number"
                  placeholder="eg: 9806960766"
                />
                   <FileUpload
                  value={setFieldValue}
                  name={"managerSignature"}
                  label="Upload Manager Signature"
                />
               
             
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold py-4 mt-8">Quotation Details</p>
              <div className="grid grid-cols-2 gap-4 items-start ">
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
                  name={"bankName"}
                  label="Bank Name"
                  placeholder="eg: NMB bank Name"
                />
                <InputField
                  name={"accountNumber"}
                  label="Account Number"
                  placeholder="eg: 15776457738972"
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
                                    description: "",
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
                            <div key={subIndex} className={key === "description" ? "col-span-2 w-full" : "w-full"}>
                              <InputField
                                key={key}
                                name={`quotation[${index}].${key}`}
                                placeholder={
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                }
                                label={
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                }
                                isTextArea={key === "description"}
                                isDisabled={key === "total"}
                                customOnChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                  const value = event.target.value;
                                  setFieldValue(`quotation[${index}].${key}`, value);
                      
                                  if (key === "hours" || key === "price") {
                                    const hours = key === "hours" ? parseFloat(value) : item.hours;
                                    const price = key === "price" ? parseFloat(value) : item.price;
                      
                                    const total = calculateTotal(hours, price);
                                    // setSubTotal(total + subTotal);
                                    setFieldValue(`quotation[${index}].total`, total);

                                    const updatedQuotation = values.quotation.map((q, i) =>
                                      i === index ? { ...q, total } : q
                                    );
                                    setSubTotal(calculateSubtotal(updatedQuotation));
                                 
                                  }
                                }}
                              />
                            </div>
                          ))}
                        </div>
                       
                      </div>
                    ))}
                     <div className="mt-2 flex items-center justify-end gap-2">
                     <InputField
                  name={"subtotal"}
                  label="Sub Total"
                  placeholder="eg: 15776457738972"
                  initialValue={subTotal}
                  isDisabled
                  readOnly
                />
                          {/* <p>subtotal</p>
                          <p>{subTotal}</p> */}
                          </div>
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
