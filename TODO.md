# Todo List - Sito Web "I Gladiatori"

Questo file traccia le attività necessarie per completare la landing page della pizzeria.

## Fase 1 & 2: Setup e Componenti Base

- [x] Setup iniziale del progetto con Vite.
- [x] Creazione della struttura di base (pagine, componenti, routing).
- [x] Integrazione dei dati da file JSON.
- [x] Implementazione delle funzionalità di base (filtri, navigazione).
- [x] Integrazione delle immagini iniziali.

## Fase 3: Refactoring Grafico con Tailwind CSS

- [x] **Migrazione a Tailwind CSS:**
    - [x] Rimuovere `bootstrap`, `react-bootstrap` e `react-router-bootstrap`.
    - [x] Installare e configurare `tailwindcss`, `postcss`, `autoprefixer`.
- [x] **Implementazione del Design System:**
    - [x] Configurare `tailwind.config.js` con la palette di colori e i font personalizzati (`Playfair Display`, `Lato`).
    - [x] Importare i font da Google Fonts in `index.html`.
    - [x] Applicare stili globali (es. sfondo chiaro) in `index.css`.
- [x] **Ricostruzione dei Componenti e delle Pagine:**
    - [x] **Header**: Ricostruire con Tailwind, renderlo "sticky", rimuovere "Ordina Online".
    - [x] **Footer**: Ricostruire con Tailwind.
    - [x] **Homepage**: Ridisegnare completamente (`Hero`, `Best Sellers`, `Links`, `Carousel`).
    - [x] **Pagine Menu** (`Pizzeria`, `TakeAway`, `Restaurant`): Applicare i nuovi stili, ridisegnare i filtri e i selettori di categoria.
    - [x] **Componenti UI**: Ridisegnare `MenuItem`, `Card`, `Button` per coerenza.
- [x] **Adattamento al Tema Chiaro:**
    - [x] Aggiornare la configurazione Tailwind con nuovi colori chiari.
    - [x] Adattare tutte le pagine al nuovo tema chiaro (Home, Pizzeria, TakeAway, Restaurant, PrivacyPolicy).
    - [x] Adattare tutti i componenti al nuovo tema chiaro (Header, Footer, MenuItem).
    - [x] Rimuovere funzionalità "Ordina Online" da tutto il sito (landing page only).

## Fase 4: Containerizzazione e Deploy

- [x] **Configurazione Docker:**
    - [x] Creare `docker-compose.yml` per il deploy semplificato.
    - [x] Creare `Dockerfile` multi-stage per build ottimizzato.
    - [x] Configurare `nginx.conf` per SPA React con routing corretto.
    - [x] Aggiungere `.dockerignore` per ottimizzare il build.
    - [x] Creare documentazione Docker (`README-Docker.md`).
- [x] **Ottimizzazioni Produzione:**
    - [x] Configurazione Nginx con compressione Gzip.
    - [x] Cache aggressivo per asset statici.
    - [x] Security headers configurati.
    - [x] Health check endpoint.
    - [x] Integrazione con rete `web-proxy` per reverse proxy.
- [x] **Correzione Struttura Progetto:**
    - [x] Aggiornare configurazione Docker per struttura root (senza cartella app).
    - [x] Correggere Dockerfile per installare tutte le dipendenze necessarie.
    - [x] Aggiornare documentazione per nuova struttura del progetto.

## Fase 5: Miglioramenti UX e Interattività

- [x] **Componente ScrollToTop:**
    - [x] Creare componente per bottone "torna in alto".
    - [x] Implementare logica di visibilità basata su scroll.
    - [x] Aggiungere animazioni e transizioni fluide.
- [x] **Hook useScrollToTop:**
    - [x] Creare hook personalizzato per scroll automatico.
    - [x] Integrare con React Router per cambio pagina.
    - [x] Applicare a tutte le pagine dell'applicazione.
- [x] **Componente CollapsibleFilters:**
    - [x] Creare componente per sezioni filtri comprimibili.
    - [x] Implementare animazioni di apertura/chiusura.
    - [x] Aggiungere icone per indicare stato.
- [x] **Integrazione Componenti:**
    - [x] Applicare CollapsibleFilters alle sezioni filtri delle pagine menu.
    - [x] Mantenere ingredienti delle pizze sempre visibili.
    - [x] Configurare categoria di default per pagina Restaurant.
    - [x] Testare funzionalità su tutte le pagine.
- [x] **Ottimizzazioni Layout:**
    - [x] Regolare larghezza titoli per evitare che prezzi vadano a capo.
    - [x] Impostare "Contorni" come categoria di default nella pagina Restaurant.
    - [x] Aggiungere icone funzionanti per tutte le categorie del ristorante.
    - [x] Migliorare responsive design delle card menu.

## Fase 6: Rifinitura e Test

- [ ] **Verifiche Finali:**
    - [ ] Verificare la coerenza del design in tutto il sito.
    - [ ] Testare la responsività su diverse dimensioni di schermo.
    - [ ] Controllare che non ci siano errori JavaScript o CSS.
    - [ ] Verificare che tutte le pagine si carichino correttamente.
    - [ ] Testare il deploy Docker in ambiente di produzione.
    - [ ] Testare funzionalità scroll e componenti interattivi.
- [ ] **Contenuti:**
    - [ ] Sostituire i testi e i prezzi con contenuti finali.
    - [ ] Verificare che tutte le immagini siano ottimizzate.

## Fase 7: Deploy (Opzionale)

- [ ] Eseguire il build di produzione del sito.
- [ ] Eseguire il deploy su un servizio di hosting.
- [ ] Configurare dominio personalizzato.
- [ ] Configurare SSL/HTTPS.

## Note

- Il sito è ora configurato come landing page senza funzionalità di ordinazione online.
- Tutte le pagine sono state adattate al nuovo tema chiaro con palette di colori coerente.
- Il design system è stato implementato con Tailwind CSS e font personalizzati.
- La configurazione Docker è pronta per il deploy in produzione con Nginx ottimizzato.
- Il container è configurato per funzionare con reti reverse proxy esistenti.
- La struttura del progetto è stata ottimizzata con tutti i file nella root per facilitare il deploy.
- **Nuove funzionalità UX implementate:**
  - Scroll automatico in alto quando si cambia pagina.
  - Bottone "torna in alto" che appare durante lo scroll.
  - Sezioni filtri comprimibili nelle pagine menu (Pizzeria e TakeAway).
  - Ingredienti delle pizze sempre visibili per facilità di lettura.
  - Categoria "Contorni" selezionata di default nella pagina Restaurant.
  - Layout ottimizzato per evitare che i prezzi vadano a capo.
  - Icone funzionanti per tutte le categorie del ristorante.
