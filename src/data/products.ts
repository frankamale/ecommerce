export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  category: string;
  subCategory: string;
  brand: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Review {
  id: number;
  productId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// Categories Data
export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Discover the latest gadgets, phones, laptops, and electronic accessories',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200',
    subCategories: [
      { id: 'phones', name: 'Mobile Phones', slug: 'phones' },
      { id: 'laptops', name: 'Laptops & Computers', slug: 'laptops' },
      { id: 'audio', name: 'Audio & Headphones', slug: 'audio' },
      { id: 'cameras', name: 'Cameras', slug: 'cameras' },
      { id: 'accessories', name: 'Accessories', slug: 'accessories' }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trendy clothing, shoes, and accessories for men and women',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200',
    subCategories: [
      { id: 'mens', name: "Men's Clothing", slug: 'mens' },
      { id: 'womens', name: "Women's Clothing", slug: 'womens' },
      { id: 'shoes', name: 'Shoes', slug: 'shoes' },
      { id: 'accessories', name: 'Accessories', slug: 'accessories' },
      { id: 'bags', name: 'Bags & Luggage', slug: 'bags' }
    ]
  },
  {
    id: 'home',
    name: 'Home & Living',
    slug: 'home',
    description: 'Furniture, decor, kitchen essentials, and home improvement items',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200',
    subCategories: [
      { id: 'furniture', name: 'Furniture', slug: 'furniture' },
      { id: 'decor', name: 'Home Decor', slug: 'decor' },
      { id: 'kitchen', name: 'Kitchen & Dining', slug: 'kitchen' },
      { id: 'bedding', name: 'Bedding', slug: 'bedding' },
      { id: 'storage', name: 'Storage & Organization', slug: 'storage' }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Health',
    slug: 'beauty',
    description: 'Cosmetics, skincare, fragrances, and health products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200',
    subCategories: [
      { id: 'skincare', name: 'Skincare', slug: 'skincare' },
      { id: 'makeup', name: 'Makeup', slug: 'makeup' },
      { id: 'fragrances', name: 'Fragrances', slug: 'fragrances' },
      { id: 'hair', name: 'Hair Care', slug: 'hair' },
      { id: 'wellness', name: 'Health & Wellness', slug: 'wellness' }
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    slug: 'sports',
    description: 'Exercise equipment, sportswear, and outdoor gear',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200',
    subCategories: [
      { id: 'gym', name: 'Gym Equipment', slug: 'gym' },
      { id: 'sportswear', name: 'Sportswear', slug: 'sportswear' },
      { id: 'outdoor', name: 'Outdoor & Camping', slug: 'outdoor' },
      { id: 'cycling', name: 'Cycling', slug: 'cycling' },
      { id: 'supplements', name: 'Supplements', slug: 'supplements' }
    ]
  }
];

// Products Data
export const products: Product[] = [
  // ELECTRONICS - Audio
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones Pro',
    slug: 'wireless-bluetooth-headphones-pro',
    price: 320000,
    originalPrice: 450000,
    discount: 29,
    rating: 4.5,
    reviews: 128,
    category: 'electronics',
    subCategory: 'audio',
    brand: 'TechSound',
    inStock: true,
    isFeatured: true,
    description: 'Experience premium sound quality with our Wireless Bluetooth Headphones Pro. Featuring active noise cancellation, 40-hour battery life, and premium comfort padding. Perfect for music lovers, gamers, and professionals who demand the best audio experience. These headphones deliver crisp highs, deep bass, and crystal-clear mids for an immersive listening experience.',
    features: [
      'Active Noise Cancellation (ANC)',
      '40-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Premium memory foam ear cushions',
      'Built-in microphone for calls',
      'Foldable design for easy storage',
      'Compatible with all devices'
    ],
    specifications: {
      'Battery Life': '40 hours',
      'Bluetooth Version': '5.0',
      'Range': '10 meters',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800'
    ]
  },
  {
    id: 2,
    name: 'Smart Watch Series 6',
    slug: 'smart-watch-series-6',
    price: 750000,
    rating: 4.8,
    reviews: 256,
    category: 'electronics',
    subCategory: 'accessories',
    brand: 'TechTime',
    inStock: true,
    isNew: true,
    isFeatured: true,
    description: 'Stay connected and track your fitness goals with the Smart Watch Series 6. Features include heart rate monitoring, GPS tracking, sleep analysis, and smartphone notifications. The vibrant AMOLED display ensures clarity in all lighting conditions. Water-resistant design perfect for swimming and intense workouts.',
    features: [
      'AMOLED touchscreen display',
      'Heart rate & blood oxygen monitoring',
      'Built-in GPS',
      'Sleep tracking',
      '7-day battery life',
      'Water resistant (5ATM)',
      'Multiple sport modes',
      'Smartphone notifications'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Connectivity': 'Bluetooth 5.0',
      'Compatibility': 'Android & iOS',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800',
      'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=800'
    ]
  },
  {
    id: 3,
    name: 'Bluetooth Portable Speaker',
    slug: 'bluetooth-portable-speaker',
    price: 280000,
    rating: 4.5,
    reviews: 156,
    category: 'electronics',
    subCategory: 'audio',
    brand: 'SoundWave',
    inStock: true,
    isNew: true,
    description: 'Powerful 360-degree sound in a compact, portable design. This Bluetooth speaker delivers rich, immersive audio with deep bass. Perfect for outdoor adventures, parties, or home use. Waterproof and dustproof design ensures durability in any environment.',
    features: [
      '360-degree surround sound',
      'Waterproof & dustproof (IP67)',
      '12-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'USB-C charging',
      'Compact & portable'
    ],
    specifications: {
      'Power Output': '20W',
      'Battery Life': '12 hours',
      'Bluetooth Range': '10 meters',
      'Water Resistance': 'IP67',
      'Weight': '450g',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800',
      'https://images.unsplash.com/photo-1577003833154-978836f84eb6?w=800'
    ]
  },

  // ELECTRONICS - Laptops & Computers
  {
    id: 4,
    name: 'Gaming Laptop Pro 15',
    slug: 'gaming-laptop-pro-15',
    price: 4500000,
    originalPrice: 5200000,
    discount: 13,
    rating: 4.7,
    reviews: 89,
    category: 'electronics',
    subCategory: 'laptops',
    brand: 'PowerTech',
    inStock: true,
    description: 'Unleash your gaming potential with the Gaming Laptop Pro 15. Powered by the latest processor and dedicated graphics card, this laptop handles the most demanding games and creative applications. The high-refresh-rate display ensures smooth gameplay, while the advanced cooling system keeps temperatures in check during intense sessions.',
    features: [
      'Intel Core i7 processor',
      'NVIDIA RTX 3060 graphics',
      '16GB RAM',
      '512GB SSD storage',
      '15.6" FHD 144Hz display',
      'RGB backlit keyboard',
      'Advanced cooling system',
      'Wi-Fi 6 connectivity'
    ],
    specifications: {
      'Processor': 'Intel Core i7-11800H',
      'Graphics': 'NVIDIA RTX 3060 6GB',
      'RAM': '16GB DDR4',
      'Storage': '512GB NVMe SSD',
      'Display': '15.6" FHD 144Hz',
      'Operating System': 'Windows 11',
      'Weight': '2.3kg',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800'
    ]
  },

  // FASHION - Men's
  {
    id: 5,
    name: 'Premium Cotton T-Shirt',
    slug: 'premium-cotton-t-shirt',
    price: 45000,
    originalPrice: 60000,
    discount: 25,
    rating: 4.3,
    reviews: 234,
    category: 'fashion',
    subCategory: 'mens',
    brand: 'StyleHub',
    inStock: true,
    isFeatured: true,
    description: 'Comfortable and stylish premium cotton t-shirt perfect for everyday wear. Made from 100% organic cotton for breathability and durability. Available in multiple colors and sizes. The classic fit design ensures comfort all day long.',
    features: [
      '100% organic cotton',
      'Breathable fabric',
      'Classic fit',
      'Reinforced stitching',
      'Machine washable',
      'Available in multiple colors',
      'Pre-shrunk'
    ],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Classic',
      'Care': 'Machine washable',
      'Available Sizes': 'S, M, L, XL, XXL',
      'Colors': 'Black, White, Navy, Gray',
      'Weight': '180g'
    },
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800'
    ]
  },
  {
    id: 6,
    name: 'Running Shoes Pro',
    slug: 'running-shoes-pro',
    price: 420000,
    originalPrice: 550000,
    discount: 24,
    rating: 4.7,
    reviews: 203,
    category: 'fashion',
    subCategory: 'shoes',
    brand: 'SportFit',
    inStock: true,
    isFeatured: true,
    description: 'High-performance running shoes designed for comfort and speed. Features advanced cushioning technology, breathable mesh upper, and durable rubber outsole. Perfect for long-distance running, training, and casual wear. Lightweight design reduces fatigue.',
    features: [
      'Advanced cushioning technology',
      'Breathable mesh upper',
      'Lightweight design',
      'Durable rubber outsole',
      'Arch support',
      'Reflective details',
      'Available in multiple sizes'
    ],
    specifications: {
      'Upper Material': 'Breathable Mesh',
      'Sole Material': 'Rubber',
      'Weight': '280g per shoe',
      'Available Sizes': '40-46',
      'Colors': 'Black, Blue, Red',
      'Warranty': '6 months'
    },
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'
    ]
  },
  {
    id: 7,
    name: 'Premium Laptop Bag',
    slug: 'premium-laptop-bag',
    price: 185000,
    originalPrice: 220000,
    discount: 16,
    rating: 4.3,
    reviews: 89,
    category: 'fashion',
    subCategory: 'bags',
    brand: 'CarryPro',
    inStock: true,
    description: 'Professional laptop bag with multiple compartments for organization. Water-resistant material protects your devices from the elements. Padded laptop sleeve fits up to 15.6" laptops. Ergonomic shoulder straps ensure comfortable carrying.',
    features: [
      'Fits laptops up to 15.6"',
      'Water-resistant material',
      'Multiple compartments',
      'Padded laptop sleeve',
      'Ergonomic shoulder straps',
      'USB charging port',
      'Durable zippers'
    ],
    specifications: {
      'Material': 'Water-resistant polyester',
      'Laptop Compartment': 'Up to 15.6"',
      'Dimensions': '42 x 30 x 12 cm',
      'Weight': '650g',
      'Color': 'Black, Gray, Navy',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800',
      'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=800',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800'
    ]
  },

  // HOME & LIVING
  {
    id: 8,
    name: 'Coffee Maker Machine Pro',
    slug: 'coffee-maker-machine-pro',
    price: 295000,
    rating: 4.6,
    reviews: 142,
    category: 'home',
    subCategory: 'kitchen',
    brand: 'BrewMaster',
    inStock: true,
    description: 'Start your mornings right with the Coffee Maker Machine Pro. Programmable settings allow you to wake up to freshly brewed coffee. The thermal carafe keeps coffee hot for hours. Multiple brewing strength options cater to all preferences.',
    features: [
      'Programmable timer',
      'Thermal carafe',
      'Multiple brewing strengths',
      '12-cup capacity',
      'Auto shut-off',
      'Reusable filter',
      'Easy to clean'
    ],
    specifications: {
      'Capacity': '12 cups (1.8L)',
      'Power': '900W',
      'Material': 'Stainless steel',
      'Timer': '24-hour programmable',
      'Warranty': '2 years',
      'Dimensions': '25 x 20 x 35 cm'
    },
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
      'https://images.unsplash.com/photo-1585516173793-61a3a13c305f?w=800'
    ]
  },
  {
    id: 9,
    name: 'Premium Bed Sheets Set',
    slug: 'premium-bed-sheets-set',
    price: 120000,
    originalPrice: 160000,
    discount: 25,
    rating: 4.8,
    reviews: 178,
    category: 'home',
    subCategory: 'bedding',
    brand: 'ComfortHome',
    inStock: true,
    description: 'Luxurious bed sheets made from high-quality Egyptian cotton. Soft, breathable, and durable for a comfortable night\'s sleep. Deep pocket design fits mattresses up to 16 inches. Set includes fitted sheet, flat sheet, and two pillowcases.',
    features: [
      '100% Egyptian cotton',
      '400 thread count',
      'Deep pocket design',
      'Breathable & soft',
      'Machine washable',
      'Fade resistant',
      'Complete set included'
    ],
    specifications: {
      'Material': '100% Egyptian Cotton',
      'Thread Count': '400',
      'Pocket Depth': 'Up to 16"',
      'Set Includes': '1 Fitted, 1 Flat, 2 Pillowcases',
      'Available Sizes': 'Twin, Full, Queen, King',
      'Colors': 'White, Ivory, Gray, Navy'
    },
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      'https://images.unsplash.com/photo-1615800002234-0f1b84f5d33e?w=800'
    ]
  },

  // SPORTS & FITNESS
  {
    id: 10,
    name: 'Yoga Mat Premium',
    slug: 'yoga-mat-premium',
    price: 95000,
    rating: 4.2,
    reviews: 78,
    category: 'sports',
    subCategory: 'gym',
    brand: 'FitLife',
    inStock: true,
    description: 'High-quality yoga mat perfect for all types of workouts. Non-slip surface provides excellent grip even during intense sessions. Extra cushioning protects joints while maintaining stability. Eco-friendly materials are safe for you and the environment.',
    features: [
      'Non-slip surface',
      'Extra thick cushioning (6mm)',
      'Eco-friendly TPE material',
      'Lightweight & portable',
      'Easy to clean',
      'Carrying strap included',
      'Odor-free'
    ],
    specifications: {
      'Material': 'TPE (Eco-friendly)',
      'Thickness': '6mm',
      'Dimensions': '183 x 61 cm',
      'Weight': '1.2kg',
      'Colors': 'Purple, Blue, Green, Pink',
      'Care': 'Wipe clean with damp cloth'
    },
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800',
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800',
      'https://images.unsplash.com/photo-1616279969856-759f316a5ac1?w=800',
      'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800'
    ]
  },
  {
    id: 11,
    name: 'Resistance Bands Set',
    slug: 'resistance-bands-set',
    price: 65000,
    originalPrice: 85000,
    discount: 24,
    rating: 4.6,
    reviews: 156,
    category: 'sports',
    subCategory: 'gym',
    brand: 'FitPro',
    inStock: true,
    description: 'Versatile resistance bands set for full-body workouts. Five resistance levels from light to extra heavy. Perfect for strength training, physical therapy, and flexibility exercises. Compact and portable for home or gym use.',
    features: [
      '5 resistance levels',
      'Durable latex material',
      'Portable & lightweight',
      'Suitable for all fitness levels',
      'Includes door anchor',
      'Carrying bag included',
      'Exercise guide provided'
    ],
    specifications: {
      'Material': 'Natural latex',
      'Resistance Levels': '5 (10-50 lbs)',
      'Length': '1.2 meters each',
      'Set Includes': '5 bands, door anchor, bag',
      'Colors': 'Color-coded by resistance',
      'Warranty': '6 months'
    },
    images: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800',
      'https://images.unsplash.com/photo-1598266663439-2056815e0503?w=800',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800'
    ]
  },

  // BEAUTY & HEALTH
  {
    id: 12,
    name: 'Skincare Serum Set',
    slug: 'skincare-serum-set',
    price: 185000,
    originalPrice: 240000,
    discount: 23,
    rating: 4.7,
    reviews: 245,
    category: 'beauty',
    subCategory: 'skincare',
    brand: 'GlowEssence',
    inStock: true,
    isFeatured: true,
    description: 'Complete skincare serum set for radiant, healthy skin. Includes Vitamin C serum, Hyaluronic Acid, and Retinol serum. Each serum targets specific skin concerns from brightening to anti-aging. Dermatologist-tested and suitable for all skin types.',
    features: [
      '3-piece serum set',
      'Vitamin C for brightness',
      'Hyaluronic Acid for hydration',
      'Retinol for anti-aging',
      'Dermatologist tested',
      'Suitable for all skin types',
      'Cruelty-free & vegan'
    ],
    specifications: {
      'Set Includes': '3 serums (30ml each)',
      'Key Ingredients': 'Vitamin C, Hyaluronic Acid, Retinol',
      'Skin Type': 'All types',
      'Application': 'Morning & night',
      'Shelf Life': '12 months after opening',
      'Origin': 'South Korea'
    },
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
      'https://images.unsplash.com/photo-1620916566020-06838245b290?w=800'
    ]
  },
  {
    id: 13,
    name: 'Electric Hair Dryer Pro',
    slug: 'electric-hair-dryer-pro',
    price: 145000,
    rating: 4.5,
    reviews: 134,
    category: 'beauty',
    subCategory: 'hair',
    brand: 'StylePro',
    inStock: true,
    description: 'Professional-grade hair dryer with ionic technology for smooth, frizz-free hair. Multiple heat and speed settings cater to all hair types. Lightweight design reduces arm fatigue during styling. Includes concentrator and diffuser attachments.',
    features: [
      'Ionic technology',
      'Multiple heat settings',
      '3 speed settings',
      'Cool shot button',
      'Lightweight design',
      'Includes 2 attachments',
      'Overheat protection'
    ],
    specifications: {
      'Power': '2000W',
      'Technology': 'Ionic',
      'Heat Settings': '3',
      'Speed Settings': '3',
      'Cable Length': '2.5 meters',
      'Weight': '450g',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800',
      'https://images.unsplash.com/photo-1608301993814-61fd0a1c8e96?w=800'
    ]
  },

  // Additional Electronics
  {
    id: 14,
    name: 'Wireless Earbuds Pro',
    slug: 'wireless-earbuds-pro',
    price: 180000,
    originalPrice: 250000,
    discount: 28,
    rating: 4.3,
    reviews: 198,
    category: 'electronics',
    subCategory: 'audio',
    brand: 'SoundTech',
    inStock: true,
    description: 'True wireless earbuds with premium sound quality and active noise cancellation. Compact charging case provides up to 24 hours of total playtime. Touch controls make it easy to manage music and calls. IPX5 water resistance for workouts.',
    features: [
      'Active noise cancellation',
      'Touch controls',
      '24-hour total battery',
      'IPX5 water resistant',
      'Ergonomic fit',
      'Quick charging',
      'Voice assistant compatible'
    ],
    specifications: {
      'Bluetooth': '5.2',
      'Battery Life': '6 hours (earbuds), 24 hours (total)',
      'Charging Time': '1.5 hours',
      'Water Resistance': 'IPX5',
      'Weight': '4.5g per earbud',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
      'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=800',
      'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800'
    ]
  },
  {
    id: 15,
    name: 'USB-C Fast Charging Cable',
    slug: 'usb-c-fast-charging-cable',
    price: 25000,
    rating: 4.7,
    reviews: 312,
    category: 'electronics',
    subCategory: 'accessories',
    brand: 'ChargePro',
    inStock: true,
    description: 'Durable USB-C charging cable with fast charging support. Braided nylon design prevents tangling and ensures long-lasting use. Compatible with all USB-C devices. 2-meter length provides flexibility for convenient charging.',
    features: [
      'Fast charging support',
      'Braided nylon design',
      'Tangle-free',
      '2-meter length',
      'Reinforced connectors',
      'Universal compatibility',
      'Data transfer support'
    ],
    specifications: {
      'Length': '2 meters',
      'Material': 'Braided nylon',
      'Fast Charging': 'Up to 60W',
      'Data Transfer': 'Up to 480Mbps',
      'Connector': 'USB-C to USB-C',
      'Warranty': '1 year'
    },
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800',
      'https://images.unsplash.com/photo-1619642584888-79a2e718e20e?w=800',
      'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800'
    ]
  }
];

