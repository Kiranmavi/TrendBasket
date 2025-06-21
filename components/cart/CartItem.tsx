'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="relative w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{item.product.name}</h3>
        <p className="text-sm text-gray-500">{item.product.category}</p>
        <p className="text-lg font-semibold text-gray-900">${item.product.price}</p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          className="h-8 w-8 p-0"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="h-8 w-8 p-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-900">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => removeFromCart(item.product.id)}
          className="text-red-600 hover:text-red-700 p-1 mt-1"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}