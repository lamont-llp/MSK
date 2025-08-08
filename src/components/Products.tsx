import { useState } from "react";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import IMAGES from "../assets/Images";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "tshirts", name: "T-Shirts" },
    { id: "caps", name: "Caps" },
    { id: "limited", name: "Limited Edition" },
  ];

  const products = [
    {
      id: 1,
      name: "Ma Se Kind Classic Tee",
      category: "tshirts",
      price: "R290",
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 24,
      badge: "Bestseller",
      colors: ["Black", "White", "Grey"],
    },
    {
      id: 2,
      name: "Ma Se Kind Classic Hoodie",
      category: "limited",
      price: "R390",
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 5.0,
      reviews: 12,
      badge: "Limited",
      colors: ["Black", "Gold"],
    },
    {
      id: 3,
      name: "Ma Se Kind Classic Cap",
      category: "caps",
      price: "R150",
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 18,
      badge: "New",
      colors: ["Black", "White"],
    },
    {
      id: 4,
      name: "MSK Kiddie Tee",
      category: "tshirts",
      price: "R190",
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 31,
      badge: null,
      colors: ["Black", "White", "Grey", "Navy"],
    },
    {
      id: 5,
      name: "Culture Cap Collection",
      category: "caps",
      price: "R249",
      originalPrice: "R299",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 15,
      badge: "Sale",
      colors: ["Black", "White", "Grey"],
    },
    {
      id: 6,
      name: "Founder's Edition Tee",
      category: "limited",
      price: "R499",
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 8,
      badge: "Exclusive",
      colors: ["Black", "White"],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bestseller":
        return "bg-green-500";
      case "New":
        return "bg-blue-500";
      case "Limited":
        return "bg-red-500";
      case "Sale":
        return "bg-orange-500";
      case "Exclusive":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-bold mb-4">
            SHOP COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Premium <span className="text-gray-600">Gear</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Authentic South African designs crafted with premium materials. Each
            piece tells a story of culture, community, and pride.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-black border-2 border-gray-200 hover:border-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-4xl font-black text-gray-400">
                    <img src={IMAGES.tshirtBlack} alt="Logo" />
                  </div>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-bold ${getBadgeColor(
                      product.badge
                    )}`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-black group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">({product.reviews})</span>
                  </div>
                </div>

                {/* Colors */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                          color === "Black"
                            ? "bg-black"
                            : color === "White"
                            ? "bg-white"
                            : color === "Grey"
                            ? "bg-gray-400"
                            : color === "Navy"
                            ? "bg-blue-900"
                            : color === "Gold"
                            ? "bg-yellow-400"
                            : "bg-gray-400"
                        }`}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-black">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
