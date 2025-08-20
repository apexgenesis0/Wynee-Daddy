
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { CartItem } from '../types';

// Assume API_KEY is set in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll log an error.
  console.error("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getCheckoutHelp = async (query: string, cart: CartItem[]): Promise<string> => {
    if (!API_KEY) {
        return "I am currently unable to connect. Please try again later.";
    }
    
    const cartDetails = cart.map(item => `- ${item.quantity}x ${item.product.name}`).join('\n');

    const prompt = `
        You are an elegant, helpful, and sophisticated AI shopping assistant for 'Wynee Daddy', a luxury wine and spirits store. 
        A customer is at the checkout page and needs assistance.
        
        Their current cart contains:
        ${cartDetails}

        The customer's query is: "${query}"

        Please provide a concise, friendly, and helpful response. If they ask for a pairing, suggest one based on their cart items. If they ask about discounts, mention the store's rewards program for members. If it's a general query, be as helpful as possible within the context of a luxury store.
    `;

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });
        
        return response.text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return "I'm sorry, I encountered an issue while processing your request. Please try again.";
    }
};
