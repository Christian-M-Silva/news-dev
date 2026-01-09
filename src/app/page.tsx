import CardNews from "@/components/specific/CardNews/CardNews";
import GetNews from "@/app/helpers/request";
import { NewsResponse } from "@/types";

export default async function Home() {
	const news: NewsResponse = await GetNews()

	return (
		<div className="m-3">
			{news.articles.map(notice => <CardNews key={notice.id} id={notice.id} title={notice.title} description={notice.description} />)}
		</div>
	);
}
