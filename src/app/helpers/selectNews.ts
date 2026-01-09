import { NewsResponse } from "@/types";
import GetNews from "./request";

export async function SelectNews(id: string) {
  const news: NewsResponse = await GetNews();

  const newsSelected = news.articles.find((notice) => notice.id === id);

  return newsSelected
}
