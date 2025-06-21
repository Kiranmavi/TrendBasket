'use client';

import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { items, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Button asChild size="lg">
            <Link href="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/products" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{getTotalPrice() > 50 ? 'Free' : '$9.99'}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>
                  ${(getTotalPrice() + (getTotalPrice() > 50 ? 0 : 9.99) + getTotalPrice() * 0.08).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                <Link href="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>

            {getTotalPrice() < 50 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  Add ${(50 - getTotalPrice()).toFixed(2)} more to get free shipping!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}