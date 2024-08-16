import api from "."

export const PostQuotation = async (values:any) => {
    const response = await api.post("/quotation", values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
}