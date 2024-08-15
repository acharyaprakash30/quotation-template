import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import React from "react";

const InputField = ({
  name,
  placeholder,
  label,
  type,
  isTextArea = false,
  isDisabled = false,
  customOnChange,
  readOnly = false,
  initialValue = null,
}: {
  name: string;
  placeholder: string;
  label: string;
  type?: string;
  isTextArea?: boolean;
  isDisabled?: boolean;
  customOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly? :boolean;
  initialValue?: string | number | null;
}) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFieldValue(name, value);
    if (customOnChange) {
      customOnChange(event);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[#5C6269] font-semibold text-xs uppercase">{label}</label>
      <Field as={isTextArea ? "textarea" : "input"}
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md w-full outline-none"
        disabled={isDisabled}
        onChange={handleChange}
        {...(readOnly && { value: initialValue })}
      />
       <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default InputField;
