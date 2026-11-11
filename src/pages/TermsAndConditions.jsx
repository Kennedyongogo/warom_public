import React from "react";
import LegalPage from "../components/Landing/LegalPage";

const sections = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    paragraphs: [
      "By accessing WAROM’s public website or using WAROM services, you agree to these Terms and Conditions. If you do not agree, do not use the platform. These terms apply to users, chatters, visitors, and anyone submitting inquiries through the site.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be at least 18 years old and legally able to enter a binding agreement. You are responsible for ensuring that your use of WAROM complies with local laws in your country or region.",
    ],
  },
  {
    id: "accounts",
    title: "Accounts and profiles",
    paragraphs: [
      "You agree to provide accurate account information and keep your credentials secure. You are responsible for activity under your account. WAROM may suspend or terminate accounts that are inaccurate, abusive, fraudulent, or otherwise violate these terms.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: [
      "You agree to use WAROM respectfully and lawfully.",
    ],
    bullets: [
      "Do not harass, threaten, exploit, or deceive other people.",
      "Do not upload illegal, harmful, or non-consensual content.",
      "Do not attempt to bypass security, scrape data, or disrupt services.",
      "Do not use WAROM for money laundering, scams, or unauthorized commercial spam.",
      "Do not impersonate another person or misrepresent your identity in a harmful way.",
    ],
  },
  {
    id: "monetization",
    title: "Coins, gifts, VIP, and earnings",
    paragraphs: [
      "WAROM may offer virtual coins, gifts, VIP plans, and chatter earnings. Coin balances, gift values, VIP benefits, and earnings splits are configured by the platform and may change. Virtual items generally have no cash value outside WAROM unless a withdrawal feature expressly applies to eligible chatter earnings. Chargebacks, fraud, or policy breaches may result in adjusted balances, withheld payouts, or account action.",
    ],
  },
  {
    id: "content",
    title: "Content and media",
    paragraphs: [
      "You retain rights to content you create, but grant WAROM a license to host, display, moderate, and distribute that content as needed to operate the service. WAROM may remove content that violates policy, law, or community safety standards.",
    ],
  },
  {
    id: "moderation",
    title: "Moderation and enforcement",
    paragraphs: [
      "We may investigate reports, review uploads, and take action including warnings, content removal, feature limits, suspension, or termination. Chatter accounts may face a higher verification and compliance standard because payouts are involved.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers and limitation of liability",
    paragraphs: [
      "WAROM is provided on an “as available” basis. We do not guarantee uninterrupted service, perfect matching outcomes, or that every profile interaction will be positive. To the fullest extent allowed by law, WAROM is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these Terms and Conditions from time to time. Continued use after updates means you accept the revised terms. The “Last updated” date on this page shows the latest revision.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Questions about these terms can be sent through Talk to us or email hello@warom.app.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      summary="The rules for using WAROM — including accounts, acceptable use, monetization, and community safety."
      sections={sections}
    />
  );
}
