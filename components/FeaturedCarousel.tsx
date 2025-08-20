
import React, { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface FeaturedCarouselProps {
    items: Product[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    if (!items || items.length === 0) return null;

    const currentItem = items[currentIndex];

    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <div 
                className="w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item) => (
                    <div key={item.id} className="w-full h-full flex-shrink-0 relative">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                            <div className="max-w-2xl animate-slide-in-bottom">
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-gold">{item.name}</h2>
                                <p className="mt-4 text-lg md:text-xl text-brand-light">{item.description}</p>
                                <button className="mt-8 px-8 py-3 bg-brand-gold text-brand-dark font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors">
                <ChevronLeftIcon className="h-8 w-8" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors">
                <ChevronRightIcon className="h-8 w-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'bg-brand-gold w-6' : 'bg-white/50'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCarousel;
