const products = [
  {
    id: 1,
    name: "Goose Decoy",
    category: "Decoys",
    description: "High-quality realistic goose decoy for hunting. Lifelike appearance with detailed feather patterns. Durable construction for long-lasting use in various weather conditions.",
    price: "Contact for Price",
    image: "/images/图片1.jpg",
    features: ["Realistic design", "Weather resistant", "Lightweight", "Easy to carry"]
  },
  {
    id: 2,
    name: "Swan Decoy",
    category: "Decoys",
    description: "Premium swan decoy with realistic appearance. Perfect for attracting waterfowl. Made from high-quality materials for durability.",
    price: "Contact for Price",
    image: "/images/图片2.jpg",
    features: ["Lifelike appearance", "Durable material", "UV resistant", "Floating design"]
  },
  {
    id: 3,
    name: "Duck Decoy Set",
    category: "Decoys",
    description: "Professional duck decoy set featuring multiple poses. Excellent for waterfowl hunting with realistic coloring and details.",
    price: "Contact for Price",
    image: "/images/图片3.jpg",
    features: ["Multiple poses", "Realistic colors", "Weighted keel", "Tangle-free rigging"]
  },
  {
    id: 4,
    name: "Flocked Duck Decoy",
    category: "Decoys",
    description: "Flocked surface duck decoy that eliminates glare. Superior realism with soft-touch finish that mimics real feathers.",
    price: "Contact for Price",
    image: "/images/图片4.jpg",
    features: ["Flocked finish", "No glare", "Realistic texture", "Premium quality"]
  },
  {
    id: 5,
    name: "Garden Owl Decoration",
    category: "Garden Decoration",
    description: "Decorative owl statue for garden and outdoor spaces. Also functions as a natural bird deterrent. Hand-painted details.",
    price: "Contact for Price",
    image: "/images/图片5.png",
    features: ["Hand-painted", "Weather resistant", "Bird deterrent", "Realistic design"]
  },
  {
    id: 6,
    name: "Garden Crow Decoration",
    category: "Garden Decoration",
    description: "Realistic crow decoration for gardens. Durable construction suitable for outdoor use year-round.",
    price: "Contact for Price",
    image: "/images/图片6.png",
    features: ["Lifelike appearance", "Durable material", "Easy installation", "All-season use"]
  },
  {
    id: 7,
    name: "Hunting Backpack",
    category: "Hunting Bags",
    description: "Large capacity hunting backpack with multiple compartments. Camouflage pattern with comfortable padded straps.",
    price: "Contact for Price",
    image: "/images/图片7.jpg",
    features: ["Large capacity", "Multiple pockets", "Padded straps", "Camo pattern"]
  },
  {
    id: 8,
    name: "Decoy Bag",
    category: "Hunting Bags",
    description: "Spacious mesh decoy bag for easy transport. Allows decoys to dry while stored. Heavy-duty construction.",
    price: "Contact for Price",
    image: "/images/图片8.jpg",
    features: ["Mesh design", "Quick drying", "Heavy duty", "Large capacity"]
  },
  {
    id: 9,
    name: "Camo Hunting Blind",
    category: "Camo Blinds",
    description: "Portable camouflage hunting blind with 360-degree coverage. Quick setup design with durable frame.",
    price: "Contact for Price",
    image: "/images/图片11.jpg",
    features: ["360° coverage", "Quick setup", "Portable", "Durable frame"]
  },
  {
    id: 10,
    name: "Ground Blind",
    category: "Camo Blinds",
    description: "Low-profile ground blind for hunting. Features realistic leaf pattern camouflage and silent zipper system.",
    price: "Contact for Price",
    image: "/images/图片12.png",
    features: ["Low profile", "Silent zippers", "Leaf pattern", "Weather resistant"]
  },
  {
    id: 11,
    name: "Ghillie Suit - Woodland",
    category: "Ghillie Suits",
    description: "Professional woodland ghillie suit for ultimate concealment. Lightweight and breathable design for extended wear.",
    price: "Contact for Price",
    image: "/images/图片13.jpg",
    features: ["Full coverage", "Breathable", "Lightweight", "Woodland pattern"]
  },
  {
    id: 12,
    name: "Tree Stand",
    category: "Tree Stands",
    description: "Sturdy climbing tree stand with comfortable seat. Safety harness included. Supports up to 300 lbs.",
    price: "Contact for Price",
    image: "/images/图片15.jpg",
    features: ["300 lb capacity", "Safety harness", "Comfortable seat", "Quiet operation"]
  },
  {
    id: 13,
    name: "Camping Tent",
    category: "Camping Products",
    description: "Waterproof camping tent for outdoor adventures. Easy setup with durable poles and rainfly included.",
    price: "Contact for Price",
    image: "/images/图片16.jpg",
    features: ["Waterproof", "Easy setup", "Durable poles", "Rainfly included"]
  },
  {
    id: 14,
    name: "Military Canteen",
    category: "Camping Products",
    description: "Military-style canteen with cup and cover. Durable construction for outdoor use. BPA-free materials.",
    price: "Contact for Price",
    image: "/images/图片17.jpg",
    features: ["BPA-free", "With cup", "Durable", "Military style"]
  },
  {
    id: 15,
    name: "Mess Kit",
    category: "Camping Products",
    description: "Compact mess kit for camping and outdoor cooking. Includes pot, pan, and utensils. Lightweight aluminum construction.",
    price: "Contact for Price",
    image: "/images/图片18.jpg",
    features: ["Complete set", "Lightweight", "Compact", "Easy clean"]
  },
  {
    id: 16,
    name: "Archery Target",
    category: "Targets",
    description: "High-density foam archery target. Self-healing design for extended life. Suitable for broadheads and field points.",
    price: "Contact for Price",
    image: "/images/图片19.png",
    features: ["Self-healing", "High density", "Long lasting", "Easy arrow removal"]
  },
  {
    id: 17,
    name: "Shooting Target Stand",
    category: "Targets",
    description: "Portable shooting target stand with adjustable height. Sturdy steel construction with easy assembly.",
    price: "Contact for Price",
    image: "/images/图片20.jpg",
    features: ["Adjustable", "Portable", "Steel frame", "Easy assembly"]
  },
  {
    id: 18,
    name: "Electronic Owl Decoy",
    category: "Bird Repelling",
    description: "Electronic owl decoy with sound and motion. Effective bird deterrent for gardens and farms. Solar powered.",
    price: "Contact for Price",
    image: "/images/图片21.png",
    features: ["Solar powered", "Motion sensor", "Sound effects", "Weatherproof"]
  },
  {
    id: 19,
    name: "Pet Carrier Bag",
    category: "Pet Products",
    description: "Comfortable pet carrier bag for small animals. Breathable mesh panels with secure zipper closure.",
    price: "Contact for Price",
    image: "/images/图片22.png",
    features: ["Breathable mesh", "Secure closure", "Comfortable", "Easy carry"]
  },
  {
    id: 20,
    name: "Fishing Pliers",
    category: "Fishing Tools",
    description: "Multi-function fishing pliers with line cutter. Corrosion-resistant stainless steel construction.",
    price: "Contact for Price",
    image: "/images/图片23.jpg",
    features: ["Multi-function", "Stainless steel", "Line cutter", "Corrosion resistant"]
  },
  {
    id: 21,
    name: "Fillet Knife Set",
    category: "Knives",
    description: "Professional fillet knife set for fish processing. Sharp stainless steel blades with ergonomic handles.",
    price: "Contact for Price",
    image: "/images/图片24.png",
    features: ["Sharp blades", "Ergonomic handle", "Stainless steel", "Multiple sizes"]
  },
  {
    id: 22,
    name: "Hunting Knife",
    category: "Knives",
    description: "Fixed blade hunting knife with leather sheath. Full tang construction for durability and strength.",
    price: "Contact for Price",
    image: "/images/图片25.jpg",
    features: ["Full tang", "Leather sheath", "Sharp edge", "Durable"]
  },
  {
    id: 23,
    name: "Cutting Board Set",
    category: "Knives",
    description: "Outdoor cutting board set for meat preparation. Food-grade materials with non-slip base.",
    price: "Contact for Price",
    image: "/images/图片26.png",
    features: ["Food grade", "Non-slip", "Easy clean", "Durable"]
  },
  {
    id: 24,
    name: "BBQ Tongs Set",
    category: "Outdoor Cooking",
    description: "Heavy-duty BBQ tongs set for grilling. Heat-resistant handles with secure grip design.",
    price: "Contact for Price",
    image: "/images/图片27.png",
    features: ["Heat resistant", "Secure grip", "Heavy duty", "Multiple sizes"]
  },
  {
    id: 25,
    name: "Stainless Steel Wine Cup",
    category: "Outdoor Accessories",
    description: "Double-wall insulated stainless steel wine cup. Keeps drinks cold for hours. Perfect for outdoor use.",
    price: "Contact for Price",
    image: "/images/图片28.png",
    features: ["Double wall", "Insulated", "Stainless steel", "Portable"]
  },
  {
    id: 26,
    name: "Bird Repeller Spinner",
    category: "Bird Repelling",
    description: "Reflective bird repeller spinner for gardens. Wind-powered with holographic design to deter birds.",
    price: "Contact for Price",
    image: "/images/图片29.jpg",
    features: ["Wind powered", "Reflective", "No batteries", "Easy install"]
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "🏠" },
  { id: "Decoys", name: "Decoys", icon: "🦆" },
  { id: "Garden Decoration", name: "Garden Decoration", icon: "🌿" },
  { id: "Hunting Bags", name: "Hunting Bags", icon: "🎒" },
  { id: "Camo Blinds", name: "Camo Blinds", icon: "🏕️" },
  { id: "Ghillie Suits", name: "Ghillie Suits", icon: "🌲" },
  { id: "Tree Stands", name: "Tree Stands", icon: "🌳" },
  { id: "Camping Products", name: "Camping Products", icon: "⛺" },
  { id: "Targets", name: "Targets", icon: "🎯" },
  { id: "Bird Repelling", name: "Bird Repelling", icon: "🦉" },
  { id: "Pet Products", name: "Pet Products", icon: "🐕" },
  { id: "Fishing Tools", name: "Fishing Tools", icon: "🎣" },
  { id: "Knives", name: "Knives", icon: "🔪" },
  { id: "Outdoor Cooking", name: "Outdoor Cooking", icon: "🍖" },
  { id: "Outdoor Accessories", name: "Outdoor Accessories", icon: "🏞️" }
];

export default products;
