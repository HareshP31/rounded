import { db } from "@/lib/db";

export default async function HomePage() {
  // Direct database call! No "fetch('/api/...') " needed.
  const latestReviews = await db.review.findMany({
    include: { game: true },
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Recent Activity</h1>
      {latestReviews.map((rev) => (
        <div key={rev.id} className="border-b py-2">
          <p><strong>{rev.game.title}</strong> - {rev.rating}/10</p>
          <p className="text-gray-400 italic">"{rev.content}"</p>
        </div>
      ))}
    </main>
  );
}