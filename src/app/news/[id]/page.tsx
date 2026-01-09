import { NewsResponse } from "@/types";

export default async function NewsDetail({ params }: {
	params: Promise<{ id: string }>
}
) {
	const data = await fetch(`https://gnews.io/api/v4/top-headlines?category=technology&lang=pt&apikey=${process.env.API_KEY}`, { next: { revalidate: 60 } })
	const news: NewsResponse = await data.json()
	const { id } = await params


	const newsSelected = news.articles.find(notice => notice.id === id)

	return (
		<main className="m-7" >
			<article className="w-full max-w-4xl text-gray-200">
				{/* Título */}
				<header className="text-center mb-8">
					<h1
						className="
							relative
							inline-block
							text-3xl md:text-4xl
							font-semibold
							text-white
							after:content-['']
							after:absolute
							after:left-0
							after:-bottom-2
							after:w-full
							after:border-b
							after:border-white/40
						"
					>
						{newsSelected?.title}
					</h1>

					<p className="mt-2 text-lg">
						{newsSelected?.publishedAt} – Christian
					</p>
				</header>

				{/* Corpo da notícia */}
				<section>
					<p>
						{newsSelected?.content}
					</p>
				</section>
			</article>
		</main>
	);
}
