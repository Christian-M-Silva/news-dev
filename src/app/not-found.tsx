import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="min-h-screen flex  items-center justify-center text-white/80">
			<span className="text-sm">
				 <Link href="/"> ESSA TELA NÃO FOI ENCONTRADA RETORNE A TELA HOME</Link>
			</span>
		</div>
	)
}