import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News dev - ADM",
};

export default function Manager() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<span className="text-sm text-white/80">
				Tela Administrativa
			</span>
		</div>
	)
}