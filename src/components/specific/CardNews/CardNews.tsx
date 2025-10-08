import { CardNewsProps } from "@/types";

export default function CardNews({title, description}: CardNewsProps) {
    return(
        <div className="bg-gray-800 border-gray-700 border-2 text-center rounded-2xl py-4 mx-1.5 hover:border-gray-900 hover:border-4 cursor-pointer transition delay-150 duration-300 ease-linear">
            <h1 className="text-4xl font-bold mb-2.5">{title}</h1>
            <p className="text-gray-200">{description}</p>
        </div>
    )
}