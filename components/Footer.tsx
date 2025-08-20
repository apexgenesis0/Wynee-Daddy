
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/50 mt-16 py-8">
            <div className="container mx-auto px-6 text-center text-stone-400">
                <p>&copy; {new Date().getFullYear()} Wynee Daddy. All Rights Reserved.</p>
                <p className="text-sm mt-2">Experience tranquility in every sip.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">X</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
