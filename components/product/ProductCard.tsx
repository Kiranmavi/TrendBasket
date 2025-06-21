'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Eye, Zap } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import useProductStore from '@/store/product';
import Router, { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { setSelectedId,selectedId } = useProductStore();
  const router=useRouter()
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setSelectedId(product.id);
  };

  const handleInnerPage=(e:React.MouseEvent)=>{
    e.preventDefault();
    setSelectedId(product.id);
    router.push('/products/detail')
  }

 
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      {/* <Link href={`${selectedId !== null ? `products/detail`:``}`}> */}
        <div onClick={handleInnerPage} className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square rounded-t-3xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay Effects */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.originalPrice && (
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse-glow">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            )}
            {product.featured && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                ⭐ Featured
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleLike}
              className={`w-10 h-10 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Add Button */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="morph-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
      {/* </Link> */}

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          {product.inStock ? (
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Title */}
        {/* <Link href={`/products/detail`}> */}
          <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300" onClick={handleInnerPage}>
            {product.name}
          </h3>
        {/* </Link> */}

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-colors duration-200 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2 font-medium">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full morph-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>

      {/* Shimmer Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
        isHovered ? 'translate-x-full' : '-translate-x-full'
      }`} />
    </div>
  );
}