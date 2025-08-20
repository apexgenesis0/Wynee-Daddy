
import type { Product, User, Reward, GiftCard } from '../types';

export const MOCK_PRODUCTS: Product[] = [
    { id: 'wine-01', name: 'Celestial Reserve Cabernet', description: 'A bold, full-bodied cabernet with notes of dark cherry, vanilla, and toasted oak. Aged 24 months in French oak barrels.', price: 120.00, category: 'Wine', imageUrl: 'https://picsum.photos/seed/wine01/600/800', featured: true, stock: 50 },
    { id: 'wine-02', name: 'Golden Slopes Chardonnay', description: 'Crisp and buttery, this chardonnay offers flavors of green apple, pear, and a hint of citrus.', price: 75.00, category: 'Wine', imageUrl: 'https://picsum.photos/seed/wine02/600/800', stock: 80 },
    { id: 'spirit-01', name: 'Aether Single Malt Scotch', description: 'Aged 18 years in sherry casks, this scotch is exceptionally smooth with notes of heather, honey, and spice.', price: 250.00, category: 'Spirits', imageUrl: 'https://picsum.photos/seed/spirit01/600/800', featured: true, stock: 30 },
    { id: 'gourmet-01', name: 'Artisanal Truffle Collection', description: 'A curated selection of hand-crafted dark and milk chocolate truffles, perfect for pairing.', price: 45.00, category: 'Gourmet', imageUrl: 'https://picsum.photos/seed/gourmet01/600/800', stock: 120 },
    { id: 'accessory-01', name: 'Elegance Crystal Decanter', description: 'Lead-free crystal decanter, designed to aerate your wine and unlock its full potential. A statement piece for any collection.', price: 150.00, category: 'Accessories', imageUrl: 'https://picsum.photos/seed/accessory01/600/800', stock: 60 },
    { id: 'wine-03', name: 'Serenity Rosé', description: 'A delicate and refreshing rosé with hints of strawberry, watermelon, and a crisp, dry finish.', price: 40.00, category: 'Wine', imageUrl: 'https://picsum.photos/seed/wine03/600/800', stock: 150 },
    { id: 'spirit-02', name: 'Oracle Botanical Gin', description: 'A complex and aromatic gin infused with 12 exotic botanicals, including juniper, coriander, and elderflower.', price: 65.00, category: 'Spirits', imageUrl: 'https://picsum.photos/seed/spirit02/600/800', featured: true, stock: 90 },
    { id: 'gourmet-02', name: 'Aged Balsamic Vinegar', description: 'Imported from Modena, Italy. Aged for 25 years, this balsamic is thick, sweet, and perfect for finishing dishes.', price: 90.00, category: 'Gourmet', imageUrl: 'https://picsum.photos/seed/gourmet02/600/800', stock: 40 },
];

export const MOCK_USER_GUEST: User = {
    id: 'guest',
    name: 'Guest',
    isMember: false,
    points: 0,
};

export const MOCK_USER_MEMBER: User = {
    id: 'user-01',
    name: 'Alex Mercer',
    isMember: true,
    points: 8500,
};

export const MOCK_REWARDS: Reward[] = [
    { id: 'reward-01', title: '$25 Off Coupon', description: 'Enjoy $25 off your next purchase of $100 or more.', pointsRequired: 2500 },
    { id: 'reward-02', title: 'Free Bottle of Serenity Rosé', description: 'Redeem your points for a complimentary bottle of our finest rosé.', pointsRequired: 4000 },
    { id: 'reward-03', title: 'Private Tasting Experience', description: 'A guided tasting session for two with our master sommelier.', pointsRequired: 10000 },
];

export const MOCK_GIFT_CARDS: GiftCard[] = [
    { id: 'gc-50', value: 50, price: 50, imageUrl: 'https://picsum.photos/seed/gc50/400/250' },
    { id: 'gc-100', value: 100, price: 100, imageUrl: 'https://picsum.photos/seed/gc100/400/250' },
    { id: 'gc-250', value: 250, price: 250, imageUrl: 'https://picsum.photos/seed/gc250/400/250' },
];
