import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-bold">
                OUR STORY
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                Born from <span className="text-gray-600">Township</span> Pride
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded by Reggie Philander, MSK Productions emerged from the heart of South African township culture.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                What started as a vision to celebrate our cultural identity has grown into a movement. 
                MSK Productions isn't just about clothing – it's about belonging, unity, and pride in who we are.
              </p>
              
              <p className="text-lg">
                Every design tells a story of resilience, community, and the vibrant spirit of South African 
                street culture. We create premium streetwear that honors our heritage while embracing modern style.
              </p>
              
              <p className="text-lg font-semibold text-black">
                "Ma se Kind" – because we're more than customers, we're family.
              </p>
            </div>

            {/* Founder highlight */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-black">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  RP
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">Reggie Philander</h3>
                  <p className="text-gray-600 font-medium">Founder & Creative Director</p>
                  <p className="text-gray-700 mt-2 italic">
                    "I wanted to create something that represents us – our struggles, our victories, our culture. 
                    MSK is that representation."
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-black">Authentic</h3>
                <p className="text-sm text-gray-600">Real culture, real stories</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-black">Community</h3>
                <p className="text-sm text-gray-600">Built by us, for us</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-black">Premium</h3>
                <p className="text-sm text-gray-600">Quality without compromise</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-black rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">2019</div>
                  <p className="text-gray-300">Year Founded</p>
                </div>
                
                <div className="border-t border-gray-700 pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Designs Created</span>
                    <span className="font-bold text-2xl">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Happy Customers</span>
                    <span className="font-bold text-2xl">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Community Members</span>
                    <span className="font-bold text-2xl">1K+</span>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                  <p className="font-bold text-lg">Our Mission</p>
                  <p className="text-sm text-gray-300 mt-2">
                    To celebrate South African culture through premium streetwear that brings communities together.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-300 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;