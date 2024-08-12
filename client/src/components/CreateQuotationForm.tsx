"use client";
import React from "react";
import { Formik, Form, FieldArray } from "formik";
import InputField from "./shared/InputField";
// import { useRouter } from "next/navigation";

export const CreateQuotationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          quotation: [
            {
              service: "",
              hours: "",
              price: "",
              accNumber: "",
            },
          ],
        }}
        onSubmit={(values) => console.log(values)}
        render={({ values }) => (
          <Form className="w-full  px-5 py-10 mt-4 rounded-xl shadow-xl">
            <FieldArray
              name="quotation"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-4">
                  {values.quotation && values.quotation.length > 0 ? (
                    values.quotation.map((item, index) => (
                      <div key={index} className="flex gap-2 items-end">
                        {Object.keys(item).map((key, subIndex) => (
                          <div key={subIndex} className="w-[49%]">
                            <InputField
                              key={key}
                              name={`quotation[${index}].${key}`}
                              placeholder={
                                key.charAt(0).toUpperCase() + key.slice(1)
                              }
                              label={key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          className="bg-red-600 text-white px-4 py-2 rounded-xl"
                        >
                          -
                        </button>
                        {index === values.quotation.length - 1 && (
                          <button
                            type="button"
                            className="bg-green-600 text-white px-4 py-2 rounded-xl"
                            onClick={() =>
                              arrayHelpers.push({
                                service: "",
                                hours: "",
                                price: "",
                                accNumber: "",
                              })
                            }
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          service: "",
                          hours: "",
                          price: "",
                          accNumber: "",
                        })
                      }
                      className="bg-green-600 w-fit text-white px-4 py-2 rounded-xl"
                    >
                      Add a Quotation
                    </button>
                  )}
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
      />
    </div>
  );
};
