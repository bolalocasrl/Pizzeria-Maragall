document.addEventListener('DOMContentLoaded', () => {
    // Hero Animation
    const heroContent = document.querySelector('.hero-content');
    
    // Simple fade in for hero
    heroContent.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a:not([data-lang])').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
            });
        });
    }

    // Language Selector Logic
    const langDropdowns = document.querySelectorAll('.lang-dropdown');
    const langBtn = document.querySelector('.lang-btn');
    const langLinks = document.querySelectorAll('.lang-menu a');
    
    // Toggle dropdown
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdowns.forEach(d => d.classList.toggle('active'));
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.closest('.lang-dropdown').contains(e.target)) {
                langDropdowns.forEach(d => d.classList.remove('active'));
            }
        });
    }

    // Translations
    const translations = {
        'it': {
            'nav_about': 'CHI SIAMO',
            'nav_special': 'SPECIALITÀ',
            'nav_menu': 'IL MENU',
            'nav_book': 'PRENOTA',
            'hero_subtitle': 'PIZZA & CUCINA ITALIANA – BARCELONA',
            'hero_book': 'PRENOTA UN TAVOLO',
            'hero_menu': 'SCOPRI IL MENU',
            'about_title': 'CHI SIAMO',
            'about_subtitle': 'Passione per la pizza e per le persone',
            'about_text': 'Più di una semplice pizzeria, siamo una famiglia. La nostra squadra lavora ogni giorno con un unico obiettivo: farvi sentire a casa. Crediamo che il cibo sia condivisione e gioia. In un\'atmosfera calda e informale, tipica delle pizzerie di quartiere italiane, vi accogliamo con il sorriso e con la passione di chi ama ciò che fa. Vieni a trovarci e diventa parte della nostra storia.',
            'about_hours': 'ORARI',
            'hours_week': 'Lunedì - Venerdì:',
            'hours_weekend': 'Sabato - Domenica:',
            'badge_pizza': '🍕 Pizza del Mese',
            'pizza_desc': 'La nostra firma. Una combinazione perfetta di sapori equilibrati che ha conquistato centinaia di clienti. Ingredienti selezionati, base croccante e un tocco segreto dello chef. Vieni a scoprire perché è la preferita del quartiere.',
            'btn_try': 'PROVALA ORA',
            'menu_title': 'LE NOSTRE <span class="text-accent-red">SELEZIONI</span>',
            'menu_subtitle': 'Cotte in forno a legna, sottili e croccanti',
            'menu_1_desc': 'Pomodoro San Marzano, Mozzarella fior di latte, Basilico fresco. La regina della tradizione.',
            'menu_2_desc': 'Pomodoro, Mozzarella, Prosciutto cotto di alta qualità e funghi freschi.',
            'menu_3_desc': 'Una delizia romana: Porchetta arrosto aromatica, Mozzarella e patate al forno.',
            'menu_4_desc': 'Un mix allettante tra cheesecake e tiramisù, creato dallo chef Fabrizio per chi ama i dolci italiani con un tocco innovativo: cremoso, delicato e irresistibile.',
            'takeaway_title': '🍕 Pizza para llevar',
            'takeaway_subtitle': 'Gustala comodamente a casa tua',
            'btn_call': 'Chiama e ordina',
            'btn_glovo': 'Ordina su Glovo',
            'book_title': 'PRENOTA IL TUO TAVOLO',
            'book_desc': 'Siamo spesso al completo, consigliamo la prenotazione.',
            'btn_book_now': 'PRENOTA ORA',
            'bottega_badge': 'NUOVA APERTURA',
            'bottega_desc': 'Focaccia italiana e vini locali. Un\'atmosfera intima e accogliente con una selezione accurata di vini di alta qualità. Il luogo ideale per un aperitivo autentico o una cena rilassata.',
            'btn_bottega': 'SCOPRI BOTTEGA MARAGALL', 'hours_title': 'Orari',
            'hours_week_line': '<strong>Lunedì - Venerdì:</strong> 20:00 - 00:00',
            'hours_weekend_line': '<strong>Sabato - Domenica:</strong> 13:30 - 16:30 | 20:00 - 00:00',
            'pizza_title': 'SCOPRI LA PIZZA DEL MESE',
            'reviews_title': 'COSA DICONO <span class="text-accent-red">DI NOI</span>',
            'reviews_subtitle': 'Le opinioni dei nostri clienti', 'reviews_btn': 'LEGGI TUTTE LE RECENSIONI SU GOOGLE'
        },
        'en': {
            'nav_about': 'ABOUT US',
            'nav_special': 'SPECIALTIES',
            'nav_menu': 'MENU',
            'nav_book': 'BOOK NOW',
            'hero_subtitle': 'PIZZA & ITALIAN CUISINE – BARCELONA',
            'hero_book': 'BOOK A TABLE',
            'hero_menu': 'DISCOVER THE MENU',
            'about_title': 'ABOUT US',
            'about_subtitle': 'Passion for pizza and people',
            'about_text': 'More than just a pizzeria, we are a family. Our team works every day with one goal: to make you feel at home. We believe food is about sharing and joy. In a warm and informal atmosphere, typical of Italian neighborhood pizzerias, we welcome you with a smile and the passion of those who love what they do. Come visit us and become part of our story.',
            'about_hours': 'OPENING HOURS',
            'hours_week': 'Monday - Friday:',
            'hours_weekend': 'Saturday - Sunday:',
            'badge_pizza': '🍕 Pizza of the Month',
            'pizza_desc': 'Our signature. A perfect combination of balanced flavors that has won over hundreds of customers. Selected ingredients, crispy base, and a secret touch from the chef. Come discover why it\'s the neighborhood favorite.',
            'btn_try': 'TRY IT NOW',
            'menu_title': 'OUR <span class="text-accent-red">SELECTIONS</span>',
            'menu_subtitle': 'Wood-fired, thin and crispy',
            'menu_1_desc': 'San Marzano Tomato, Fior di latte Mozzarella, Fresh Basil. The queen of tradition.',
            'menu_2_desc': 'Tomato, Mozzarella, High-quality cooked ham, and fresh mushrooms.',
            'menu_3_desc': 'A Roman delight: Roasted aromatic Porchetta, Mozzarella, and baked potatoes.',
            'menu_4_desc': 'A tempting mix between cheesecake and tiramisu, created by Chef Fabrizio for those who love Italian desserts with an innovative twist: creamy, delicate, and irresistible.',
            'takeaway_title': '🍕 Takeaway Pizza',
            'takeaway_subtitle': 'Enjoy it comfortably at home',
            'btn_call': 'Call and order',
            'btn_glovo': 'Order on Glovo',
            'book_title': 'BOOK YOUR TABLE',
            'book_desc': 'We are often fully booked, reservations recommended.',
            'btn_book_now': 'BOOK NOW',
            'bottega_badge': 'NEW OPENING',
            'bottega_desc': 'Italian focaccia and local wines. An intimate and cozy atmosphere with a carefully selected range of high-quality wines. The ideal place for an authentic aperitif or a relaxed dinner.',
            'btn_bottega': 'DISCOVER BOTTEGA MARAGALL', 'hours_title': 'Opening Hours',
            'hours_week_line': '<strong>Monday - Friday:</strong> 20:00 - 00:00',
            'hours_weekend_line': '<strong>Saturday - Sunday:</strong> 13:30 - 16:30 | 20:00 - 00:00',
            'pizza_title': 'DISCOVER THE PIZZA OF THE MONTH',
            'reviews_title': 'WHAT THEY SAY <span class="text-accent-red">ABOUT US</span>',
            'reviews_subtitle': 'Our customers\' opinions', 'reviews_btn': 'READ ALL REVIEWS ON GOOGLE'
        },
        'es': {
            'nav_about': 'NOSOTROS',
            'nav_special': 'ESPECIALIDADES',
            'nav_menu': 'EL MENÚ',
            'nav_book': 'RESERVAR',
            'hero_subtitle': 'PIZZA Y COCINA ITALIANA – BARCELONA',
            'hero_book': 'RESERVAR MESA',
            'hero_menu': 'DESCUBRIR EL MENÚ',
            'about_title': 'NOSOTROS',
            'about_subtitle': 'Pasión por la pizza y por las personas',
            'about_text': 'Más que una simple pizzería, somos una familia. Nuestro equipo trabaja cada día con un único objetivo: hacerte sentir como en casa. Creemos que la comida es compartir y alegría. En un ambiente cálido e informal, típico de las pizzerías de barrio italianas, te recibimos con una sonrisa y con la pasión de quien ama lo que hace. Ven a visitarnos y forma parte de nuestra historia.',
            'about_hours': 'HORARIOS',
            'hours_week': 'Lunes - Viernes:',
            'hours_weekend': 'Sábado - Domingo:',
            'badge_pizza': '🍕 Pizza del Mes',
            'pizza_desc': 'Nuestra firma. Una combinación perfecta de sabores equilibrados que ha conquistado a cientos de clientes. Ingredientes seleccionados, base crujiente y un toque secreto del chef. Ven a descubrir por qué es la favorita del barrio.',
            'btn_try': 'PRUÉBALA AHORA',
            'menu_title': 'NUESTRAS <span class="text-accent-red">SELECCIONES</span>',
            'menu_subtitle': 'Cocinadas en horno de leña, finas y crujientes',
            'menu_1_desc': 'Tomate San Marzano, Mozzarella fior di latte, Albahaca fresca. La reina de la tradición.',
            'menu_2_desc': 'Tomate, Mozzarella, Jamón cocido de alta calidad y champiñones frescos.',
            'menu_3_desc': 'Una delicia romana: Porchetta asada aromática, Mozzarella y patatas al horno.',
            'menu_4_desc': 'Una mezcla tentadora entre cheesecake y tiramisú, creada por el chef Fabrizio para los amantes de los postres italianos con un toque innovador: cremoso, delicado e irresistible.',
            'takeaway_title': '🍕 Pizza para llevar',
            'takeaway_subtitle': 'Disfrútala cómodamente en tu casa',
            'btn_call': 'Llama y pide',
            'btn_glovo': 'Pedir en Glovo',
            'book_title': 'RESERVA TU MESA',
            'book_desc': 'A menudo estamos completos, recomendamos reservar.',
            'btn_book_now': 'RESERVAR AHORA',
            'bottega_badge': 'NUEVA APERTURA',
            'bottega_desc': 'Focaccia italiana y vinos locales. Una atmósfera íntima y acogedora con una selección cuidada de vinos de alta calidad. El lugar ideal para un aperitivo auténtico o una cena relajada.',
            'btn_bottega': 'DESCUBRE BOTTEGA MARAGALL', 'hours_title': 'Horarios',
            'hours_week_line': '<strong>Lunes - Viernes:</strong> 20:00 - 00:00',
            'hours_weekend_line': '<strong>Sábado - Domingo:</strong> 13:30 - 16:30 | 20:00 - 00:00',
            'pizza_title': 'DESCUBRE LA PIZZA DEL MES',
            'reviews_title': 'QUÉ DICEN <span class="text-accent-red">DE NOSOTROS</span>',
            'reviews_subtitle': 'Las opiniones de nuestros clientes', 'reviews_btn': 'LEE TODAS LAS RESEÑAS EN GOOGLE'
        },
        'ca': {
            'nav_about': 'NOSALTRES',
            'nav_special': 'ESPECIALITATS',
            'nav_menu': 'EL MENÚ',
            'nav_book': 'RESERVAR',
            'hero_subtitle': 'PIZZA I CUINA ITALIANA – BARCELONA',
            'hero_book': 'RESERVAR TAULA',
            'hero_menu': 'DESCOBRIR EL MENÚ',
            'about_title': 'NOSALTRES',
            'about_subtitle': 'Passió per la pizza i per les persones',
            'about_text': 'Més que una simple pizzeria, som una família. El nostre equip treballa cada dia amb un únic objectiu: fer-te sentir com a casa. Creiem que el menjar és compartir i alegria. En un ambient càlid i informal, típic de les pizzeries de barri italianes, et rebem amb un somriure i amb la passió de qui estima el que fa. Vine a visitar-nos i forma part de la nostra història.',
            'about_hours': 'HORARIS',
            'hours_week': 'Dilluns - Divendres:',
            'hours_weekend': 'Dissabte - Diumenge:',
            'badge_pizza': '🍕 Pizza del Mes',
            'pizza_desc': 'La nostra signatura. Una combinació perfecta de sabors equilibrats que ha conquistat centenars de clients. Ingredients seleccionats, base cruixent i un toc secret del xef. Vine a descobrir per què és la preferida del barri.',
            'btn_try': 'TASTA-LA ARA',
            'menu_title': 'LES NOSTRES <span class="text-accent-red">SELECCIONS</span>',
            'menu_subtitle': 'Cuinades al forn de llenya, fines i cruixents',
            'menu_1_desc': 'Tomàquet San Marzano, Mozzarella fior di latte, Alfàbrega fresca. La reina de la tradició.',
            'menu_2_desc': 'Tomàquet, Mozzarella, Pernil dolç d\'alta qualitat i xampinyons frescos.',
            'menu_3_desc': 'Una delícia romana: Porchetta rostida aromàtica, Mozzarella i patates al forn.',
            'menu_4_desc': 'Una barreja temptadora entre cheesecake i tiramisú, creada pel xef Fabrizio per als amants dels postres italians amb un toc innovador: cremós, delicat i irresistible.',
            'takeaway_title': '🍕 Pizza per emportar',
            'takeaway_subtitle': 'Gaudeix-la còmodament a casa teva',
            'btn_call': 'Truca i demana',
            'btn_glovo': 'Demanar a Glovo',
            'book_title': 'RESERVA LA TEVA TAULA',
            'book_desc': 'Sovint estem complets, recomanem reservar.',
            'btn_book_now': 'RESERVAR ARA',
            'bottega_badge': 'NOVA OBERTURA',
            'bottega_desc': 'Focaccia italiana i vins locals. Una atmosfera íntima i acollidora amb una selecció acurada de vins d\'alta qualitat. El lloc ideal per a un aperitiu autèntic o un sopar relaxat.',
            'btn_bottega': 'DESCOBREIX BOTTEGA MARAGALL', 'hours_title': 'Horaris',
            'hours_week_line': '<strong>Dilluns - Divendres:</strong> 20:00 - 00:00',
            'hours_weekend_line': '<strong>Dissabte - Diumenge:</strong> 13:30 - 16:30 | 20:00 - 00:00',
            'pizza_title': 'DESCOBREIX LA PIZZA DEL MES',
            'reviews_title': 'QUÈ DIUEN <span class="text-accent-red">DE NOSALTRES</span>',
            'reviews_subtitle': 'Les opinions dels nostres clients', 'reviews_btn': 'LLEGEIX TOTES LES RESSENYES A GOOGLE'
        },
        'fr': {
            'nav_about': 'QUI SOMMES-NOUS',
            'nav_special': 'SPÉCIALITÉS',
            'nav_menu': 'LE MENU',
            'nav_book': 'RÉSERVER',
            'hero_subtitle': 'PIZZA & CUISINE ITALIENNE – BARCELONE',
            'hero_book': 'RÉSERVER UNE TABLE',
            'hero_menu': 'DÉCOUVRIR LE MENU',
            'about_title': 'QUI SOMMES-NOUS',
            'about_subtitle': 'Passion pour la pizza et pour les gens',
            'about_text': 'Plus qu\'une simple pizzeria, nous sommes une famille. Notre équipe travaille chaque jour avec un seul objectif : vous faire sentir comme chez vous. Nous croyons que la nourriture est synonyme de partage et de joie. Dans une atmosphère chaleureuse et informelle, typique des pizzerias de quartier italiennes, nous vous accueillons avec le sourire et la passion de ceux qui aiment ce qu\'ils font. Venez nous rendre visite et faites partie de notre histoire.',
            'about_hours': 'HORAIRES',
            'hours_week': 'Lundi - Vendredi :',
            'hours_weekend': 'Samedi - Dimanche :',
            'badge_pizza': '🍕 Pizza du Mois',
            'pizza_desc': 'Notre signature. Une combinaison parfaite de saveurs équilibrées qui a conquis des centaines de clients. Ingrédients sélectionnés, base croustillante et une touche secrète du chef. Venez découvrir pourquoi c\'est la préférée du quartier.',
            'btn_try': 'ESSAYEZ-LA MAINTENANT',
            'menu_title': 'NOS <span class="text-accent-red">SÉLECTIONS</span>',
            'menu_subtitle': 'Cuites au four à bois, fines et croustillantes',
            'menu_1_desc': 'Tomate San Marzano, Mozzarella fior di latte, Basilic frais. La reine de la tradition.',
            'menu_2_desc': 'Tomate, Mozzarella, Jambon cuit de haute qualité et champignons frais.',
            'menu_3_desc': 'Un délice romain : Porchetta rôtie aromatique, Mozzarella et pommes de terre au four.',
            'menu_4_desc': 'Un mélange tentant entre cheesecake et tiramisu, créé par le chef Fabrizio pour ceux qui aiment les desserts italiens avec une touche innovante : crémeux, délicat et irrésistible.',
            'takeaway_title': '🍕 Pizza à emporter',
            'takeaway_subtitle': 'Dégustez-la confortablement chez vous',
            'btn_call': 'Appeler et commander',
            'btn_glovo': 'Commander sur Glovo',
            'book_title': 'RÉSERVEZ VOTRE TABLE',
            'book_desc': 'Nous sommes souvent complets, la réservation est recommandée.',
            'btn_book_now': 'RÉSERVER MAINTENANT',
            'bottega_badge': 'NOUVELLE OUVERTURE',
            'bottega_desc': 'Focaccia italienne et vins locaux. Une atmosphère intime et accueillante avec une sélection soignée de vins de haute qualité. L\'endroit idéal pour un apéritif authentique ou un dîner détendu.',
            'btn_bottega': 'DÉCOUVREZ BOTTEGA MARAGALL', 'hours_title': 'Horaires',
            'hours_week_line': '<strong>Lundi - Vendredi:</strong> 20:00 - 00:00',
            'hours_weekend_line': '<strong>Samedi - Dimanche:</strong> 13:30 - 16:30 | 20:00 - 00:00',
            'pizza_title': 'DÉCOUVREZ LA PIZZA DU MOIS',
            'reviews_title': 'CE QU\'ILS DISENT <span class="text-accent-red">DE NOUS</span>',
            'reviews_subtitle': 'Les avis de nos clients', 'reviews_btn': 'LIRE TOUS LES AVIS SUR GOOGLE'
        }
    };

    const flagMap = {
        'it': '🇮🇹',
        'en': '🇬🇧',
        'es': '🇪🇸',
        'ca': '<img src="/assets/cat_flag.jpg" class="lang-flag" alt="Català">',
        'fr': '🇫🇷'
    };
    
    // Change language function
    function setLanguage(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.innerHTML = `${flagMap[lang]} <i data-lucide="chevron-down" class="chevron"></i>`;
        });
        lucide.createIcons();

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
        langDropdowns.forEach(d => d.classList.remove('active'));

        if (window.innerWidth <= 768) {
            navLinks.classList.remove('mobile-open');
        }
    }
    
    // Add click listeners to language links
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

});
// Carosello Recensioni
const track = document.querySelector('.recensioni-track');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let current = 0;
const total = document.querySelectorAll('.recensione-card').length;

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
}

if (track) {
    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    // Auto-avanzamento ogni 5 secondi
    setInterval(() => goTo(current + 1), 5000);
}