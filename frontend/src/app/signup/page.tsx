"use client"
import { signUp } from "@/app/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        const result = await signUp(formData);
        if (result?.error) {
            setError(result.error);
        } else {
            router.push("/login"); // We'll build this next!
        }
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
            <form action={handleSubmit} className="bg-slate-900 p-8 rounded-lg border border-slate-800 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Create Account</h1>
                {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

                <div className="space-y-4">
                    <input name="username" type="text" placeholder="Username" className="w-full bg-slate-800 p-2 rounded border border-slate-700" required />
                    <input name="password" type="password" placeholder="Password" className="w-full bg-slate-800 p-2 rounded border border-slate-700" required />
                    <button type="submit" className="w-full bg-blue-600 py-2 rounded font-bold hover:bg-blue-700">Sign Up</button>
                </div>
            </form>
        </main>
    );
}