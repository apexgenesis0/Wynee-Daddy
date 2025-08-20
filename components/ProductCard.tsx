
import React, { useState } from 'react';
import type { Product } from '../types';
import { useAppContext } from '../hooks/useAppContext';
import { PlusIcon } from './Icons';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useAppContext();
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <div 
            className="bg-stone-900/50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-96">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-100'}`}></div>
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h3 className="text-2xl font-serif font-bold text-brand-gold">{product.name}</h3>
                    <p className="text-lg font-semibold text-brand-light">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isHovered ? 'max-h-60' : 'max-h-0'}`}>
                <div className="p-6 pt-4">
                    <p className="text-stone-300 mb-4">{product.description}</p>
                    <button 
                        onClick={handleAddToCart}
                        className="w-full flex items-center justify-center py-3 px-4 bg-brand-gold text-brand-dark font-bold rounded-md hover:bg-yellow-300 transition-colors duration-300"
                    >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
