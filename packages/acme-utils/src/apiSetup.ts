import axios, { AxiosInstance } from "axios";

const apiClientAemContent = axios.create({
    baseURL: "https://dev.cms.services.abbott",
});


export const axiosInstanceAemContent = (): AxiosInstance => apiClientAemContent;
