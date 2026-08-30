import fans from "@/assets/product-fans.jpg";
import haircomb from "@/assets/product-haircomb.jpg";
import proposalbox from "@/assets/product-proposalbox.jpg";
import bouquet from "@/assets/product-bouquet.jpg";
import favours from "@/assets/product-favours.jpg";
import personalised from "@/assets/product-personalised.jpg";

export type Category = "fans" | "flowers" | "gifts";

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: "fans", label: "Bridal Fans", blurb: "Hand-beaded fans for the bride and her girls." },
  { id: "flowers", label: "Flowers", blurb: "Bouquets and florals styled to your palette." },
  { id: "gifts", label: "Bridesmaid Gifts", blurb: "Proposal boxes, favours and keepsakes." },
];

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "pearl-beaded-hand-fan",
    name: "Pearl Beaded Hand Fan",
    category: "fans",
    price: 450,
    image: fans,
    description:
      "Ivory silk fan hand-beaded with freshwater pearls on a gilded bamboo frame — our signature bridal piece.",
    details: ["Hand-beaded pearl detail", "Gilded bamboo ribs", "Made to order in 7–10 days"],
  },
  {
    slug: "blush-bridesmaid-fan-set",
    name: "Blush Bridesmaid Fan Set",
    category: "fans",
    price: 1650,
    image: fans,
    description:
      "A set of five blush and champagne fans, colour-matched to your bridal party palette.",
    details: ["Set of five fans", "Custom colour matching", "Optional monogrammed tassels"],
  },
  {
    slug: "champagne-lace-fan",
    name: "Champagne Lace Fan",
    category: "fans",
    price: 520,
    image: fans,
    description: "Delicate corded lace over champagne organza with a hand-knotted silk tassel.",
    details: ["Corded French lace", "Silk tassel", "Presented in a keepsake sleeve"],
  },
  {
    slug: "garden-rose-bridal-bouquet",
    name: "Garden Rose Bridal Bouquet",
    category: "flowers",
    price: 980,
    image: bouquet,
    description:
      "Ivory garden roses, blush ranunculus and soft eucalyptus finished with a long silk ribbon.",
    details: ["Fresh or preserved options", "Silk ribbon wrap", "Delivered morning of the event"],
  },
  {
    slug: "bridesmaid-posy",
    name: "Bridesmaid Posy",
    category: "flowers",
    price: 320,
    image: bouquet,
    description: "A petite posy in your chosen palette — beautiful in the hand and in photos.",
    details: ["Priced per posy", "Palette matched to the bride", "Minimum of two"],
  },
  {
    slug: "reception-centrepiece",
    name: "Reception Centrepiece",
    category: "flowers",
    price: 750,
    image: bouquet,
    description: "Low, candlelit arrangements designed for long tables and round settings alike.",
    details: ["Per table styling", "Candles included", "Setup and breakdown available"],
  },
  {
    slug: "bridesmaid-proposal-box",
    name: "Bridesmaid Proposal Box",
    category: "gifts",
    price: 690,
    image: proposalbox,
    description:
      "A blush keepsake box with satin robe, trinket dish, candle and a hand-lettered card.",
    details: ["Satin robe in your size", "Personalised card", "Ships gift-ready"],
  },
  {
    slug: "engraved-keepsake-set",
    name: "Engraved Keepsake Set",
    category: "gifts",
    price: 540,
    image: personalised,
    description:
      "Velvet jewellery case with an engraved gold plaque and matching pendant for each girl.",
    details: ["Names and date engraved", "Velvet travel case", "Gold-plated pendant"],
  },
  {
    slug: "guest-favour-parcels",
    name: "Guest Favour Parcels",
    category: "gifts",
    price: 45,
    image: favours,
    description: "Ivory and gold favour parcels with calligraphed name tags for every place setting.",
    details: ["Priced per parcel", "Calligraphed tags", "Minimum order of 30"],
  },
  {
    slug: "pearl-hair-comb-set",
    name: "Pearl Hair Comb & Earrings",
    category: "gifts",
    price: 610,
    image: haircomb,
    description: "Gold, pearl and crystal comb paired with drop earrings — a gift she will re-wear.",
    details: ["Comb and two earring pairs", "Gold-tone finish", "Presented in a satin pouch"],
  },
];

export const currency = (amount: number) =>
  `GH₵ ${amount.toLocaleString("en-GH", { minimumFractionDigits: 0 })}`;

export const WHATSAPP_NUMBER = "233201234567";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
