import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="landing-footer__glow" aria-hidden="true" />
      <div className="landing-footer__inner">
        <div className="landing-footer__brand">
          <Link to="/" className="landing-footer__logo" aria-label="WAROM home">
            <img src="/warom-logo.png" alt="" />
            <span>WAROM</span>
          </Link>
          <p className="landing-footer__tagline">
            Connect. Chat. Earn. Belong.
          </p>
        </div>

        <nav className="landing-footer__nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <a href="mailto:hello@warom.app">Inquiry</a>
        </nav>

        <div className="landing-footer__meta">
          <a className="landing-footer__cta" href="mailto:hello@warom.app">
            Talk to us
          </a>
          <p className="landing-footer__copy">© {year} WAROM</p>
        </div>
      </div>
    </footer>
  );
}
