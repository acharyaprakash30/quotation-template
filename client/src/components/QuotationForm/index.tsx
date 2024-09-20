"use client";
import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import { validationSchema } from "@app/constants/Validations";
import { AddIcon, DeleteIcon } from "@app/constants/SvgCollection";
import InputField from "../shared/InputField";
import FileUpload from "../shared/FileUpload";

const QuotationForm = ({
  subTotal,
  setSubTotal,
  handleSubmit,
}: {
  subTotal: number;
  setSubTotal: any;
  handleSubmit: (values: any) => void;
}) => {
  const calculateTotal = (
    hours: number | string,
    price: number | string
  ): number => {
    const validHours = parseFloat(hours as string) || 0;
    const validPrice = parseFloat(price as string) || 0;
    return validHours * validPrice;
  };

  const calculateSubtotal = (quotation: any[]): number => {
    return quotation.reduce(
      (acc, curr) => acc + (parseFloat(curr.total) || 0),
      0
    );
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          manager: "",
          quotationNo: "",
          invoiceTo: "",
          phoneNumber: "",
          accountNumber: "",
          bankName: "",
          logo: null,
          managerSignature: null,
          termsAndConditions: "",
          taxAmount: 0,
          totalAmount: 0,
          quotationServices: [
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
              <p className="text-[#5850EB] text-xl font-semibold pb-4">
                Company Details
              </p>
              <div className="grid grid-cols-2 gap-4 items-start ">
                <FileUpload
                  value={setFieldValue}
                  name={"logo"}
                  label="Upload Logo"
                  uploadedValue={values.logo}
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
                <FileUpload
                  value={setFieldValue}
                  name="managerSignature"
                  label="Upload Manager Signature"
                  uploadedValue={values.managerSignature}
                />
                <div className="col-span-2">
                  <InputField
                    name={"phoneNumber"}
                    label="Phone Number"
                    placeholder="eg: 9806960766"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#5850EB] text-xl font-semibold py-4 mt-8">
                Quotation Details
              </p>
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
              name="quotationServices"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-4 mt-8">
                  {values.quotationServices &&
                    values.quotationServices.length > 0 &&
                    values.quotationServices.map((item, index) => (
                      <div key={index}>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <p className="text-[#5850EB] text-xl font-semibold py-4 mt-8">
                            Quotation
                          </p>
                          <div className="mt-2 flex items-center justify-end gap-2">
                            <button
                              type="button"
                              disabled={values.quotationServices.length === 1}
                              onClick={() => arrayHelpers.remove(index)}
                              className={`${
                                values.quotationServices.length === 1
                                  ? "bg-gray-500 cursor-not-allowed"
                                  : "bg-red-500 cursor-pointer"
                              } text-white p-2 rounded-xl w-fit`}
                            >
                              <DeleteIcon />
                            </button>
                            {index === values.quotationServices.length - 1 && (
                              <button
                                type="button"
                                className="bg-[#5850EB] text-white p-2 rounded-xl w-fit"
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
                                <AddIcon />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 items-start">
                          {Object.keys(item).map((key, subIndex) => (
                            <div
                              key={subIndex}
                              className={
                                key === "description"
                                  ? "col-span-2 w-full"
                                  : "w-full"
                              }
                            >
                              <InputField
                                key={key}
                                name={`quotationServices[${index}].${key}`}
                                placeholder={
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                }
                                label={
                                  key.charAt(0).toUpperCase() + key.slice(1)
                                }
                                isTextArea={key === "description"}
                                isDisabled={key === "total"}
                                customOnChange={(
                                  event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  const value = event.target.value;
                                  setFieldValue(
                                    `quotationServices[${index}].${key}`,
                                    value
                                  );

                                  if (key === "hours" || key === "price") {
                                    const hours =
                                      key === "hours"
                                        ? parseFloat(value)
                                        : item.hours;
                                    const price =
                                      key === "price"
                                        ? parseFloat(value)
                                        : item.price;

                                    const total = calculateTotal(hours, price);
                                    setFieldValue(
                                      `quotationServices[${index}].total`,
                                      total
                                    );

                                    const updatedQuotation =
                                      values.quotationServices.map((q, i) =>
                                        i === index ? { ...q, total } : q
                                      );
                                    setSubTotal(
                                      calculateSubtotal(updatedQuotation)
                                    );
                                  }
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  <div className="mt-2 grid grid-cols-2 items-start gap-4">
                    <InputField
                      name={"taxAmount"}
                      label="Tax Amount"
                      placeholder="eg: 987"
                      customOnChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        const value = Number(event.target.value) || 0;
                        let valueAfterTax = subTotal - value;
                        if (valueAfterTax < 0) {
                          setFieldValue("taxAmount", 0);
                        } else {
                          setSubTotal(valueAfterTax);
                        }
                      }}
                    />
                    <InputField
                      name={"subtotal"}
                      label="Sub Total"
                      placeholder="eg: 15776457738972"
                      initialValue={subTotal}
                      isDisabled
                      readOnly
                    />
                    <div className="col-span-2">
                      <InputField
                        name={"termsAndConditions"}
                        label="Terms and Conditions"
                        placeholder="eg: It is a long established fact ...."
                        isTextArea
                      />
                    </div>
                    {/* <p>subtotal</p>
                          <p>{subTotal}</p> */}
                  </div>
                  <div className="mt-8 float-right">
                    <button
                      type="submit"
                      className="text-white bg-[#5850EB] px-5 py-2 rounded w-full "
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

export default QuotationForm;
