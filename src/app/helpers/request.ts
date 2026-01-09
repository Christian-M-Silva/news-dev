import { NewsResponse } from "../../types";

export default async function GetNews() {
  const data = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=technology&lang=pt&apikey=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const news: NewsResponse = await data.json();

  return news;
}
