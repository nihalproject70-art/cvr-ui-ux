/**
 * CVR Handicrafts - Premium Luxury E-Commerce Landing Page Script
 * Interactivity: Persistent Cart, Quick View Modal, Live Catalog Search, Testimonials Slider, Form Validation, Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       1. STATIC PRODUCT DATA (FOR SEARCH & MODALS)
       ========================================== */
    const PRODUCT_CATALOG = [
        { id: "sculp-1", name: "Teakwood Elephant Statue", price: 245.00, wood: "Premium Teakwood", artisan: "Master Devappa Acharya", image: "assets/cat_sculptures.png", category: "Wooden Sculptures", desc: "An incredibly detailed sculpture of an imperial elephant carved from a single block of premium aged teakwood. Features ornate traditional saddle reliefs, fine trunk folds, and polished gold mahogany finish." },
        { id: "sculp-2", name: "Rosewood Meditating Buddha", price: 320.00, wood: "Indian Rosewood (Sissoo)", artisan: "Artisan Ramanujam G.", image: "assets/cat_sculptures.png", category: "Wooden Sculptures", desc: "Carved from dark deep rosewood, this serene meditating Buddha features flawless polishing, showcasing the exquisite natural wood grains. A perfect masterpiece for calm home decor." },
        { id: "sculp-3", name: "Mahogany Dancing Ganesha", price: 450.00, wood: "Honduran Mahogany", artisan: "Master Devappa Acharya", image: "assets/cat_sculptures.png", category: "Wooden Sculptures", desc: "A vibrant, multi-layered dancing Ganesha carving. Each hand holds symbolic attributes etched with dynamic precision. Finished with a luxury gold wax varnish." },
        { id: "sculp-4", name: "Vintage Oak Graceful Peacock", price: 185.00, wood: "Aged Oak Wood", artisan: "Artisan K. Somasekhar", image: "assets/cat_sculptures.png", category: "Wooden Sculptures", desc: "Features a graceful peacock displaying detailed feather cutouts, showcasing the high-texture rings of premium chiseled white oak. Coated with organic wax." },
        
        { id: "mask-1", name: "Traditional Oak Tribal Mask", price: 110.00, wood: "Red Oak Wood", artisan: "Master Carver Balaji Naik", image: "assets/cat_masks.png", category: "Wooden Masks", desc: "Inspired by historic folklore art, this tribal mask is carefully hand-carved, utilizing organic natural pigments, offering a captivating rustic edge to modern walls." },
        { id: "mask-2", name: "Antique Teak Guardian Mask", price: 135.00, wood: "Reclaimed Teakwood", artisan: "Master Carver Balaji Naik", image: "assets/cat_masks.png", category: "Wooden Masks", desc: "An ornate protective guardian mask displaying highly fine detailing on the eyebrows and crown, carved from tough old teak boards. Polished to a dark mahogany gleam." },
        { id: "mask-3", name: "Golden Accents Sun & Moon Mask", price: 160.00, wood: "Polished Jackwood", artisan: "Artisan Ramanujam G.", image: "assets/cat_masks.png", category: "Wooden Masks", desc: "This stunning mask features intricate gold-leafing along chiseled celestial accents. Hand carved from local jackwood, featuring warm golden wood-grains." },
        { id: "mask-4", name: "Rustic Cedar Ancestral Mask", price: 95.00, wood: "Aromatic Cedar", artisan: "Artisan K. Somasekhar", image: "assets/cat_masks.png", category: "Wooden Masks", desc: "Exhibiting primitive raw-cut design aesthetics, this fragrant red cedar mask highlights natural knotholes and authentic chisel scoring marks." },
        
        { id: "dec-1", name: "Artisan Teakwood Flower Vase", price: 85.00, wood: "Burmese Teakwood", artisan: "Master Devappa Acharya", image: "assets/cat_decor.png", category: "Home Decor", desc: "A beautiful organic-shaped teak vase featuring striking golden-brown wood grains, chiseled spiral contours, and a waterproof internal lacquer lining." },
        { id: "dec-2", name: "Cedarwood Candle Holders (Set of 3)", price: 65.00, wood: "Red Cedarwood", artisan: "Artisan K. Somasekhar", image: "assets/cat_decor.png", category: "Home Decor", desc: "A set of three tiered candle pillars carved from solid cedar. Each features a brass candle plate inlay and deep hand-brushed rustic textures." },
        { id: "dec-3", name: "Ornate Sandalwood Jewelry Chest", price: 150.00, wood: "East Indian Sandalwood", artisan: "Artisan Ramanujam G.", image: "assets/cat_decor.png", category: "Home Decor", desc: "Exuding a mild natural fragrance, this beautiful chest features brass-pinned corners, velvet-lined drawers, and intricate lotus blossom engravings." },
        { id: "dec-4", name: "Polished Walnut Bowl", price: 45.00, wood: "Black Walnut Wood", artisan: "Master Carver Balaji Naik", image: "assets/cat_decor.png", category: "Home Decor", desc: "A minimalist, sleek hand-lathed decorative bowl made from premium American walnut. Features deep espresso rings and satin beeswax seal." },
        
        { id: "wall-1", name: "Geometric Cedarwood Wall Panel", price: 190.00, wood: "Red Cedarwood", artisan: "Artisan K. Somasekhar", image: "assets/cat_wall_art.png", category: "Wall Art", desc: "A sophisticated modern cedar wall relief, featuring interlocking chiseled geometric forms and a multi-tone brown organic dye." },
        { id: "wall-2", name: "Ornate Teak Tree of Life Carving", price: 280.00, wood: "Burmese Teakwood", artisan: "Master Devappa Acharya", image: "assets/cat_wall_art.png", category: "Wall Art", desc: "Representing connection and balance, this masterwork captures intricate leaves and roots carved with depth layers from massive teak slab." },
        { id: "wall-3", name: "Hand-chiseled Walnut Forest Relief", price: 340.00, wood: "Premium Walnut", artisan: "Master Carver Balaji Naik", image: "assets/cat_wall_art.png", category: "Wall Art", desc: "Featuring a majestic 3D relief of a dense forest canopy. The shadows dynamically shift under lighting, highlighting high-end wood artistry." },
        { id: "wall-4", name: "Gold Accented Pine Sunburst Plaque", price: 165.00, wood: "Aged Pine Wood", artisan: "Artisan Ramanujam G.", image: "assets/cat_wall_art.png", category: "Wall Art", desc: "Radiating chiseled pine rays tipped in elegant gold leaf paint. Bring warm solar rays and organic textures onto your entryway." },
        
        { id: "gift-1", name: "Handcrafted Oak Chess Set", price: 180.00, wood: "Oak & Walnut Wood", artisan: "Master Devappa Acharya", image: "assets/cat_gift.png", category: "Gift Items", desc: "A gorgeous checkerboard chess set with custom chiseled pieces, built-in drawer compartments, and protective felt-lined bottoms." },
        { id: "gift-2", name: "Teakwood Desk Organizer", price: 55.00, wood: "Premium Teak", artisan: "Artisan K. Somasekhar", image: "assets/cat_gift.png", category: "Gift Items", desc: "The ultimate luxury workspace upgrade. Contains three compartments, phone slot, cardholder slots, and smooth pen cavities." },
        { id: "gift-3", name: "Mahogany Decorative Coaster Set", price: 40.00, wood: "Honduran Mahogany", artisan: "Artisan Ramanujam G.", image: "assets/cat_gift.png", category: "Gift Items", desc: "A set of 6 beautiful round mahogany coasters with elegant laser-etched traditional mandala designs and a premium mahogany display holder." },
        { id: "gift-4", name: "Cedarwood Potpourri Urn", price: 30.00, wood: "Red Cedarwood", artisan: "Master Carver Balaji Naik", image: "assets/cat_gift.png", category: "Gift Items", desc: "A beautiful hollow cedar sphere featuring dynamic organic mesh cutouts to let aromatic fragrances filter seamlessly. Coated with organic glaze." },
        
        { id: "cust-1", name: "Custom Name Carved Plaque", price: 75.00, wood: "Burmese Teakwood", artisan: "Bespoke Design Team", image: "assets/cat_custom.png", category: "Custom Handicrafts", desc: "A beautiful personalized home entrance plaque. Custom deep-carved letters with decorative leafy borders, protected with exterior UV-block seal." },
        { id: "cust-2", name: "Bespoke Walnut Dining Trivet", price: 90.00, wood: "Premium Black Walnut", artisan: "Bespoke Design Team", image: "assets/cat_custom.png", category: "Custom Handicrafts", desc: "Personalized with custom monograms or quotes. Ideal for luxury table protection, carved with custom channels to insulate thermal heat." },
        { id: "cust-3", name: "Hand-tailored Cherry Keepsake Box", price: 120.00, wood: "Aged Cherry Wood", artisan: "Bespoke Design Team", image: "assets/cat_custom.png", category: "Custom Handicrafts", desc: "A clean cherry memory box crafted with custom divider slots, custom monogram plaque, and hidden solid brass hinges." },
        { id: "cust-4", name: "Made-to-Order Heritage Shield", price: 210.00, wood: "Aged Pine & Cedar", artisan: "Bespoke Design Team", image: "assets/cat_custom.png", category: "Custom Handicrafts", desc: "Featuring family heraldry crests or unique motifs hand-etched onto thick pine boards, custom finished with natural oils." }
    ];

    /* ==========================================
       2. STICKY HEADER & MOBILE NAV TOGGLES
       ========================================== */
    const mainHeader = document.getElementById('mainHeader');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavPanel = document.getElementById('mobileNavPanel');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle header sticky on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('sticky');
        } else {
            mainHeader.classList.remove('sticky');
        }
        highlightActiveSection();
    });

    // Mobile Hamburger Menu Action
    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenuToggle.classList.toggle('active');
        mobileNavPanel.classList.toggle('active');
    });

    window.toggleMobileNav = () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.classList.remove('active');
        mobileNavPanel.classList.remove('active');
    };

    // Scrollspy navigation highlighter
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    /* ==========================================
       3. SHOPPING CART SYSTEM (LOCALSTORAGE)
       ========================================== */
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('cvr_cart')) || [];
    } catch (e) {
        console.warn("Storage access is restricted under local file protocol. Using in-memory session cart instead.");
        cart = [];
    }
    
    const cartOpenBtn = document.getElementById('cartOpenBtn');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const cartCountBadge = document.getElementById('cartCountBadge');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Cart Drawer Toggle UI
    cartOpenBtn.addEventListener('click', toggleCartDrawer);
    cartCloseBtn.addEventListener('click', toggleCartDrawer);
    cartDrawerBackdrop.addEventListener('click', toggleCartDrawer);

    function toggleCartDrawer() {
        cartDrawer.classList.toggle('active');
        cartDrawerBackdrop.classList.toggle('active');
    }

    // Add Item to Cart Array
    function addToCart(id, name, price, image, quantity = 1) {
        price = parseFloat(price);
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id, name, price, image, quantity });
        }
        
        updateCartState();
        renderCartUI();
        
        // Open Cart Drawer automatically as micro-interaction feedback
        cartDrawer.classList.add('active');
        cartDrawerBackdrop.classList.add('active');
    }

    // Remove Item from Cart Array
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartState();
        renderCartUI();
    }

    // Update Quantity of Item in Cart Array
    function updateQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                updateCartState();
                renderCartUI();
            }
        }
    }

    // Save cart state in localStorage and update badges
    function updateCartState() {
        try {
            localStorage.setItem('cvr_cart', JSON.stringify(cart));
        } catch (e) {
            // Storage access restricted under file protocol, fail silently
        }
        const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountBadge.textContent = totalItemsCount;
    }

    // Render Cart HTML inside Drawer
    function renderCartUI() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart-empty-message">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <p>Your luxury shopping bag is currently empty.</p>
                    <a href="#shop" class="btn btn-gold" style="padding: 0.6rem 1.4rem; font-size: 0.75rem;" id="emptyCartShopBtn">Explore Shop</a>
                </div>
            `;
            // Add listener to empty shop button to close drawer on navigate
            document.getElementById('emptyCartShopBtn').addEventListener('click', toggleCartDrawer);
            cartSubtotal.textContent = '$0.00';
            cartTotal.textContent = '$0.00';
            return;
        }

        let subtotal = 0;

        cart.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.className = 'cart-item-row';
            
            const lineTotal = item.price * item.quantity;
            subtotal += lineTotal;

            // Apply conditional filter for image aesthetics if needed
            let imgStyle = "";
            if (item.id.includes("sculp")) {
                if (item.id === "sculp-2") imgStyle = "filter: hue-rotate(20deg) contrast(1.1);";
                if (item.id === "sculp-3") imgStyle = "filter: sepia(0.3) saturate(1.2);";
                if (item.id === "sculp-4") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            } else if (item.id.includes("mask")) {
                if (item.id === "mask-2") imgStyle = "filter: brightness(0.9) sepia(0.2);";
                if (item.id === "mask-3") imgStyle = "filter: saturate(1.4) hue-rotate(-10deg);";
                if (item.id === "mask-4") imgStyle = "filter: contrast(0.9) brightness(1.15);";
            } else if (item.id.includes("dec")) {
                if (item.id === "dec-2") imgStyle = "filter: sepia(0.2) brightness(0.95);";
                if (item.id === "dec-3") imgStyle = "filter: brightness(1.1) hue-rotate(15deg);";
                if (item.id === "dec-4") imgStyle = "filter: hue-rotate(-20deg) contrast(1.15);";
            } else if (item.id.includes("wall")) {
                if (item.id === "wall-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
                if (item.id === "wall-3") imgStyle = "filter: brightness(0.9) sepia(0.3);";
                if (item.id === "wall-4") imgStyle = "filter: saturate(1.3) brightness(1.15);";
            } else if (item.id.includes("gift")) {
                if (item.id === "gift-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
                if (item.id === "gift-3") imgStyle = "filter: brightness(0.9) contrast(1.2);";
                if (item.id === "gift-4") imgStyle = "filter: saturate(1.3) hue-rotate(20deg);";
            } else if (item.id.includes("cust")) {
                if (item.id === "cust-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
                if (item.id === "cust-3") imgStyle = "filter: brightness(0.9) contrast(1.2);";
                if (item.id === "cust-4") imgStyle = "filter: saturate(1.3) hue-rotate(10deg);";
            }

            itemRow.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" style="${imgStyle}">
                </div>
                <div class="cart-item-details">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <button class="cart-item-remove-btn" data-id="${item.id}" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    <div class="cart-item-actions">
                        <div class="qty-controls">
                            <button class="qty-btn dec-qty-btn" data-id="${item.id}" aria-label="Decrease quantity">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn inc-qty-btn" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(itemRow);
        });

        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;

        // Wire Up Interactive Row Buttons
        document.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = btn.getAttribute('data-id');
                removeFromCart(id);
            });
        });

        document.querySelectorAll('.dec-qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                updateQuantity(id, -1);
            });
        });

        document.querySelectorAll('.inc-qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                updateQuantity(id, 1);
            });
        });
    }

    // Attach cart actions on catalog card grids
    document.body.addEventListener('click', (e) => {
        const targetBtn = e.target.closest('.add-to-cart-btn');
        if (targetBtn) {
            const id = targetBtn.getAttribute('data-id');
            const name = targetBtn.getAttribute('data-name');
            const price = targetBtn.getAttribute('data-price');
            const image = targetBtn.getAttribute('data-image');
            
            addToCart(id, name, price, image, 1);
        }
    });

    // Checkout trigger simulation
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        
        alert(`Proceeding to checkout with ${cart.length} unique masterpiece(s)!\nTotal Order Value: ${cartTotal.textContent}\n\nSafe luxury transit packing is guaranteed.`);
        // Reset Cart on mock purchase completion
        cart = [];
        updateCartState();
        renderCartUI();
        toggleCartDrawer();
    });

    // Initialize cart state on load
    updateCartState();
    renderCartUI();

    /* ==========================================
       4. QUICK VIEW MODAL & BINDINGS
       ========================================== */
    const quickViewBackdrop = document.getElementById('quickViewBackdrop');
    const quickViewCloseBtn = document.getElementById('quickViewCloseBtn');
    const qvProductImage = document.getElementById('qvProductImage');
    const qvProductWood = document.getElementById('qvProductWood');
    const qvProductTitle = document.getElementById('qvProductTitle');
    const qvProductPrice = document.getElementById('qvProductPrice');
    const qvProductDescription = document.getElementById('qvProductDescription');
    const qvProductArtisan = document.getElementById('qvProductArtisan');
    const qvQtyVal = document.getElementById('qvQtyVal');
    const qvQtyDec = document.getElementById('qvQtyDec');
    const qvQtyInc = document.getElementById('qvQtyInc');
    const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');

    let qvActiveProduct = null;
    let qvQty = 1;

    // Attach listeners on clicking elements
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.quick-view-trigger');
        if (trigger) {
            const id = trigger.getAttribute('data-id');
            const name = trigger.getAttribute('data-name');
            const price = trigger.getAttribute('data-price');
            const image = trigger.getAttribute('data-image');
            const wood = trigger.getAttribute('data-wood');
            const artisan = trigger.getAttribute('data-artisan');
            const description = trigger.getAttribute('data-description');

            qvActiveProduct = { id, name, price, image };
            qvQty = 1;
            qvQtyVal.textContent = qvQty;

            // Load content into Quick View Elements
            qvProductTitle.textContent = name;
            qvProductPrice.textContent = `$${parseFloat(price).toFixed(2)}`;
            qvProductImage.src = image;
            qvProductWood.textContent = wood;
            qvProductArtisan.textContent = artisan;
            qvProductDescription.textContent = description;

            // Apply image visual filters in Quick View matching original cards
            let imgStyle = "";
            if (id === "sculp-2") imgStyle = "filter: hue-rotate(20deg) contrast(1.1);";
            if (id === "sculp-3") imgStyle = "filter: sepia(0.3) saturate(1.2);";
            if (id === "sculp-4") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            if (id === "mask-2") imgStyle = "filter: brightness(0.9) sepia(0.2);";
            if (id === "mask-3") imgStyle = "filter: saturate(1.4) hue-rotate(-10deg);";
            if (id === "mask-4") imgStyle = "filter: contrast(0.9) brightness(1.15);";
            if (id === "dec-2") imgStyle = "filter: sepia(0.2) brightness(0.95);";
            if (id === "dec-3") imgStyle = "filter: brightness(1.1) hue-rotate(15deg);";
            if (id === "dec-4") imgStyle = "filter: hue-rotate(-20deg) contrast(1.15);";
            if (id === "wall-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
            if (id === "wall-3") imgStyle = "filter: brightness(0.9) sepia(0.3);";
            if (id === "wall-4") imgStyle = "filter: saturate(1.3) brightness(1.15);";
            if (id === "gift-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
            if (id === "gift-3") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            if (id === "gift-4") imgStyle = "filter: saturate(1.3) hue-rotate(20deg);";
            if (id === "cust-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
            if (id === "cust-3") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            if (id === "cust-4") imgStyle = "filter: saturate(1.3) hue-rotate(10deg);";
            qvProductImage.style = imgStyle;

            // Open Modal
            quickViewBackdrop.classList.add('active');
        }
    });

    // Close Modal Controls
    quickViewCloseBtn.addEventListener('click', closeQuickView);
    quickViewBackdrop.addEventListener('click', (e) => {
        if (e.target === quickViewBackdrop) closeQuickView();
    });

    function closeQuickView() {
        quickViewBackdrop.classList.remove('active');
        qvActiveProduct = null;
    }

    // Modal Qty Increment/Decrement
    qvQtyInc.addEventListener('click', () => {
        qvQty++;
        qvQtyVal.textContent = qvQty;
    });

    qvQtyDec.addEventListener('click', () => {
        if (qvQty > 1) {
            qvQty--;
            qvQtyVal.textContent = qvQty;
        }
    });

    // Modal Add To Bag control
    qvAddToCartBtn.addEventListener('click', () => {
        if (qvActiveProduct) {
            addToCart(
                qvActiveProduct.id,
                qvActiveProduct.name,
                qvActiveProduct.price,
                qvActiveProduct.image,
                qvQty
            );
            closeQuickView();
        }
    });

    /* ==========================================
       5. LIVE SEARCH OVERLAY MODAL
       ========================================== */
    const searchOpenBtn = document.getElementById('searchOpenBtn');
    const searchCloseBtn = document.getElementById('searchCloseBtn');
    const searchOverlayModal = document.getElementById('searchOverlayModal');
    const searchInputField = document.getElementById('searchInputField');
    const searchResultsGrid = document.getElementById('searchResultsGrid');

    searchOpenBtn.addEventListener('click', openSearchModal);
    searchCloseBtn.addEventListener('click', closeSearchModal);

    function openSearchModal() {
        searchOverlayModal.classList.add('active');
        searchInputField.value = '';
        renderSearchResults('');
        setTimeout(() => searchInputField.focus(), 300);
    }

    function closeSearchModal() {
        searchOverlayModal.classList.remove('active');
        searchInputField.value = '';
    }

    // Keydown ESC listener to close modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchModal();
            closeQuickView();
            if (cartDrawer.classList.contains('active')) toggleCartDrawer();
        }
    });

    // Live search input filtering
    searchInputField.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        renderSearchResults(query);
    });

    function renderSearchResults(query) {
        searchResultsGrid.innerHTML = '';
        
        if (query === '') {
            // Render a subset of catalog as popular quick results
            const suggested = PRODUCT_CATALOG.slice(0, 3);
            renderItemsList(suggested);
            return;
        }

        const filtered = PRODUCT_CATALOG.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.wood.toLowerCase().includes(query) || 
            product.artisan.toLowerCase().includes(query) || 
            product.category.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResultsGrid.innerHTML = `
                <div class="search-no-results">
                    No handcrafted items match your search. Try "Teakwood" or "Mask".
                </div>
            `;
            return;
        }

        renderItemsList(filtered);
    }

    function renderItemsList(productsList) {
        productsList.forEach(product => {
            const resCard = document.createElement('div');
            resCard.className = 'product-card';
            
            // Aesthetic Visual Filters matching grid
            let imgStyle = "";
            if (product.id === "sculp-2") imgStyle = "filter: hue-rotate(20deg) contrast(1.1);";
            if (product.id === "sculp-3") imgStyle = "filter: sepia(0.3) saturate(1.2);";
            if (product.id === "sculp-4") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            if (product.id === "mask-2") imgStyle = "filter: brightness(0.9) sepia(0.2);";
            if (product.id === "mask-3") imgStyle = "filter: saturate(1.4) hue-rotate(-10deg);";
            if (product.id === "mask-4") imgStyle = "filter: contrast(0.9) brightness(1.15);";
            if (product.id === "dec-2") imgStyle = "filter: sepia(0.2) brightness(0.95);";
            if (product.id === "dec-3") imgStyle = "filter: brightness(1.1) hue-rotate(15deg);";
            if (product.id === "dec-4") imgStyle = "filter: hue-rotate(-20deg) contrast(1.15);";
            if (product.id === "wall-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
            if (product.id === "wall-3") imgStyle = "filter: brightness(0.9) sepia(0.3);";
            if (product.id === "wall-4") imgStyle = "filter: saturate(1.3) brightness(1.15);";
            if (product.id === "gift-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
            if (product.id === "gift-3") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            if (product.id === "gift-4") imgStyle = "filter: saturate(1.3) hue-rotate(20deg);";
            if (product.id === "cust-2") imgStyle = "filter: sepia(0.2) contrast(1.15);";
            if (product.id === "cust-3") imgStyle = "filter: brightness(0.9) contrast(1.2);";
            if (product.id === "cust-4") imgStyle = "filter: saturate(1.3) hue-rotate(10deg);";

            resCard.innerHTML = `
                <div class="product-card-image" style="aspect-ratio: 4 / 3;">
                    <img src="${product.image}" alt="${product.name}" style="${imgStyle}">
                    <div class="product-actions-overlay">
                        <button class="product-action-btn search-quick-trigger" 
                                data-id="${product.id}"
                                aria-label="Quick View"><i class="fa-regular fa-eye"></i></button>
                    </div>
                </div>
                <div class="product-info" style="padding: 10px;">
                    <span class="product-meta" style="font-size: 0.65rem;">${product.wood}</span>
                    <h4 class="product-title" style="font-size: 0.85rem; margin-bottom: 3px;">${product.name}</h4>
                    <span class="product-price" style="font-size: 0.9rem;">$${product.price.toFixed(2)}</span>
                </div>
            `;
            
            // Wire listener to immediately trigger Quick View
            resCard.querySelector('.search-quick-trigger').addEventListener('click', () => {
                closeSearchModal();
                
                // Fire synthetic click or load details
                const virtualTrigger = document.createElement('button');
                virtualTrigger.className = 'quick-view-trigger';
                virtualTrigger.setAttribute('data-id', product.id);
                virtualTrigger.setAttribute('data-name', product.name);
                virtualTrigger.setAttribute('data-price', product.price);
                virtualTrigger.setAttribute('data-image', product.image);
                virtualTrigger.setAttribute('data-wood', product.wood);
                virtualTrigger.setAttribute('data-artisan', product.artisan);
                virtualTrigger.setAttribute('data-description', product.desc);
                
                document.body.appendChild(virtualTrigger);
                virtualTrigger.click();
                document.body.removeChild(virtualTrigger);
            });
            
            searchResultsGrid.appendChild(resCard);
        });
    }

    /* ==========================================
       6. REVIEWS TESTIMONIAL SLIDER
       ========================================== */
    const reviewsContainer = document.getElementById('reviewsContainer');
    const reviewDots = document.querySelectorAll('#reviewsDots .slider-dot');
    let reviewIndex = 0;
    let reviewsInterval = null;

    function showReview(index) {
        if (index >= reviewDots.length) reviewIndex = 0;
        else if (index < 0) reviewIndex = reviewDots.length - 1;
        else reviewIndex = index;

        // Shift slider wrapper container
        reviewsContainer.style.transform = `translateX(-${reviewIndex * 100}%)`;

        // Update Dots
        reviewDots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === reviewIndex);
        });
    }

    // Connect dots clicking action (purely manual control, stopping all automatic scrolling)
    reviewDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showReview(idx);
        });
    });

    /* ==========================================
       7. BEST SELLER CAROUSEL SCROLLER CONTROLS
       ========================================== */
    const carouselContainer = document.getElementById('carouselContainer');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');

    if (carouselContainer) {
        carouselNext.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: 320, behavior: 'smooth' });
        });

        carouselPrev.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }

    /* ==========================================
       8. FORM VALIDATION (CONTACT & NEWSLETTER)
       ========================================== */
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const contactFormStatus = document.getElementById('contactFormStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameField = document.getElementById('contactName');
            const emailField = document.getElementById('contactEmail');
            const messageField = document.getElementById('contactMessage');
            
            // Clean state
            contactFormStatus.className = 'form-status-message';
            contactFormStatus.style.display = 'none';

            if (!nameField.value.trim() || !emailField.value.trim() || !messageField.value.trim()) {
                contactFormStatus.textContent = 'Please fill in all required fields marked with *';
                contactFormStatus.classList.add('error');
                return;
            }

            if (!validateEmail(emailField.value.trim())) {
                contactFormStatus.textContent = 'Please enter a valid email address.';
                contactFormStatus.classList.add('error');
                return;
            }

            // Success simulation
            contactFormStatus.textContent = `Thank you, ${nameField.value.trim()}! Your message has been sent successfully. An art concierge advisor will reach out to you within 24 hours.`;
            contactFormStatus.classList.add('success');
            
            // Reset fields
            contactForm.reset();
        });
    }

    // Newsletter Form Validation
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterFormStatus = document.getElementById('newsletterFormStatus');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            
            newsletterFormStatus.className = 'form-status-message';
            newsletterFormStatus.style.display = 'none';

            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                newsletterFormStatus.textContent = 'Valid email is required.';
                newsletterFormStatus.classList.add('error');
                return;
            }

            newsletterFormStatus.textContent = 'Subscribed successfully! Welcome to CVR Collections.';
            newsletterFormStatus.classList.add('success');
            newsletterForm.reset();

            // Clear status after 5s
            setTimeout(() => {
                newsletterFormStatus.style.display = 'none';
            }, 5000);
        });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /* ==========================================
       9. SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================== */
    const revealElements = document.querySelectorAll('.reveal-element');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Reveal once
                }
            });
        }, {
            threshold: 0.01,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => {
            el.classList.add('active');
        });
    }

    /* ==========================================
       10. SAFE INTERCEPT NAV LINKS FOR IFRAME COMPATIBILITY
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Determine scroll coordinate with header offset subtracted for clean layout centering
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile drawer menu safely if open
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                const mobileNavPanel = document.getElementById('mobileNavPanel');
                if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    mobileMenuToggle.classList.remove('active');
                    mobileNavPanel.classList.remove('active');
                }
            }
        });
    });
});
