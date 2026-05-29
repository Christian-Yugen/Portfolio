import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] text-white">
      <div className="max-w-xl text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="mb-6 text-lg">
          A página que você procura não foi encontrada.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded bg-[#111112] px-4 py-2 text-white hover:bg-[#222]"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
