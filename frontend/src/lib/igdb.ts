async function getAccessToken() {
    const response = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`,
        { method: "POST" }
    );
    const data = await response.json();
    return data.access_token;
}

export async function searchGames(query: string) {
    const token = await getAccessToken();

    const response = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            "Client-ID": process.env.IGDB_CLIENT_ID!,
            Authorization: `Bearer ${token}`,
        },
        // This is IGDB's specific query language (Apicalypse)
        body: `search "${query}"; fields name, cover.url, first_release_date; limit 10;`,
    });

    const games = await response.json();

    // Clean up the data (IGDB returns cover IDs, we want full URLs)
    return games.map((game: any) => ({
        id: game.id,
        title: game.name,
        coverUrl: game.cover?.url ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}` : null,
    }));
}