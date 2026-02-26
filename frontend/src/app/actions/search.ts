"use server"
import { searchGames } from "@/lib/igdb";

export async function handleSearch(formData: FormData) {
    const query = formData.get("query") as string;
    if (!query) return [];

    const results = await searchGames(query);
    return results;
}