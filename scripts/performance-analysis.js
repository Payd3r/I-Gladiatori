#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = 'dist';
const MAX_CHUNK_SIZE = 500 * 1024; // 500KB
const MAX_INITIAL_BUNDLE = 1024 * 1024; // 1MB

console.log('📊 Analizzando le prestazioni del bundle...\n');

// Analizza i file nella directory dist
function analyzeBundle() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Directory dist non trovata. Esegui prima `npm run build`');
    process.exit(1);
  }

  const stats = {
    total: 0,
    js: { size: 0, count: 0, files: [] },
    css: { size: 0, count: 0, files: [] },
    images: { size: 0, count: 0, files: [] },
    other: { size: 0, count: 0, files: [] }
  };

  function analyzeDirectory(dir, relativePath = '') {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const relativeFilePath = path.join(relativePath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        analyzeDirectory(filePath, relativeFilePath);
      } else {
        const size = stat.size;
        const ext = path.extname(file).toLowerCase();
        
        stats.total += size;

        if (['.js', '.mjs'].includes(ext)) {
          stats.js.size += size;
          stats.js.count++;
          stats.js.files.push({ path: relativeFilePath, size });
        } else if (ext === '.css') {
          stats.css.size += size;
          stats.css.count++;
          stats.css.files.push({ path: relativeFilePath, size });
        } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif'].includes(ext)) {
          stats.images.size += size;
          stats.images.count++;
          stats.images.files.push({ path: relativeFilePath, size });
        } else {
          stats.other.size += size;
          stats.other.count++;
          stats.other.files.push({ path: relativeFilePath, size });
        }
      }
    }
  }

  analyzeDirectory(DIST_DIR);
  return stats;
}

// Formatta la dimensione in formato human-readable
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Analizza le prestazioni e fornisce suggerimenti
function analyzePerformance(stats) {
  console.log('📈 Risultati dell\'analisi:\n');

  // Riepilogo generale
  console.log(`🎯 Dimensione totale del bundle: ${formatSize(stats.total)}`);
  console.log(`📦 File JavaScript: ${stats.js.count} (${formatSize(stats.js.size)})`);
  console.log(`🎨 File CSS: ${stats.css.count} (${formatSize(stats.css.size)})`);
  console.log(`🖼️  Immagini: ${stats.images.count} (${formatSize(stats.images.size)})`);
  console.log(`📄 Altri file: ${stats.other.count} (${formatSize(stats.other.size)})\n`);

  // Score delle prestazioni
  let score = 100;
  
  if (stats.total > 2 * 1024 * 1024) score -= 20; // > 2MB
  if (stats.js.files.some(f => f.size > MAX_CHUNK_SIZE)) score -= 15;
  if (stats.images.files.some(f => f.size > 100 * 1024)) score -= 15;
  if (stats.js.size > stats.total * 0.7) score -= 10; // JS > 70% del bundle

  console.log(`\n🏆 Score prestazioni: ${Math.max(0, score)}/100`);
  
  if (score >= 90) {
    console.log('🎉 Eccellente! Il bundle è ben ottimizzato.');
  } else if (score >= 70) {
    console.log('👍 Buono, ma ci sono margini di miglioramento.');
  } else if (score >= 50) {
    console.log('⚠️  Mediocre, considera le ottimizzazioni suggerite.');
  } else {
    console.log('❌ Il bundle necessita di ottimizzazioni significative.');
  }

  return score;
}

// Script principale
function main() {
  try {
    const stats = analyzeBundle();
    const score = analyzePerformance(stats);
    
    console.log('\n✨ Analisi completata!');
    
    // Exit code basato sul score
    if (score < 50) {
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Errore durante l\'analisi:', error.message);
    process.exit(1);
  }
}

// Esegui lo script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
