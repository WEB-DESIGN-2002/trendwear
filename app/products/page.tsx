/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Star, SlidersHorizontal, ArrowUpDown, CornerDownRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";

// Clean category identifiers
const CATEGORIES = ["All", "Men's Fashion", "Women's Fashion", "Shoes", "Watches", "Bags", "Accessories"];

function ProductsGridContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Load category from URL query if available
  const initialCategory = searchParams ? searchParams.get("category") : null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentSort, setCurrentSort] = useState<string>("recommended");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Synchronize category state with URL parameter (important for landing page link clicks!)
  useEffect(() => {
    if (initialCategory && CATEGORIES.includes(initialCategory)) {
      setSelectedCategory(initialCategory);
    } else {
      setSelectedCategory("All");
    }
  }, [initialCategory]);

  // Clean monetary parser helper (e.g. ₹4,499 -> 4499)
  const parsePriceNum = (priceStr: string): number => {
    const cleaned = priceStr.replace(/[₹,]/g, "");
    return parseFloat(cleaned) || 0;
  };

  // Filter products based on search term and category selection
  const filteredProducts = products.filter((prod) => {
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (currentSort === "price-low") {
      return parsePriceNum(a.price) - parsePriceNum(b.price);
    }
    if (currentSort === "price-high") {
      return parsePriceNum(b.price) - parsePriceNum(a.price);
    }
    if (currentSort === "rating") {
      return b.rating - a.rating;
    }
    if (currentSort === "reviews") {
      return b.reviewsCount - a.reviewsCount;
    }
    // Default sorting / recommended (just fallback to alphabetical/default database index)
    return 0;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* LEFT SIDEBAR FILTERS (DESKTOP) */}
      <aside className="hidden lg:block lg:col-span-3 bg-white p-6 border border-neutral-100 space-y-8">
        <div>
          <h3 className="text-xs uppercase font-serif tracking-widest text-neutral-400 font-bold mb-4">
            Search Wardrobe
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search shirts, bags, silk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 text-xs py-3 pl-4 pr-10 rounded-none focus:outline-none focus:border-neutral-900 focus:bg-white text-neutral-800"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase font-serif tracking-widest text-neutral-400 font-bold mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    // Update search parameters in the URL
                    if (cat === "All") {
                      router.push("/products");
                    } else {
                      router.push(`/products?category=${encodeURIComponent(cat)}`);
                    }
                  }}
                  className={`flex items-center gap-2 text-xs font-sans tracking-wide uppercase py-1.5 w-full text-left transition ${
                    selectedCategory === cat
                      ? "text-neutral-950 font-bold"
                      : "text-neutral-500 hover:text-neutral-800"
                  }`}
                >
                  <CornerDownRight className={`w-3.5 h-3.5 transition ${selectedCategory === cat ? "text-amber-800" : "text-neutral-300"}`} />
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* RIGHT PRODUCT GRID SECTION */}
      <div className="lg:col-span-9 space-y-6">
        
        {/* Sorting and Search Top-Bar */}
        <div className="bg-white p-4 border border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-500 font-sans">
            Showing <strong className="text-neutral-900">{sortedProducts.length}</strong> clothing items matched
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-1.5 border border-neutral-200 text-xs py-2 px-3 hover:bg-neutral-50 text-neutral-700"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Price/Rating Sorter */}
            <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-end">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={currentSort}
                onChange={(e) => setCurrentSort(e.target.value)}
                className="bg-neutral-50 border border-neutral-200 py-2 px-3 rounded-none focus:outline-none text-neutral-700 text-xs cursor-pointer"
              >
                <option value="recommended">Sort: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating: Highest Rated</option>
                <option value="reviews">Popularity: Review Volume</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer Overlay */}
        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white p-6 border border-neutral-200 space-y-6 text-left"
            >
              {/* Mobile Search input */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search goods..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-200 text-xs py-2.5 pl-4 pr-10 rounded-none focus:outline-none focus:border-neutral-900"
                  />
                  <Search className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
                </div>
              </div>

              {/* Mobile Categories lists */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        if (cat === "All") {
                          router.push("/products");
                        } else {
                          router.push(`/products?category=${encodeURIComponent(cat)}`);
                        }
                      }}
                      className={`text-[10px] px-3.5 py-2 uppercase font-medium tracking-wide border transition ${
                        selectedCategory === cat
                          ? "bg-neutral-950 text-white border-neutral-950"
                          : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 hover:bg-amber-800 transition"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty Search Fallback */}
        {sortedProducts.length === 0 && (
          <div className="bg-white p-12 text-center border border-neutral-100 space-y-4">
            <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto border border-neutral-100">
              <Search className="w-5 h-5 text-neutral-400" />
            </div>
            <div className="max-w-md mx-auto space-y-1.5">
              <h3 className="font-serif text-lg font-bold text-neutral-950">No Fashion Pieces Found</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                We couldn&apos;t locate any items matching &quot;{searchQuery}&quot; under {selectedCategory} category. Please try adjusting your search terms or filters.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                router.push("/products");
              }}
              className="bg-neutral-950 text-white text-[10px] uppercase font-bold tracking-wider px-5 py-2.5 hover:bg-amber-800 transition"
            >
              Reset all Filters
            </button>
          </div>
        )}

        {/* Dynamic products list grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col bg-white border border-neutral-100 overflow-hidden hover:shadow-md transition duration-300"
            >
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-widest font-black text-neutral-900 border border-neutral-150">
                  {prod.category}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <div className="flex items-center gap-1 font-sans">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-neutral-900">{prod.rating}</span>
                      <span>({prod.reviewsCount})</span>
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
                    className="inline-flex items-center justify-center border border-neutral-300 text-[10px] tracking-wider uppercase font-bold text-neutral-700 hover:bg-neutral-50 py-2.5 font-sans"
                  >
                    View Details
                  </Link>
                  <a
                    href={prod.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-neutral-950 text-white hover:bg-amber-800 transition text-[10px] tracking-wider uppercase font-extrabold py-2.5 font-sans gap-1"
                  >
                    Shop on Amazon
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function BrowseProducts() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        
        {/* Page title header */}
        <div className="pb-8 border-b border-neutral-100 mb-10 text-left">
          <span className="text-[10px] uppercase font-semibold text-amber-800 tracking-widest block mb-2">TrendWear Catalog</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Curated Premium Wardrobe
          </h1>
          <p className="text-sm text-neutral-500 font-sans mt-2 leading-relaxed max-w-xl">
            Explore carefully structured fashion pieces from our affiliate channels. Every catalog selection guides you secure and straight to Amazon&apos;s official checkout.
          </p>
        </div>

        {/* Wrap in Suspense layer */}
        <Suspense fallback={
          <div className="py-24 text-center text-xs text-neutral-500 font-mono">
            Synchronizing Wardrobe Data...
          </div>
        }>
          <ProductsGridContent />
        </Suspense>

      </main>

      <Footer />
    </div>
  );
}
