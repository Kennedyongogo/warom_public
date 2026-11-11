import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LandingNavbar from "../components/Landing/LandingNavbar";
import LandingFooter from "../components/Landing/LandingFooter";
import "../components/Landing/Landing.css";

export default function About() {
  return (
    <div className="landing-page">
      <Helmet>
        <title>About Us — WAROM</title>
        <meta
          name="description"
          content="Learn why WAROM exists: safer discovery, real conversations, and a fair economy for chatters and users."
        />
      </Helmet>

      <LandingNavbar />

      <section className="about-hero" aria-label="About WAROM">
        <div className="about-hero__media" aria-hidden="true">
          <img src="/images/landing/about.jpg" alt="" />
          <div className="about-hero__shade" />
        </div>
        <div className="about-hero__content">
          <div className="about-hero__copy">
            <span className="about-hero__kicker reveal">About us</span>
            <span
              className="about-hero__rule reveal reveal-delay-1"
              aria-hidden="true"
            />
            <h1 className="reveal reveal-delay-1">
              We built WAROM for real connection.
            </h1>
            <p className="reveal reveal-delay-2">
              A dual-sided social world where people discover each other, talk
              with presence, and creators are rewarded fairly for the energy
              they bring.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story" aria-label="Why we exist">
        <div className="about-story__grid">
          <div className="about-panel reveal">
            <img
              src="/images/landing/connect.jpg"
              alt="People connecting in a warm social lounge"
            />
            <div className="about-panel__caption landing-title--calibri">
              Built for chemistry — not clutter.
            </div>
          </div>

          <div className="about-story__copy reveal reveal-delay-1">
            <span className="landing-kicker">Why we exist</span>
            <h2 className="landing-title">
              Connection should feel safe, warm, and worth staying for.
            </h2>
            <p className="landing-copy">
              Too many platforms chase noise. WAROM is designed around the
              moments that matter: finding someone compatible, starting a
              conversation, sending a gift, hopping on a call, and knowing the
              people behind the profiles are treated with respect.
            </p>

            <div className="about-story__points">
              <article className="about-story__point">
                <strong>For users</strong>
                <p>
                  Discover online people nearby in spirit, chat freely, unlock
                  premium moments, and keep control of your privacy.
                </p>
              </article>
              <article className="about-story__point">
                <strong>For chatters</strong>
                <p>
                  Host conversations, receive gifts and call earnings, track
                  pending vs available income, and withdraw with clarity.
                </p>
              </article>
              <article className="about-story__point">
                <strong>For trust</strong>
                <p>
                  Verification, moderation, and transparent monetization rules
                  sit at the core — not as an afterthought.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values" aria-label="What we stand for">
        <div className="about-values__shell">
          <header className="about-values__intro">
            <span className="landing-kicker">What we stand for</span>
            <h2 className="landing-title">
              Three promises we keep designing around.
            </h2>
          </header>

          <div className="about-values__list">
            <article className="about-value reveal">
              <span className="about-value__mark" aria-hidden="true" />
              <h3>Human first</h3>
              <p>
                Profiles, presence, and conversation come before gimmicks. The
                product should feel personal, never noisy.
              </p>
            </article>
            <article className="about-value reveal reveal-delay-1">
              <span className="about-value__mark" aria-hidden="true" />
              <h3>Fair economy</h3>
              <p>
                Coins, gifts, VIP, and call earnings are configurable and
                accountable — so chatters know what they earn and why.
              </p>
            </article>
            <article className="about-value reveal reveal-delay-2">
              <span className="about-value__mark" aria-hidden="true" />
              <h3>Responsible growth</h3>
              <p>
                Age checks, reporting, and clear policies protect the community
                as WAROM scales.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-cta-wrap" aria-label="Contact">
        <div className="about-cta reveal">
          <div className="about-cta__media" aria-hidden="true">
            <img src="/images/landing/hero.jpg" alt="" />
            <div className="about-cta__shade" />
          </div>
          <div className="about-cta__copy">
            <span className="about-cta__kicker">Let’s talk</span>
            <h2>Want to partner, press, or ask a question?</h2>
            <p>
              The public site is here for WAROM’s story, policies, and
              inquiries. Reach out — we read every message.
            </p>
            <div className="landing-actions">
              <a className="btn-primary" href="mailto:hello@warom.app">
                Send an inquiry
              </a>
              <Link className="btn-ghost" to="/">
                Back home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
