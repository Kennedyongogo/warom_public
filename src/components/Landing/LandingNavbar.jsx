import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useInquiry } from "./InquiryContext";
import "./Landing.css";

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openInquiry } = useInquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`landing-nav${scrolled || open ? " is-scrolled" : ""}${
        open ? " is-open" : ""
      }`}
    >
      <div className="landing-nav__inner">
        <Link to="/" className="landing-nav__brand" aria-label="WAROM home">
          <img src="/warom-logo.png" alt="" />
          <span>WAROM</span>
        </Link>

        <nav className="landing-nav__links" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `landing-nav__link${isActive ? " is-active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `landing-nav__link${isActive ? " is-active" : ""}`
            }
          >
            About Us
          </NavLink>
        </nav>

        <button type="button" className="landing-nav__cta" onClick={openInquiry}>
          Talk to us
        </button>

        <button
          type="button"
          className="landing-nav__toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="landing-nav__mobile">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `landing-nav__link${isActive ? " is-active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `landing-nav__link${isActive ? " is-active" : ""}`
            }
          >
            About Us
          </NavLink>
          <button
            type="button"
            className="landing-nav__cta"
            onClick={() => {
              setOpen(false);
              openInquiry();
            }}
          >
            Talk to us
          </button>
        </div>
      ) : null}
    </header>
  );
}
