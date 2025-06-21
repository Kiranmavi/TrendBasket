'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-2xl px-4 py-2 rounded-xl inline-block animate-pulse-glow">
                TrendBasket
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Your premium destination for cutting-edge products. We bring you the latest trends and highest quality items at competitive prices, with exceptional customer service.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="morph-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                { icon: Mail, href: '#', color: 'hover:text-green-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'Categories', href: '/products' },
                { name: 'About Us', href: '#' },
                { name: 'Contact', href: '#' },
                { name: 'Blog', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Customer Service</h3>
            <ul className="space-y-3 mb-6">
              {[
                { name: 'Help Center', href: '#' },
                { name: 'Returns & Exchanges', href: '#' },
                { name: 'Shipping Info', href: '#' },
                { name: 'Track Your Order', href: '#' },
                { name: 'Size Guide', href: '#' },
                { name: 'FAQ', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-green-400" />
                <span>support@TrendBasket.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-red-400" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center text-gray-300">
              <span>© 2024 TrendBasket. Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-400 animate-pulse" />
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Accessibility',
                'Sitemap'
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}