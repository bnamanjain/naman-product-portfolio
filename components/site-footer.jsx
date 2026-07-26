import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="section-kicker">Open to product conversations</p>
          <h2>Let’s discuss a hard customer and business problem.</h2>
        </div>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>
            <Mail size={18} aria-hidden="true" />
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Naman Jain</span>
        <span>Product strategy · Systems · Growth</span>
      </div>
    </footer>
  );
}
