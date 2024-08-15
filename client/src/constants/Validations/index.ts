import * as yup from "yup";

export const validationSchema = yup.object().shape({
  company: yup.string().required("This Field is required"),
  name: yup.string().required("This Field is required"),
  designation: yup.string().required("This Field is required"),
  quotationNo: yup
    .number()
    .typeError("Quotation Number must be a number")
    .required("This Field is required"),
  invoiceTo: yup.string().required("This Field is required"),
  phone: yup
    .number()
    .typeError("Phone Number must be a number")
    .required("This Field is required"),
  accNo: yup
    .number()
    .typeError("Account Number must be a number")
    .required("This Field is required"),
  bank: yup.string().required("This Field is required"),
  logo: yup.mixed().required("This Field is required"),
  signature: yup.mixed().required("This Field is required"),
  quotation: yup.array().of(
    yup.object().shape({
      service: yup.string().required("This Field is required"),
      hours: yup
        .number()
        .typeError("Hour must be a number")
        .required("This Field is required"),
      price: yup
        .number()
        .typeError("Price must be a number")
        .required("This Field is required"),
      total: yup
        .number()
        .typeError("Total must be a number")
        .required("This Field is required"),
    })
  ),
});
