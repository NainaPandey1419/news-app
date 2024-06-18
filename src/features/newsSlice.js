// src/features/newsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define your API key and base URL
const API_KEY = "350d2b320bf6423486f933876fd2733e";
const BASE_URL = "https://newsapi.org/v2";

// Create an async thunk for fetching news data
export const fetchNews = createAsyncThunk("news/fetchNews", async (category = null) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "us",
      category: category,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add any additional reducers you need
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;