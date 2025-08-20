
import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { getCheckoutHelp } from '../services/geminiService';
import type { ChatMessage } from '../types';
import { PaperAirplaneIcon, SparklesIcon } from './Icons';

const CheckoutAssistant: React.FC = () => {
    const { cart } = useAppContext();
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: 'ai', text: "Welcome! I'm your personal checkout assistant. How can I help you today? Feel free to ask about wine pairings, gift options, or promotions." }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const aiResponse = await getCheckoutHelp(userInput, cart);
            setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
        } catch (error) {
            setMessages([...newMessages, { sender: 'ai', text: "I'm having trouble connecting right now. Please try again in a moment." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-stone-900/70 rounded-lg p-6 border border-stone-700 h-full flex flex-col">
            <div className="flex items-center mb-4">
                <SparklesIcon className="h-6 w-6 text-brand-gold mr-2" />
                <h3 className="text-xl font-serif font-bold text-brand-light">AI Checkout Assistant</h3>
            </div>
            <div className="flex-grow overflow-y-auto pr-2 space-y-4 mb-4 h-64">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 font-bold text-brand-dark">A</div>}
                        <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-brand-burgundy text-white rounded-br-none' : 'bg-stone-800 text-stone-300 rounded-bl-none'}`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                         <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 font-bold text-brand-dark">A</div>
                         <div className="px-4 py-3 rounded-2xl bg-stone-800 text-stone-300 rounded-bl-none">
                            <div className="flex items-center space-x-1">
                                <span className="h-2 w-2 bg-stone-500 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-stone-500 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-stone-500 rounded-full animate-pulse"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2 border-t border-stone-700 pt-4">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask for assistance..."
                    className="w-full bg-stone-800 border border-stone-600 rounded-full py-2 px-4 text-white placeholder-stone-400 focus:ring-2 focus:ring-brand-gold focus:outline-none"
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading} className="bg-brand-gold p-3 rounded-full text-brand-dark disabled:bg-stone-500 transition-colors">
                    <PaperAirplaneIcon className="h-5 w-5" />
                </button>
            </form>
        </div>
    );
};

export default CheckoutAssistant;
