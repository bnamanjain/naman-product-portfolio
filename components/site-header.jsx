"use client";

import Link from "next/link";
import { Download, Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "../lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Naman Jain home">
          <span className="brand-mark" aria-hidden="true">
            NJ
          </span>
          <span className="brand-copy">
            <strong>Naman Jain</strong>
            <span>Product Manager</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#about">About</Link>
          <a href={site.resume} download>
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <a className="header-contact" href={`mailto:${site.email}`}>
            <Mail size={16} aria-hidden="true" />
            Contact
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#about">About</Link>
          <a href={site.resume} download>
            Resume
          </a>
          <a href={`mailto:${site.email}`}>Contact</a>
        </nav>
      ) : null}
    </header>
  );
}
