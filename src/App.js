// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ArticleDetails from "./components/ArticleDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:title" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;