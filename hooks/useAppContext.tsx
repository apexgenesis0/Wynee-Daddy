import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { Page } from '../types';
import type { User, CartItem, Product } from '../types';
import { MOCK_USER_GUEST, MOCK_USER_MEMBER } from '../data/mockData';

interface AppContextType {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    user: User;
    login: () => void;
    logout: () => void;
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    updateCartQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
    const [user, setUser] = useState<User>(MOCK_USER_GUEST);
    const [cart, setCart] = useState<CartItem[]>([]);

    const login = useCallback(() => {
        setUser(MOCK_USER_MEMBER);
        setCurrentPage(Page.MEMBERS);
    }, []);

    const logout = useCallback(() => {
        setUser(MOCK_USER_GUEST);
        setCurrentPage(Page.HOME);
    }, []);

    const addToCart = useCallback((product: Product, quantity: number) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { product, quantity }];
        });
    }, []);

    const removeFromCart = useCallback((productId: string) => {
        setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    }, []);

    const updateCartQuantity = useCallback((productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.product.id === productId ? { ...item, quantity } : item
                )
            );
        }
    }, [removeFromCart]);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    const value = {
        currentPage,
        setCurrentPage,
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
