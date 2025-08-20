
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data/mockData';
import type { Product } from '../types';

type Category = 'All' | 'Wine' | 'Spirits' | 'Gourmet' | 'Accessories';

const StorePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') {
            return MOCK_PRODUCTS;
        }
        return MOCK_PRODUCTS.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const categories: Category[] = ['All', 'Wine', 'Spirits', 'Gourmet', 'Accessories'];

    const categoryButtonClasses = (category: Category) => 
        `px-6 py-2 rounded-full transition-all duration-300 text-lg ${
            selectedCategory === category 
                ? 'bg-brand-gold text-brand-dark font-bold' 
                : 'bg-stone-800 text-brand-light hover:bg-stone-700'
        }`;

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-serif font-bold text-brand-light">Our Collection</h1>
                <p className="text-lg text-stone-300 mt-2">Discover a world of exquisite taste and craftsmanship.</p>
            </header>

            <div className="flex justify-center flex-wrap gap-4 mb-12">
                {categories.map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={categoryButtonClasses(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default StorePage;
