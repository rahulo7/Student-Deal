// Mock data for different e-commerce sites
const mockProducts = {
    'white sneakers': [
        {
            id: 1,
            name: 'Nike Air Force 1 White Sneakers',
            price: 7995,
            rating: 4.5,
            reviews: 2847,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=nike%20air%20force%201%20white'
        },
        {
            id: 2,
            name: 'Adidas Stan Smith White Sneakers',
            price: 6599,
            rating: 4.3,
            reviews: 1923,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=adidas%20stan%20smith%20white'
        },
        {
            id: 3,
            name: 'Puma White Canvas Sneakers',
            price: 4299,
            rating: 4.2,
            reviews: 856,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/shoes/puma/puma-white-canvas-sneakers'
        },
        {
            id: 4,
            name: 'Reebok Classic White Sneakers',
            price: 5499,
            rating: 4.4,
            reviews: 1432,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=reebok%20classic%20white%20sneakers'
        },
        {
            id: 5,
            name: 'Converse Chuck Taylor White',
            price: 3899,
            rating: 4.6,
            reviews: 3214,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=converse%20chuck%20taylor%20white'
        },
        {
            id: 6,
            name: 'Vans Old Skool White Sneakers',
            price: 4799,
            rating: 4.3,
            reviews: 967,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=vans%20old%20skool%20white'
        }
    ],
    'asian white sneakers': [
        {
            id: 101,
            name: 'Asian Men White Sports Shoes',
            price: 1299,
            rating: 4.1,
            reviews: 1847,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=asian%20white%20sports%20shoes'
        },
        {
            id: 102,
            name: 'Asian Men White Canvas Shoes',
            price: 999,
            rating: 4.0,
            reviews: 923,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=asian%20white%20canvas%20shoes'
        },
        {
            id: 103,
            name: 'Asian Men White Casual Sneakers',
            price: 1199,
            rating: 4.2,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/shoes/asian/asian-men-white-casual-sneakers'
        },
        {
            id: 104,
            name: 'Asian Men White Running Shoes',
            price: 1499,
            rating: 4.3,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=asian%20white%20running%20shoes'
        },
        {
            id: 105,
            name: 'Asian Men White School Shoes',
            price: 899,
            rating: 4.0,
            reviews: 756,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=asian%20white%20school%20shoes'
        },
        {
            id: 106,
            name: 'Asian Men White Walking Shoes',
            price: 1099,
            rating: 4.1,
            reviews: 1189,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=asian%20white%20walking%20shoes'
        }
    ],
    'laptop': [
        {
            id: 7,
            name: 'HP Pavilion 15.6" Laptop',
            price: 45999,
            rating: 4.2,
            reviews: 1247,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/3/5/l/pavilion-15-ec2004ax-gaming-laptop-hp-original-imagjvmyzz8zqghf.jpeg',
            url: 'https://www.flipkart.com/hp-pavilion-15-6-laptop/p/itm123456789'
        },
        {
            id: 8,
            name: 'Dell Inspiron 15 3000 Laptop',
            price: 38999,
            rating: 4.1,
            reviews: 892,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://m.media-amazon.com/images/I/71ABC123DEF._AC_UL1500_.jpg',
            url: 'https://www.amazon.in/Dell-Inspiron-15-3000-Laptop/dp/B08XYZ123A'
        }
    ],
    'smartphone': [
        {
            id: 9,
            name: 'Samsung Galaxy M34 5G',
            price: 18999,
            rating: 4.3,
            reviews: 2156,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/3/5/l/galaxy-m34-5g-sm-m346b-samsung-original-imagjvmyzz8zqghf.jpeg',
            url: 'https://www.flipkart.com/samsung-galaxy-m34-5g/p/itm123456789'
        },
        {
            id: 10,
            name: 'OnePlus Nord CE 3 Lite',
            price: 22999,
            rating: 4.4,
            reviews: 1834,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://m.media-amazon.com/images/I/71ABC123DEF._AC_UL1500_.jpg',
            url: 'https://www.amazon.in/OnePlus-Nord-CE-3-Lite/dp/B08XYZ123A'
        }
    ],
    'headphones': [
        {
            id: 11,
            name: 'Sony WH-CH720N Wireless Headphones',
            price: 8999,
            rating: 4.5,
            reviews: 3421,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=sony%20wireless%20headphones'
        },
        {
            id: 12,
            name: 'JBL Tune 760NC Wireless Headphones',
            price: 5999,
            rating: 4.2,
            reviews: 1876,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=jbl%20wireless%20headphones'
        }
    ],
    'watches': [
        {
            id: 201,
            name: 'Titan Men Analog Watch',
            price: 2499,
            rating: 4.3,
            reviews: 2156,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=titan%20men%20analog%20watch'
        },
        {
            id: 202,
            name: 'Casio Digital Sports Watch',
            price: 1899,
            rating: 4.4,
            reviews: 1834,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=casio%20digital%20sports%20watch'
        },
        {
            id: 203,
            name: 'Fastrack Men Casual Watch',
            price: 1599,
            rating: 4.2,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/watches/fastrack/fastrack-men-casual-watch'
        },
        {
            id: 204,
            name: 'Timex Men Classic Watch',
            price: 3299,
            rating: 4.5,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=timex%20men%20classic%20watch'
        },
        {
            id: 205,
            name: 'Sonata Men Analog Watch',
            price: 1299,
            rating: 4.1,
            reviews: 756,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=sonata%20men%20analog%20watch'
        },
        {
            id: 206,
            name: 'Fossil Men Leather Watch',
            price: 8999,
            rating: 4.6,
            reviews: 1189,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=fossil%20men%20leather%20watch'
        }
    ],
    'belts': [
        {
            id: 301,
            name: 'Allen Solly Men Leather Belt',
            price: 899,
            rating: 4.2,
            reviews: 1847,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=allen%20solly%20men%20leather%20belt'
        },
        {
            id: 302,
            name: 'Van Heusen Men Formal Belt',
            price: 1299,
            rating: 4.3,
            reviews: 923,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1624378515195-6bbdb73f2194?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=van%20heusen%20men%20formal%20belt'
        },
        {
            id: 303,
            name: 'H&M Men Casual Belt',
            price: 799,
            rating: 4.1,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/belts/hm/hm-men-casual-belt'
        },
        {
            id: 304,
            name: 'Raymond Men Leather Belt',
            price: 1599,
            rating: 4.4,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1624378515195-6bbdb73f2194?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=raymond%20men%20leather%20belt'
        },
        {
            id: 305,
            name: 'Louis Philippe Men Belt',
            price: 1999,
            rating: 4.5,
            reviews: 756,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=louis%20philippe%20men%20belt'
        },
        {
            id: 306,
            name: 'Peter England Men Belt',
            price: 1099,
            rating: 4.2,
            reviews: 1189,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1624378515195-6bbdb73f2194?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=peter%20england%20men%20belt'
        }
    ],
    'bags': [
        {
            id: 401,
            name: 'Wildcraft Men Backpack',
            price: 2499,
            rating: 4.4,
            reviews: 2156,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=wildcraft%20men%20backpack'
        },
        {
            id: 402,
            name: 'American Tourister Laptop Bag',
            price: 3299,
            rating: 4.5,
            reviews: 1834,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=american%20tourister%20laptop%20bag'
        },
        {
            id: 403,
            name: 'Skybags Men Travel Bag',
            price: 1899,
            rating: 4.3,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/bags/skybags/skybags-men-travel-bag'
        },
        {
            id: 404,
            name: 'Puma Men Sports Bag',
            price: 1599,
            rating: 4.2,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=puma%20men%20sports%20bag'
        }
    ],
    'sunglasses': [
        {
            id: 501,
            name: 'Ray-Ban Aviator Sunglasses',
            price: 12999,
            rating: 4.6,
            reviews: 2156,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=ray%20ban%20aviator%20sunglasses'
        },
        {
            id: 502,
            name: 'Oakley Men Sports Sunglasses',
            price: 8999,
            rating: 4.5,
            reviews: 1834,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=oakley%20men%20sports%20sunglasses'
        },
        {
            id: 503,
            name: 'Fastrack Men Stylish Sunglasses',
            price: 1299,
            rating: 4.3,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/sunglasses/fastrack/fastrack-men-stylish-sunglasses'
        },
        {
            id: 504,
            name: 'Tommy Hilfiger Men Sunglasses',
            price: 4599,
            rating: 4.4,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=tommy%20hilfiger%20men%20sunglasses'
        }
    ],
    'earbuds': [
        {
            id: 601,
            name: 'Boult Audio True Wireless Earbuds',
            price: 1299,
            rating: 4.3,
            reviews: 2156,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=boult%20audio%20true%20wireless%20earbuds'
        },
        {
            id: 602,
            name: 'Boat Airdopes Wireless Earbuds',
            price: 1999,
            rating: 4.4,
            reviews: 1834,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=boat%20airdopes%20wireless%20earbuds'
        },
        {
            id: 603,
            name: 'OnePlus Buds Z Wireless Earbuds',
            price: 2999,
            rating: 4.5,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/earbuds/oneplus/oneplus-buds-z-wireless-earbuds'
        },
        {
            id: 604,
            name: 'Realme Buds Wireless Earbuds',
            price: 1499,
            rating: 4.2,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=realme%20buds%20wireless%20earbuds'
        },
        {
            id: 605,
            name: 'Samsung Galaxy Buds Pro',
            price: 8999,
            rating: 4.6,
            reviews: 756,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=samsung%20galaxy%20buds%20pro'
        },
        {
            id: 606,
            name: 'Apple AirPods Pro',
            price: 19990,
            rating: 4.7,
            reviews: 1189,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=apple%20airpods%20pro'
        }
    ],
    'earphones': [
        {
            id: 701,
            name: 'Sony MDR Wireless Earphones',
            price: 3499,
            rating: 4.4,
            reviews: 2156,
            site: 'flipkart',
            siteName: 'Flipkart',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.flipkart.com/search?q=sony%20mdr%20wireless%20earphones'
        },
        {
            id: 702,
            name: 'JBL C100SI Wired Earphones',
            price: 899,
            rating: 4.3,
            reviews: 1834,
            site: 'amazon',
            siteName: 'Amazon',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.amazon.in/s?k=jbl%20c100si%20wired%20earphones'
        },
        {
            id: 703,
            name: 'Sennheiser CX 180 Earphones',
            price: 1299,
            rating: 4.5,
            reviews: 1456,
            site: 'myntra',
            siteName: 'Myntra',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.myntra.com/earphones/sennheiser/sennheiser-cx-180-earphones'
        },
        {
            id: 704,
            name: 'Philips SHE3590 Earphones',
            price: 599,
            rating: 4.1,
            reviews: 2134,
            site: 'snapdeal',
            siteName: 'Snapdeal',
            image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
            url: 'https://www.snapdeal.com/search?keyword=philips%20she3590%20earphones'
        }
    ]
};