// Reviews Data
export const reviews: Review[] = [
  // Product 1 - Wireless Headphones
  { id: 1, productId: 1, userName: 'Nakato Sarah', rating: 5, comment: 'Amazing sound quality! The noise cancellation works perfectly. Best purchase this year.', date: 'Nov 10, 2024' },
  { id: 2, productId: 1, userName: 'Okello David', rating: 4, comment: 'Great headphones, very comfortable for long use. Battery life is excellent.', date: 'Nov 8, 2024' },
  { id: 3, productId: 1, userName: 'Namukasa Grace', rating: 5, comment: 'Perfect for my daily commute. The sound is crystal clear and they fit perfectly.', date: 'Nov 5, 2024' },
  { id: 4, productId: 1, userName: 'Ssemakula John', rating: 4, comment: 'Good value for money. The build quality is solid and they look premium.', date: 'Nov 2, 2024' },

  // Product 2 - Smart Watch
  { id: 5, productId: 2, userName: 'Nansubuga Joy', rating: 5, comment: 'This smartwatch is incredible! Tracks all my workouts perfectly and the battery lasts all week.', date: 'Nov 12, 2024' },
  { id: 6, productId: 2, userName: 'Mugisha Peter', rating: 5, comment: 'Love the design and functionality. GPS is very accurate for my morning runs.', date: 'Nov 9, 2024' },
  { id: 7, productId: 2, userName: 'Arinaitwe Rebecca', rating: 4, comment: 'Great smartwatch with many features. Sometimes the heart rate sensor takes a while to sync.', date: 'Nov 6, 2024' },

  // Product 3 - Bluetooth Speaker
  { id: 8, productId: 3, userName: 'Kato James', rating: 5, comment: 'Fantastic speaker! The sound quality is amazing and it\'s truly waterproof - tested it myself!', date: 'Nov 11, 2024' },
  { id: 9, productId: 3, userName: 'Namusoke Esther', rating: 4, comment: 'Very good speaker for the price. Battery lasts long and sound is clear.', date: 'Nov 7, 2024' },

  // Product 5 - T-Shirt
  { id: 10, productId: 5, userName: 'Wasswa Daniel', rating: 4, comment: 'Comfortable and fits well. The cotton quality is excellent.', date: 'Nov 10, 2024' },
  { id: 11, productId: 5, userName: 'Tumusiime Sandra', rating: 5, comment: 'Very soft material, washes well. Bought three more!', date: 'Nov 5, 2024' },

  // Product 6 - Running Shoes
  { id: 12, productId: 6, userName: 'Byaruhanga Mark', rating: 5, comment: 'Best running shoes I\'ve ever owned. Very comfortable for long distances.', date: 'Nov 9, 2024' },
  { id: 13, productId: 6, userName: 'Nakazibwe Patience', rating: 5, comment: 'Perfect fit and great support. My knees feel much better after runs.', date: 'Nov 4, 2024' },

  // Product 8 - Coffee Maker
  { id: 14, productId: 8, userName: 'Muwanguzi Kenneth', rating: 4, comment: 'Makes excellent coffee every morning. The programmable timer is very convenient.', date: 'Nov 8, 2024' },
  { id: 15, productId: 8, userName: 'Namuli Christine', rating: 5, comment: 'Love this coffee maker! Easy to use and clean.', date: 'Nov 3, 2024' }
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubCategory = (category: string, subCategory: string): Product[] => {
  return products.filter(
    product => product.category === category && product.subCategory === subCategory
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getReviewsByProductId = (productId: number): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery)
  );
};
