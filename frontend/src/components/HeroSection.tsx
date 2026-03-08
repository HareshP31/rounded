"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  isLoggedIn: boolean;
}

export default function HeroSection({ isLoggedIn }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated gradient background */}
      <div className="hero-gradient" />

      {/* Floating ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Noise texture overlay */}
      <div className="hero-noise" />

      {/* Content */}
      <div className={`hero-content ${mounted ? "hero-content-visible" : ""}`}>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          For Gamers, By Gamers
        </div>

        <h1 className="hero-title">
          Track Every Game
          <br />
          <span className="gradient-text">You Play.</span>
        </h1>

        <p className="hero-subtitle">
          Rounded is the social vault for gamers. Search millions of titles,
          log your progress, and keep a beautiful diary of your gaming history.
        </p>

        <div className="hero-actions">
          {isLoggedIn ? (
            <Link href="/search" className="btn-primary">
              Search & Log a Game
              <span className="btn-arrow">→</span>
            </Link>
          ) : (
            <>
              <Link href="/signup" className="btn-primary">
                Get Started Free
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/login" className="btn-secondary">
                Sign In
              </Link>
            </>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
