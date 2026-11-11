import React from "react";
import { Link } from "react-router-dom";
import { useInquiry } from "./InquiryContext";
import "./Landing.css";

export default function LandingFooter() {
  const year = new Date().getFullYear();
  const { openInquiry } = useInquiry();

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

        <nav className="landing-footer__nav" aria-label="Legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </nav>

        <div className="landing-footer__meta">
          <button
            type="button"
            className="landing-footer__cta"
            onClick={openInquiry}
          >
            Talk to us
          </button>
          <p className="landing-footer__copy">© {year} WAROM</p>
        </div>
      </div>
    </footer>
  );
}
