import { db } from "../lib/db";

export default async function HomePage() {
  // Direct DB call - no fetch() needed!
  const games = await db.game.findMany();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-12">
      <h1 className="text-4xl font-bold mb-8">Game Vault</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-blue-500 transition-colors">
            {game.coverUrl && (
              <img src={game.coverUrl} alt={game.title} className="w-full aspect-[3/4] object-cover" />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">{game.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}