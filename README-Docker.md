# I Gladiatori - Landing Page Docker

Questa è la configurazione Docker per la landing page della pizzeria "I Gladiatori".

## 🚀 Deploy con Docker Compose

### Prerequisiti
- Docker e Docker Compose installati
- Rete `web-proxy` esistente (per integrazione con reverse proxy)

### Deploy

1. **Clona il repository e naviga nella directory:**
```bash
cd "I Gladiatori"
```

2. **Avvia il container:**
```bash
docker-compose up -d
```

3. **Verifica che il container sia in esecuzione:**
```bash
docker-compose ps
```

4. **Controlla i log:**
```bash
docker-compose logs -f igladiatori-frontend
```

### Configurazione Reverse Proxy

Il container è configurato per funzionare con una rete `web-proxy` esterna. 
Assicurati che la rete esista prima di avviare il container:

```bash
docker network create web-proxy
```

### Health Check

Il container espone un endpoint di health check su `/health`:
```bash
curl http://localhost/health
```

## 🛠️ Sviluppo Locale

Per sviluppo locale senza Docker:

```bash
npm install
npm run dev
```

## 📁 Struttura del Progetto

```
I Gladiatori/
├── src/                   # Codice sorgente React
├── public/                # File pubblici
├── Dockerfile             # Dockerfile per l'app
├── nginx.conf             # Configurazione Nginx
├── .dockerignore          # File da ignorare nel build
├── docker-compose.yml     # Configurazione Docker Compose
├── package.json           # Dipendenze Node.js
├── tailwind.config.js     # Configurazione Tailwind CSS
├── vite.config.js         # Configurazione Vite
└── README-Docker.md       # Questo file
```

## 🔧 Configurazione Nginx

La configurazione Nginx include:
- **Routing SPA**: Tutte le route servono `index.html` per React Router
- **Compressione Gzip**: Ottimizzazione delle performance
- **Cache statico**: Cache aggressivo per asset statici
- **Security Headers**: Headers di sicurezza configurati
- **Health Check**: Endpoint `/health` per monitoring

## 🚀 Build di Produzione

Il Dockerfile utilizza un build multi-stage:
1. **Build Stage**: Compila l'app React con Vite
2. **Production Stage**: Serve l'app con Nginx

### Build Manuale

```bash
docker build -t igladiatori-frontend .
docker run -p 80:80 igladiatori-frontend
```

## 📊 Monitoring

### Logs
```bash
# Log del container
docker-compose logs igladiatori-frontend

# Log Nginx
docker exec igladiatori_frontend tail -f /var/log/nginx/access.log
docker exec igladiatori_frontend tail -f /var/log/nginx/error.log
```

### Statistiche
```bash
# Statistiche del container
docker stats igladiatori_frontend
```

## 🔄 Aggiornamenti

Per aggiornare l'applicazione:

```bash
# Rebuild e restart
docker-compose down
docker-compose up -d --build

# Oppure solo rebuild
docker-compose build --no-cache
docker-compose up -d
```

## 🛑 Troubleshooting

### Container non si avvia
```bash
# Controlla i log
docker-compose logs igladiatori-frontend

# Verifica la configurazione
docker-compose config
```

### Problemi di rete
```bash
# Verifica la rete
docker network ls
docker network inspect web-proxy
```

### Problemi di build
```bash
# Clean build
docker-compose down
docker system prune -f
docker-compose up -d --build
```

### Errore "path not found"
Se ricevi l'errore "unable to prepare context: path not found":
1. Verifica di essere nella directory corretta del progetto
2. Controlla che tutti i file necessari siano presenti
3. Assicurati che il `docker-compose.yml` punti alla directory corretta

## 📝 Note

- L'applicazione è configurata come landing page senza funzionalità di ordinazione online
- Tutti i file statici sono serviti da Nginx con cache ottimizzata
- Il container è configurato per restart automatico (`restart: unless-stopped`)
- La configurazione è ottimizzata per produzione con compressione e security headers
- Il progetto utilizza Vite come build tool per performance ottimali 