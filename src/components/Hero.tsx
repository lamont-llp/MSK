import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import IMAGES from '../assets/Images';

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${IMAGES.bg})`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm font-medium backdrop-blur-sm border border-white border-opacity-20">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Premium South African Streetwear
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                MA SE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">KIND</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                More Than a Brand
              </p>
              
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Celebrating South African culture through premium streetwear. 
                Unity, belonging, and authentic township pride in every piece.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>SHOP NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>OUR STORY</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400 font-medium">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400 font-medium">South African</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center text-black text-6xl font-black">
                <img src={IMAGES.tshirtBlack} alt="Logo" />
              </div>
              <div className="mt-6 text-center">
                <div className="text-lg font-bold">Premium Collection</div>
                <div className="text-gray-400">Authentic • Bold • Cultural</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;