import { SelectNews } from "@/app/helpers/selectNews";
import type { Metadata } from 'next'

type paramUrl = {
	params: Promise<{ id: string }>
}

export async function generateMetadata(
	{ params }: paramUrl
): Promise<Metadata> {
	const { id } = await params
	const newsSelected = await SelectNews(id)

	return {
		title: newsSelected?.title,
	}
}

export default async function NewsDetail({ params }: paramUrl
) {
	const { id } = await params
	const newsSelected = await SelectNews(id)

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
