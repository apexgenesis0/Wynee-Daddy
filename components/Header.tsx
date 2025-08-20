
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Page } from '../types';
import { WineGlassIcon, UserCircleIcon, ShoppingCartIcon, ArrowRightOnRectangleIcon } from './Icons';

const Header: React.FC = () => {
    const { currentPage, setCurrentPage, user, cart, login, logout } = useAppContext();
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    const navLinkClasses = (page: Page) => 
        `transition-colors duration-300 hover:text-brand-gold ${currentPage === page ? 'text-brand-gold' : 'text-brand-light'}`;

    return (
        <header className="bg-brand-dark/80 backdrop-blur-md sticky top-0 z-50 animate-fade-in shadow-lg shadow-black/20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div 
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setCurrentPage(Page.HOME)}
                >
                    <WineGlassIcon className="h-8 w-8 text-brand-gold" />
                    <h1 className="text-3xl font-serif font-bold text-brand-light tracking-wider">
                        Wynee Daddy
                    </h1>
                </div>
                <nav className="hidden md:flex items-center space-x-8 text-lg">
                    <button onClick={() => setCurrentPage(Page.HOME)} className={navLinkClasses(Page.HOME)}>Home</button>
                    <button onClick={() => setCurrentPage(Page.STORE)} className={navLinkClasses(Page.STORE)}>Store</button>
                    {user.isMember && (
                        <button onClick={() => setCurrentPage(Page.MEMBERS)} className={navLinkClasses(Page.MEMBERS)}>Members</button>
                    )}
                </nav>
                <div className="flex items-center space-x-6">
                    {user.isMember ? (
                        <div className="flex items-center space-x-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm">{user.name}</p>
                                <p className="text-xs text-brand-gold">{user.points} points</p>
                            </div>
                             <UserCircleIcon className="h-8 w-8 text-brand-light" />
                             <button onClick={logout} title="Logout" className="transition-transform hover:scale-110">
                                <ArrowRightOnRectangleIcon className="h-7 w-7 text-brand-light hover:text-brand-gold"/>
                             </button>
                        </div>
                    ) : (
                        <button onClick={login} className="text-lg transition-colors duration-300 hover:text-brand-gold">
                            Member Login
                        </button>
                    )}
                    <button onClick={() => setCurrentPage(Page.CHECKOUT)} className="relative transition-transform hover:scale-110">
                        <ShoppingCartIcon className="h-8 w-8 text-brand-light" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
