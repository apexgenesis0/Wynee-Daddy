
import React from 'react';
import { AppProvider, useAppContext } from './hooks/useAppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import MembersDashboardPage from './pages/MembersDashboardPage';
import CheckoutPage from './pages/CheckoutPage';
import MusicPlayer from './components/MusicPlayer';
import { Page } from './types';

const PageRenderer: React.FC = () => {
    const { currentPage } = useAppContext();

    switch (currentPage) {
        case Page.HOME:
            return <HomePage />;
        case Page.STORE:
            return <StorePage />;
        case Page.MEMBERS:
            return <MembersDashboardPage />;
        case Page.CHECKOUT:
            return <CheckoutPage />;
        default:
            return <HomePage />;
    }
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <div className="flex flex-col min-h-screen bg-brand-dark">
                <Header />
                <main className="flex-grow">
                    <PageRenderer />
                </main>
                <Footer />
                <MusicPlayer />
            </div>
        </AppProvider>
    );
};

export default App;
