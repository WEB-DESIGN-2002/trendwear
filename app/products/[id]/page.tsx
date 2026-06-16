import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, ExternalLink, ShieldCheck, Sparkles, AlertCircle, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    id: prod.id,
  }));
}

export default async function ProductDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((prod) => prod.id === resolvedParams.id);

  if (!product) {
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
              The premium clothing piece you are trying to view does not exist in our curation database.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-xs tracking-widest uppercase font-bold px-6 py-3 hover:bg-amber-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Wardrobe
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        
        {/* Back Link */}
        <div className="mb-10 text-left">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-neutral-600 hover:text-neutral-950 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </div>

        {/* Product core columns split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 border border-neutral-100 mb-16">
          
          {/* Left Column: Product Large Image */}
          <div className="lg:col-span-6 relative aspect-[4/5] bg-neutral-50 border border-neutral-150 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Information Sheet */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-8">
            
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 bg-amber-50 px-2.5 py-1 border border-amber-100">
                {product.category}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-950 leading-tight">
                {product.name}
              </h1>

              {/* Price & Score */}
              <div className="flex items-center gap-8 py-3 border-t border-b border-neutral-100">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Curated Tag Price</p>
                  <p className="font-serif text-2xl font-black text-amber-900 mt-1">{product.price}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Expert and User Score</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                    <strong className="text-neutral-900 text-sm font-sans">{product.rating}</strong>
                    <span className="text-xs text-neutral-400">({product.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase font-serif tracking-widest text-neutral-400 font-bold">
                  Editorial Review
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>

              {/* Bullet Features list */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase font-serif tracking-widest text-neutral-400 font-bold">
                  Highlights & Spec sheets
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600 font-sans">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-800 flex-shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buying box: Amazon Affiliate Link */}
            <div className="bg-neutral-50 p-6 border border-neutral-250 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Official Amazon Affiliate Link</h4>
                  <p className="text-[11px] text-neutral-500 font-sans leading-relaxed">
                    By clicking on the button below, we redirect you safely to Amazon with our tracking code. Secured checkout and standard brand warranty applies on the Amazon portal.
                  </p>
                </div>
              </div>

              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-neutral-950 text-white hover:bg-amber-800 transition font-extrabold text-xs tracking-widest uppercase py-4 rounded-none shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                View on Amazon
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

          </div>
        </section>

        {/* Reviews Block */}
        <section className="bg-white border border-neutral-100 p-6 sm:p-10 mb-16">
          <div className="pb-6 border-b border-neutral-100 mb-8 text-left">
            <h2 className="font-serif text-2xl font-bold text-neutral-950">
              Verified Shopper Reviews
            </h2>
            <p className="text-xs text-neutral-500 font-sans mt-1">
              Collected from actual buyers who verified quality on our tracked links.
            </p>
          </div>

          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-8 text-left">
              {product.reviews.map((rev, idx) => (
                <div key={idx} className="border-b border-neutral-100 pb-8 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-150 flex items-center justify-center text-neutral-700 font-bold text-xs uppercase select-none">
                        {rev.author.substring(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 font-sans">{rev.author}</h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-sans">
                          <span>Verified buyer</span>
                          <span>•</span>
                          <span>{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-sans pl-11">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-neutral-400 font-serif italic text-center">No reviews have been added for this specific item yet.</p>
          )}
        </section>

        {/* Related Products Carousel Lookalike */}
        {relatedProducts.length > 0 && (
          <section className="space-y-8 text-left">
            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-950">
                You May Also Like
              </h2>
              <p className="text-xs text-neutral-500 font-sans mt-1">
                More highly recommended selections within the exact same luxury sub-grid category.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="group flex flex-col bg-white border border-neutral-100 overflow-hidden hover:shadow-sm transition"
                >
                  <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs text-neutral-500 font-sans">
                        <span className="font-bold text-neutral-800">{p.price}</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span className="text-[11px] font-bold text-neutral-900">{p.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-serif text-sm font-bold text-neutral-900 group-hover:text-amber-800 transition line-clamp-1">
                        {p.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px] uppercase font-bold tracking-wider font-sans">
                      <Link
                        href={`/products/${p.id}`}
                        className="inline-flex items-center justify-center border border-neutral-250 py-2 hover:bg-neutral-50 text-neutral-600"
                      >
                        Details
                      </Link>
                      <a
                        href={p.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-neutral-950 text-white hover:bg-amber-800 transition py-2"
                      >
                        Buy Now
                      </a>
                    </div>
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
