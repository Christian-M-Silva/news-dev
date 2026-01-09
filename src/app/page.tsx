import CardNews from "@/components/specific/CardNews/CardNews";
import { NewsResponse } from "@/types";

export default async function Home() {
	const data = await fetch(`https://gnews.io/api/v4/top-headlines?category=technology&lang=pt&apikey=${process.env.API_KEY}`, {next: {revalidate: 60}})
	const news: NewsResponse = await data.json()

	return (
		<div className="m-3">
			{news.articles.map(notice => <CardNews key={notice.id} id={notice.id} title={notice.title} description={notice.description} />)}
		</div>
	);
}
