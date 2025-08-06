// Book recommendation data and functionality
class BookAdvisor {
    constructor() {
        this.bookDatabase = [
            // Fiction
            {
                title: "The Seven Husbands of Evelyn Hugo",
                author: "Taylor Jenkins Reid",
                genre: "fiction",
                length: "medium",
                mood: "uplifting",
                era: "contemporary",
                rating: 4.5,
                description: "A reclusive Hollywood icon finally tells her story to a young journalist, revealing the truth about her glamorous and scandalous life.",
                tags: ["Romance", "LGBTQ+", "Hollywood", "Secrets"]
            },
            {
                title: "The Midnight Library",
                author: "Matt Haig",
                genre: "fiction",
                length: "medium",
                mood: "thought-provoking",
                era: "contemporary",
                rating: 4.2,
                description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
                tags: ["Philosophy", "Life choices", "Fantasy elements", "Hope"]
            },
            {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                genre: "romance",
                length: "medium",
                mood: "romantic",
                era: "classic",
                rating: 4.7,
                description: "The romantic clash between the opinionated Elizabeth Bennet and the seemingly arrogant Mr. Darcy.",
                tags: ["Classic", "Romance", "Social commentary", "Strong heroine"]
            },
            // Mystery & Thriller
            {
                title: "Gone Girl",
                author: "Gillian Flynn",
                genre: "mystery",
                length: "long",
                mood: "dark",
                era: "contemporary",
                rating: 4.0,
                description: "A psychological thriller about a marriage gone terribly wrong when Amy Dunne goes missing on her fifth wedding anniversary.",
                tags: ["Psychological", "Marriage", "Unreliable narrator", "Twists"]
            },
            {
                title: "The Silent Patient",
                author: "Alex Michaelides",
                genre: "mystery",
                length: "medium",
                mood: "dark",
                era: "contemporary",
                rating: 4.1,
                description: "A woman refuses to speak after allegedly murdering her husband, and a psychotherapist becomes obsessed with treating her.",
                tags: ["Psychological", "Mental health", "Art", "Twist ending"]
            },
            {
                title: "And Then There Were None",
                author: "Agatha Christie",
                genre: "mystery",
                length: "short",
                mood: "dark",
                era: "classic",
                rating: 4.6,
                description: "Ten strangers are invited to an island where they are killed one by one in a manner paralleling a sinister nursery rhyme.",
                tags: ["Classic mystery", "Isolated setting", "Multiple deaths", "Clever plot"]
            },
            // Fantasy & Sci-Fi
            {
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                genre: "fantasy",
                length: "medium",
                mood: "adventurous",
                era: "classic",
                rating: 4.3,
                description: "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor.",
                tags: ["Adventure", "Dragons", "Friendship", "Hero's journey"]
            },
            {
                title: "Dune",
                author: "Frank Herbert",
                genre: "fantasy",
                length: "long",
                mood: "thought-provoking",
                era: "classic",
                rating: 4.4,
                description: "Paul Atreides navigates political intrigue and mystical powers on the desert planet Arrakis.",
                tags: ["Space opera", "Politics", "Religion", "Environment"]
            },
            {
                title: "The House in the Cerulean Sea",
                author: "TJ Klune",
                genre: "fantasy",
                length: "medium",
                mood: "uplifting",
                era: "contemporary",
                rating: 4.6,
                description: "A caseworker discovers a magical orphanage and learns about love, family, and accepting differences.",
                tags: ["LGBTQ+", "Found family", "Magic", "Heartwarming"]
            },
            // Non-fiction
            {
                title: "Educated",
                author: "Tara Westover",
                genre: "biography",
                length: "medium",
                mood: "thought-provoking",
                era: "contemporary",
                rating: 4.5,
                description: "A memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge University.",
                tags: ["Memoir", "Education", "Family", "Self-discovery"]
            },
            {
                title: "Atomic Habits",
                author: "James Clear",
                genre: "self-help",
                length: "medium",
                mood: "uplifting",
                era: "recent",
                rating: 4.4,
                description: "A guide to building good habits and breaking bad ones through small, incremental changes.",
                tags: ["Productivity", "Psychology", "Self-improvement", "Practical advice"]
            },
            {
                title: "Sapiens",
                author: "Yuval Noah Harari",
                genre: "history",
                length: "long",
                mood: "thought-provoking",
                era: "recent",
                rating: 4.3,
                description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world.",
                tags: ["Anthropology", "Evolution", "Society", "Big ideas"]
            },
            // Romance
            {
                title: "Beach Read",
                author: "Emily Henry",
                genre: "romance",
                length: "medium",
                mood: "light",
                era: "contemporary",
                rating: 4.2,
                description: "Two rival writers with writer's block challenge each other to write in each other's genres.",
                tags: ["Enemies to lovers", "Writers", "Summer romance", "Humor"]
            },
            {
                title: "The Hating Game",
                author: "Sally Thorne",
                genre: "romance",
                length: "medium",
                mood: "light",
                era: "contemporary",
                rating: 4.1,
                description: "Two executive assistants who hate each other discover there's a thin line between love and hate.",
                tags: ["Enemies to lovers", "Office romance", "Humor", "Tension"]
            },
            // Additional diverse selections
            {
                title: "Klara and the Sun",
                author: "Kazuo Ishiguro",
                genre: "fiction",
                length: "medium",
                mood: "thought-provoking",
                era: "recent",
                rating: 4.0,
                description: "An artificial friend observes the world and the family she serves with remarkable depth and understanding.",
                tags: ["AI", "Family", "Love", "Philosophy"]
            },
            {
                title: "The Thursday Murder Club",
                author: "Richard Osman",
                genre: "mystery",
                length: "medium",
                mood: "light",
                era: "recent",
                rating: 4.3,
                description: "Four unlikely friends in a retirement village meet weekly to investigate cold cases, until a real murder occurs.",
                tags: ["Cozy mystery", "Elderly protagonists", "Humor", "Friendship"]
            },
            {
                title: "Project Hail Mary",
                author: "Andy Weir",
                genre: "fantasy",
                length: "long",
                mood: "adventurous",
                era: "recent",
                rating: 4.5,
                description: "A lone astronaut must save humanity while figuring out why he's on a spaceship with no memory of how he got there.",
                tags: ["Space", "Science", "Humor", "Problem-solving"]
            }
        ];

        this.init();
    }

