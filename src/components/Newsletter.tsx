import { useState } from "react";
import { Mail, Send, Star, Gift, Users, Zap } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    {
      icon: Star,
      title: "Exclusive Drops",
      description: "First access to limited edition releases",
    },
    {
      icon: Gift,
      title: "Member Discounts",
      description: "15% off your first order + special promotions",
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Invites to MSK meetups and cultural events",
    },
    {
      icon: Zap,
      title: "Behind the Scenes",
      description: "Exclusive content from Reggie and the team",
    },
  ];

  return (
    <section
      id="newsletter"
      className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm font-bold backdrop-blur-sm">
                JOIN THE MOVEMENT
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Become{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Ma se Kind
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Join our family of over 1,000 proud South Africans. Get
                exclusive access to new drops, cultural stories, and community
                events.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Stay Connected
              </h3>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-20 rounded-xl text-white placeholder-gray-400 border border-white border-opacity-30 focus:border-white focus:outline-none backdrop-blur-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5" />
                    <span>JOIN THE FAMILY</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Welcome to the Family!
                  </h3>
                  <p className="text-gray-300">
                    Check your email for your welcome gift.
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-400 text-center mt-4">
                By subscribing, you agree to receive marketing emails.
                Unsubscribe anytime.
              </p>
            </div>

            {/* Brand Ambassador CTA */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">
                Become a Brand Ambassador
              </h3>
              <p className="text-gray-300 mb-4">
                Represent MSK in your community. Earn commissions, get free
                gear, and help spread the Ma se Kind message.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                APPLY NOW
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">
              Member Benefits
            </h3>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}

            {/* Social Proof */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-300">+995 others</span>
              </div>
              <p className="text-white font-bold">1,000+ proud members</p>
              <p className="text-gray-400 text-sm">
                Join the exclusive MSK community
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-white mb-3 italic">
                "Being part of the MSK family means everything. The exclusive
                drops, the community events, the cultural pride - it's more than
                just a newsletter."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-sm font-bold">
                  T
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Thabo M.</div>
                  <div className="text-gray-400 text-xs">Member since 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
