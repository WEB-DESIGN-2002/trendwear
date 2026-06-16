import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, BookOpen, ShoppingBag, Sparkles, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex-grow text-center space-y-6">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-amber-850 border border-neutral-200">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold text-neutral-950">Article Not Found</h1>
            <p className="text-sm text-neutral-500 font-sans max-w-md mx-auto">
              The editorial article you are trying to view is not indexed in our fashion archives.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-xs tracking-widest uppercase font-bold px-6 py-3 hover:bg-amber-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Suggest other articles at the bottom
  const organicSuggestions = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        
        {/* Back Link */}
        <div className="mb-10 text-left">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-neutral-500 hover:text-neutral-950 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </div>

        {/* Article Meta Banner */}
        <article className="bg-white border border-neutral-100 overflow-hidden shadow-sm p-6 sm:p-10 text-left space-y-8">
          
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 bg-amber-50 px-2.5 py-1 border border-amber-100">
              {post.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author / Date Info Bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500 pt-2 border-b border-neutral-100 pb-5">
              <div className="flex items-center gap-1.5 font-sans font-medium text-neutral-700">
                <User className="w-4 h-4 text-neutral-400" />
                By {post.author}
              </div>
              <div className="flex items-center gap-1.5 font-sans">
                <Calendar className="w-4 h-4 text-neutral-400" />
                Published {post.date}
              </div>
              <div className="flex items-center gap-1.5 font-sans">
                <Clock className="w-4 h-4 text-neutral-400" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Large Image Cover */}
          <div className="relative aspect-[21/9] bg-neutral-50 border border-neutral-150 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center grayscale brightness-95 hover:grayscale-0 duration-1000 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Introduction block */}
          <p className="font-serif text-lg text-neutral-800 leading-relaxed italic border-l-4 border-amber-700 pl-6 py-1 bg-neutral-50/50 pr-4">
            {post.introduction}
          </p>

          {/* Core Markdown-style subdivisions */}
          <div className="space-y-10 pt-4">
            {post.sections.map((sect, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-neutral-950">
                  {sect.subheading}
                </h3>
                <div className="space-y-3.5 text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
                  {sect.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion block */}
          <div className="pt-8 border-t border-neutral-100 space-y-3">
            <h4 className="font-serif text-lg font-bold text-neutral-950">Closing Thoughts</h4>
            <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
              {post.conclusion}
            </p>
          </div>

          {/* Inline CTA block pointing back to Shop */}
          <div className="pt-10 border-t border-neutral-105 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest flex items-center gap-1">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-800" />
                Inspired by these trends?
              </h4>
              <p className="text-xs text-neutral-500 font-sans">
                Browse our editors&apos; hand-selected wardrobe catalog mapped precisely to these classic shapes.
              </p>
            </div>
            
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 hover:bg-amber-800 transition"
            >
              Browse Active Catalog
            </Link>
          </div>

        </article>

        {/* Suggested reading */}
        {organicSuggestions.length > 0 && (
          <section className="mt-16 space-y-8 text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-950">More from TrendWear Edition</h3>
              <p className="text-xs text-neutral-500 font-sans mt-1">Keep analyzing luxury textiles and defining shifts of this year.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {organicSuggestions.map((p) => (
                <div
                  key={p.slug}
                  className="group flex flex-col bg-white border border-neutral-100 p-5 hover:shadow-sm transition"
                >
                  <p className="text-[10px] uppercase font-bold text-amber-800 tracking-wider font-sans">{p.category}</p>
                  <h4 className="font-serif text-base font-bold text-neutral-950 group-hover:text-amber-800 transition line-clamp-1 mt-1 mb-2">
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans line-clamp-2 leading-relaxed mb-4">
                    {p.excerpt}
                  </p>
                  <div className="pt-2 border-t border-neutral-50 flex items-center justify-between text-[11px] text-neutral-400 font-sans">
                    <span>{p.date}</span>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-bold text-neutral-900 uppercase tracking-wider text-[10px]"
                    >
                      Read story →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
