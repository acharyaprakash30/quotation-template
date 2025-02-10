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
  loading
}: {
  subTotal: number;
  setSubTotal: any;
  handleSubmit: (values: any) => void;
  loading: boolean;
}) => {
  const calculateTotal = (
    quantity: number | string,
    price: number | string
  ): number => {
    const validquantity = parseFloat(quantity as string) || 0;
    const validPrice = parseFloat(price as string) || 0;
    return validquantity * validPrice;
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
          quotationDate: new Date().toISOString().split("T")[0],
          validDate: new Date().toISOString().split("T")[0],
          email: "",
          clientEmail: "",
          acountName: "",
          swiftCode: "",
          // invoiceTo: "",
          phoneNumber: "",
          accountNumber: "",
          bankName: "",
          // logo: null,
          managerSignature: null,
          // clientLogo:null,
          termsAndConditions: "",
          taxAmount: 0,
          totalAmount: 0,
          address: "",
          clientName: "",
          clientAddress: "",
          quotationServices: [
            {
              service: "",
              quantity: 0,
              price: 0,
              total: 0,
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
                Quotation Details
              </p>
              <div className="grid grid-cols-2 gap-4 items-start bg-gray-100 p-5 rounded-xl ">

                <InputField
                  name={"quotationNo"}
                  label="Quotation No"
                  placeholder="eg: 124532"
                />
                <InputField
                  name={"quotationDate"}
                  label="Quotation Date"
                  placeholder="eg: 124532"
                  type="date"
                  initialValue={new Date().toISOString().split("T")[0]}
                />
                <InputField
                  name={"validDate"}
                  label="Valid Till Date"
                  placeholder="eg: 124532"
                  type="date"
                  initialValue={new Date().toISOString().split("T")[0]}
                />

              </div>
            </div>
            <div>
              <p className="text-[#5850EB] text-xl font-semibold py-4 mt-8">
                Business Details
              </p>
              <p className="text-[#5C6269] font-semibold text-xs uppercase">Quotation From</p>
              <div className=" col-span-2 grid grid-cols-2 p-5 gap-4 mt-2 mb-4 bg-gray-100 rounded-xl">
                {/* <FileUpload
                  value={setFieldValue}
                  name={"logo"}
                  label="Business Logo"
                  uploadedValue={values.logo}
                /> */}
                <InputField
                  name={"name"}
                  label="Business Name"
                  placeholder="eg: Milo logic"
                />
                <InputField
                  name={"address"}
                  label="Business Address"
                  placeholder="eg: Kathmandu"
                />
                <InputField
                  name={"email"}
                  label="Business Email"
                  placeholder="eg: example@test.com"
                />

                <InputField
                  name={"phoneNumber"}
                  label="Contact Number"
                  placeholder="eg: 9806960766"
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
                <InputField
                  name={"acountName"}
                  label="Account Name"
                  placeholder="eg: Milo logic"
                />
                <InputField
                  name={"swiftCode"}
                  label="Swift Code"
                  placeholder="eg: 15776"
                />
              </div>
            </div>

            <p className="text-[#5C6269] font-semibold text-xs uppercase mt-8">Quotation For</p>
            <div className=" col-span-2 grid grid-cols-2 p-5 gap-4 mt-2 mb-4 bg-gray-100 rounded-xl">
              {/* <FileUpload
                value={setFieldValue}
                name={"clientLogo"}
                label="Business Logo"
                uploadedValue={values.clientLogo}
              /> */}
              <InputField
                name={"clientName"}
                label="Business Name"
                placeholder="eg: Milo logic"
              />
              <InputField
                name={"clientAddress"}
                label="Business Address"
                placeholder="eg: Kathmandu"
              />
              <InputField
                name={"clientEmail"}
                label="Business Email"
                placeholder="eg: example@test.com"
              />


            </div>
            <p className="text-[#5850EB] text-xl font-semibold mt-8">
              Quotations
            </p>

            <FieldArray
              name="quotationServices"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-4 mt-4">
                  {values.quotationServices &&
                    values.quotationServices.length > 0 &&
                    values.quotationServices.map((item, index) => (
                      <div key={index} className="bg-gray-100 p-5 rounded-xl">
                        <div className=" flex items-center justify-between gap-2 mb-4">
                          {/* <p className="text-[#5850EB] text-xl font-semibold py-4 ">
                            Quotation {index +1 }
                          </p> */}
                          <p className="text-[#5C6269] font-semibold text-xl  py-4">Quotation {index + 1}</p>
                          <div className=" flex items-center justify-end gap-2">
                            <button
                              type="button"
                              disabled={values.quotationServices.length === 1}
                              onClick={() => arrayHelpers.remove(index)}
                              className={`${values.quotationServices.length === 1
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
                                    quantity: "",
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

                                  if (key === "quantity" || key === "price") {
                                    const quantity =
                                      key === "quantity"
                                        ? parseFloat(value)
                                        : item.quantity;
                                    const price =
                                      key === "price"
                                        ? parseFloat(value)
                                        : item.price;

                                    const total = calculateTotal(quantity, price);
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

                  <div className="mt-2 grid grid-cols-2 items-start gap-4 p-5 bg-gray-100 rounded-xl ">
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
                      {
                        loading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                          </div>
                        ) : (
                          "Submit"
                        )
                      }
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