    init() {
        this.bindEvents();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.showInitialState();
    }

    bindEvents() {
        const form = document.getElementById('book-preference-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Add loading animation to submit button
        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('mouseenter', this.addButtonHover);
            submitBtn.addEventListener('mouseleave', this.removeButtonHover);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll);
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const preferences = {
            genre: formData.get('genre'),
            length: formData.get('length'),
            mood: formData.get('mood'),
            era: formData.get('era') || null
        };

        // Validate required fields
        if (!preferences.genre || !preferences.length || !preferences.mood) {
            this.showError('Please fill in all required fields');
            return;
        }

        this.showLoading();
        
        // Simulate API delay for better UX
        setTimeout(() => {
            const recommendations = this.getRecommendations(preferences);
            this.displayRecommendations(recommendations);
            this.scrollToRecommendations();
        }, 1500);
    }

    getRecommendations(preferences) {
        let recommendations = this.bookDatabase.filter(book => {
            let score = 0;
            let matches = 0;

            // Exact matches get higher priority
            if (book.genre === preferences.genre) {
                score += 10;
                matches++;
            }
            if (book.length === preferences.length) {
                score += 8;
                matches++;
            }
            if (book.mood === preferences.mood) {
                score += 9;
                matches++;
            }
            if (preferences.era && book.era === preferences.era) {
                score += 7;
                matches++;
            }

            // Partial matches for related genres
            if (this.isRelatedGenre(book.genre, preferences.genre)) {
                score += 5;
            }

            // Mood compatibility
            if (this.isCompatibleMood(book.mood, preferences.mood)) {
                score += 4;
            }

            // Require at least 2 matches or high score
            return matches >= 2 || score >= 15;
        });

        // Sort by relevance (rating and matches)
        recommendations.sort((a, b) => {
            const scoreA = this.calculateRelevanceScore(a, preferences);
            const scoreB = this.calculateRelevanceScore(b, preferences);
            return scoreB - scoreA;
        });

        // Return top 6 recommendations
        return recommendations.slice(0, 6);
    }

    calculateRelevanceScore(book, preferences) {
        let score = book.rating * 2; // Base score from rating

        if (book.genre === preferences.genre) score += 10;
        if (book.length === preferences.length) score += 8;
        if (book.mood === preferences.mood) score += 9;
        if (preferences.era && book.era === preferences.era) score += 7;

        return score;
    }

    isRelatedGenre(bookGenre, preferredGenre) {
        const genreRelations = {
            'fiction': ['romance', 'mystery'],
            'mystery': ['thriller', 'fiction'],
            'fantasy': ['fiction'],
            'romance': ['fiction'],
            'thriller': ['mystery'],
            'biography': ['non-fiction', 'history'],
            'self-help': ['non-fiction'],
            'history': ['non-fiction', 'biography']
        };

        return genreRelations[bookGenre]?.includes(preferredGenre) || false;
    }

    isCompatibleMood(bookMood, preferredMood) {
        const moodCompatibility = {
            'light': ['uplifting', 'romantic'],
            'uplifting': ['light', 'romantic'],
            'romantic': ['light', 'uplifting'],
            'dark': ['thought-provoking'],
            'thought-provoking': ['dark'],
            'adventurous': ['uplifting']
        };

        return moodCompatibility[bookMood]?.includes(preferredMood) || false;
    }

    showLoading() {
        const loadingElement = document.getElementById('loading');
        const resultsElement = document.getElementById('recommendation-results');
        const noResultsElement = document.getElementById('no-results');

        if (loadingElement) loadingElement.style.display = 'block';
        if (resultsElement) resultsElement.innerHTML = '';
        if (noResultsElement) noResultsElement.style.display = 'none';
    }

