import { useState } from "react";
import { Play, Pause, Volume2, Heart, Users, Home } from "lucide-react";

const Meaning = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const culturalElements = [
    {
      icon: Heart,
      title: "Love & Belonging",
      description:
        'In South African culture, "Ma se Kind" represents the deep love and care a mother has for her child.',
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "Community Unity",
      description:
        "It signifies being part of something bigger - a community that looks out for each other.",
      color: "bg-blue-500",
    },
    {
      icon: Home,
      title: "Cultural Pride",
      description:
        "Celebrating our heritage and the strength that comes from knowing where you belong.",
      color: "bg-green-500",
    },
  ];

  return (
    <section
      id="meaning"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
            CULTURAL MEANING
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              "Ma se Kind"
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than just words - it's a cultural expression that embodies
            love, belonging, and the unbreakable bonds of community in South
            African culture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Interactive Audio/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <div className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Ma se Kind
                </div>
                <p className="text-gray-300 text-lg">
                  Listen to the pronunciation
                </p>
              </div>

              {/* Audio Player */}
              <div className="bg-black bg-opacity-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </button>

                  <div className="flex-1 mx-4">
                    <div className="bg-gray-700 rounded-full h-2 relative">
                      <div className="bg-white rounded-full h-2 w-1/3 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>

                  <button className="text-white hover:text-gray-300 transition-colors">
                    <Volume2 className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-center text-gray-400 text-sm">
                  Authentic South African pronunciation
                </div>
              </div>

              {/* Phonetic Guide */}
              <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-bold text-white mb-2">Phonetic Guide:</h3>
                <p className="text-gray-300 text-lg font-mono">/mɑː sə kɪnt/</p>
                <p className="text-gray-400 text-sm mt-2">
                  "Mah-se-kind" - with emphasis on the first syllable
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Context */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Cultural Context
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                In Afrikaans and South African culture, "Ma se Kind" literally
                translates to "Mother's Child" - but its meaning runs much
                deeper. It's an expression of endearment, protection, and
                belonging.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When someone calls you "Ma se Kind," they're not just
                acknowledging you as a person - they're embracing you as family,
                as someone who belongs to the community.
              </p>
            </div>

            {/* Cultural Elements */}
            <div className="space-y-4">
              {culturalElements.map((element, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm border border-white border-opacity-10"
                >
                  <div
                    className={`w-12 h-12 ${element.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <element.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {element.title}
                    </h4>
                    <p className="text-gray-300">{element.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center bg-white bg-opacity-5 rounded-2xl p-12 backdrop-blur-sm border border-white border-opacity-10">
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6 italic">
            "When we say 'Ma se Kind,' we're saying you're not just a customer -
            you're family. You belong here, you're protected here, you're loved
            here."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold">
              RP
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Reggie Philander</div>
              <div className="text-gray-400">Founder, MSK Productions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join the Family?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience what it means to be "Ma se Kind" - become part of a
            community that celebrates culture, unity, and authentic South
            African pride.
          </p>
          <button className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <a href="/#products">SHOP THE COLLECTION</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Meaning;
