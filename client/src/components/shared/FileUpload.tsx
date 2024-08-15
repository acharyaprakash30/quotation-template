import { ErrorMessage } from "formik";
import React from "react";

const FileUpload = ({
  value,
  name,
  label,
}: {
  name: string;
  label: string;
  value: (name: string, value: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        name={name}
        onChange={(event: any) => value(name, event.target.files[0])}
        className="p-2 border border-gray-300 rounded-md w-full"
      />
      <ErrorMessage name={name} component={"div"} className="text-red-500 text-xs"/>
    </div>
  );
};

export default FileUpload;
