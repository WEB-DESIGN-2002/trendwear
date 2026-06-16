"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Star, Sparkles, BookOpen, User, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export default function BlogListing() {
  // Take first article as "Feature Highlight"
  const featurePost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        
        {/* Header Title */}
        <div className="pb-8 border-b border-neutral-100 mb-12 text-left">
          <span className="text-[10px] uppercase font-semibold text-amber-800 tracking-widest block mb-2">TrendWear Editorial</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight">
            The Haute Couture Journal
          </h1>
          <p className="text-sm text-neutral-500 font-sans mt-2 leading-relaxed max-w-xl">
            In-depth analysis of technical yarn weaves, shoe developments, historical styles, and curated wardrobe guidelines from our premium editorial staff.
          </p>
        </div>

        {/* 1. FEATURED ARTICLE HEADER (Hero Layout) */}
        {featurePost && (
          <section className="bg-white border border-neutral-100 p-6 sm:p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Feature image */}
              <div className="lg:col-span-7 relative aspect-[16/10] bg-neutral-100 overflow-hidden border border-neutral-200">
                <img
                  src={featurePost.image}
                  alt={featurePost.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-neutral-950 text-white text-[9px] font-bold tracking-widest px-3 py-1 uppercase">
                  Featured Editorial
                </span>
              </div>

              {/* Feature info */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featurePost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featurePost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-950 leading-snug hover:text-amber-800 transition">
                  <Link href={`/blog/${featurePost.slug}`}>{featurePost.title}</Link>
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                  {featurePost.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-neutral-600 font-sans font-semibold">
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                  Written by {featurePost.author}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featurePost.slug}`}
                    className="inline-flex items-center gap-1.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-bold py-3.5 px-6 hover:bg-amber-800 transition rounded-none shadow-sm"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 animate-bounce-right" />
                  </Link>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 2. REGULAR BLOG GRID */}
        {regularPosts.length > 0 && (
          <section className="space-y-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-950 text-left border-b border-neutral-100 pb-3">
              More Stories from our Writers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col bg-white border border-neutral-100 overflow-hidden hover:shadow-sm transition text-left"
                >
                  <div className="relative aspect-[16/9] bg-neutral-50 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-neutral-900 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-neutral-950 group-hover:text-amber-800 transition line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-50">
                      <span className="text-[11px] text-neutral-500 font-sans font-medium">
                        By {post.author.split(",")[0]}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-neutral-900 group-hover:text-amber-805 transition"
                      >
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 3. NEWSLETTER AD INTEGRITY PROMOTIONS */}
        <section className="bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 text-center mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/10">
              <BookOpen className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Stay ahead of defined trends</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
              Subscribe to TrendWear Weekly digests. Join thousands of sophisticated shoppers receiving hand-typed textile blueprints, custom shoe launches, and private Amazon coupon drops.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscription verified! Welcome to TrendWear Editorial Circles."); }} className="flex flex-col sm:flex-row gap-2 pt-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter email for editorial invites..."
                className="bg-neutral-800/80 border border-neutral-700 text-xs px-4 py-3 placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-white flex-grow rounded-none"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold tracking-widest uppercase py-3 px-6 transition rounded-none"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-neutral-500 font-sans">
              We respect your inbox limits. Opt-out at any time with a single secure click. Zero spam, guaranteed.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