// Global variables
let currentProducts = [];
let filteredProducts = [];

// DOM elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const minBudget = document.getElementById('minBudget');
const maxBudget = document.getElementById('maxBudget');
const resultsSection = document.getElementById('resultsSection');
const loadingSection = document.getElementById('loadingSection');
const productsGrid = document.getElementById('productsGrid');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const sortBy = document.getElementById('sortBy');

// Event listeners
searchForm.addEventListener('submit', handleSearch);
sortBy.addEventListener('change', handleSort);

// Handle search form submission
function handleSearch(e) {
    e.preventDefault();
    
    const searchTerm = searchInput.value.trim().toLowerCase();
    const minPrice = parseFloat(minBudget.value) || 0;
    const maxPrice = parseFloat(maxBudget.value) || Infinity;
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    // Show loading
    showLoading();
    
    // Simulate API delay
    setTimeout(() => {
        searchProducts(searchTerm, minPrice, maxPrice);
    }, 1500);
}

// Search products function
function searchProducts(searchTerm, minPrice, maxPrice) {
    let foundProducts = [];
    
    // Normalize search term
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    
    // First, try exact match
    if (mockProducts[normalizedSearchTerm]) {
        foundProducts = foundProducts.concat(mockProducts[normalizedSearchTerm]);
    }
    
    // Create synonyms and variations for better matching
    const searchVariations = createSearchVariations(normalizedSearchTerm);
    
    // Try matching with variations
    searchVariations.forEach(variation => {
        if (mockProducts[variation]) {
            foundProducts = foundProducts.concat(mockProducts[variation]);
        }
    });
    
    // Then try partial matches with improved logic
    Object.keys(mockProducts).forEach(key => {
        // Skip if already found exact match
        if (key === normalizedSearchTerm || searchVariations.includes(key)) return;
        
        const keyWords = key.toLowerCase().split(' ');
        const searchWords = normalizedSearchTerm.split(' ');
        
        // Calculate match score based on word overlap
        let matchScore = 0;
        searchWords.forEach(searchWord => {
            keyWords.forEach(keyWord => {
                if (keyWord.includes(searchWord) || searchWord.includes(keyWord)) {
                    matchScore++;
                }
            });
        });
        
        // If at least 50% of search words match, include results
        const matchThreshold = Math.ceil(searchWords.length / 2);
        if (matchScore >= matchThreshold) {
            foundProducts = foundProducts.concat(mockProducts[key]);
        }
    });
    
    // Enhanced keyword search for better results
    if (foundProducts.length === 0) {
        Object.keys(mockProducts).forEach(key => {
            const keyWords = key.toLowerCase().split(' ');
            const searchWords = normalizedSearchTerm.split(' ');
            
            // Check if any search word matches any key word
            const hasAnyMatch = searchWords.some(searchWord => 
                keyWords.some(keyWord => 
                    keyWord.includes(searchWord) || searchWord.includes(keyWord)
                )
            );
            
            if (hasAnyMatch) {
                foundProducts = foundProducts.concat(mockProducts[key]);
            }
        });
    }
    
    // Remove duplicates based on product ID
    foundProducts = foundProducts.filter((product, index, self) => 
        index === self.findIndex(p => p.id === product.id)
    );
    
    // Filter by budget
    currentProducts = foundProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    filteredProducts = [...currentProducts];
    
    // Hide loading and show results
    hideLoading();
    displayResults(searchTerm);
}

