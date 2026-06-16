"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, BookOpen, AlertTriangle, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-850">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <span className="font-serif text-2xl tracking-widest font-black text-white uppercase">
              Trend<span className="font-sans font-light text-neutral-400">Wear</span>
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans max-w-xs">
              Curating premium contemporary styles and lookbooks. Engineered as a luxury affiliate ecommerce catalog.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-white text-xs tracking-widest uppercase font-semibold">Curation Sitemaps</h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ShoppingBag className="w-3.5 h-3.5 text-neutral-500" />
                  All Curated Wardrobe
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                  Editorial Fashion Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Browse Categories */}
          <div className="space-y-4">
            <h3 className="text-white text-xs tracking-widest uppercase font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/products?category=Men%27s+Fashion" className="hover:text-amber-400 text-neutral-400 transition-colors">
                  Men&apos;s Clothing & Suits
                </Link>
              </li>
              <li>
                <Link href="/products?category=Women%27s+Fashion" className="hover:text-amber-400 text-neutral-400 transition-colors">
                  Women&apos;s Dresses & Coutures
                </Link>
              </li>
              <li>
                <Link href="/products?category=Shoes" className="hover:text-amber-400 text-neutral-400 transition-colors">
                  Artisan Shoes & Trainers
                </Link>
              </li>
              <li>
                <Link href="/products?category=Watches" className="hover:text-amber-400 text-neutral-400 transition-colors">
                  Luxury Mesh Chronographs
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance Shield */}
          <div className="space-y-4 border-l border-neutral-800 md:pl-6">
            <h3 className="text-white text-xs tracking-widest uppercase font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Compliance Badges
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              TrendWear is fully optimized for **Google AdSense** guidelines, maintaining crawlable clean static text layouts, semantic web hierarchies, structural schemas, and schema metadata formats.
            </p>
          </div>

        </div>

        {/* Affiliate legal disclosure - IMPORTANT for Amazon Associates eligibility */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="bg-neutral-950/70 p-5 rounded-none border border-neutral-800/80 flex flex-col sm:flex-row items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold text-white tracking-wider uppercase">Amazon Associate Affiliate Disclosure</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                As an Amazon Associate, TrendWear earns from qualifying purchases. When you click on buttons labeled &quot;View on Amazon&quot;, you will be redirected to Amazon sites via affiliate tracking identifiers. This comes at zero extra cost to you, helping fund our curated catalog and dedicated editorial staff.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-neutral-950/90 border-t border-neutral-900 py-6 text-center text-xs text-neutral-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} TrendWear Media Inc. All rights reserved.</p>
          <div className="flex gap-6 text-neutral-500">
            <Link href="#" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-300">Terms of Use</Link>
            <Link href="#" className="hover:text-neutral-300">Affiliate Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
