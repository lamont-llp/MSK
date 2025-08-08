import { Instagram, MessageCircle, Star, Heart, Share2 } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      id: 1,
      name: "Gary M.",
      location: "Johannesburg",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "MSK isn't just clothing - it's identity. When I wear my Ma se Kind tee, I feel connected to my roots and proud of who I am.",
      product: "Ma Se Kind Classic Tee",
      verified: true,
    },
    {
      id: 2,
      name: "Shirley K.",
      location: "Cape Town",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The quality is incredible and the message is powerful. Finally, a brand that represents us authentically.",
      product: "Heritage Collection Tee",
      verified: true,
    },
    {
      id: 3,
      name: "Sipho D.",
      location: "Durban",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Been following MSK since day one. Reggie's vision of unity through fashion is exactly what we needed.",
      product: "Township Pride Cap",
      verified: true,
    },
    {
      id: 4,
      name: "Lerato S.",
      location: "Pretoria",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Every piece tells a story. I love how MSK celebrates our culture while keeping it fresh and modern.",
      product: "Unity MSK Tee",
      verified: true,
    },
  ];

  const socialPosts = [
    {
      id: 1,
      user: "@gary_style",
      image: "/api/placeholder/300/300",
      likes: 234,
      caption: "Representing with my MSK gear! #MaSeKind #SouthAfricanPride",
    },
    {
      id: 2,
      user: "@shirley_fashion",
      image: "/api/placeholder/300/300",
      likes: 189,
      caption: "Quality and culture in every thread 🔥 #MSKProductions",
    },
    {
      id: 3,
      user: "@sipho_streetwear",
      image: "/api/placeholder/300/300",
      likes: 156,
      caption: "More than a brand, it's a movement! #CommunityFirst",
    },
    {
      id: 4,
      user: "@lerato_lifestyle",
      image: "/api/placeholder/300/300",
      likes: 298,
      caption: "Proud to wear my heritage ✊🏾 #AuthenticStyle",
    },
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-bold mb-4">
            COMMUNITY SPOTLIGHT
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Our <span className="text-gray-600">Family</span> Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real stories, real pride. See how MSK Productions
            brings communities together through authentic South African gear.
          </p>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            What Our Family Says
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-black">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Purchased: {testimonial.product}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Feed */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-2">
              Follow the Movement
            </h3>
            <p className="text-gray-600">
              See how our community rocks MSK gear
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-black rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-2xl font-black text-gray-500">MSK</div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm">{post.user}</span>
                    <div className="flex items-center space-x-1 text-sm">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Instagram className="w-5 h-5" />
              <span>Follow @mskproductions</span>
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-black rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Growing Together</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black mb-2">1,000+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">500+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">10+</div>
              <div className="text-gray-400">Unique Designs</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">4.9★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>

        {/* User Generated Content CTA */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-black mb-4">
            Share Your MSK Story
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tag us @mskproductions and use #MaSeKind to be featured in our
            community spotlight. Show the world what it means to be part of the
            family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Share Your Story</span>
            </button>
            <button className="inline-flex items-center space-x-2 border-2 border-black text-black px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
              <span>Tag Us on Instagram</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
