import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LandingNavbar from "../components/Landing/LandingNavbar";
import LandingFooter from "../components/Landing/LandingFooter";
import { InquiryProvider } from "../components/Landing/InquiryContext";
import "../components/Landing/Landing.css";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, []);

  return (
    <InquiryProvider>
    <div className="landing-page">
      <Helmet>
        <title>WAROM — Meet. Chat. Belong.</title>
        <meta
          name="description"
          content="WAROM is where real people discover each other, talk freely, and build connections that feel alive."
        />
      </Helmet>

      <LandingNavbar />

      <section className="home-hero" aria-label="WAROM hero">
        <div className="home-hero__media" aria-hidden="true">
          <img
            src="/images/landing/hero.jpg"
            alt=""
            fetchPriority="high"
          />
          <div className="home-hero__shade" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__copy">
            <p className="home-hero__brand reveal">WAROM</p>
            <span className="home-hero__rule reveal reveal-delay-1" aria-hidden="true" />
            <h1 className="home-hero__headline reveal reveal-delay-1">
              Meet people who feel like home.
            </h1>
            <p className="home-hero__lead reveal reveal-delay-2">
              Discover someone new, start a real conversation, and stay for the
              connections that actually matter.
            </p>
            <div className="landing-actions reveal reveal-delay-3">
              <Link className="btn-primary" to="/about">
                About WAROM
              </Link>
              <a className="btn-ghost" href="mailto:hello@warom.app">
                Send an inquiry
              </a>
            </div>
          </div>
        </div>

        <div className="home-strip" aria-label="What WAROM offers">
          <div className="home-strip__inner">
            <article className="home-strip__item">
              <strong>Discover</strong>
              <p>Profiles that feel alive, online first.</p>
            </article>
            <article className="home-strip__item">
              <strong>Connect</strong>
              <p>Chat, voice, and video when the moment is right.</p>
            </article>
            <article className="home-strip__item">
              <strong>Belong</strong>
              <p>A dual world for users and chatters.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-feature" aria-label="The feeling">
        <div className="home-feature__visual reveal">
          <img
            src="/images/landing/connect.jpg"
            alt="Two people connecting over a shared moment"
          />
          <div className="home-feature__caption">
            Gifts, presence, and conversations — designed to feel human.
          </div>
        </div>
        <div className="home-feature__copy reveal reveal-delay-1">
          <span className="landing-kicker">The feeling</span>
          <h2 className="landing-title landing-title--calibri">
            Built for chemistry, not clutter.
          </h2>
          <p className="landing-copy">
            WAROM brings discovery, messaging, and creator earnings into one
            calm experience. Users meet people they actually want to talk to.
            Chatters grow communities and income with clarity.
          </p>
          <div className="landing-actions">
            <Link className="btn-primary btn-ink" to="/about">
              Our story
            </Link>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
    </InquiryProvider>
  );
}
