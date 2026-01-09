import { CardNewsProps } from "@/types";
import Link from "next/link";

export default function CardNews({ title, description, id }: CardNewsProps) {
	return (
		<Link className="block" href={`/news/${id}`}>
			<div className="bg-gray-800 border-gray-700 border-2 text-center rounded-2xl py-4 mx-1.5 hover:border-gray-900 hover:border-4 cursor-pointer transition delay-150 duration-300 ease-linear my-4">
				<h1 className="text-4xl font-bold mb-2.5">{title}</h1>
				<p className="text-gray-200">{description}</p>
			</div>
		</Link>
	)
}