// Create search variations for better matching
function createSearchVariations(searchTerm) {
    const variations = [];
    
    // Common synonyms and variations
    const synonyms = {
        'earbuds': ['earphones', 'buds', 'wireless earbuds', 'true wireless'],
        'earphones': ['earbuds', 'buds', 'headphones', 'wireless earphones'],
        'headphones': ['earphones', 'headset', 'wireless headphones'],
        'watches': ['watch', 'timepiece', 'wristwatch'],
        'belts': ['belt', 'leather belt'],
        'bags': ['bag', 'backpack', 'travel bag', 'laptop bag'],
        'sunglasses': ['sunglass', 'shades', 'eye protection'],
        'sneakers': ['shoes', 'sports shoes', 'running shoes', 'canvas shoes'],
        'laptop': ['laptops', 'notebook', 'computer'],
        'smartphone': ['mobile', 'phone', 'smartphones', 'mobile phone']
    };
    
    // Add direct synonyms
    Object.keys(synonyms).forEach(key => {
        if (searchTerm.includes(key)) {
            synonyms[key].forEach(synonym => {
                variations.push(searchTerm.replace(key, synonym));
            });
        }
    });
    
    // Add variations with common words
    const commonWords = ['men', 'women', 'boys', 'girls', 'kids', 'wireless', 'bluetooth'];
    commonWords.forEach(word => {
        if (!searchTerm.includes(word)) {
            variations.push(searchTerm + ' ' + word);
            variations.push(word + ' ' + searchTerm);
        }
    });
    
    return variations;
}

