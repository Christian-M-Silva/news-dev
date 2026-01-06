export default function NewsDetail() {
	return (
		<main >
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
						Título da Notícia
					</h1>

					<p className="mt-2 text-lg">
						13/03/2025 – Christian
					</p>
				</header>

				{/* Corpo da notícia */}
				<section>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged.
					</p>
				</section>
			</article>
		</main>
	);
}
