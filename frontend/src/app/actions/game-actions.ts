"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function logGameReview(gameId: number, rating: number, comment: string) {
    // In a real app, you'd get the userId from a session here
    const userId = "user_123";

    await db.review.create({
        data: {
            gameId,
            rating,
            content: comment,
            userId,
        },
    });

    // This tells Next.js to refresh the data on the page
    revalidatePath(`/games/${gameId}`);
}