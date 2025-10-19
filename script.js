/* ========================================
   GLOBAL STATE MANAGEMENT
   ======================================== */
const state = {
    products: [],
    categories: {
        men: {
            name: "Men",
            subcategories: [
                { id: "pants", name: "Pants" },
                { id: "shirts", name: "Shirts" },
                { id: "tshirts", name: "T-Shirts" },
                { id: "trousers", name: "Trousers" }
            ]
        },
        women: {
            name: "Women",
            subcategories: [
                { id: "lehenga", name: "Lehenga" },
                { id: "kurti", name: "Kurti" },
                { id: "dresses", name: "Dresses" },
                { id: "sarees", name: "Sarees" }
            ]
        }
    },
    cart: [],
    wishlist: [],
    currentBooking: null,
    isAdmin: false,
    recentlyViewed: []
};

/* ========================================
   INITIALIZE SAMPLE PRODUCTS
   ======================================== */
function initializeProducts() {
    state.products = [
        { id: 1, name: "Classic White Shirt", category: "men", subcategory: "shirts", price: 1299, description: "Premium cotton white formal shirt with regular fit", imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400", sizes: ["S", "M", "L", "XL", "XXL"], salesType: "trending", rating: 4.5, reviews: 23 },
        { id: 2, name: "Black Formal Trousers", category: "men", subcategory: "trousers", price: 1799, description: "Slim fit formal trousers in premium fabric", imageUrl: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400", sizes: ["30", "32", "34", "36", "38"], salesType: "new", rating: 4.2, reviews: 15 },
        { id: 3, name: "Graphic T-Shirt", category: "men", subcategory: "tshirts", price: 699, description: "100% cotton casual graphic t-shirt", imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", sizes: ["S", "M", "L", "XL"], salesType: "sale", rating: 4.7, reviews: 31 },
        { id: 4, name: "Denim Jeans", category: "men", subcategory: "pants", price: 2199, description: "Classic blue denim jeans with regular fit", imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", sizes: ["30", "32", "34", "36"], salesType: "top-brand", rating: 4.4, reviews: 42 },
        { id: 5, name: "Blue Denim Shirt", category: "men", subcategory: "shirts", price: 1499, description: "Casual denim shirt perfect for weekend wear", imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", sizes: ["S", "M", "L", "XL"], salesType: "trending", rating: 4.3, reviews: 18 },
        { id: 6, name: "Black Polo T-Shirt", category: "men", subcategory: "tshirts", price: 899, description: "Classic polo t-shirt in premium cotton", imageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400", sizes: ["S", "M", "L", "XL", "XXL"], salesType: "new", rating: 4.6, reviews: 27 },
        { id: 7, name: "Cargo Pants", category: "men", subcategory: "pants", price: 1899, description: "Multi-pocket cargo pants for utility and style", imageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400", sizes: ["30", "32", "34", "36", "38"], salesType: "trending", rating: 4.1, reviews: 12 },
        { id: 8, name: "Checked Formal Shirt", category: "men", subcategory: "shirts", price: 1399, description: "Checkered pattern formal shirt", imageUrl: "https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=400", sizes: ["M", "L", "XL", "XXL"], salesType: "sale", rating: 4.0, reviews: 9 },
        { id: 9, name: "Chino Trousers", category: "men", subcategory: "trousers", price: 1599, description: "Comfortable chino trousers for smart casual look", imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", sizes: ["30", "32", "34", "36"], salesType: "top-brand", rating: 4.5, reviews: 22 },
        { id: 10, name: "Round Neck T-Shirt", category: "men", subcategory: "tshirts", price: 599, description: "Basic round neck t-shirt in various colors", imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400", sizes: ["S", "M", "L", "XL"], salesType: "sale", rating: 4.2, reviews: 35 },
        { id: 11, name: "Elegant Black Dress", category: "women", subcategory: "dresses", price: 2499, description: "Sophisticated black evening dress", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", sizes: ["XS", "S", "M", "L", "XL"], salesType: "trending", rating: 4.8, reviews: 47 },
        { id: 12, name: "Floral Cotton Kurti", category: "women", subcategory: "kurti", price: 1299, description: "Beautiful floral printed cotton kurti", imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400", sizes: ["S", "M", "L", "XL", "XXL"], salesType: "new", rating: 4.4, reviews: 29 },
        { id: 13, name: "Designer Lehenga Set", category: "women", subcategory: "lehenga", price: 5999, description: "Traditional designer lehenga with embroidery", imageUrl: "https://images.unsplash.com/photo-1610030469451-b64e2fb8e5a7?w=400", sizes: ["S", "M", "L", "XL"], salesType: "top-brand", rating: 4.9, reviews: 38 },
        { id: 14, name: "Silk Saree", category: "women", subcategory: "sarees", price: 3499, description: "Pure silk saree with golden border", imageUrl: "https://images.unsplash.com/photo-1610031747861-2be0813b6bff?w=400", sizes: ["Free Size"], salesType: "trending", rating: 4.7, reviews: 41 },
        { id: 15, name: "White Summer Dress", category: "women", subcategory: "dresses", price: 1899, description: "Light and breezy summer dress", imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400", sizes: ["XS", "S", "M", "L"], salesType: "sale", rating: 4.3, reviews: 19 },
        { id: 16, name: "Anarkali Kurti", category: "women", subcategory: "kurti", price: 1799, description: "Elegant anarkali style kurti", imageUrl: "https://images.unsplash.com/photo-1583391733981-5acd2c43f00a?w=400", sizes: ["S", "M", "L", "XL"], salesType: "trending", rating: 4.6, reviews: 33 },
        { id: 17, name: "Wedding Lehenga", category: "women", subcategory: "lehenga", price: 8999, description: "Heavily embroidered bridal lehenga", imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400", sizes: ["S", "M", "L"], salesType: "new", rating: 5.0, reviews: 25 },
        { id: 18, name: "Banarasi Saree", category: "women", subcategory: "sarees", price: 4999, description: "Traditional Banarasi silk saree", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400", sizes: ["Free Size"], salesType: "top-brand", rating: 4.8, reviews: 36 },
        { id: 19, name: "Maxi Dress", category: "women", subcategory: "dresses", price: 2199, description: "Flowy maxi dress for casual occasions", imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400", sizes: ["S", "M", "L", "XL"], salesType: "new", rating: 4.2, reviews: 14 },
        { id: 20, name: "Straight Cut Kurti", category: "women", subcategory: "kurti", price: 999, description: "Simple straight cut daily wear kurti", imageUrl: "https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=400", sizes: ["M", "L", "XL", "XXL"], salesType: "sale", rating: 4.1, reviews: 21 }
    ];

    // Load from sessionStorage
    const savedCart = sessionStorage.getItem('cart');
    const savedWishlist = sessionStorage.getItem('wishlist');
    const savedRecentlyViewed = sessionStorage.getItem('recentlyViewed');
    const savedAdmin = sessionStorage.getItem('isAdmin');
    
    if (savedCart) state.cart = JSON.parse(savedCart);
    if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
    if (savedRecentlyViewed) state.recentlyViewed = JSON.parse(savedRecentlyViewed);
    if (savedAdmin) state.isAdmin = JSON.parse(savedAdmin);

    updateCartCount();
    updateWishlistCount();
}

/* ========================================
   ROUTER SYSTEM
   ======================================== */
function router() {
    const hash = window.location.hash.slice(1) || '/';
    const mainContent = document.getElementById('mainContent');

    // Scroll to top on route change
    window.scrollTo(0, 0);

    if (hash === '/' || hash === '/home') {
        renderHomePage();
    } else if (hash === '/categories') {
        renderCategoriesPage();
    } else if (hash === '/products') {
        renderProductsPage();
    } else if (hash === '/about') {
        renderAboutPage();
    } else if (hash === '/contact') {
        renderContactPage();
    } else if (hash.startsWith('/category/')) {
        renderCategoryPage(hash);
    } else if (hash.startsWith('/product/')) {
        renderProductDetailPage(hash);
    } else if (hash === '/cart') {
        renderCartPage();
    } else if (hash === '/wishlist') {
        renderWishlistPage();
    } else if (hash === '/confirmation') {
        renderConfirmationPage();
    } else if (hash === '/admin') {
        renderAdminPage();
    } else {
        render404Page();
    }
}

// Navigation helper
function navigateTo(path) {
    window.location.hash = path;
}

// Set active navigation link
function setActiveNav(element) {
    document.querySelectorAll('.navbar-menu a').forEach(a => a.classList.remove('active'));
    element.classList.add('active');
}

/* ========================================
   HOME PAGE
   ======================================== */
function renderHomePage() {
    const mainContent = document.getElementById('mainContent');
    
    const salesSections = [
        { id: 'trending', name: 'Trending Now' },
        { id: 'new', name: 'New Arrivals' },
        { id: 'sale', name: 'Sale' },
        { id: 'top-brand', name: 'Top Brands' }
    ];

    let html = `
        <div class="hero-section">
            <h1>Welcome to Brand Hub</h1>
            <p>Discover Premium Fashion for Every Occasion</p>
            <a href="#/categories" class="btn-primary">Shop Now</a>
        </div>
    `;

    salesSections.forEach(section => {
        const products = state.products.filter(p => p.salesType === section.id);
        if (products.length > 0) {
            html += `
                <div class="sales-section">
                    <h2 class="section-title">${section.name}</h2>
                    <div class="product-carousel">
                        ${products.map(product => createProductCard(product)).join('')}
                    </div>
                </div>
            `;
        }
    });

    // Add Recently Viewed Section
    if (state.recentlyViewed.length > 0) {
        const recentProducts = state.recentlyViewed.map(id => 
            state.products.find(p => p.id === id)
        ).filter(Boolean);
        
        if (recentProducts.length > 0) {
            html += `
                <div class="sales-section">
                    <h2 class="section-title">Recently Viewed</h2>
                    <div class="product-carousel">
                        ${recentProducts.map(product => createProductCard(product)).join('')}
                    </div>
                </div>
            `;
        }
    }

    mainContent.innerHTML = html;
}

/* ========================================
   CATEGORIES PAGE
   ======================================== */
function renderCategoriesPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">Shop by Category</h1>
                <p class="breadcrumb">Home / Categories</p>
            </div>
            <div class="categories-grid">
                <div class="category-card" onclick="navigateTo('/category/men')">
                    <h2>👔 Men</h2>
                    <p>Explore men's fashion collection</p>
                </div>
                <div class="category-card" onclick="navigateTo('/category/women')">
                    <h2>👗 Women</h2>
                    <p>Explore women's fashion collection</p>
                </div>
            </div>
        </div>
    `;
}

/* ========================================
   ALL PRODUCTS PAGE
   ======================================== */
function renderProductsPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">All Products</h1>
                <p class="breadcrumb">Home / Products</p>
            </div>
            
            <div class="filters-bar">
                <div class="filter-group">
                    <label>Category</label>
                    <select id="filterCategory" onchange="filterProducts()">
                        <option value="">All</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Price Range</label>
                    <select id="filterPrice" onchange="filterProducts()">
                        <option value="">All</option>
                        <option value="0-1000">Under ₹1000</option>
                        <option value="1000-2000">₹1000 - ₹2000</option>
                        <option value="2000-5000">₹2000 - ₹5000</option>
                        <option value="5000-10000">₹5000+</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Sort By</label>
                    <select id="sortBy" onchange="filterProducts()">
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                        <option value="popular">Most Popular</option>
                    </select>
                </div>
            </div>
            
            <div class="products-grid" id="productsGrid">
                ${state.products.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
}

// Filter products function
function filterProducts() {
    const category = document.getElementById('filterCategory').value;
    const priceRange = document.getElementById('filterPrice').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let filteredProducts = [...state.products];
    
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            } else {
                return p.price >= min;
            }
        });
    }
    
    if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'popular') {
        filteredProducts.sort((a, b) => b.reviews - a.reviews);
    }
    
    document.getElementById('productsGrid').innerHTML = 
        filteredProducts.map(product => createProductCard(product)).join('');
}

/* ========================================
   ABOUT PAGE
   ======================================== */
function renderAboutPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="about-section">
            <div class="page-header">
                <h1 class="page-title">About Brand Hub</h1>
                <p class="breadcrumb">Home / About</p>
            </div>
            
            <div class="about-content">
                <p>Brand Hub is your premium destination for fashion in India. We offer carefully curated collections of men's and women's clothing, from traditional wear to modern fashion. Our mission is to provide high-quality clothing that combines style, comfort, and affordability.</p>
                
                <p>Founded with a passion for fashion, Brand Hub has become a trusted name for shoppers looking for the latest trends and timeless classics. We believe that great fashion should be accessible to everyone, which is why we've created a seamless pre-booking system that allows you to reserve your favorite items online and pick them up at your convenience.</p>
            </div>
            
            <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Why Choose Us</h2>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">✨</div>
                    <h3 class="feature-title">Quality</h3>
                    <p>Premium fabrics and excellent craftsmanship in every piece</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3 class="feature-title">Variety</h3>
                    <p>Wide range of styles from traditional to contemporary</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💳</div>
                    <h3 class="feature-title">Convenience</h3>
                    <p>Easy pre-booking with online payment options</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏪</div>
                    <h3 class="feature-title">In-Store Pickup</h3>
                    <p>Reserve online, try and collect at your convenience</p>
                </div>
            </div>
        </div>
    `;
}

/* ========================================
   CONTACT PAGE
   ======================================== */
function renderContactPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">Contact Us</h1>
                <p class="breadcrumb">Home / Contact</p>
            </div>
            
            <div class="contact-grid">
                <div class="contact-info">
                    <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">Get in Touch</h2>
                    <p style="color: #666; margin-bottom: 2rem;">We'd love to hear from you. Visit us or reach out through any of these channels.</p>
                    
                    <div class="info-item">
                        <div class="info-icon">📍</div>
                        <div class="info-content">
                            <h3>Store Location</h3>
                            <p>123 Fashion Street<br>Mumbai, Maharashtra, India</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📞</div>
                        <div class="info-content">
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📧</div>
                        <div class="info-content">
                            <h3>Email</h3>
                            <p>support@brandhub.com</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">🕒</div>
                        <div class="info-content">
                            <h3>Business Hours</h3>
                            <p>Mon-Sat: 10:00 AM - 8:00 PM<br>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                
                <div class="booking-form">
                    <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Send us a Message</h2>
                    <form onsubmit="handleContactForm(event)">
                        <div class="form-group">
                            <label>Name *</label>
                            <input type="text" required placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" required placeholder="your@email.com">
                        </div>
                        <div class="form-group">
                            <label>Phone *</label>
                            <input type="tel" required placeholder="+91 XXXXX XXXXX">
                        </div>
                        <div class="form-group">
                            <label>Message *</label>
                            <textarea rows="5" required placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" class="btn-large btn-black" style="width: 100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function handleContactForm(event) {
    event.preventDefault();
    showToast('Thank you for your message! We will get back to you soon.', 'success');
    event.target.reset();
}

/* ========================================
   CATEGORY PAGE
   ======================================== */
function renderCategoryPage(hash) {
    const parts = hash.split('/');
    const category = parts[2];
    const subcategory = parts[3];
    
    const categoryData = state.categories[category];
    if (!categoryData) {
        render404Page();
        return;
    }
    
    const mainContent = document.getElementById('mainContent');
    
    if (subcategory) {
        // Render subcategory products
        const products = state.products.filter(p => 
            p.category === category && p.subcategory === subcategory
        );
        
        const subcatName = categoryData.subcategories.find(s => s.id === subcategory)?.name || subcategory;
        
        mainContent.innerHTML = `
            <div class="page-container">
                <div class="page-header">
                    <h1 class="page-title">${subcatName}</h1>
                    <p class="breadcrumb">Home / ${categoryData.name} / ${subcatName}</p>
                </div>
                <div class="products-grid">
                    ${products.map(product => createProductCard(product)).join('')}
                </div>
            </div>
        `;
    } else {
        // Render subcategories
        mainContent.innerHTML = `
            <div class="page-container">
                <div class="page-header">
                    <h1 class="page-title">${categoryData.name}'s Fashion</h1>
                    <p class="breadcrumb">Home / ${categoryData.name}</p>
                </div>
                <div class="categories-grid">
                    ${categoryData.subcategories.map(subcat => `
                        <div class="category-card" onclick="navigateTo('/category/${category}/${subcat.id}')">
                            <h2>${subcat.name}</h2>
                            <p>Explore ${subcat.name.toLowerCase()} collection</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

/* ========================================
   PRODUCT DETAIL PAGE
   ======================================== */
function renderProductDetailPage(hash) {
    const productId = parseInt(hash.split('/')[2]);
    const product = state.products.find(p => p.id === productId);
    
    if (!product) {
        render404Page();
        return;
    }
    
    // Add to recently viewed
    addToRecentlyViewed(productId);
    
    const mainContent = document.getElementById('mainContent');
    const isInWishlist = state.wishlist.includes(productId);
    
    mainContent.innerHTML = `
        <div class="product-detail-container">
            <div class="product-images">
                <img src="${product.imageUrl}" alt="${product.name}" class="main-image">
            </div>
            <div class="product-details">
                <h1 class="product-title">${product.name}</h1>
                <div class="product-rating">
                    ${generateStarRating(product.rating)} 
                    <span>(${product.reviews} reviews)</span>
                </div>
                <p class="product-price-large">₹${product.price}</p>
                <p class="product-description">${product.description}</p>
                
                <div class="size-selector">
                    <h3>Select Size</h3>
                    <div class="size-options" id="sizeOptions">
                        ${product.sizes.map(size => `
                            <div class="size-option" onclick="selectSize(this, '${size}')">${size}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <h3>Quantity</h3>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <span class="quantity-value" id="quantityValue">1</span>
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="btn-large btn-black" onclick="addToCart(${productId})">Add to Cart</button>
                    <button class="btn-large btn-white" onclick="preBookNow(${productId})">Pre-Book Now</button>
                </div>
                
                <button class="btn-large btn-white" onclick="toggleWishlist(${productId})" style="margin-top: 1rem;">
                    ${isInWishlist ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
                </button>
                
                <div class="product-features">
                    <h3>Product Features</h3>
                    <ul>
                        <li>Premium quality fabric</li>
                        <li>Easy returns within 7 days</li>
                        <li>Free alteration available</li>
                        <li>Cash on delivery available</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '⭐';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '⭐';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

function addToRecentlyViewed(productId) {
    // Remove if already exists
    state.recentlyViewed = state.recentlyViewed.filter(id => id !== productId);
    
    // Add to beginning
    state.recentlyViewed.unshift(productId);
    
    // Keep only last 5 products
    if (state.recentlyViewed.length > 5) {
        state.recentlyViewed = state.recentlyViewed.slice(0, 5);
    }
    
    // Save to sessionStorage
    sessionStorage.setItem('recentlyViewed', JSON.stringify(state.recentlyViewed));
}

let selectedSize = null;
let quantity = 1;

function selectSize(element, size) {
    document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedSize = size;
}

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    document.getElementById('quantityValue').textContent = quantity;
}

/* ========================================
   CART FUNCTIONALITY
   ======================================== */
function addToCart(productId) {
    // Check if customer is logged in
    if (!userIsLoggedIn()) {
        openAuthModal();
        return;
    }

    if (!selectedSize) {
        showToast('Please select a size', 'error');
        return;
    }
    
    const product = state.products.find(p => p.id === productId);
    const existingItem = state.cart.find(item => 
        item.productId === productId && item.selectedSize === selectedSize
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({
            productId: productId,
            quantity: quantity,
            selectedSize: selectedSize
        });
    }
    
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
}

function preBookNow(productId) {
    addToCart(productId);
    navigateTo('/cart');
}

function updateCartCount() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function renderCartPage() {
    const mainContent = document.getElementById('mainContent');
    
    if (state.cart.length === 0) {
        mainContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <h2>Your Cart is Empty</h2>
                <p>Start shopping to add items to your cart</p>
                <button class="btn-primary" onclick="navigateTo('/products')">Browse Products</button>
            </div>
        `;
        return;
    }
    
    const cartItems = state.cart.map((item, index) => {
        const product = state.products.find(p => p.id === item.productId);
        return `
            <div class="cart-item">
                <img src="${product.imageUrl}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${product.name}</h3>
                    <p class="cart-item-meta">Size: ${item.selectedSize} | Quantity: ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <p class="cart-item-price">₹${product.price * item.quantity}</p>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    }).join('');
    
    const subtotal = state.cart.reduce((sum, item) => {
        const product = state.products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0);
    
    // Calculate delivery charge (free above ₹999, ₹49 below)
    const deliveryCharge = subtotal >= 999 ? 0 : 49;
    const total = subtotal + deliveryCharge;
    
    mainContent.innerHTML = `
        <div class="cart-container">
            <div class="page-header">
                <h1 class="page-title">Shopping Cart</h1>
                <p class="breadcrumb">Home / Cart</p>
            </div>
            
            <div class="cart-items">
                ${cartItems}
            </div>
            
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>₹${subtotal}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Charge</span>
                    <span>${deliveryCharge === 0 ? 'FREE' : '₹' + deliveryCharge}</span>
                </div>
                <div class="summary-row total">
                    <span>Total</span>
                    <span>₹${total}</span>
                </div>
            </div>
            
            <div class="booking-form">
                <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Pre-Booking Details</h2>
                <form onsubmit="proceedToPayment(event)">
                    <div class="form-group">
                        <label>Full Name *</label>
                        <input type="text" id="customerName" required placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label>Email *</label>
                        <input type="email" id="customerEmail" required placeholder="your@email.com">
                    </div>
                    <div class="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" id="customerPhone" required placeholder="+91 XXXXX XXXXX">
                    </div>
                    <div class="form-group">
                        <label>Delivery Address *</label>
                        <textarea id="customerAddress" required placeholder="Enter your complete delivery address" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label>City *</label>
                        <input type="text" id="customerCity" required placeholder="Enter your city">
                    </div>
                    <div class="form-group">
                        <label>Pincode *</label>
                        <input type="text" id="customerPincode" required placeholder="Enter pincode">
                    </div>
                    <button type="submit" class="btn-large btn-black" style="width: 100%; margin-top: 1rem;">
                        Proceed to Payment (₹${total})
                    </button>
                </form>
            </div>
        </div>
    `;
}

function removeFromCart(index) {
    state.cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
    updateCartCount();
    renderCartPage();
}

/* ========================================
   PAYMENT FUNCTIONALITY
   ======================================== */
function proceedToPayment(event) {
    event.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const city = document.getElementById('customerCity').value;
    const pincode = document.getElementById('customerPincode').value;
    
    const subtotal = state.cart.reduce((sum, item) => {
        const product = state.products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0);
    
    const deliveryCharge = subtotal >= 999 ? 0 : 49;
    const total = subtotal + deliveryCharge;
    
    // Store booking info temporarily
    state.currentBooking = { 
        name, 
        email, 
        phone, 
        address,
        city,
        pincode,
        subtotal,
        deliveryCharge,
        total 
    };
    
    // Show payment modal with both online and COD options
    showPaymentModal();
}

function showPaymentModal() {
    const booking = state.currentBooking;
    
    // Update online payment details
    document.getElementById('paymentDetails').innerHTML = `
        <div class="payment-row">
            <span>Store:</span>
            <span>Brand Hub</span>
        </div>
        <div class="payment-row">
            <span>Amount:</span>
            <span>₹${booking.total}</span>
        </div>
        <div class="payment-row">
            <span>Items:</span>
            <span>${state.cart.length}</span>
        </div>
        <div class="payment-row">
            <span>Customer:</span>
            <span>${booking.name}</span>
        </div>
    `;
    
    // Update COD details
    document.getElementById('codDetails').innerHTML = `
        <div class="payment-row">
            <span>Store:</span>
            <span>Brand Hub</span>
        </div>
        <div class="payment-row">
            <span>Amount to Pay:</span>
            <span>₹${booking.total}</span>
        </div>
        <div class="payment-row">
            <span>Items:</span>
            <span>${state.cart.length}</span>
        </div>
        <div class="payment-row">
            <span>Customer:</span>
            <span>${booking.name}</span>
        </div>
        <div class="payment-row">
            <span>Delivery Address:</span>
            <span>${booking.address}, ${booking.city} - ${booking.pincode}</span>
        </div>
    `;
    
    document.getElementById('paymentModal').classList.add('active');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function showPaymentTab(tab) {
    // Hide all payment contents
    document.querySelectorAll('.payment-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.payment-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tab + 'Payment').classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

function confirmPayment(paymentMethod) {
    // Generate booking code
    const date = new Date();
    const dateStr = date.getFullYear() + 
                   String(date.getMonth() + 1).padStart(2, '0') + 
                   String(date.getDate()).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const bookingCode = `BH-${dateStr}-${randomNum}`;
    
    // Store booking
    state.currentBooking.bookingCode = bookingCode;
    state.currentBooking.items = [...state.cart];
    state.currentBooking.timestamp = date.toISOString();
    state.currentBooking.paymentMethod = paymentMethod;
    
    // Clear cart
    state.cart = [];
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
    updateCartCount();
    
    // Close modal and navigate to confirmation
    closePaymentModal();
    navigateTo('/confirmation');
}

/* ========================================
   CONFIRMATION PAGE
   ======================================== */
function renderConfirmationPage() {
    const mainContent = document.getElementById('mainContent');
    
    if (!state.currentBooking) {
        navigateTo('/');
        return;
    }
    
    const booking = state.currentBooking;
    
    // Determine delivery method text
    const deliveryMethod = booking.paymentMethod === 'cod' ? 'Home Delivery' : 'Store Pickup';
    const paymentMethodText = booking.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment';
    
    mainContent.innerHTML = `
        <div class="confirmation-container">
            <div class="success-icon">✓</div>
            <h1 class="page-title">Booking Confirmed!</h1>
            <p style="font-size: 1.2rem; color: #666; margin-bottom: 2rem;">
                Your ${booking.paymentMethod === 'cod' ? 'order' : 'pre-booking'} has been successfully completed
            </p>
            
            <div class="booking-code">
                <p class="booking-code-label">Your ${booking.paymentMethod === 'cod' ? 'Order' : 'Booking'} Code</p>
                <p class="booking-code-value">${booking.bookingCode}</p>
            </div>
            
            <div style="background: #F5F5F5; padding: 2rem; border-radius: 8px; margin: 2rem 0; text-align: left;">
                <h3 style="margin-bottom: 1rem;">Order Summary</h3>
                ${booking.items.map(item => {
                    const product = state.products.find(p => p.id === item.productId);
                    return `<p>${product.name} (${item.selectedSize}) x ${item.quantity} - ₹${product.price * item.quantity}</p>`;
                }).join('')}
                <div style="margin-top: 1rem; border-top: 1px solid #ddd; padding-top: 1rem;">
                    <p>Subtotal: ₹${booking.subtotal}</p>
                    <p>Delivery Charge: ${booking.deliveryCharge === 0 ? 'FREE' : '₹' + booking.deliveryCharge}</p>
                    <p style="font-weight: 700; font-size: 1.2rem;">Total: ₹${booking.total}</p>
                    <p>Payment Method: ${paymentMethodText}</p>
                </div>
            </div>
            
            <div style="background: #E8F5E8; color: #2d5016; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h3 style="margin-bottom: 0.5rem;">${booking.paymentMethod === 'cod' ? '🚚 Delivery Information' : '📍 Pickup Instructions'}</h3>
                ${booking.paymentMethod === 'cod' ? `
                    <p>Your order will be delivered to:</p>
                    <p style="margin-top: 0.5rem;"><strong>${booking.name}</strong></p>
                    <p>${booking.address}</p>
                    <p>${booking.city} - ${booking.pincode}</p>
                    <p>Phone: ${booking.phone}</p>
                    <p style="margin-top: 1rem;"><strong>Delivery Timeline:</strong> 3-5 business days</p>
                    <p><strong>Payment:</strong> Pay ₹${booking.total} when your order is delivered</p>
                ` : `
                    <p>Please show this booking code at our store:</p>
                    <p style="margin-top: 0.5rem;"><strong>Brand Hub, 123 Fashion Street, Mumbai</strong></p>
                    <p>Store Hours: Mon-Sat, 10:00 AM - 8:00 PM</p>
                `}
            </div>
            
            <div class="action-buttons" style="justify-content: center;">
                <button class="btn-large btn-white" onclick="downloadReceipt()">📄 Download Receipt</button>
                <button class="btn-large btn-black" onclick="navigateTo('/')">Continue Shopping</button>
            </div>
        </div>
    `;
}

function downloadReceipt() {
    showToast('Receipt download functionality would be implemented here', 'info');
}

/* ========================================
   WISHLIST FUNCTIONALITY
   ======================================== */
function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast('Product removed from wishlist', 'info');
    } else {
        state.wishlist.push(productId);
        showToast('Product added to wishlist', 'success');
    }
    
    sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    updateWishlistCount();
    
    // Re-render current page
    router();
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = state.wishlist.length;
}

function renderWishlistPage() {
    const mainContent = document.getElementById('mainContent');
    
    if (state.wishlist.length === 0) {
        mainContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🤍</div>
                <h2>Your Wishlist is Empty</h2>
                <p>Save your favorite items to your wishlist</p>
                <button class="btn-primary" onclick="navigateTo('/products')">Browse Products</button>
            </div>
        `;
        return;
    }
    
    const wishlistProducts = state.products.filter(p => state.wishlist.includes(p.id));
    
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">My Wishlist</h1>
                <p class="breadcrumb">Home / Wishlist</p>
            </div>
            <div class="products-grid">
                ${wishlistProducts.map(product => `
                    <div class="wishlist-item">
                        <div class="remove-wishlist" onclick="removeFromWishlist(${product.id})">✕</div>
                        ${createProductCard(product)}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function removeFromWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
        sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        updateWishlistCount();
        renderWishlistPage();
        showToast('Product removed from wishlist', 'info');
    }
}

/* ========================================
   ADMIN PANEL - ENHANCED
   ======================================== */
function renderAdminPage() {
    const mainContent = document.getElementById('mainContent');
    
    if (!state.isAdmin) {
        const password = prompt('Enter admin password:');
        if (password !== 'admin123') {
            alert('Incorrect password');
            navigateTo('/admin');
            return;
        }
        state.isAdmin = true;
        sessionStorage.setItem('isAdmin', 'true');
    }
    
    mainContent.innerHTML = `
        <div class="admin-container">
            <div class="page-header">
                <h1 class="page-title">Admin Panel</h1>
                <div class="admin-actions">
                    <button class="btn-white" onclick="logoutAdmin()">Logout</button>
                    <button class="btn-black" onclick="showAdminSection('manage')">Manage Products</button>
                    <button class="btn-black" onclick="showAdminSection('add')">Add Product</button>
                    <button class="btn-black" onclick="showAdminSection('analytics')">Analytics</button>
                </div>
            </div>
            
            <div class="admin-sections">
                <!-- Add Product Section -->
                <div id="addProductSection" class="admin-section active">
                    <h2>Add New Product</h2>
                    <form onsubmit="addProduct(event)" class="admin-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label>Product Name *</label>
                                <input type="text" id="productName" required placeholder="Enter product name">
                            </div>
                            <div class="form-group">
                                <label>Price (₹) *</label>
                                <input type="number" id="productPrice" required placeholder="Enter price">
                            </div>
                            <div class="form-group">
                                <label>Category *</label>
                                <select id="productCategory" required onchange="updateSubcategories()">
                                    <option value="">Select Category</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Subcategory *</label>
                                <select id="productSubcategory" required>
                                    <option value="">Select category first</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Image URL *</label>
                                <input type="url" id="productImage" required placeholder="https://example.com/image.jpg">
                            </div>
                            <div class="form-group">
                                <label>Sales Type *</label>
                                <select id="productSalesType" required>
                                    <option value="trending">Trending</option>
                                    <option value="new">New Arrivals</option>
                                    <option value="sale">Sale</option>
                                    <option value="top-brand">Top Brand</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Description *</label>
                            <textarea id="productDescription" required rows="3" placeholder="Enter product description"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Available Sizes (comma separated) *</label>
                            <input type="text" id="productSizes" required placeholder="S, M, L, XL">
                        </div>
                        <div class="form-group">
                            <label>Rating (1-5)</label>
                            <input type="number" id="productRating" min="1" max="5" step="0.1" value="4.0">
                        </div>
                        <div class="form-group">
                            <label>Number of Reviews</label>
                            <input type="number" id="productReviews" min="0" value="0">
                        </div>
                        <button type="submit" class="btn-large btn-black">Add Product</button>
                    </form>
                </div>
                
                <!-- Manage Products Section -->
                <div id="manageProductsSection" class="admin-section">
                    <h2>Manage Products</h2>
                    <div class="admin-search">
                        <input type="text" id="adminSearch" placeholder="Search products..." onkeyup="filterAdminProducts()">
                        <span>🔍</span>
                    </div>
                    <div class="products-table-container">
                        <table class="products-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="adminProductsTable">
                                ${state.products.map(product => `
                                    <tr>
                                        <td>${product.id}</td>
                                        <td>
                                            <img src="${product.imageUrl}" alt="${product.name}" class="admin-product-image">
                                        </td>
                                        <td>${product.name}</td>
                                        <td>${product.category} / ${product.subcategory}</td>
                                        <td>₹${product.price}</td>
                                        <td>${generateStarRating(product.rating)} (${product.rating})</td>
                                        <td>
                                            <button class="btn-edit" onclick="editProduct(${product.id})">Edit</button>
                                            <button class="btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Analytics Section -->
                <div id="analyticsSection" class="admin-section">
                    <h2>Store Analytics</h2>
                    <div class="analytics-grid">
                        <div class="analytics-card">
                            <div class="analytics-icon">📦</div>
                            <div class="analytics-content">
                                <h3>Total Products</h3>
                                <p class="analytics-value">${state.products.length}</p>
                            </div>
                        </div>
                        <div class="analytics-card">
                            <div class="analytics-icon">👔</div>
                            <div class="analytics-content">
                                <h3>Men's Products</h3>
                                <p class="analytics-value">${state.products.filter(p => p.category === 'men').length}</p>
                            </div>
                        </div>
                        <div class="analytics-card">
                            <div class="analytics-icon">👗</div>
                            <div class="analytics-content">
                                <h3>Women's Products</h3>
                                <p class="analytics-value">${state.products.filter(p => p.category === 'women').length}</p>
                            </div>
                        </div>
                        <div class="analytics-card">
                            <div class="analytics-icon">💰</div>
                            <div class="analytics-content">
                                <h3>Average Price</h3>
                                <p class="analytics-value">₹${Math.round(state.products.reduce((sum, p) => sum + p.price, 0) / state.products.length)}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="category-breakdown">
                        <h3>Products by Category</h3>
                        <div class="category-stats">
                            ${Object.entries(state.categories).map(([key, category]) => {
                                const count = state.products.filter(p => p.category === key).length;
                                const percentage = (count / state.products.length * 100).toFixed(1);
                                return `
                                    <div class="category-stat">
                                        <div class="stat-header">
                                            <span>${category.name}</span>
                                            <span>${count} (${percentage}%)</span>
                                        </div>
                                        <div class="stat-bar">
                                            <div class="stat-fill" style="width: ${percentage}%"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize the form
    updateSubcategories();
}

function showAdminSection(section) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(section + 'ProductsSection').classList.add('active');
}

function updateSubcategories() {
    const category = document.getElementById('productCategory').value;
    const subcatSelect = document.getElementById('productSubcategory');
    
    if (category && state.categories[category]) {
        subcatSelect.innerHTML = state.categories[category].subcategories
            .map(sub => `<option value="${sub.id}">${sub.name}</option>`)
            .join('');
    } else {
        subcatSelect.innerHTML = '<option value="">Select category first...</option>';
    }
}

function addProduct(event) {
    event.preventDefault();
    
    const newProduct = {
        id: Math.max(...state.products.map(p => p.id)) + 1,
        name: document.getElementById('productName').value,
        price: parseInt(document.getElementById('productPrice').value),
        category: document.getElementById('productCategory').value,
        subcategory: document.getElementById('productSubcategory').value,
        imageUrl: document.getElementById('productImage').value,
        salesType: document.getElementById('productSalesType').value,
        description: document.getElementById('productDescription').value,
        sizes: document.getElementById('productSizes').value.split(',').map(s => s.trim()),
        rating: parseFloat(document.getElementById('productRating').value) || 4.0,
        reviews: parseInt(document.getElementById('productReviews').value) || 0
    };
    
    state.products.push(newProduct);
    showToast('Product added successfully!', 'success');
    
    // Reset form
    event.target.reset();
    updateSubcategories();
    
    // Refresh the products table if visible
    if (document.getElementById('manageProductsSection').classList.contains('active')) {
        renderAdminPage();
    }
}

function editProduct(id) {
    const product = state.products.find(p => p.id === id);
    if (!product) return;
    
    // Populate form with product data
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    updateSubcategories();
    setTimeout(() => {
        document.getElementById('productSubcategory').value = product.subcategory;
    }, 100);
    document.getElementById('productImage').value = product.imageUrl;
    document.getElementById('productSalesType').value = product.salesType;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productSizes').value = product.sizes.join(', ');
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productReviews').value = product.reviews;
    
    // Switch to add product section
    showAdminSection('add');
    
    // Change button to update
    const form = document.querySelector('.admin-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Update Product';
    submitBtn.onclick = function(e) {
        e.preventDefault();
        updateProduct(id);
    };
    
    showToast(`Editing: ${product.name}`, 'info');
}

function updateProduct(id) {
    const productIndex = state.products.findIndex(p => p.id === id);
    if (productIndex === -1) return;
    
    const updatedProduct = {
        id: id,
        name: document.getElementById('productName').value,
        price: parseInt(document.getElementById('productPrice').value),
        category: document.getElementById('productCategory').value,
        subcategory: document.getElementById('productSubcategory').value,
        imageUrl: document.getElementById('productImage').value,
        salesType: document.getElementById('productSalesType').value,
        description: document.getElementById('productDescription').value,
        sizes: document.getElementById('productSizes').value.split(',').map(s => s.trim()),
        rating: parseFloat(document.getElementById('productRating').value),
        reviews: parseInt(document.getElementById('productReviews').value)
    };
    
    state.products[productIndex] = updatedProduct;
    showToast('Product updated successfully!', 'success');
    
    // Reset form and button
    const form = document.querySelector('.admin-form');
    form.reset();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Add Product';
    submitBtn.onclick = function(e) {
        e.preventDefault();
        addProduct(e);
    };
    
    // Refresh admin page
    renderAdminPage();
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        state.products = state.products.filter(p => p.id !== id);
        showToast('Product deleted successfully!', 'success');
        renderAdminPage();
    }
}

function filterAdminProducts() {
    const query = document.getElementById('adminSearch').value.toLowerCase();
    const rows = document.querySelectorAll('#adminProductsTable tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function logoutAdmin() {
    state.isAdmin = false;
    sessionStorage.removeItem('isAdmin');
    showToast('Logged out from admin panel', 'info');
    navigateTo('/');
}

/* ========================================
   PRODUCT CARD COMPONENT
   ======================================== */
function createProductCard(product) {
    const isInWishlist = state.wishlist.includes(product.id);
    
    return `
        <div class="product-card" onclick="navigateTo('/product/${product.id}')">
            <div class="wishlist-icon ${isInWishlist ? 'active' : ''}" 
                 onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                ${isInWishlist ? '❤️' : '🤍'}
            </div>
            <div class="quick-view-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
                👁️
            </div>
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${generateStarRating(product.rating)} 
                    <span>(${product.reviews})</span>
                </div>
                <p class="product-price">₹${product.price}</p>
            </div>
        </div>
    `;
}

/* ========================================
   QUICK VIEW MODAL
   ======================================== */
function openQuickView(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    const isInWishlist = state.wishlist.includes(productId);
    
    document.getElementById('quickViewContent').innerHTML = `
        <div class="quick-view-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <img src="${product.imageUrl}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
            </div>
            <div>
                <h2 style="margin-bottom: 0.5rem;">${product.name}</h2>
                <div class="product-rating" style="margin-bottom: 1rem;">
                    ${generateStarRating(product.rating)} 
                    <span>(${product.reviews} reviews)</span>
                </div>
                <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">₹${product.price}</p>
                <p style="margin-bottom: 1.5rem;">${product.description}</p>
                
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                    <button class="btn-large btn-black" onclick="addToCart(${product.id}); closeQuickView();">Add to Cart</button>
                    <button class="btn-large btn-white" onclick="toggleWishlist(${product.id}); closeQuickView();">
                        ${isInWishlist ? '❤️' : '🤍'}
                    </button>
                </div>
                
                <button class="btn-large btn-black" style="width: 100%;" onclick="navigateTo('/product/${product.id}'); closeQuickView();">
                    View Full Details
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('quickViewModal').classList.add('active');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('active');
}

/* ========================================
   SEARCH FUNCTIONALITY
   ======================================== */
function handleSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.toLowerCase();
        const results = state.products.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
        
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="page-container">
                <div class="page-header">
                    <h1 class="page-title">Search Results for "${query}"</h1>
                    <p class="breadcrumb">Found ${results.length} products</p>
                </div>
                <div class="products-grid">
                    ${results.length > 0 ? 
                        results.map(product => createProductCard(product)).join('') :
                        '<p style="text-align: center; grid-column: 1/-1;">No products found</p>'
                    }
                </div>
            </div>
        `;
    }
}

/* ========================================
   404 PAGE
   ======================================== */
function render404Page() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">404</div>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist</p>
            <button class="btn-primary" onclick="navigateTo('/')">Go Home</button>
        </div>
    `;
}

/* ========================================
   CUSTOMER AUTHENTICATION SYSTEM
   ======================================== */
function openAuthModal() {
    const modal = document.getElementById('customerAuthModal');
    modal.classList.add('active');
    showLogin();
}

function closeAuthModal() {
    document.getElementById('customerAuthModal').classList.remove('active');
}

function showLogin() {
    document.getElementById('tabLogin').classList.add('active');
    document.getElementById('tabRegister').classList.remove('active');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegister() {
    document.getElementById('tabLogin').classList.remove('active');
    document.getElementById('tabRegister').classList.add('active');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function userIsLoggedIn() {
    return sessionStorage.getItem('customer');
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const savedUser = JSON.parse(localStorage.getItem('customer'));
    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
        showToast('Invalid email or password', 'error');
        return;
    }
    
    sessionStorage.setItem('customer', JSON.stringify(savedUser));
    closeAuthModal();
    showToast('Login successful!', 'success');
    updateAuthButton();
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const newUser = { name, email, password };
    localStorage.setItem('customer', JSON.stringify(newUser));
    sessionStorage.setItem('customer', JSON.stringify(newUser));
    closeAuthModal();
    showToast('Registration successful!', 'success');
    updateAuthButton();
}

/* ========================================
   USER DROPDOWN FUNCTIONALITY
   ======================================== */
function updateAuthButton() {
    const customer = JSON.parse(sessionStorage.getItem('customer'));
    const authBtn = document.getElementById('customerAuthBtn');
    const dropdownContent = document.getElementById('userDropdownContent');
    
    if (customer) {
        authBtn.innerHTML = `👤 ${customer.name.split(' ')[0]}`;
        authBtn.title = `Logged in as ${customer.name}`;
        
        // Update dropdown content for logged-in user
        dropdownContent.innerHTML = `
            <div class="user-info">
                <div class="user-name">${customer.name}</div>
                <div class="user-email">${customer.email}</div>
            </div>
            <button class="dropdown-item" onclick="navigateTo('/wishlist'); closeUserDropdown()">
                <span>🤍</span> My Wishlist
            </button>
            <button class="dropdown-item" onclick="navigateTo('/cart'); closeUserDropdown()">
                <span>🛒</span> My Cart
            </button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item logout" onclick="logoutCustomer()">
                <span>🚪</span> Logout
            </button>
        `;
        
        // Add click handler for mobile
        authBtn.onclick = function() {
            if (window.innerWidth <= 768) {
                document.querySelector('.user-dropdown').classList.toggle('active');
            }
        };
    } else {
        authBtn.innerHTML = '👤';
        authBtn.title = 'Account';
        
        // Update dropdown content for guest
        dropdownContent.innerHTML = `
            <button class="dropdown-item" onclick="openAuthModal(); closeUserDropdown()">
                <span>🔐</span> Login / Register
            </button>
            <button class="dropdown-item" onclick="navigateTo('/wishlist'); closeUserDropdown()">
                <span>🤍</span> Wishlist
            </button>
            <button class="dropdown-item" onclick="navigateTo('/cart'); closeUserDropdown()">
                <span>🛒</span> Cart
            </button>
        `;
        
        // Restore original functionality for mobile
        authBtn.onclick = function() {
            if (window.innerWidth <= 768) {
                document.querySelector('.user-dropdown').classList.toggle('active');
            } else {
                openAuthModal();
            }
        };
    }
}

function closeUserDropdown() {
    document.querySelector('.user-dropdown').classList.remove('active');
}

function logoutCustomer() {
    sessionStorage.removeItem('customer');
    updateAuthButton();
    closeUserDropdown();
    showToast('Logged out successfully!', 'info');
}

/* ========================================
   ADMIN LOGIN FIX
   ======================================== */
function openAdminLogin() {
    // Check if already logged in as admin
    if (state.isAdmin) {
        navigateTo('/admin');
        return;
    }
    
    // Check if customer is logged in
    if (userIsLoggedIn()) {
        if (confirm('You are logged in as a customer. Do you want to logout and access admin panel?')) {
            logoutCustomer();
            // Wait a bit before showing admin login
            setTimeout(() => {
                const password = prompt('Enter admin password:');
                if (password === 'admin123') {
                    state.isAdmin = true;
                    sessionStorage.setItem('isAdmin', 'true');
                    navigateTo('/admin');
                } else if (password) {
                    alert('Incorrect password');
                }
            }, 500);
        }
        return;
    }
    
    // Direct admin login
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
        state.isAdmin = true;
        sessionStorage.setItem('isAdmin', 'true');
        navigateTo('/admin');
    } else if (password) {
        alert('Incorrect password');
    }
}

/* ========================================
   TOAST NOTIFICATION SYSTEM
   ======================================== */
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    
    // Set background color based on type
    if (type === 'success') {
        toast.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        toast.style.backgroundColor = '#f44336';
    } else if (type === 'info') {
        toast.style.backgroundColor = '#2196F3';
    }
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

/* ========================================
   NEWSLETTER SUBSCRIPTION
   ======================================== */
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (email && validateEmail(email)) {
        showToast('Thank you for subscribing to our newsletter!', 'success');
        document.getElementById('newsletterEmail').value = '';
    } else {
        showToast('Please enter a valid email address', 'error');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ========================================
   INITIALIZATION
   ======================================== */
window.addEventListener('load', function() {
    initializeProducts();
    router();
    updateAuthButton();
    
    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('navbarMenu').classList.toggle('active');
    });
});

window.addEventListener('hashchange', router);

// Add click outside to close modal and dropdown
window.addEventListener('click', function(event) {
    const authModal = document.getElementById('customerAuthModal');
    const paymentModal = document.getElementById('paymentModal');
    const quickViewModal = document.getElementById('quickViewModal');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (event.target === authModal) {
        closeAuthModal();
    }
    if (event.target === paymentModal) {
        closePaymentModal();
    }
    if (event.target === quickViewModal) {
        closeQuickView();
    }
    if (!userDropdown.contains(event.target)) {
        closeUserDropdown();
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const authBtn = document.getElementById("customerAuthBtn");
  const dropdownMenu = document.getElementById("userDropdownMenu");

  authBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !authBtn.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});
