"use server"
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth-utils";
import { revalidatePath } from "next/cache";

export async function postReview(formData: FormData) {
    const session = await getSession();
    if (!session) return { error: "You must be logged in to review a game." };

    const gameId = parseInt(formData.get("gameId") as string);
    const title = formData.get("title") as string;
    const coverUrl = formData.get("coverUrl") as string;
    const rating = parseInt(formData.get("rating") as string);
    const content = formData.get("content") as string;

    try {
        // 1. Ensure the game exists in our DB (Upsert)
        await db.game.upsert({
            where: { id: gameId },
            update: {}, // If it exists, do nothing
            create: {
                id: gameId,
                title,
                coverUrl,
            },
        });

        // 2. Create the review
        await db.review.create({
            data: {
                rating,
                content,
                userId: session.userId,
                gameId: gameId,
            },
        });

        revalidatePath(`/game/${gameId}`);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: "Failed to save review." };
    }
}