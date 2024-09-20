import api from ".";

export const PostQuotation = async (values: any) => {
  const response = await api.post("/api/v1/quotation", values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response) {
    console.log(response);
    return response;
  }
};
