"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShoppingBag, Star, BookOpen, Clock, Heart, Shield } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

export default function Home() {
  // Get 4 trending hot products (highest rated ones)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // Categories structure with stylish metadata and high-quality lookup image seeds
  const categories = [
    { name: "Men's Fashion", query: "Men's Fashion", count: "5 Items", imgSeed: "menfashion" },
    { name: "Women's Fashion", query: "Women's Fashion", count: "5 Items", imgSeed: "womenfashion" },
    { name: "Shoes", query: "Shoes", count: "5 Items", imgSeed: "designershoes" },
    { name: "Watches", query: "Watches", count: "5 Items", imgSeed: "luxurywatch" },
    { name: "Bags", query: "Bags", count: "5 Items", imgSeed: "leatherbag" },
    { name: "Accessories", query: "Accessories", count: "5 Items", imgSeed: "silkscarf" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-none border border-neutral-200">
                <Star className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="text-[10px] font-semibold text-neutral-800 tracking-widest uppercase">
                  Curated Luxury Fashion Discovery
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-950 font-black leading-none">
                Discover <br />
                <span className="text-amber-800 italic font-light font-serif">Trending</span> <br />
                Fashion Styles
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-sans leading-relaxed max-w-xl">
                Find the best fashion products from top brands. Curated premium clothing, accessories, and shoes, updated in real-time with Amazon affiliate links.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-amber-800 transition shadow-md hover:shadow-lg rounded-none"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-150 text-neutral-900 border border-neutral-300 font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition rounded-none"
                >
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  Editorial Journal
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-neutral-100 max-w-lg">
                <div>
                  <h4 className="font-serif text-lg font-bold text-neutral-900">30+</h4>
                  <p className="text-neutral-500 text-[11px] font-sans uppercase tracking-wider">Curated Goods</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-neutral-900">6</h4>
                  <p className="text-neutral-500 text-[11px] font-sans uppercase tracking-wider">Luxury Sub-grids</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-neutral-900">Daily</h4>
                  <p className="text-neutral-500 text-[11px] font-sans uppercase tracking-wider">Editorial Edits</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[550px] bg-neutral-100 overflow-hidden border border-neutral-200">
                <img
                  src="https://picsum.photos/seed/trendwearhero/1000/1200"
                  alt="TrendWear Luxury Lookbook"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating lookbook label overlay */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-5 border border-neutral-100 max-w-xs shadow-lg">
                  <span className="text-[10px] font-bold text-amber-800 tracking-widest uppercase">TrendWear Vol. 26</span>
                  <p className="font-serif text-base text-neutral-950 font-bold mt-1">&quot;Pure Flax linen &amp; French silk couture dominate lightweight summer wardrobes&quot;</p>
                  <Link href="/blog/best-fashion-trends-2026" className="text-neutral-500 hover:text-neutral-950 text-xs font-semibold uppercase tracking-wider mt-3 flex items-center gap-1.5">
                    Read editorial <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-amber-800 tracking-widest uppercase">The Wardrobe Grids</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950">
              Browse Curated Collections
            </h2>
            <div className="w-16 h-[2px] bg-amber-700 mx-auto"></div>
            <p className="text-sm text-neutral-600 font-sans leading-relaxed">
              Target individual styles and exquisite craftsmanship. Filter our dynamic listings straight to your desired fashion items.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/products?category=${encodeURIComponent(cat.query)}`}
                className="group relative h-72 overflow-hidden bg-neutral-100 border border-neutral-200 flex flex-col justify-end p-4 text-left hover:border-neutral-400 transition"
              >
                <img
                  src={`https://picsum.photos/seed/${cat.imgSeed}/400/600`}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-transparent pointer-events-none"></div>
                <div className="relative z-10 space-y-1">
                  <p className="text-[10px] text-amber-400 uppercase font-semibold tracking-wider">{cat.count}</p>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING PRODUCTS LISTING */}
      <section className="py-20 bg-neutral-50/50 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-805 tracking-widest uppercase">Popular Curations</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">Trending Right Now</h2>
              <p className="text-sm text-neutral-500 font-sans max-w-xl">
                Highly-rated pieces handpicked by our fashion editors for excellence in fabric quality, fit shape, and modern aesthetic.
              </p>
            </div>
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-bold text-neutral-900 hover:text-amber-800 transition border-b border-neutral-950 pb-1"
              >
                View all Catalog
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col bg-white border border-neutral-100 overflow-hidden hover:shadow-md transition duration-300 relative"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Rank Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[9px] uppercase tracking-widest font-black text-neutral-900 border border-neutral-150">
                    {prod.category}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-neutral-900">{prod.rating}</span>
                        <span>({prod.reviewsCount} reviews)</span>
                      </div>
                      <span className="font-serif italic font-medium text-amber-800">{prod.price}</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-neutral-900 group-hover:text-amber-900 transition-colors leading-snug line-clamp-1">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-neutral-500 font-sans line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      href={`/products/${prod.id}`}
                      className="inline-flex items-center justify-center border border-neutral-300 text-[10px] tracking-wider uppercase font-extrabold text-neutral-700 hover:bg-neutral-50 font-sans py-2.5"
                    >
                      Core Details
                    </Link>
                    <a
                      href={prod.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-neutral-950 text-white hover:bg-amber-800 transition text-[10px] tracking-wider uppercase font-extrabold font-sans py-2.5"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. EDITORIAL FASHION BLOG SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-amber-800 tracking-widest uppercase">TrendWear Articles</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
              The Editorial Fashion Journal
            </h2>
            <div className="w-16 h-[2px] bg-amber-700 mx-auto"></div>
            <p className="text-sm text-neutral-500 font-sans leading-relaxed">
              In-depth research on technical weaving, sneaker developments, and curated modern styles to elevate your presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white border border-neutral-100 overflow-hidden hover:border-neutral-255 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-950 text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans">
                      <span className="font-semibold text-neutral-700">{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-neutral-950 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-neutral-900 group-hover:text-amber-800 transition"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST BENEFITS SECTION */}
      <section className="py-16 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-neutral-800 font-sans">
            <div className="p-6 space-y-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-neutral-200">
                <ShoppingBag className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-950">100% Curated Picks</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                No automatic web scraping slop. Every single item listed in our directory was analyzed manually by textile advisors for optimal weave and fit.
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-neutral-200">
                <BookOpen className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-950">Editorial Insights</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Deeply researched design histories, styling guides, and textile weave reports to elevate your personal fashion selections.
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-neutral-200">
                <Shield className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-950">Affiliate Integrity</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                All external product CTA selectors run clean Amazon deep links featuring explicit legal disclaimers. Shop transparently, safely, and effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
