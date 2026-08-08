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
      "Evidence-led product work across consumer journeys, fintech systems, multimodal AI workflows, and measurable growth.",
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
