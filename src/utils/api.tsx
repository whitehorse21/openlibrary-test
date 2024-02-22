import axios, { AxiosResponse } from "axios";
import { SearchQueryParam, SearchResponse } from "./types";
import { API_ENDPOINTS, baseURL } from ".";

export const fetchData = async (
  params: SearchQueryParam
): Promise<AxiosResponse<SearchResponse>> => {
  try {
    const response = await axios.get<SearchResponse>(
      `${baseURL}${API_ENDPOINTS.SEARCH}`,
      {
        params,
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
