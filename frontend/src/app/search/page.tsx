"use client"
import { useState } from "react";
import { handleSearch } from "@/app/actions/search";

export default function SearchPage() {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    async function onSearch(formData: FormData) {
        setLoading(true);
        const games = await handleSearch(formData);
        setResults(games);
        setLoading(false);
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white p-12">
            <h1 className="text-3xl font-bold mb-8">Search IGDB</h1>

            <form action={onSearch} className="flex gap-4 mb-12">
                <input
                    name="query"
                    type="text"
                    placeholder="Search for a game (e.g. Halo, Mario)..."
                    className="flex-1 bg-slate-900 border border-slate-700 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold disabled:opacity-50"
                >
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {results.map((game) => (
                    <div key={game.id} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
                        {game.coverUrl ? (
                            <img src={game.coverUrl} alt={game.title} className="w-full aspect-[3/4] object-cover" />
                        ) : (
                            <div className="w-full aspect-[3/4] bg-slate-800 flex items-center justify-center text-slate-500">No Cover</div>
                        )}
                        <div className="p-3">
                            <h2 className="font-medium text-sm truncate">{game.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}