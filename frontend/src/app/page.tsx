import Link from "next/link";
import { getSession } from "@/lib/auth-utils";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";

export default async function HomePage() {
  const session = await getSession();

  return (
    <main>
      {/* ── HERO ─────────────────────────────── */}
      <HeroSection isLoggedIn={!!session} />

      {/* ── WHAT IS ROUNDED ──────────────────── */}
      <section className="landing-section section-dark">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label">✦ The Platform</span>
            <h2 className="section-title">
              Your gaming diary,
              <br />
              <span className="gradient-text">beautifully organized.</span>
            </h2>
            <p className="section-desc">
              Like Letterboxd for movies, Rounded gives gamers a space to track, rate,
              and review every title they play — building a rich history of their
              gaming journey.
            </p>
          </ScrollReveal>

          <div className="features-grid">
            <ScrollReveal delay={0}>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Log Games</h3>
                <p>Keep a detailed diary of every game you&apos;ve played, with dates and personal notes.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Rate &amp; Review</h3>
                <p>Score your experiences and write reviews to share your honest takes with the world.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Discover</h3>
                <p>Search millions of titles and find your next favorite game through community reviews.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Track Stats</h3>
                <p>See your gaming habits visualized — genres played, hours logged, and rating trends.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────── */}
      <section className="landing-section section-subtle">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label">✦ How It Works</span>
            <h2 className="section-title">Three steps to your vault.</h2>
            <p className="section-desc">
              Getting started takes less than a minute — and once you do, your entire
              gaming history lives in one beautiful place.
            </p>
          </ScrollReveal>

          <div className="steps-container">
            <ScrollReveal delay={0}>
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Search for any game</h3>
                <p>
                  Our database covers millions of titles across every platform —
                  from the latest AAA releases to beloved indie gems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Log and rate it</h3>
                <p>
                  Add it to your vault with a rating, a written review, and the date
                  you played. Build your personal gaming timeline.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Share with the community</h3>
                <p>
                  Your reviews join a growing community of gamers. Discover what
                  others think, follow friends, and find new recommendations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ────────────────────────── */}
      <section className="landing-section section-dark">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label">✦ Community</span>
            <h2 className="section-title">
              Join a community
              <br />
              <span className="gradient-text">of gamers.</span>
            </h2>
            <p className="section-desc">
              Rounded isn&apos;t just a tracker — it&apos;s a living community where
              your taste matters and every opinion counts.
            </p>
          </ScrollReveal>

          <div className="community-grid">
            <ScrollReveal delay={0}>
              <div className="community-card">
                <div className="community-card-icon">🌐</div>
                <h3>Activity Feed</h3>
                <p>See what your friends are playing, how they rated it, and read their latest reviews in real time.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="community-card">
                <div className="community-card-icon">👥</div>
                <h3>Follow Friends</h3>
                <p>Build your circle. Follow friends and creators to always know what the people you trust are playing.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="community-card">
                <div className="community-card-icon">📝</div>
                <h3>Curated Lists</h3>
                <p>Create and share lists — &quot;Top RPGs of 2026,&quot; &quot;Hidden Indie Gems,&quot; or your all-time favorites.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className="cta-section">
        <div className="cta-gradient" />
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />

        <div className="cta-content">
          <ScrollReveal>
            <h2>
              Ready to start
              <br />
              <span className="gradient-text">tracking?</span>
            </h2>
            <p>
              Join thousands of gamers who use Rounded to catalog
              their experiences and discover their next obsession.
            </p>

            <div className="cta-buttons">
              {session ? (
                <Link href="/search" className="btn-primary">
                  Search & Log a Game
                  <span className="btn-arrow">→</span>
                </Link>
              ) : (
                <>
                  <Link href="/signup" className="btn-primary">
                    Create Your Free Account
                    <span className="btn-arrow">→</span>
                  </Link>
                  <Link href="/login" className="btn-secondary">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}