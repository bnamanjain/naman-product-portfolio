import "./globals.css";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata = {
  metadataBase: new URL("https://naman-product-portfolio.pages.dev"),
  title: {
    default: "Naman Jain | Product Manager",
    template: "%s | Naman Jain",
  },
  description:
    "Product portfolio of Naman Jain: quantified growth, monetization, payout, analytics, AI operations, lending, and payments work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naman Jain | Product Manager",
    description:
      "Production evidence across revenue growth, lifecycle journeys, payouts, financial systems, and AI-assisted operations.",
    images: ["/assets/affordable-commerce/consumer-presenter.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
