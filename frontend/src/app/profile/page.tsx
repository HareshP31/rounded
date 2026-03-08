import { getSession } from "@/lib/auth-utils";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await getSession();

    // Redirect to login if they try to access profile while logged out
    if (!session) redirect("/login");

    // Fetch all reviews for this user, including the related Game data
    const userReviews = await db.review.findMany({
        where: { userId: session.userId },
        include: { game: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">My Vault</h1>
                <p className="text-slate-400 mb-8">You have logged {userReviews.length} games.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userReviews.map((review) => (
                        <div key={review.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex">
                            <img
                                src={review.game.coverUrl || ""}
                                alt={review.game.title}
                                className="w-32 object-cover border-r border-slate-800"
                            />
                            <div className="p-4 flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-bold leading-tight">{review.game.title}</h2>
                                    <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">
                                        {review.rating} / 5
                                    </span>
                                </div>
                                <p className="text-slate-300 italic text-sm">"{review.content}"</p>
                                <p className="text-slate-500 text-xs mt-4">
                                    Logged on {new Date(review.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {userReviews.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-3xl">
                        <p className="text-slate-500">No games logged yet. Start searching to add some!</p>
                    </div>
                )}
            </div>
        </main>
    );
}