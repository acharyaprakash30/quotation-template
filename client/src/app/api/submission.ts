import api from "."

export const PostQuotation = async (values:any) => {
    const response = await api.post("/api/v1/quotation", values);
    return response.data;
}