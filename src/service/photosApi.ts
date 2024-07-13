import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "Pj9OG2VePIxBotML07icqApC0IcM_X0oMmtO4D0AFq0";

export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface FetchDataResponse {
  results: Photo[];
  total_pages: number;
}

export const fetchData = async (
  searchQuery: string,
  page: number
): Promise<FetchDataResponse> => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return response.data;
};
