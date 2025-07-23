import React from 'react';
import { FaShieldAlt, FaLock, FaEye } from 'react-icons/fa';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-yellow to-secondary-orange-light">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaShieldAlt className="text-4xl text-primary-black mr-4" />
            <h1 className="font-heading text-5xl text-primary-black">Privacy Policy</h1>
          </div>
          <p className="text-xl text-primary-black/90 max-w-2xl mx-auto">
            La tua privacy è importante per noi. Scopri come raccogliamo, utilizziamo e proteggiamo le tue informazioni.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="bg-primary-cream border border-secondary-gray-light rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-2xl text-secondary-gray-dark mr-3" />
                <h2 className="font-heading text-3xl text-secondary-gray-dark">Introduzione</h2>
              </div>
              <p className="text-secondary-gray leading-relaxed">
                I Gladiatori ("noi", "nostro", "ci") si impegna a proteggere la tua privacy. 
                Questa Privacy Policy spiega come raccogliamo, utilizziamo e proteggiamo le tue 
                informazioni personali quando visiti il nostro sito web o utilizzi i nostri servizi.
              </p>
            </div>

            {/* Information Collection */}
            <div className="bg-primary-cream border border-secondary-gray-light rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <FaLock className="text-2xl text-secondary-gray-dark mr-3" />
                <h2 className="font-heading text-3xl text-secondary-gray-dark">Raccolta delle Informazioni</h2>
              </div>
              <p className="text-secondary-gray mb-4">
                Raccogliamo le seguenti tipologie di informazioni:
              </p>
              <ul className="text-secondary-gray space-y-2 ml-6">
                <li>• <strong>Informazioni personali:</strong> Nome, email, telefono, indirizzo</li>
                <li>• <strong>Informazioni di navigazione:</strong> IP, browser, pagine visitate</li>
                <li>• <strong>Informazioni sui dispositivi:</strong> Tipo di dispositivo, sistema operativo</li>
                <li>• <strong>Cookie e tecnologie simili:</strong> Per migliorare l'esperienza utente</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="bg-primary-cream border border-secondary-gray-light rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <FaEye className="text-2xl text-secondary-gray-dark mr-3" />
                <h2 className="font-heading text-3xl text-secondary-gray-dark">Come Utilizziamo le Informazioni</h2>
              </div>
              <p className="text-secondary-gray mb-4">
                Utilizziamo le tue informazioni per:
              </p>
              <ul className="text-secondary-gray space-y-2 ml-6">
                <li>• Fornire e migliorare i nostri servizi</li>
                <li>• Processare ordini e prenotazioni</li>
                <li>• Comunicare con te riguardo ai nostri servizi</li>
                <li>• Personalizzare la tua esperienza</li>
                <li>• Rispettare gli obblighi legali</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="bg-primary-cream border border-secondary-gray-light rounded-2xl p-8">
              <h2 className="font-heading text-3xl text-secondary-gray-dark mb-4">Condivisione delle Informazioni</h2>
              <p className="text-secondary-gray leading-relaxed">
                Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti, 
                eccetto nei seguenti casi:
              </p>
              <ul className="text-secondary-gray space-y-2 ml-6 mt-4">
                <li>• Con il tuo consenso esplicito</li>
                <li>• Per rispettare obblighi legali</li>
                <li>• Con fornitori di servizi che ci aiutano a operare (solo con garanzie di protezione)</li>
                <li>• In caso di fusione o acquisizione aziendale</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-primary-cream border border-secondary-gray-light rounded-2xl p-8">
              <h2 className="font-heading text-3xl text-secondary-gray-dark mb-4">Sicurezza dei Dati</h2>
              <p className="text-secondary-gray leading-relaxed">
                Implementiamo misure di sicurezza appropriate per proteggere le tue informazioni personali 
                contro accesso non autorizzato, alterazione, divulgazione o distruzione. Queste misure includono:
              </p>
              <ul className="text-secondary-gray space-y-2 ml-6 mt-4">
                <li>• Crittografia dei dati sensibili</li>
                <li>• Controlli di accesso rigorosi</li>
                <li>• Monitoraggio regolare dei sistemi</li>
                <li>• Aggiornamenti di sicurezza</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="bg-primary-cream border border-secondary-gray-light rounded-2xl p-8">
              <h2 className="font-heading text-3xl text-secondary-gray-dark mb-4">I Tuoi Diritti</h2>
              <p className="text-secondary-gray mb-4">
                Hai il diritto di:
              </p>
              <ul className="text-secondary-gray space-y-2 ml-6">
                <li>• Accedere alle tue informazioni personali</li>
                <li>• Correggere informazioni inesatte</li>
                <li>• Richiedere la cancellazione dei tuoi dati</li>
                <li>• Limitare il trattamento dei tuoi dati</li>
                <li>• Opporti al trattamento dei tuoi dati</li>
                <li>• Portabilità dei dati</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary-yellow to-secondary-orange-light rounded-2xl p-8 text-primary-black">
              <h2 className="font-heading text-3xl mb-4">Informazioni di Contatto</h2>
              <p className="text-lg mb-4">
                Per qualsiasi domanda riguardo questa Privacy Policy o il trattamento dei tuoi dati, 
                contattaci:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@igladiatori.it</p>
                <p><strong>Telefono:</strong> +39 06 1234 5678</p>
                <p><strong>Indirizzo:</strong> Via Roma 123, 00100 Roma (RM)</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center text-secondary-gray">
              <p className="text-sm">
                <strong>Ultimo aggiornamento:</strong> 1 Gennaio 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
