
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Page } from '../types';
import CheckoutAssistant from '../components/CheckoutAssistant';
import { TrashIcon } from '../components/Icons';

const CheckoutPage: React.FC = () => {
    const { cart, removeFromCart, updateCartQuantity, cartTotal, setCurrentPage } = useAppContext();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-6 py-20 text-center animate-fade-in">
                <h1 className="text-4xl font-serif font-bold text-brand-gold">Your Cart is Empty</h1>
                <p className="text-lg text-stone-300 mt-4">Explore our collection to find something special.</p>
                <button 
                    onClick={() => setCurrentPage(Page.STORE)}
                    className="mt-8 px-10 py-3 bg-brand-gold text-brand-dark font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                    Go to Store
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-serif font-bold text-brand-light">Checkout</h1>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    {/* Cart Summary */}
                    <div className="bg-stone-900/50 p-8 rounded-lg mb-8">
                        <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            {cart.map(item => (
                                <div key={item.product.id} className="flex items-center justify-between border-b border-stone-700 pb-4">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.product.imageUrl} alt={item.product.name} className="h-20 w-20 object-cover rounded-md" />
                                        <div>
                                            <h3 className="text-lg font-bold text-brand-light">{item.product.name}</h3>
                                            <p className="text-stone-400">${item.product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateCartQuantity(item.product.id, parseInt(e.target.value))}
                                            min="1"
                                            className="w-16 bg-stone-800 border border-stone-600 rounded-md py-1 px-2 text-center"
                                        />
                                        <p className="text-lg w-24 text-right font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(item.product.id)} className="text-stone-500 hover:text-red-500 transition-colors">
                                            <TrashIcon className="h-6 w-6" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-right mt-6">
                            <p className="text-2xl font-bold">Total: <span className="text-brand-gold">${cartTotal.toFixed(2)}</span></p>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="bg-stone-900/50 p-8 rounded-lg">
                        <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">Payment & Shipping</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <input type="text" placeholder="Full Name" className="p-3 bg-stone-800 border border-stone-600 rounded-md focus:ring-brand-gold focus:outline-none focus:ring-2" />
                           <input type="email" placeholder="Email Address" className="p-3 bg-stone-800 border border-stone-600 rounded-md focus:ring-brand-gold focus:outline-none focus:ring-2" />
                           <input type="text" placeholder="Shipping Address" className="md:col-span-2 p-3 bg-stone-800 border border-stone-600 rounded-md focus:ring-brand-gold focus:outline-none focus:ring-2" />
                           <input type="text" placeholder="Card Number" className="p-3 bg-stone-800 border border-stone-600 rounded-md focus:ring-brand-gold focus:outline-none focus:ring-2" />
                           <div className="flex space-x-4">
                               <input type="text" placeholder="MM/YY" className="w-1/2 p-3 bg-stone-800 border border-stone-600 rounded-md focus:ring-brand-gold focus:outline-none focus:ring-2" />
                               <input type="text" placeholder="CVC" className="w-1/2 p-3 bg-stone-800 border border-stone-600 rounded-md focus:ring-brand-gold focus:outline-none focus:ring-2" />
                           </div>
                           <button type="submit" className="md:col-span-2 w-full py-4 bg-brand-gold text-brand-dark font-bold text-lg rounded-md hover:bg-yellow-300 transition-colors">
                               Place Order
                           </button>
                        </form>
                    </div>

                </div>
                <div className="lg:col-span-1">
                   <CheckoutAssistant />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
