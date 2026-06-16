export interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: "Men's Fashion" | "Women's Fashion" | "Shoes" | "Watches" | "Bags" | "Accessories";
  price: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  amazonLink: string;
  reviews: Review[];
}

export const products: Product[] = [
  // --- MEN'S FASHION ---
  {
    id: "m-oxford-shirt",
    name: "Classic Oxford Cotton Shirt",
    category: "Men's Fashion",
    price: "₹1,499",
    rating: 4.8,
    reviewsCount: 142,
    image: "https://picsum.photos/seed/oxfordshirt/800/1000",
    description: "Tailored to high standards, this Oxford shirt is constructed from premium long-staple cotton. Featuring an iconic button-down collar, elegant curved hem, and a durable yet soft weave that gets better with every wash. Perfect for business-casual layers or smart weekend edits.",
    features: [
      "100% Premium Long-Staple Cotton",
      "Tailored slim-modern fit silhouette",
      "Authentic pearlized chalk buttons",
      "Reinforced double-layered yoke and box pleat"
    ],
    amazonLink: "https://www.amazon.in/s?k=men+classic+cotton+oxford+shirt&tag=trendwear26-21",
    reviews: [
      { author: "Aditya S.", rating: 5, comment: "Exceeded my expectations. The fabric is thick yet breathable and fits like a custom-made shirt.", date: "2026-05-12" },
      { author: "Rahul M.", rating: 4, comment: "Very elegant style, looks great under a blazer. Highly recommended for executive wear.", date: "2026-05-28" }
    ]
  },
  {
    id: "m-denim-jacket",
    name: "Premium Slim Fit Denim Jacket",
    category: "Men's Fashion",
    price: "₹2,999",
    rating: 4.7,
    reviewsCount: 89,
    image: "https://picsum.photos/seed/denimjacket/800/1000",
    description: "The quintessential American companion recreated with custom ring-spun Japanese denim. This denim jacket boasts a subtle vintage stonewash finish with classic contrast stitching, reinforced metal copper buttons, and dual chest flap pockets. Tailored slim to sit near the shoulders without restricting motion.",
    features: [
      "Heavyweight 12.5 oz ring-spun denim",
      "Heritage button closure with custom copper finishes",
      "Adjustable button tabs at the back waist",
      "Two side welt pockets and two internal utility pockets"
    ],
    amazonLink: "https://www.amazon.in/s?k=men+premium+denim+jacket&tag=trendwear26-21",
    reviews: [
      { author: "Vikram K.", rating: 5, comment: "The perfect vintage blue wash. Not too stiff, stretches slightly after wearing.", date: "2026-04-18" }
    ]
  },
  {
    id: "m-linen-trousers",
    name: "Minimalist Linen Summer Trousers",
    category: "Men's Fashion",
    price: "₹1,899",
    rating: 4.5,
    reviewsCount: 61,
    image: "https://picsum.photos/seed/linentrousers/800/1000",
    description: "Embrace lazy coastal elegance with these airy, ultra-light linen trousers. Crafted from a premium Belgian flax linen blend, they offer maximum airflow with dynamic drape aesthetics. Fitted with a clean elastic-back waistband and flat-front button closure for supreme comfort and crisp presentation.",
    features: [
      "55% Belgian Linen / 45% Organic Cotton blend",
      "Breathable, moisture-wicking weave for hot weather",
      "Drawcord adjustable waist with functional belt loops",
      "Deep side seam pockets and rear button-through pockets"
    ],
    amazonLink: "https://www.amazon.in/s?k=men+premium+linen+trousers&tag=trendwear26-21",
    reviews: [
      { author: "Siddharth J.", rating: 4, comment: "Absolutely comfortable for beach parties and casual summer events. Wrinkles nicely as real linen should.", date: "2026-06-02" }
    ]
  },
  {
    id: "m-merino-sweater",
    name: "Merino Wool Crewneck Sweater",
    category: "Men's Fashion",
    price: "₹3,499",
    rating: 4.9,
    reviewsCount: 112,
    image: "https://picsum.photos/seed/merinosweater/800/1000",
    description: "An incredibly luxurious layer knitted from the finest 19.5-micron extrafine Australian Merino wool. The fiber is exceptionally soft, entirely itch-free, and boasts natural temperature regulation as well as odor resistance. A sleek modern profile makes layering look effortless and smart.",
    features: [
      "100% Extrafine Australian Merino Wool",
      "12-gauge premium flatknit construction",
      "Ribbed crew cuff and hem with spandex retention",
      "Lightweight, breathable, and self-regulating insulation"
    ],
    amazonLink: "https://www.amazon.in/s?k=men+merino+wool+crewneck+sweater&tag=trendwear26-21",
    reviews: [
      { author: "Kunal P.", rating: 5, comment: "Incredibly premium texture. Super soft and lightweight yet extremely warm. Worth every rupee.", date: "2026-03-31" }
    ]
  },
  {
    id: "m-tailored-blazer",
    name: "Semi-Formal Tailored Blazer",
    category: "Men's Fashion",
    price: "₹4,999",
    rating: 4.6,
    reviewsCount: 74,
    image: "https://picsum.photos/seed/tailoredblazer/800/1000",
    description: "Redefine your sartorial presence. This tailored blazer balances structural smartness with relaxed everyday comfort. Cut from a textured, wrinkle-resistant twill fabric, it features a classic notch lapel, dual-button front, double vented back, and elegant partial satin lining.",
    features: [
      "Premium poly-viscose-spandex texturized blend",
      "Lycra stretch technology for unrestricted arm motion",
      "Half-canvas construction allowing soft, anatomical shoulder fit",
      "Functional surgeon cuffs with subtle button accents"
    ],
    amazonLink: "https://www.amazon.in/s?k=men+semi+formal+tailored+blazer&tag=trendwear26-21",
    reviews: [
      { author: "Arjun V.", rating: 4, comment: "Fit is excellent. Gives a smart posture. Great buy for cocktail parties or business meetings.", date: "2026-05-15" }
    ]
  },

  // --- WOMEN'S FASHION ---
  {
    id: "w-lace-dress",
    name: "Elegant French Lace dress",
    category: "Women's Fashion",
    price: "₹3,999",
    rating: 4.9,
    reviewsCount: 185,
    image: "https://picsum.photos/seed/lacedress/800/1000",
    description: "A breathtakingly beautiful silhouette for special evenings. Inspired by vintage French court elegance, this midi-length dress presents hand-appliqued embroidery lace overlaid on soft breathable satin. Styled with a subtle boat neck, flattering cinched corset-style waist, and flowing skirt.",
    features: [
      "Premium embroidered lace with delicate scalloped hems",
      "Smooth lightweight satin internal slip lining",
      "Concealed back zipper with satin-coated buttons",
      "Elegant sheer lace sleeves with comfortable stretch"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+elegant+lace+dress+midi&tag=trendwear26-21",
    reviews: [
      { author: "Ananya R.", rating: 5, comment: "An absolute showstopper. Wore this to an anniversary dinner and got countless compliments. The quality of lace is exquisite.", date: "2026-05-20" },
      { author: "Priya S.", rating: 5, comment: "Beautiful drape, very comfortable and has a very rich vintage vibe.", date: "2026-06-01" }
    ]
  },
  {
    id: "w-silk-skirt",
    name: "Pure Silk Floral Wrap Skirt",
    category: "Women's Fashion",
    price: "₹2,299",
    rating: 4.6,
    reviewsCount: 94,
    image: "https://picsum.photos/seed/silkskirt/800/1000",
    description: "Flow down city boulevards in pure luxury. This authentic wrap skirt is cut from lightweight mulberry silk charmeuse with hand-painted botanical motifs. Adjusted with long side-tie sashes, it drapes in an asymmetrical flutter. Provides cooling, skin-friendly comfort in tropical heat.",
    features: [
      "100% Pure Organic Mulberry Silk",
      "Custom hand-painted French watercolor floral print",
      "Adjustable wrap waist closure for dynamic styling and fits",
      "Flattering soft high-low drape with clean finished seams"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+silk+floral+wrap+skirt&tag=trendwear26-21",
    reviews: [
      { author: "Kriti T.", rating: 4, comment: "Luxurious sheen and soft texture. Drapes beautifully and floats along with the breeze.", date: "2026-05-14" }
    ]
  },
  {
    id: "w-trench-coat",
    name: "Classic Trench Coat with Belt",
    category: "Women's Fashion",
    price: "₹5,499",
    rating: 4.8,
    reviewsCount: 104,
    image: "https://picsum.photos/seed/trenchcoat/800/1000",
    description: "The timeless transitional masterwork. Tailored from heavy double-weave cotton gabardine with a water-repellent finish, this double-breasted trench features traditional epaulettes, rain guards, storm flaps, and a matching self-belt to cinch the waist structure for an imposing silhouette.",
    features: [
      "Water-resistant heavy cotton gabardine weave",
      "Iconic double-breasted 10-button front layout",
      "Traditional adjustable belt with tortoiseshell-buckles",
      "Signature checked cotton flannel-lined body and hood"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+classic+trench+coat+belt&tag=trendwear26-21",
    reviews: [
      { author: "Meera Nair", rating: 5, comment: "Outstanding rain and cold protection. Looks incredibly posh and professional for London travel.", date: "2026-04-29" }
    ]
  },
  {
    id: "w-linen-blouse",
    name: "Boho Chic Linen Blouse",
    category: "Women's Fashion",
    price: "₹1,599",
    rating: 4.4,
    reviewsCount: 57,
    image: "https://picsum.photos/seed/linenblouse/800/1000",
    description: "Designed for easy, free-spirited summer comfort. This elegant peasant blouse showcases intricate direct-embroidery detailing along a soft V-neckline with adjustable tassel ties. Billowy peasant sleeves with comfortable elastic wrists block the harsh sun while allowing soft breeze ventilation.",
    features: [
      "100% Pure flax organic linen fibers",
      "Traditional embroidery accent borders around neck",
      "Gathered balloon sleeves with gentle gathered cuffs",
      "Relaxed, ultra-breezy oversized fit"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+bohemian+organic+linen+blouse&tag=trendwear26-21",
    reviews: [
      { author: "Sasha P.", rating: 5, comment: "Beautifully airy. Feels weightless and fits perfectly with blue denims or white shorts.", date: "2026-06-11" }
    ]
  },
  {
    id: "w-pleated-trousers",
    name: "Pleated High-Waisted Trousers",
    category: "Women's Fashion",
    price: "₹1,999",
    rating: 4.7,
    reviewsCount: 82,
    image: "https://picsum.photos/seed/pleatedtrousers/800/1000",
    description: "Elevate your corporate power dressing. These high-waisted trousers have double inverted front pleats that expand gracefully down to a modern wide leg. Tailored from a premium structured crepe that resists creases, featuring hidden bar closures and sharp front creases.",
    features: [
      "Structured heavy crepe twill (poly-rayon-spandex blend)",
      "High waist sitting with double pleated architectural front",
      "Concealed hook-and-bar zip fly closure with custom interior waist binding",
      "Wide-leg floor-grazing drape design"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+pleated+high+waist+wide+leg+trousers&tag=trendwear26-21",
    reviews: [
      { author: "Deepika R.", rating: 5, comment: "Stunning drape! It elongates my legs and feels modern and authoritative.", date: "2026-05-18" }
    ]
  },

  // --- SHOES ---
  {
    id: "s-chelsea-boots",
    name: "Leather Chelsea Boots",
    category: "Shoes",
    price: "₹4,499",
    rating: 4.8,
    reviewsCount: 165,
    image: "https://picsum.photos/seed/chelseaboots/800/1000",
    description: "Constructed with artisan expertise, these heritage Chelsea boots feature water-resistant full-grain aniline leather. They slide on easily thanks to high-tension side elastic gores and dual pull-tabs. The boots are finished with a premium welted natural rubber crepe outsole for bouncy, silent shock-absorption.",
    features: [
      "Full-grain premium calfskin leather upper",
      "Natural latex organic crepe rubber soles for comfort",
      "Moisture-absorbing glove leather lining",
      "Stitched Goodyear-style welt joinery for long lifespan"
    ],
    amazonLink: "https://www.amazon.in/s?k=unisex+premium+leather+chelsea+boots&tag=trendwear26-21",
    reviews: [
      { author: "Rohan D.", rating: 5, comment: "Feels like walking on clouds. Excellent ankle grip and incredible leather scent. Classic styling.", date: "2026-05-04" },
      { author: "Shreya G.", rating: 4, comment: "Stunning boots. Take a few days to break into the leather, but then fits like a glove.", date: "2026-05-22" }
    ]
  },
  {
    id: "s-white-sneakers",
    name: "Minimalist Classic Sneakers",
    category: "Shoes",
    price: "₹2,899",
    rating: 4.8,
    reviewsCount: 221,
    image: "https://picsum.photos/seed/whitesneakers/800/1000",
    description: "The ultimate minimalist essential. Clean, low-top silhouette structured from premium full-grain leather. Designed with monochrome detailing, flat cotton laces, and a durable Margom-style cupsole stitched to the upper. Compliments crisp suits or casual weekend denims effortlessly.",
    features: [
      "Premium buttery-soft top-grain calf nappa leather",
      "Ortholite memory foam insole lined with breathable calf leather",
      "Abrasion-resistant vulcanized rubber outsole",
      "Minimalist gold-embossed lateral serial numbers"
    ],
    amazonLink: "https://www.amazon.in/s?k=minimalist+white+leather+sneakers&tag=trendwear26-21",
    reviews: [
      { author: "Ishaan B.", rating: 5, comment: "Unbelievable quality for the price. Rivals luxury sneakers costing 4 times more.", date: "2026-06-03" }
    ]
  },
  {
    id: "s-leather-loafers",
    name: "Classic Italian Leather Loafers",
    category: "Shoes",
    price: "₹3,799",
    rating: 4.7,
    reviewsCount: 110,
    image: "https://picsum.photos/seed/leatherloafers/800/1000",
    description: "Infuse your style with European flair. Handcrafted loafer style with genuine calfskin suede. Modeled on classic Italian penny loafers with a traditional split moc-toe and elegant hand-stitching along the bridge. Extremely soft unstructured heel for slip-on convenience.",
    features: [
      "Extremely soft premium Italian split-suede upper",
      "Padded arch-support insole with full leather lining",
      "Flexible split rubber driver sole for driving grip",
      "Entirely hand-sewn moc-toe stitch detailing"
    ],
    amazonLink: "https://www.amazon.in/s?k=classic+italian+leather+penny+loafers&tag=trendwear26-21",
    reviews: [
      { author: "Nikhil T.", rating: 5, comment: "Incredibly soft, fits straight out of the box with zero blisters. Looks beautiful with beige chinos.", date: "2026-05-29" }
    ]
  },
  {
    id: "s-suede-heels",
    name: "Pointed Toe Suede Heels",
    category: "Shoes",
    price: "₹3,299",
    rating: 4.5,
    reviewsCount: 81,
    image: "https://picsum.photos/seed/suedeheels/800/1000",
    description: "Sleek and tall. These pointed-toe stiletto pumps feature genuine kidskin suede uppers that enrich depth and color intensity. Outfitted with dual-density foam internal underlays and soft leather lining so you can strut comfortably at prolonged corporate galas or celebrations.",
    features: [
      "Genuine premium kid-suede upper material",
      "Elegant 85mm slim covered stiletto heel",
      "Dual-density cushioned insoles with targeted pressure pads",
      "Non-slip leatherette soles with rubber heel taps"
    ],
    amazonLink: "https://www.amazon.in/s?k=pointed+toe+suede+heels+pumps&tag=trendwear26-21",
    reviews: [
      { author: "Karishma M.", rating: 4, comment: "Perfect height! Sexy, elegant, and the midnight black suede looks incredibly rich.", date: "2026-05-01" }
    ]
  },
  {
    id: "s-athletic-trainers",
    name: "Premium Lightweight Trainers",
    category: "Shoes",
    price: "₹3,599",
    rating: 4.6,
    reviewsCount: 139,
    image: "https://picsum.photos/seed/trainers/800/1000",
    description: "Unravel performance boundaries with our featherlight road trainers. Features active-weave knitted engineered uppers that adjust dynamically to foot configurations. Engineered with air-infused foam midsoles running 3D pressure lugs to cushion footsteps while stabilizing stride returns.",
    features: [
      "Engineered breathable multi-density knit upper",
      "Featherlight high-rebound responsive foam sole",
      "Reinforced carbon-rubber heel and toe crash panels",
      "Padded Achilles collar protector with toggle loops"
    ],
    amazonLink: "https://www.amazon.in/s?k=premium+lightweight+running+athletic+trainers&tag=trendwear26-21",
    reviews: [
      { author: "Aman G.", rating: 5, comment: "I use them for short sprints and everyday walking. Exceedingly lightweight, feet feel fresh.", date: "2026-06-08" }
    ]
  },

  // --- WATCHES ---
  {
    id: "w-chrono-quartz",
    name: "Minimalist Chronograph Quartz Watch",
    category: "Watches",
    price: "₹5,999",
    rating: 4.7,
    reviewsCount: 198,
    image: "https://picsum.photos/seed/chronowatch/800/1000",
    description: "An exceptional modern timekeeper. Features a surgical-grade 316L stainless steel case housing a precise Japanese Miyota quartz movement. Boasts three sub-dials for seconds, minute stopwatches, 24-hour cycle registers, and a quick-set date window under double-domed anti-glare sapphire crystal.",
    features: [
      "Surgical 316L brushed stainless steel casing (41mm case base)",
      "High-accuracy Japanese Miyota quartz chronograph movement",
      "Double-domed sapphire crystal dial window protection",
      "Water resistance tested to 50 Meters (5 ATM)"
    ],
    amazonLink: "https://www.amazon.in/s?k=minimalist+chronograph+quartz+men+watch&tag=trendwear26-21",
    reviews: [
      { author: "Kabir S.", rating: 5, comment: "Striking black watch face with copper needles. Sapphire glass is completely scratch-proof.", date: "2026-04-20" },
      { author: "Madhav A.", rating: 5, comment: "Minimal styling with active chronographs. Fits elegantly on medium-sized wrists.", date: "2026-05-10" }
    ]
  },
  {
    id: "w-classic-leather",
    name: "Classic dress Leather Watch",
    category: "Watches",
    price: "₹4,499",
    rating: 4.8,
    reviewsCount: 132,
    image: "https://picsum.photos/seed/dresswatch/800/1000",
    description: "Elegance of mid-century watchmaker design. Styled with an ultra-thin 7.5mm polished silver dial case and clean baton-style watch needles. Fastened with genuine embossed crocodile calfskin straps that contour comfortably to your wrist curvature.",
    features: [
      "Ultra-thin 38mm brushed casing profile with 7.5mm thickness",
      "Genuine Italian croc-embossed top-grain leather straps",
      "Ultra-precise Swiss Ronda caliber quartz mechanism",
      "Enamelled white clean minimal face with applied baton markers"
    ],
    amazonLink: "https://www.amazon.in/s?k=classic+dress+leather+strap+unisex+watch&tag=trendwear26-21",
    reviews: [
      { author: "Meeta J.", rating: 5, comment: "Beautifully sleek. Slips easily under shirt cuffs. Highly minimalist and classy.", date: "2026-05-30" }
    ]
  },
  {
    id: "w-automatic-gold",
    name: "Automatic Gold Accent Watch",
    category: "Watches",
    price: "₹12,499",
    rating: 4.9,
    reviewsCount: 56,
    image: "https://picsum.photos/seed/goldwatch/800/1000",
    description: "The ultimate horological mechanical artwork. Powered simply by the natural wrist movements of the wearer, this automatic timepiece bypasses all battery needs. Features a partial skeleton exhibition window on the emerald-green face to observe the intricate spinning gears. Encased in beautiful rose-gold plated PVD casing.",
    features: [
      "Rose-Gold double physical vapor deposition (PVD) casing",
      "Japanese NH35 Seiko automatic hacking mechanical movement",
      "24-jewel movement with 41-hour reserve indicators",
      "Exhibition glass back and open-heart skeleton dial"
    ],
    amazonLink: "https://www.amazon.in/s?k=automatic+skeleton+rose+gold+men+watch&tag=trendwear26-21",
    reviews: [
      { author: "Varun H.", rating: 5, comment: "Breath-taking watch. Listening to the mechanical heartbeat of the gears is hypnotic.", date: "2026-06-05" }
    ]
  },
  {
    id: "w-slate-mesh",
    name: "Minimal Slate Mesh Watch",
    category: "Watches",
    price: "₹3,899",
    rating: 4.5,
    reviewsCount: 68,
    image: "https://picsum.photos/seed/meshwatch/800/1000",
    description: "Monochrome technical brilliance. Designed from a tough brushed slate-grey physical alloy with matching interwoven Milanese mesh metal bands. Simple, clean, screw-down flat face and high contrast neon second markers for bold presence.",
    features: [
      "Slate grey brushed PVD watch construction",
      "Milanese stainless steel mesh strap with slide locking catch",
      "Scratch-proof hardened mineral crystal glass protection",
      "Super-Luminova glow markers on active watch needles"
    ],
    amazonLink: "https://www.amazon.in/s?k=slate+grey+milanese+mesh+unisex+watch&tag=trendwear26-21",
    reviews: [
      { author: "Sonia L.", rating: 4, comment: "I love the technical mesh feel. Highly durable and doesn't sweat during work.", date: "2026-04-12" }
    ]
  },
  {
    id: "w-dual-time",
    name: "Contemporary Dual-Time Watch",
    category: "Watches",
    price: "₹6,499",
    rating: 4.7,
    reviewsCount: 79,
    image: "https://picsum.photos/seed/dualwatch/800/1000",
    description: "Designed explicitly for global wanderers. Features a dual independent movement core allowing simultaneous monitoring of home zone time and active destination zone time. Complete with solid tan saddle-stitch calf leather straps.",
    features: [
      "Dual independent Miyota movement quartz calibers",
      "Solid dual-axis 43mm polished steel casing",
      "Premium heavy oil-tanned saddle stitch leather straps",
      "Contrast sand-blasted cream and slate dial layouts"
    ],
    amazonLink: "https://www.amazon.in/s?k=dual+time+zone+gmt+leather+watch&tag=trendwear26-21",
    reviews: [
      { author: "Rajesh S.", rating: 5, comment: "Exceptional travel companion. Very quick to read both London and Mumbai times in one look.", date: "2026-05-11" }
    ]
  },

  // --- BAGS ---
  {
    id: "b-leather-tote",
    name: "Full Grain Leather Work Tote",
    category: "Bags",
    price: "₹4,999",
    rating: 4.8,
    reviewsCount: 154,
    image: "https://picsum.photos/seed/leathertote/800/1000",
    description: "Crafted to elevate your daily commute. This spacious tote bag is constructed from rich, full-grain oil-wax leather that develops a magnificent vintage patina over time. It has a fully padded inner sleeve to protect up to a 15-inch laptop, complete with robust metal YKK zippers, internal accessory dividers, and long double handles.",
    features: [
      "100% Top-grain oil-pull-up cow leather",
      "Specially padded laptop compartment fitting up to 15-inch screens",
      "Heavy-duty rust-free brass zipper track and buckles",
      "Twin shoulder straps with comfortable reinforced underlays"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+full+grain+leather+work+tote+bag&tag=trendwear26-21",
    reviews: [
      { author: "Tanya C.", rating: 5, comment: "Absolutely gorgeous bag! Fits my MacBook Pro, iPad, chargers and makeup kit with room to spare. The leather is heavenly.", date: "2026-05-24" },
      { author: "Shweta S.", rating: 5, comment: "Superb stitch quality. Classic design that catches attention in boardroom meetings.", date: "2026-06-09" }
    ]
  },
  {
    id: "b-nylon-backpack",
    name: "Sleek Water-Resistant Backpack",
    category: "Bags",
    price: "₹3,299",
    rating: 4.6,
    reviewsCount: 112,
    image: "https://picsum.photos/seed/nylonbackpack/800/1000",
    description: "Where minimalist design merges with technical efficiency. This lightweight backpack is crafted from high-density ballistic nylon featuring water-repellent coatings. Equipped with dynamic hidden pockets, quick-access padded laptop sections, and ergonomic shoulder harnesses to distribute weight evenly.",
    features: [
      "1680D high-density water-resistant ballistic nylon",
      "Hidden anti-theft back zip compartment for passports",
      "Dedicated side thermal-mesh sleeves for hydro-flasks",
      "S-curve comfort-foamed shoulder padding"
    ],
    amazonLink: "https://www.amazon.in/s?k=minimalist+water+resistant+laptop+backpack+nylon&tag=trendwear26-21",
    reviews: [
      { author: "Harsh L.", rating: 5, comment: "Clean silhouette, holds its shape even when completely empty. Outstanding rain protection.", date: "2026-06-12" }
    ]
  },
  {
    id: "b-suede-crossbody",
    name: "Vintage Suede Crossbody Bag",
    category: "Bags",
    price: "₹2,799",
    rating: 4.7,
    reviewsCount: 95,
    image: "https://picsum.photos/seed/crossbody/800/1000",
    description: "The ultimate weekend companion. Cut from ultra-soft genuine calf suede leather with hand-braided trim borders along the front flap closure. Features adjustable crossbody straps, polished silver hardware accents, and secure zipper internal sleeves.",
    features: [
      "Genuine premium split suede leather casing",
      "Adjustable flat strap with custom buckle pins",
      "Hand-braided decorative leather stitch lining",
      "Compact saddle-bag shape with magnetic flap lid structures"
    ],
    amazonLink: "https://www.amazon.in/s?k=vintage+suede+fringe+crossbody+saddle+bag&tag=trendwear26-21",
    reviews: [
      { author: "Pooja V.", rating: 4, comment: "Extremely cute and stylish. Fits my phone, cosmetic kit and cardholder easily.", date: "2026-05-27" }
    ]
  },
  {
    id: "b-evening-clutch",
    name: "Elegant Evening Satin Clutch",
    category: "Bags",
    price: "₹1,999",
    rating: 4.4,
    reviewsCount: 48,
    image: "https://picsum.photos/seed/satinclutch/800/1000",
    description: "Dazzle the crowd at formal gatherings. This structural evening clutch is wrapped in heavyweight, fluid satin with a micro-pave rhinestone ring-clasp. Comes with a hidden, detachable silver chain strap to transition easily between handbag clutch and shoulder wear.",
    features: [
      "Structured resin hard-shell covered in heavyweight satin",
      "Micro-pave AAA-grade rhinestone jewel encrusted clasp",
      "Detachable 120cm silver link chain shoulder strap",
      "Velvet-lined soft scratch-proof interior"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+formal+evening+satin+rhinestone+clutch+bag&tag=trendwear26-21",
    reviews: [
      { author: "Nisha D.", rating: 5, comment: "Extremely glamorous and premium look for weddings. The metallic chain is heavy and solid.", date: "2026-04-15" }
    ]
  },
  {
    id: "b-heritage-duffle",
    name: "Heritage Leather Duffle Bag",
    category: "Bags",
    price: "₹6,999",
    rating: 4.9,
    reviewsCount: 84,
    image: "https://picsum.photos/seed/leatherduffle/800/1000",
    description: "The classic luxury travel companion. Built to standard cabin-carry overhead sizing, this heavy travel duffle is fashioned from durable oil-tanned crazy horse cow leather. Styled with reinforced twin handle straps, durable steel anchor rivets, and expansive wide-mouth zip lanes.",
    features: [
      "100% thick crazy horse oil-tanned leather, heavy-weather resilient",
      "Reinforced rivet and double stitched stress joints",
      "Fits international carry-on luggage sizes easily",
      "Adjustable wide-shoulder leather strap with sliding pad"
    ],
    amazonLink: "https://www.amazon.in/s?k=heritage+crazy+horse+leather+travel+duffle+bag&tag=trendwear26-21",
    reviews: [
      { author: "Rahul Dev", rating: 5, comment: "Sublime leather thickness and aroma. A bag that will last my entire lifetime. Patina looks incredible.", date: "2026-05-19" }
    ]
  },

  // --- ACCESSORIES ---
  {
    id: "a-silk-scarf",
    name: "Pure Silk Patterned Scarf",
    category: "Accessories",
    price: "₹1,199",
    rating: 4.7,
    reviewsCount: 120,
    image: "https://picsum.photos/seed/silkscarf/800/1000",
    description: "An incredibly versatile art masterpiece. Cut from premium, fluid 14-momme silk twill, this square scarf showcases hand-rolled stitched edges and beautiful equestrian-themed gold chain block prints. Wrap comfortably around your neck, tie on handbag handles, or use as a chic headscarf.",
    features: [
      "100% Premium Twill Mulberry Silk (14 Momme thickness)",
      "Traditional hand-rolled fine stitched hems",
      "Equestrian-themed high dye retention digital print patterns",
      "Generous 90cm x 90cm square configuration"
    ],
    amazonLink: "https://www.amazon.in/s?k=women+pure+silk+square+patterned+scarf&tag=trendwear26-21",
    reviews: [
      { author: "Gayatri P.", rating: 5, comment: "Pure silk texture with stunning colors. Adds instant panache to a basic blazer or handbag.", date: "2026-05-09" }
    ]
  },
  {
    id: "a-brass-belt",
    name: "Heritage Leather Brass Belt",
    category: "Accessories",
    price: "₹1,499",
    rating: 4.6,
    reviewsCount: 93,
    image: "https://picsum.photos/seed/leatherbelt/800/1000",
    description: "The workhorse accessory tailored to outlast trends. Structured from solid 4mm thick full-grain bovine bridle leather. Complemented with a solid sand-cast brass buckle that is detachable via dual snaps when you want to customize your style.",
    features: [
      "100% Solid vegetable-tanned bovine bridle leather strap",
      "4mm strap thickness with burnished, waxed side edges",
      "Solid sand-cast brass vintage frame buckle",
      "Double screw snap posts for easy buckle replacement"
    ],
    amazonLink: "https://www.amazon.in/s?k=men+full+grain+leather+jean+belt+brass+buckle&tag=trendwear26-21",
    reviews: [
      { author: "Sanjay T.", rating: 5, comment: "Extremely solid structure. Real leather that doesn't split or peel like cheap PU belts.", date: "2026-06-01" }
    ]
  },
  {
    id: "a-polarized-glasses",
    name: "Polarized Classic Acetate Sunglasses",
    category: "Accessories",
    price: "₹2,299",
    rating: 4.8,
    reviewsCount: 178,
    image: "https://picsum.photos/seed/sunglasses/800/1000",
    description: "Timeless Hollywood styling meets high-tech optics. Hand-carved from block cellulose tortoise-shell acetate and reinforced with internal steel wire temple cores. Outfitted with polarized 9-layer TAC lenses to filter high glare and block UV rays completely.",
    features: [
      "Handmade Italian cellulose acetate frame construct",
      "9-layer polarized TAC lenses with anti-reflective back coats",
      "100% UVA/UVB protection up to 400nm wavelengths",
      "Durable 5-barrel metal hinges for tension safety"
    ],
    amazonLink: "https://www.amazon.in/s?k=classic+polarized+acetate+tortoise+sunglasses&tag=trendwear26-21",
    reviews: [
      { author: "Akshay P.", rating: 5, comment: "Extremely crisp vision, completely eliminates road gloss when driving. Frame feels sturdy and premium.", date: "2026-06-06" },
      { author: "Divya N.", rating: 4, comment: "Beautiful cat-eye styled frames. Very glamorous and fits snug on my face.", date: "2026-05-14" }
    ]
  },
  {
    id: "a-hex-cufflinks",
    name: "Sterling Silver Hexagonal Cufflinks",
    category: "Accessories",
    price: "₹1,899",
    rating: 4.6,
    reviewsCount: 52,
    image: "https://picsum.photos/seed/cufflinks/800/1000",
    description: "Add structural precision to your formal shirt cuffs. These minimalist cufflinks showcase a modern hexagonal wireframe cast in premium 925 sterling silver. Highlighted with brushed slate inserts and secure swivel hinge toggle backs.",
    features: [
      "Solid 925 Sterling Silver build with hallmark guarantee stamp",
      "Hardened lead-free black carbonite enamel core accents",
      "Easy-slot swivel bullet back toggle locks",
      "Comes packaged in exquisite soft velvet presentation drawers"
    ],
    amazonLink: "https://www.amazon.in/s?k=sterling+silver+cufflinks+for+men+french+cuffs&tag=trendwear26-21",
    reviews: [
      { author: "Ritesh S.", rating: 5, comment: "Stunning geometry. Subtly reflects light. Fits beautifully on French cuff shirts.", date: "2026-05-25" }
    ]
  },
  {
    id: "a-cashmere-beanie",
    name: "Luxury Cashmere Knit Beanie",
    category: "Accessories",
    price: "₹1,699",
    rating: 4.7,
    reviewsCount: 64,
    image: "https://picsum.photos/seed/beanie/800/1000",
    description: "Wrap your head in clouds of warmth. This cozy knit cap is spun clean from 100% fine Inner-Mongolian cashmere fibers. Knit with a tight 4-ply fisherman ribbed pattern and featuring adjustable slouch-to-cuffed double layers for premium style.",
    features: [
      "100% Pure Organic Inner-Mongolian Cashmere",
      "Tight 4-ply fisherman knit construction for durability",
      "Naturally warm, insanely soft, and breathable",
      "Adjustable fold-over cuff design"
    ],
    amazonLink: "https://www.amazon.in/s?k=pure+cashmere+knit+beanie+hat+unisex&tag=trendwear26-21",
    reviews: [
      { author: "Zara W.", rating: 5, comment: "Insanely soft. Doesn't itch my forehead at all, and keeps me super warm in winter nights.", date: "2026-03-24" }
    ]
  }
];
