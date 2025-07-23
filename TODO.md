# Todo List - Sito Web "I Gladiatori"

Questo file traccia le attività necessarie per completare la landing page della pizzeria.

## Fase 1 & 2: Setup e Componenti Base

- [x] Setup iniziale del progetto con Vite.
- [x] Creazione della struttura di base (pagine, componenti, routing).
- [x] Integrazione dei dati da file JSON.
- [x] Implementazione delle funzionalità di base (filtri, navigazione).
- [x] Integrazione delle immagini iniziali.

## Fase 3: Refactoring Grafico con Tailwind CSS

- [ ] **Migrazione a Tailwind CSS:**
    - [ ] Rimuovere `bootstrap`, `react-bootstrap` e `react-router-bootstrap`.
    - [ ] Installare e configurare `tailwindcss`, `postcss`, `autoprefixer`.
- [ ] **Implementazione del Design System:**
    - [ ] Configurare `tailwind.config.js` con la palette di colori e i font personalizzati (`Playfair Display`, `Lato`).
    - [ ] Importare i font da Google Fonts in `index.html`.
    - [ ] Applicare stili globali (es. sfondo scuro) in `index.css`.
- [ ] **Ricostruzione dei Componenti e delle Pagine:**
    - [ ] **Header**: Ricostruire con Tailwind, renderlo "sticky".
    - [ ] **Footer**: Ricostruire con Tailwind.
    - [ ] **Homepage**: Ridisegnare completamente (`Hero`, `Best Sellers`, `Links`, `Carousel`).
    - [ ] **Pagine Menu** (`Pizzeria`, `TakeAway`, `Restaurant`): Applicare i nuovi stili, ridisegnare i filtri e i selettori di categoria.
    - [ ] **Componenti UI**: Ridisegnare `MenuItem`, `Card`, `Button` per coerenza.
- [ ] **Rifinitura e Test:**
    - [ ] Verificare la coerenza del design in tutto il sito.
    - [ ] Testare la responsività su diverse dimensioni di schermo.
    - [ ] Sostituire i testi e i prezzi con contenuti finali.

## Fase 4: Deploy (Opzionale)

- [ ] Eseguire il build di produzione del sito.
- [ ] Eseguire il deploy su un servizio di hosting.
