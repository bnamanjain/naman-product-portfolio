import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.dek,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.dek,
      publishedTime: post.dateISO,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main className="article-page" id="main-content">
      <article>
        <header className="article-hero">
          <div className="shell article-hero-inner">
            <a className="back-link" href="/blog">
              <ArrowLeft size={15} aria-hidden="true" />
              All writing
            </a>
            <div className="article-tags blog-tags" aria-label="Topics">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h1>{post.title}</h1>
            <p className="article-dek">{post.dek}</p>
            <div className="article-byline">
              <strong>Naman Jain</strong>
              <time dateTime={post.dateISO}>{post.date}</time>
              <span>
                <Clock3 size={14} aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="shell article-layout">
          <aside className="article-aside">
            <span>In one line</span>
            <p>{post.takeaway}</p>
          </aside>

          <div className="article-body">
            {post.intro.map((paragraph) => (
              <p className="article-intro" key={paragraph}>
                {paragraph}
              </p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <blockquote>
              <span>Takeaway</span>
              {post.takeaway}
            </blockquote>
          </div>
        </div>
      </article>

      <section className="next-article">
        <div className="shell next-article-inner">
          <div>
            <span>Read next</span>
            <h2>{nextPost.title}</h2>
          </div>
          <a className="button light" href={`/blog/${nextPost.slug}`}>
            Continue reading
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
