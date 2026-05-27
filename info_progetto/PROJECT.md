# Pizzeria Maragall — PROJECT.md

## Stack Tecnico

| Layer | Tecnologia |
|-------|------------|
| Markup | HTML5 (singola pagina `index.html`) |
| Stile | CSS3 custom (`src/styles.css`) — nessun framework CSS |
| Logica | Vanilla JavaScript (`src/script.js`) |
| Font | Google Fonts — **Fraunces** (titoli) + **Open Sans** (corpo) |
| Icone | Lucide via CDN (`unpkg.com/lucide`) |
| Build / Serve | `npm run start` → `serve .` (pacchetto `serve@14`) |
| Deploy | **Vercel** (`vercel.json` con `cleanUrls: true`) |

> **Nota:** La cartella `src/` contiene anche un boilerplate React/Vite (App.tsx, main.tsx, shadcn/ui, wouter, TanStack Query) generato da Replit ma **non utilizzato** nel sito reale. Il sito è puramente statico.

---

## Stato Attuale

- **Produzione attiva** — sito live e funzionante
- Tutta la logica risiede in `index.html` + `src/styles.css` + `src/script.js`
- Nessun backend né database
- Multilingua implementato lato client (5 lingue)
- Menu PDF disponibili in download (inglese, catalano/castigliano)

---

## Pagine Esistenti

Il sito è una **Single Page Application** con navigazione ad ancore. Non esistono route separate — tutte le sezioni sono nell'unico `index.html`.

| Sezione | Ancora | Descrizione |
|---------|--------|-------------|
| Navbar | — | Logo, selezione lingua, link menu e prenotazione, hamburger mobile |
| Hero | — | Immagine di sfondo, nome pizzeria, orari di apertura |
| Chi Siamo | `#about` | Descrizione della pizzeria e dello chef Fabrizio |
| Pizza del Mese | `#pizza-mese` | Sezione promo con CTA verso la prenotazione |
| I Nostri Consigli | `#menu` | Griglia 4 piatti + download PDF menu |
| Recensioni | `#recensioni` | Carosello con 5 recensioni Google, link a Google Maps |
| Gallery | `#gallery` | Griglia immagini team e terrazza |
| Prenota il tuo Tavolo | `#contact` | Telefono, email, indirizzo con link Google Maps |
| Bottega Maragall | `#bottega` | Sezione del wine bar adiacente con link Google Maps |
| Footer | — | Hashtag, icona Instagram, copyright |

---

## Componenti Chiave

### Navbar (`index.html` riga 54)
- Logo centrale, link "IL MENU" e "PRENOTA" a destra
- Selezione lingua a sinistra con dropdown custom (flag emoji)
- Hamburger menu per mobile
- Classe `.scrolled` aggiunta via JS allo scroll

### Multilingua (`src/script.js` riga 95)
- Sistema di traduzione vanilla JS con oggetto `translations`
- **Lingue supportate:** Italiano, English, Español, Català, Français
- Funziona tramite attributo `data-key` sugli elementi HTML
- Funzione `setLanguage(lang)` aggiorna tutti i testi e il flag

### Carosello Recensioni (`src/script.js` riga 333)
- 5 card recensioni con navigazione frecce e pallini
- Auto-avanzamento ogni 5 secondi
- Transizione CSS `translateX`

### Animazioni Scroll (`src/script.js` riga 26)
- `IntersectionObserver` su tutti gli elementi `.fade-in-section`
- Classe `.is-visible` aggiunta al primo ingresso nel viewport
- Animazione eseguita una sola volta

### CSS Design System (`src/styles.css`)
- Colori brand: `--maragall-red: #C1272D`, `--maragall-green: #006837`
- Sfondo caldo effetto legno: `--bg-wood-light: #E8DCC8`
- Texture noise overlay (SVG inline, opacità 3%)
- Font heading: Fraunces (serif editoriale)

---

## Asset Principali

```
assets/
├── pizzeria.png        → logo navbar e footer
├── logo_maragall.png   → variante logo
├── heropm.jpg          → hero pizza del mese
├── heropm1.jpg         → hero principale / og:image
├── sel1.jpg            → Campesina (menu)
├── sel2.jpg            → Iberica (menu)
├── sel3.jpg            → La Sporchetta (menu)
├── cheesmisu.webp      → Cheesmisu (dessert, menu)
├── teampm.jpg          → gallery team
├── terrazzapm.jpg      → gallery terrazza
├── sellbm.jpg          → Bottega Maragall
├── cat_flag.jpg        → bandiera catalana (lingua)
├── English.pdf         → menu inglese scaricabile
└── CatyCast.pdf        → menu catalano/castigliano scaricabile
```

---

## URL

| Tipo | URL |
|------|-----|
| **Sito live** | https://pizzeriamaragall.com |
| **Repository GitHub** | https://github.com/bolalocasrl/Pizzeria-Maragall.git |
| **Google Maps Pizzeria** | https://www.google.com/maps/place/Pizzeria+Maragall+S.L/@41.41762,2.18082 |
| **Google Maps Bottega** | https://www.google.com/maps/place/LA+BOTTEGA+MARAGALL+-WINE+BAR/@41.4177154,2.1810191 |
| **Instagram** | https://www.instagram.com/pizzeriamaragall/ |

---

## Info Business

- **Indirizzo:** Carrer de Juan de Garay 8, 08041 Barcelona, Spagna
- **Telefono:** +34 935 02 72 14
- **Email:** pizzeriamaragall@gmail.com
- **Orari:** Lun–Ven 20:00–00:00 | Sab–Dom 13:30–16:30 e 20:00–00:00
- **Chef:** Fabrizio
