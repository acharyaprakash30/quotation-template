import {
  CheckSuccessIcon,
  UploadImageIcon,
} from "@app/constants/SvgCollection";
import { ErrorMessage } from "formik";
import React from "react";

const FileUpload = ({
  value,
  name,
  label,
  uploadedValue,
}: {
  name: string;
  label: string;
  value: (name: string, value: any) => void;
  uploadedValue?: File | null;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[#5C6269] flex flex-col gap-2 text-xs"
      >
        <span className="uppercase font-semibold "> {label}</span>
        <input
          type="file"
          id={name}
          name={name}
          onChange={(event: any) => value(name, event.target.files[0])}
          className="hidden"
        />
        <span className="p-2 border border-gray-300 rounded-md w-full cursor-pointer flex items-center gap-2">
          <UploadImageIcon /> Upload File
        </span>
      </label>
      {uploadedValue && (
        <p className="text-xs text-[#5850EB] inline-flex items-center gap-1">
          {uploadedValue.name} <CheckSuccessIcon />
        </p>
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default FileUpload;
