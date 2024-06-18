import axios from "axios";

const API_KEY = "b61fd4de0fdf4c2eb1fa5741fc381522";
const BASE_URL = "https://newsapi.org/v2";

const newsAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const getTopHeadlines = async (category) => {
  try {
    const response = await newsAPI.get("/top-headlines", {
      params: {
        country: "us",
        category: category || null,
      },
    });
    return response.data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default newsAPI;