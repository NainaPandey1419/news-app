import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "b61fd4de0fdf4c2eb1fa5741fc381522";
const BASE_URL = "https://newsapi.org/v2";

// An async thunk for fetching news data
export const fetchNews = createAsyncThunk("news/fetchNews", async (params) => {
  const { category = null, searchQuery = null } = params || {};
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "us",
      category: category || null,
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