import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { blogPosts } from "../../lib/blog-data";

export const metadata = {
  title: "Writing",
  description:
    "Writing by Naman Jain on product systems, fintech, growth, markets, and decisions under uncertainty.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="blog-page" id="main-content">
      <section className="blog-index-hero">
        <div className="shell">
          <a className="back-link" href="/">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to portfolio
          </a>
          <div className="blog-index-heading">
            <div>
              <p className="section-kicker">Writing</p>
              <h1>Notes on systems, money, and uncertain decisions.</h1>
            </div>
            <p>
              Working ideas from building products, operating customer journeys,
              studying markets, and occasionally watching my own brain make a
              decision.
            </p>
          </div>
        </div>
      </section>

      <section className="section blog-archive" aria-label="Published articles">
        <div className="shell blog-archive-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-archive-card" key={post.slug}>
              <div className="blog-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <time dateTime={post.dateISO}>{post.date}</time>
                  <span>
                    <Clock3 size={13} aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>
                <h2>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                <p>{post.dek}</p>
                <div className="blog-card-footer">
                  <div className="blog-tags" aria-label="Topics">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="text-link" href={`/blog/${post.slug}`}>
                    Read essay
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
