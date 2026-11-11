import React from "react";
import { Helmet } from "react-helmet-async";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";
import { InquiryProvider } from "./InquiryContext";
import "./Landing.css";

export default function LegalPage({
  title,
  eyebrow,
  summary,
  updatedAt = "November 11, 2026",
  sections = [],
}) {
  return (
    <InquiryProvider>
      <div className="landing-page">
        <Helmet>
          <title>{title} — WAROM</title>
          <meta name="description" content={summary} />
        </Helmet>

        <LandingNavbar />

        <section className="legal-hero" aria-label={title}>
          <div className="legal-hero__inner">
            <span className="legal-hero__eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{summary}</p>
            <div className="legal-hero__meta">Last updated: {updatedAt}</div>
          </div>
        </section>

        <section className="legal-body">
          <div className="legal-body__inner">
            <aside className="legal-toc" aria-label="On this page">
              <strong>On this page</strong>
              <nav>
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="legal-content">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="legal-section"
                >
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </article>
          </div>
        </section>

        <LandingFooter />
      </div>
    </InquiryProvider>
  );
}
