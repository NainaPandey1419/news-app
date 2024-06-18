// src/services/newsAPI.js
import axios from "axios";

const API_KEY = "350d2b320bf6423486f933876fd2733e";
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