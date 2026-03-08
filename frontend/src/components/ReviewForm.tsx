"use client"
import { postReview } from "@/app/actions/reviews";
import { useState } from "react";

interface Props {
    gameId: number;
    title: string;
    coverUrl: string | null;
}

export default function ReviewForm({ gameId, title, coverUrl }: Props) {
    const [msg, setMsg] = useState("");

    async function handleSubmit(formData: FormData) {
        const res = await postReview(formData);
        if (res.success) {
            setMsg("Review posted!");
        } else {
            setMsg(res.error || "Error");
        }
    }

    return (
        <form action={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold">Log {title}</h3>

            {/* Hidden inputs to pass IGDB data to the server action */}
            <input type="hidden" name="gameId" value={gameId} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="coverUrl" value={coverUrl || ""} />

            <div>
                <label className="block text-sm text-slate-400 mb-1">Rating (1-5)</label>
                <select name="rating" className="w-full bg-slate-800 border border-slate-700 p-2 rounded">
                    {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                </select>
            </div>

            <div>
                <label className="block text-sm text-slate-400 mb-1">Your Review</label>
                <textarea
                    name="content"
                    placeholder="What did you think?"
                    className="w-full bg-slate-800 border border-slate-700 p-2 rounded h-24"
                />
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-500 py-2 rounded font-bold">
                Save Entry
            </button>

            {msg && <p className="text-sm text-blue-400 mt-2">{msg}</p>}
        </form>
    );
}