
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { MOCK_REWARDS, MOCK_GIFT_CARDS } from '../data/mockData';
import { GiftIcon, TicketIcon, ChartBarIcon } from '../components/Icons';

const MembersDashboardPage: React.FC = () => {
    const { user } = useAppContext();

    if (!user.isMember) {
        return (
            <div className="container mx-auto px-6 py-20 text-center animate-fade-in">
                <h1 className="text-4xl font-serif font-bold text-brand-gold">Access Denied</h1>
                <p className="text-lg text-stone-300 mt-4">This area is for members only. Please log in to continue.</p>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-light">Welcome, {user.name}</h1>
                <p className="text-xl text-brand-gold mt-2">Your Member Dashboard</p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Rewards Section */}
                    <section className="bg-stone-900/50 p-8 rounded-lg">
                        <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6 flex items-center"><TicketIcon className="h-8 w-8 mr-3"/>Your Rewards</h2>
                        <div className="space-y-4">
                            {MOCK_REWARDS.map(reward => (
                                <div key={reward.id} className="bg-stone-800 p-6 rounded-md flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-light">{reward.title}</h3>
                                        <p className="text-stone-300">{reward.description}</p>
                                    </div>
                                    <button 
                                        disabled={user.points < reward.pointsRequired}
                                        className="px-6 py-2 bg-brand-gold text-brand-dark font-bold rounded-full transition-colors hover:bg-yellow-300 disabled:bg-stone-600 disabled:cursor-not-allowed"
                                    >
                                        {reward.pointsRequired} pts
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gift Cards Section */}
                    <section className="bg-stone-900/50 p-8 rounded-lg">
                        <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6 flex items-center"><GiftIcon className="h-8 w-8 mr-3"/>Purchase Gift Cards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {MOCK_GIFT_CARDS.map(card => (
                                <div key={card.id} className="bg-stone-800 rounded-lg overflow-hidden text-center">
                                    <img src={card.imageUrl} alt={`Gift card ${card.value}`} className="w-full h-32 object-cover" />
                                    <div className="p-4">
                                        <p className="text-2xl font-bold text-brand-light">${card.value}</p>
                                        <button className="mt-4 w-full px-4 py-2 bg-brand-burgundy text-white font-bold rounded-full hover:bg-red-800 transition-colors">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                
                {/* Right Column */}
                <div className="space-y-8">
                    <div className="bg-stone-900/50 p-8 rounded-lg text-center">
                        <p className="text-lg text-stone-300">Your Points Balance</p>
                        <p className="text-6xl font-bold text-brand-gold my-2">{user.points.toLocaleString()}</p>
                        <p className="text-stone-400">Earn more points with every purchase!</p>
                    </div>

                     <div className="bg-stone-900/50 p-8 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4 flex items-center"><ChartBarIcon className="h-7 w-7 mr-3" />Lead Acquisition & Retention</h3>
                        <p className="text-stone-300 mb-4">This automated system provides insights into your purchasing habits to offer personalized recommendations and rewards, ensuring a bespoke experience.</p>
                        <div className="space-y-2 text-sm">
                            <p><span className="font-bold text-brand-light">Status:</span> <span className="text-green-400">Active</span></p>
                            <p><span className="font-bold text-brand-light">Engagement Level:</span> <span className="text-green-400">High</span></p>
                            <p><span className="font-bold text-brand-light">Next Personalized Offer:</span> <span className="text-stone-400">In 2 purchases</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembersDashboardPage;
