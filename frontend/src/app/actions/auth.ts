"use server"
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function signUp(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) return { error: "Missing fields" };

    // 1. Check if user exists
    const existingUser = await db.user.findUnique({ where: { username } });
    if (existingUser) return { error: "Username already taken" };

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Save to Postgres
    try {
        await db.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        return { success: true };
    } catch (e) {
        return { error: "Database error" };
    }
}