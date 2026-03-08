import Link from "next/link";
import { getSession } from "@/lib/auth-utils";

export default async function HomePage() {
  const session = await getSession();

  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Track Every Game You Play.
        </h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Rounded is the social vault for gamers. Search millions of titles,
          log your progress, and keep a beautiful diary of your gaming history.
        </p>

        <div className="flex gap-4 justify-center">
          {session ? (
            <Link href="/search" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Search & Log a Game
            </Link>
          ) : (
            <>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Get Started for Free
              </Link>
              <Link href="/login" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}