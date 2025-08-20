
import React from 'react';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useAppContext } from '../hooks/useAppContext';
import { Page } from '../types';

const HomePage: React.FC = () => {
    const featuredItems = MOCK_PRODUCTS.filter(p => p.featured);
    const { setCurrentPage, login, user } = useAppContext();

    return (
        <div className="animate-fade-in">
            <FeaturedCarousel items={featuredItems} />

            <section className="py-16 md:py-24 bg-brand-dark">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">The Wynee Daddy Experience</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-stone-300">
                        We are more than a store; we are purveyors of taste, curators of elegance, and your partners in creating unforgettable moments. Explore our world-class collection of fine wines, rare spirits, and gourmet delights.
                    </p>
                    <button 
                        onClick={() => setCurrentPage(Page.STORE)}
                        className="mt-8 px-10 py-3 bg-transparent border-2 border-brand-gold text-brand-gold font-bold text-lg rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105"
                    >
                        Explore The Collection
                    </button>
                </div>
            </section>
            
            {!user.isMember && (
            <section className="bg-stone-900/50 py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold">Become a Member</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-stone-300">
                        Join our exclusive membership to unlock a world of rewards. Earn points on every purchase, access members-only products, and receive personalized recommendations.
                    </p>
                    <button
                        onClick={login}
                        className="mt-8 px-10 py-3 bg-brand-gold text-brand-dark font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                    >
                        Join Now
                    </button>
                </div>
            </section>
            )}

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-brand-light mb-12">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
                            <div className="text-brand-gold mx-auto mb-4 h-16 w-16 flex items-center justify-center text-4xl">❖</div>
                            <h3 className="text-xl font-bold font-serif mb-2">Expert Curation</h3>
                            <p className="text-stone-300">Our sommeliers travel the globe to hand-select every bottle, ensuring unparalleled quality and rarity.</p>
                        </div>
                         <div className="animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
                            <div className="text-brand-gold mx-auto mb-4 h-16 w-16 flex items-center justify-center text-4xl">❖</div>
                            <h3 className="text-xl font-bold font-serif mb-2">Harmonious Service</h3>
                            <p className="text-stone-300">From AI-powered assistance to our dedicated support team, your experience is our top priority.</p>
                        </div>
                         <div className="animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
                             <div className="text-brand-gold mx-auto mb-4 h-16 w-16 flex items-center justify-center text-4xl">❖</div>
                            <h3 className="text-xl font-bold font-serif mb-2">Exclusive Rewards</h3>
                            <p className="text-stone-300">Our loyalty program is designed to delight, offering points, gifts, and unique experiences.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