// Display search results
function displayResults(searchTerm) {
    resultsTitle.textContent = `Results for "${searchTerm}"`;
    resultsCount.textContent = filteredProducts.length;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">No products found</h3>
                <p style="color: #999;">Try adjusting your search terms or budget range</p>
            </div>
        `;
    } else {
        renderProducts();
    }
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Render products in grid
function renderProducts() {
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProduct(${JSON.stringify(product).replace(/"/g, '&quot;')})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 3rem;">👟</div>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-site ${product.site}">${product.siteName}</div>
                <button class="buy-btn" onclick="event.stopPropagation(); openProduct(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    <i class="fas fa-external-link-alt"></i> Buy Now
                </button>
            </div>
        </div>
    `).join('');
}

// Handle sorting
function handleSort() {
    const sortValue = sortBy.value;
    
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'site':
            filteredProducts.sort((a, b) => a.siteName.localeCompare(b.siteName));
            break;
    }
    
    renderProducts();
}

// Open product in new tab
function openProduct(product) {
    let searchUrl = '';
    const searchTerm = encodeURIComponent(product.name);
    
    // Generate search URLs for each e-commerce site
    switch(product.site) {
        case 'flipkart':
            searchUrl = `https://www.flipkart.com/search?q=${searchTerm}`;
            break;
        case 'amazon':
            searchUrl = `https://www.amazon.in/s?k=${searchTerm}`;
            break;
        case 'myntra':
            searchUrl = `https://www.myntra.com/${searchTerm.replace(/\s+/g, '-').toLowerCase()}`;
            break;
        case 'snapdeal':
            searchUrl = `https://www.snapdeal.com/search?keyword=${searchTerm}`;
            break;
        default:
            searchUrl = product.url;
    }
    
    // Open in new tab with proper security attributes
    const newWindow = window.open(searchUrl, '_blank', 'noopener,noreferrer');
    
    // Focus the new window
    if (newWindow) {
        newWindow.focus();
    } else {
        // Fallback if popup is blocked
        alert('Please allow popups for this site to open product pages. You can also copy this URL: ' + searchUrl);
    }
}

// Show loading animation
function showLoading() {
    loadingSection.style.display = 'block';
    resultsSection.style.display = 'none';
}

// Hide loading animation
function hideLoading() {
    loadingSection.style.display = 'none';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add some sample suggestions
    const suggestions = [
        'white sneakers',
        'asian white sneakers',
        'watches',
        'belts',
        'bags',
        'sunglasses',
        'earbuds',
        'earphones',
        'boult ear buds',
        'boat earbuds',
        'laptop',
        'smartphone',
        'headphones'
    ];
    
    // Add autocomplete functionality
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length > 2) {
            // Show suggestions based on available products
            const matchingSuggestions = suggestions.filter(suggestion => 
                suggestion.toLowerCase().includes(value)
            );
            // You can implement dropdown suggestions here
        }
    });
    
    // Set default budget range for sneakers
    if (searchInput.value === '') {
        minBudget.placeholder = '500';
        maxBudget.placeholder = '10000';
    }
});

// Add some utility functions
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + 
           (hasHalfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Enter key in budget inputs to search
    if (e.key === 'Enter' && (e.target === minBudget || e.target === maxBudget)) {
        searchForm.dispatchEvent(new Event('submit'));
    }
});
