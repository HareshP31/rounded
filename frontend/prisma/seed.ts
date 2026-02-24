import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Seeding database...");

    const games = [
        { id: 1001, title: "Elden Ring", coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ni8.jpg" },
        { id: 1002, title: "The Legend of Zelda: Breath of the Wild", coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg" },
        { id: 1003, title: "Hades", coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co296a.jpg" },
    ];

    for (const game of games) {
        await prisma.game.upsert({
            where: { id: game.id },
            update: {},
            create: game,
        });
    }

    console.log("Seeding finished!");
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await pool.end();
    });