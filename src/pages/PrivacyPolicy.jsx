import React from "react";
import LegalPage from "../components/Landing/LegalPage";

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    paragraphs: [
      "WAROM is a dual-sided social connection platform where users discover people, chat, call, and exchange gifts, while chatters earn through eligible interactions. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit warom_public or use WAROM services.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide directly and information generated when you use the platform.",
    ],
    bullets: [
      "Account details such as name, username, email, phone number, date of birth, gender, country, city, bio, and profile media.",
      "Inquiry details when you contact us through Talk to us, including name, email, subject, and message.",
      "Usage data such as device type, browser, approximate location, pages visited, and interaction logs needed for security and product improvement.",
      "Transaction-related records for coin purchases, gifts, VIP subscriptions, withdrawals, and related ledger activity where applicable.",
    ],
  },
  {
    id: "how-we-use-data",
    title: "How we use your information",
    paragraphs: [
      "We use personal information only for legitimate platform operations and communication.",
    ],
    bullets: [
      "To create and manage accounts, profiles, and verification status.",
      "To enable discovery, messaging, calls, gifts, VIP features, and earnings flows.",
      "To respond to inquiries, partnership requests, and support messages.",
      "To detect fraud, enforce policies, moderate content, and protect users and chatters.",
      "To improve product performance, safety systems, and customer experience.",
    ],
  },
  {
    id: "sharing",
    title: "When we share information",
    paragraphs: [
      "We do not sell personal information. We may share limited data with trusted processors only when needed to operate WAROM, such as payment providers, cloud hosting, analytics, verification partners, or legal authorities when required by law.",
    ],
  },
  {
    id: "retention-security",
    title: "Retention and security",
    paragraphs: [
      "We keep information only as long as needed for the purposes described in this policy, including legal, accounting, safety, and dispute-resolution needs. We apply technical and organizational safeguards, including access controls and secure transmission where appropriate. No system is perfectly secure, so we continuously improve our protections.",
    ],
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    paragraphs: [
      "Depending on your location, you may request access, correction, deletion, or restriction of certain personal data. You may also update profile details in-app where available, or contact us to exercise privacy rights. Some records may be retained where required for safety, fraud prevention, or legal compliance.",
    ],
  },
  {
    id: "children",
    title: "Age restriction",
    paragraphs: [
      "WAROM is intended for adults. You must be at least 18 years old to create an account or use monetized features. We do not knowingly collect personal information from children under 18.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For privacy questions or requests, use Talk to us on the website or email hello@warom.app. We will review and respond as promptly as reasonably possible.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      summary="How WAROM collects, uses, and protects your information across discovery, chat, calls, gifts, and inquiries."
      sections={sections}
    />
  );
}
