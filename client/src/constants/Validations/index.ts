import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("This Field is required"),
  manager: yup.string().required("This Field is required"),
  quotationNo: yup
    .number()
    .typeError("Quotation Number must be a number")
    .required("This Field is required"),
  invoiceTo: yup.string().required("This Field is required"),
  phoneNumber: yup
    .number()
    .typeError("Phone Number must be a number")
    .required("This Field is required"),
    accountNumber: yup
    .string()
    .required("This Field is required"),
  bankName: yup.string().required("This Field is required"),
  logo: yup.mixed().required("This Field is required"),
  managerSignature: yup.mixed().required("This Field is required"),
  termsAndConditions: yup.string().required("This Field is required"),
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
      description: yup.string().required("This Field is required"),
      total: yup
        .number()
        .typeError("Total must be a number")
        .required("This Field is required"),
    })
  ),
});
