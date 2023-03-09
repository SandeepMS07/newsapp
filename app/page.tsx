import React from "react";
import { categories } from "../constants/constants";
import fetchNews from "../lib/fetchNews";

async function HomePage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news)

  return <div>{/* NewsList news */}</div>;
}

export default HomePage;
