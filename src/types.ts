export interface CardNewsProps {
    title: string,
    description:string,
	id: string
}

export interface NewsResponse {
  information: Information;
  totalArticles: number;
  articles: Article[];
}

export interface Information {
  realTimeArticles: {
    message: string;
  };
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string; // ISO 8601 string
  lang: string;
  source: Source;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  country: string;
}
