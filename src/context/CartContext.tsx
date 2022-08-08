/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { Product } from 'src/types';

export type ICartContext = {
  cart: any[];
  addToCart: (product: Product) => typeof product | void;
};

interface ICartProvider {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartItems = window.localStorage.getItem('PokeStore:Cart');
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevState) => {
      let quantity = 0;

      if (prevState[product?.id]) {
        quantity = prevState[product?.id]?.quantity || 1;
      }

      const cartItems = {
        ...prevState,
        [product?.id]: {
          ...product,
          quantity: quantity + 1,
        },
      };

      window.localStorage.setItem('PokeStore:Cart', JSON.stringify(cartItems));
      return cartItems;
    });
  };

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, addToCart } = useContext(CartContext);

  if (!cart || !addToCart) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return {
    cart,
    addToCart,
  };
};
