'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Truck, Shield, Headphones, Star, Zap, Award, Users } from 'lucide-react';
import { products } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const featuredProducts = products.filter(product => product.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-gradient">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-block p-4 glass rounded-2xl mb-6 animate-pulse-glow">
                <ShoppingBag className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white">
              Welcome to
              <span className="block mt-2 gradient-text-blue text-6xl sm:text-7xl lg:text-8xl animate-gradient">
                TrendBasket
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Experience the future of shopping with our premium collection of 
              <span className="text-yellow-400 font-semibold"> cutting-edge products</span> and 
              <span className="text-green-400 font-semibold"> unbeatable prices</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="morph-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Link href="/products">
                  <Zap className="mr-3 h-6 w-6" />
                  Explore Products
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="glass text-white border-white hover:bg-white hover:text-blue-900 text-lg px-12 py-6 rounded-full backdrop-blur-md transform hover:scale-105 transition-all duration-300">
                <Link href="#featured">
                  <Star className="mr-3 h-6 w-6" />
                  View Featured
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '50K+', label: 'Happy Customers' },
              { icon: ShoppingBag, number: '10K+', label: 'Products Sold' },
              { icon: Award, number: '99%', label: 'Satisfaction Rate' },
              { icon: Truck, number: '24/7', label: 'Fast Delivery' }
            ].map((stat, index) => (
              <div key={index} className="text-center stagger-item">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 animate-pulse-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text-blue">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Advanced Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="gradient-text-blue"> TrendBasket?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional service and premium quality products to make your shopping experience extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: 'Lightning Fast Delivery',
                description: 'Free express shipping on all orders over $50. Get your products delivered within 24 hours.',
                color: 'from-blue-500 to-cyan-500',
                delay: '0.1s'
              },
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Your payment information is protected with military-grade encryption and security protocols.',
                color: 'from-green-500 to-emerald-500',
                delay: '0.3s'
              },
              {
                icon: Headphones,
                title: '24/7 Premium Support',
                description: 'Our expert customer support team is always ready to assist you with any questions or concerns.',
                color: 'from-purple-500 to-pink-500',
                delay: '0.5s'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="card-hover bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group"
                style={{animationDelay: feature.delay}}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
                     style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                
                <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{backgroundImage: `linear-gradient(90deg, var(--tw-gradient-stops))`}}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with Enhanced Design */}
      <section id="featured" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Featured 
              <span className="gradient-text-blue"> Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of premium products that combine innovation, quality, and style.
            </p>
          </div>
          
          <div className="mb-12">
            <ProductGrid products={featuredProducts} />
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="morph-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/products">
                <ShoppingBag className="mr-3 h-6 w-6" />
                View All Products
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Glassmorphism */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 opacity-20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-dark p-12 rounded-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Stay in the 
              <span className="gradient-text-blue"> Loop</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and be the first to discover new arrivals, exclusive deals, and insider shopping tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <Button className="morph-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              Join over 50,000 subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}