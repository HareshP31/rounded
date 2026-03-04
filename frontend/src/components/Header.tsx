import Link from "next/link";
import { getSession } from "@/lib/auth-utils";
import { logout } from "@/app/actions/logout";

export default async function Header() {
    const session = await getSession();

    return (
        <header className="bg-slate-900 border-b border-slate-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-500">Rounded</Link>

                <nav className="flex gap-6 items-center">
                    <Link href="/search" className="hover:text-blue-400">Search Games</Link>

                    {session ? (
                        <div className="flex items-center gap-4">
                            <span className="text-slate-400">Welcome, <b className="text-white">{session.username}</b></span>
                            <form action={logout}>
                                <button className="bg-red-900/50 hover:bg-red-800 px-3 py-1 rounded text-sm border border-red-700">
                                    Logout
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <Link href="/login" className="hover:text-blue-400">Login</Link>
                            <Link href="/signup" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">Sign Up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}