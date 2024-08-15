import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const InputField = ({
  name,
  placeholder,
  label,
  type,
}: {
  name: string;
  placeholder: string;
  label: string;
  type?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <ErrorMessage
        name={name}
        component={"div"}
        className="text-red-500 text-xs min-h-5"
      />
    </div>
  );
};

export default InputField;
