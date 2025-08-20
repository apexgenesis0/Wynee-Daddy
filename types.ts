
export enum Page {
    HOME = 'HOME',
    STORE = 'STORE',
    MEMBERS = 'MEMBERS',
    CHECKOUT = 'CHECKOUT',
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Wine' | 'Spirits' | 'Gourmet' | 'Accessories';
    imageUrl: string;
    featured?: boolean;
    stock: number;
}

export interface User {
    id: string;
    name: string;
    isMember: boolean;
    points: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Reward {
    id: string;
    title: string;
    description: string;
    pointsRequired: number;
}

export interface GiftCard {
    id: string;
    value: number;
    price: number;
    imageUrl: string;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