    displayRecommendations(books) {
        const loadingElement = document.getElementById('loading');
        const resultsElement = document.getElementById('recommendation-results');
        const noResultsElement = document.getElementById('no-results');

        if (loadingElement) loadingElement.style.display = 'none';

        if (books.length === 0) {
            if (noResultsElement) {
                noResultsElement.style.display = 'block';
                noResultsElement.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>No perfect matches found</h3>
                    <p>Try adjusting your preferences or explore our featured recommendations below</p>
                `;
            }
            return;
        }

        if (noResultsElement) noResultsElement.style.display = 'none';

        if (resultsElement) {
            resultsElement.innerHTML = books.map(book => this.createBookCard(book)).join('');
            
            // Add animation to cards
            setTimeout(() => {
                const cards = resultsElement.querySelectorAll('.book-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        card.style.transition = 'all 0.5s ease-out';
                        
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 100);
                });
            }, 100);
        }
    }

    createBookCard(book) {
        const stars = this.generateStars(book.rating);
        const tags = book.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');

        return `
            <div class="book-card">
                <div class="book-cover">
                    <i class="fas fa-book"></i>
                </div>
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${book.author}</div>
                <div class="book-description">${book.description}</div>
                <div class="book-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${book.rating}/5</span>
                </div>
                <div class="book-tags">${tags}</div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars;
    }

    showInitialState() {
        const noResultsElement = document.getElementById('no-results');
        if (noResultsElement) {
            noResultsElement.style.display = 'block';
        }
    }

    scrollToRecommendations() {
        const recommendationsSection = document.getElementById('recommendations');
        if (recommendationsSection) {
            recommendationsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }

    setupSmoothScrolling() {
        // Enable smooth scrolling for the entire page
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements that should animate in
        document.querySelectorAll('.feature-card, .book-card').forEach(el => {
            observer.observe(el);
        });
    }

    addButtonHover() {
        this.style.transform = 'translateY(-2px)';
    }

    removeButtonHover() {
        this.style.transform = 'translateY(0)';
    }

    showError(message) {
        // Create or update error message
        let errorElement = document.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.cssText = `
                background: #fee2e2;
                color: #dc2626;
                padding: 12px 16px;
                border-radius: 8px;
                margin-bottom: 1rem;
                border: 1px solid #fecaca;
                font-size: 0.9rem;
            `;
            
            const form = document.getElementById('book-preference-form');
            if (form) {
                form.insertBefore(errorElement, form.firstChild);
            }
        }
        
        errorElement.textContent = message;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (errorElement && errorElement.parentNode) {
                errorElement.parentNode.removeChild(errorElement);
            }
        }, 5000);
    }
}

// Utility functions for enhanced UX
class UIEnhancements {
    static init() {
        this.setupParallaxEffect();
        this.setupFormValidation();
        this.setupKeyboardNavigation();
        this.setupTooltips();
    }

    static setupParallaxEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    static setupFormValidation() {
        const selects = document.querySelectorAll('select[required]');
        selects.forEach(select => {
            select.addEventListener('change', function() {
                if (this.value) {
                    this.classList.remove('error');
                    this.classList.add('valid');
                } else {
                    this.classList.remove('valid');
                }
            });

            select.addEventListener('invalid', function() {
                this.classList.add('error');
            });
        });
    }

    static setupKeyboardNavigation() {
        // Enhance keyboard navigation for form elements
        const formElements = document.querySelectorAll('select, button');
        formElements.forEach((element, index) => {
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    // Custom tab behavior if needed
                }
            });
        });
    }

    static setupTooltips() {
        // Add helpful tooltips to form labels
        const tooltips = {
            'genre': 'Choose the type of story that interests you most',
            'length': 'How much time do you want to spend reading?',
            'mood': 'What kind of emotional experience are you looking for?',
            'era': 'Do you prefer modern stories or classic literature?'
        };

        Object.entries(tooltips).forEach(([field, text]) => {
            const label = document.querySelector(`label[for="${field}"]`);
            if (label) {
                label.title = text;
                label.style.cursor = 'help';
            }
        });
    }
}

// Performance optimization
class PerformanceOptimizer {
    static init() {
        this.lazyLoadImages();
        this.optimizeScrollEvents();
        this.preloadCriticalResources();
    }

    static lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    static optimizeScrollEvents() {
        let ticking = false;

        function updateScrollEffects() {
            // Scroll-based animations and effects
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    static preloadCriticalResources() {
        // Preload critical fonts and resources
        const fontLinks = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ];

        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main app
    window.bookAdvisor = new BookAdvisor();
    
    // Initialize UI enhancements
    UIEnhancements.init();
    
    // Initialize performance optimizations
    PerformanceOptimizer.init();

    // Add some console styling for development
    console.log('%c📚 BookAdvisor Initialized!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('BookAdvisor Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator && 'production' === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}