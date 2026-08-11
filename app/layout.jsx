import "./globals.css";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata = {
  metadataBase: new URL(
    "https://naman-jain-product-portfolio.naman884186.chatgpt.site",
  ),
  title: {
    default: "Naman Jain | Product Manager",
    template: "%s | Naman Jain",
  },
  description:
    "Product portfolio of Naman Jain: consumer products, fintech, multimodal AI workflows, analytics, and growth systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naman Jain | Product Manager",
    description:
      "Evidence-led product work across consumer journeys, fintech systems, healthcare operations, and measurable growth.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "The 60-second Handshake case study by Naman Jain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Jain | Product Manager",
    description:
      "The 60-second Handshake and other evidence-led product case studies.",
    images: ["/og.png"],
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
