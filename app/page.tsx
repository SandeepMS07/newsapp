import React from "react";
import { categories } from "../constants/constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./components/NewsList/NewsList";
import response from "../response.json"

async function HomePage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","))
  console.log("news"+JSON.stringify(news))

  return <div>
    <NewsList news={news}/>
  </div>;
}

export default HomePage;
