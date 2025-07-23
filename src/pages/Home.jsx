import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaFire, FaLeaf, FaStar } from 'react-icons/fa';
import logo from '../assets/logo.webp';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img1} alt="I Gladiatori" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <img src={logo} alt="Logo" className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl" />
          <h1 className="font-heading text-5xl md:text-7xl mb-6 animate-fade-in">
            I Gladiatori
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            La vera cucina romana dal 1985. Tradizione, qualità e passione in ogni piatto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">            
            <Link
              to="/pizze-asporto"
              className="bg-primary-yellow text-primary-black font-bold font-heading px-8 py-4 rounded-full hover:bg-secondary-orange-light transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Ordina Asporto
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-gray-dark mb-4">Perché Scegliere I Gladiatori</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFire className="text-2xl text-primary-yellow" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-gray-dark mb-4">Tradizione</h3>
              <p className="text-secondary-gray">Oltre 35 anni di esperienza nella cucina romana tradizionale.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-2xl text-primary-yellow" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-gray-dark mb-4">Qualità</h3>
              <p className="text-secondary-gray">Solo ingredienti freschi e di prima qualità per i nostri piatti.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaStar className="text-2xl text-primary-yellow" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-gray-dark mb-4">Passione</h3>
              <p className="text-secondary-gray">La passione per la cucina si sente in ogni boccone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-gray-dark mb-4">I Nostri Piatti Più Amati</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white border border-secondary-gray-light rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img src={img2} alt="Pizza Margherita" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-primary-yellow text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                  BEST SELLER
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-secondary-gray-dark mb-2">Pizza Margherita</h3>
                <p className="text-secondary-gray mb-4">La classica pizza romana con pomodoro, mozzarella e basilico.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-2xl text-accent-red">€8,50</span>
                  <Link to="/pizzeria" className="bg-primary-yellow text-primary-black font-bold px-4 py-2 rounded-full hover:bg-secondary-orange-light transition-colors">
                    Ordina Ora
                  </Link>
                </div>
              </div>
            </div>

            <div className="group bg-white border border-secondary-gray-light rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img src={img3} alt="Carbonara" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-primary-yellow text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                  TRADIZIONALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-secondary-gray-dark mb-2">Carbonara</h3>
                <p className="text-secondary-gray mb-4">La vera carbonara romana con uova, guanciale e pecorino.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-2xl text-accent-red">€12,00</span>
                  <Link to="/ristorante" className="bg-primary-yellow text-primary-black font-bold px-4 py-2 rounded-full hover:bg-secondary-orange-light transition-colors">
                    Ordina Ora
                  </Link>
                </div>
              </div>
            </div>

            <div className="group bg-white border border-secondary-gray-light rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img src={img4} alt="Tiramisù" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-primary-yellow text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                  DOLCE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-secondary-gray-dark mb-2">Tiramisù</h3>
                <p className="text-secondary-gray mb-4">Il dolce della casa, fatto con ingredienti selezionati.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-2xl text-accent-red">€6,50</span>
                  <Link to="/ristorante" className="bg-primary-yellow text-primary-black font-bold px-4 py-2 rounded-full hover:bg-secondary-orange-light transition-colors">
                    Ordina Ora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-red to-accent-red/70">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white mb-6">Vieni a Trovarci</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Prenota il tuo tavolo o ordina il tuo asporto. Ti aspettiamo per farti gustare
            la vera cucina romana!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pizze-asporto" className="border-2 border-white text-white font-bold font-heading px-8 py-4 rounded-full hover:bg-white hover:text-primary-black transition-all duration-300">
              Ordina Asporto
            </Link>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={img5} alt="I Gladiatori" className="rounded-2xl shadow-xl" />
              <div className="absolute -top-4 -right-4 bg-primary-yellow text-primary-black px-4 py-2 rounded-full font-bold">
                Dal 1985
              </div>
            </div>

            <div>
              <h2 className="font-heading text-4xl text-secondary-gray-dark mb-6">La Nostra Storia</h2>
              <p className="text-secondary-gray text-lg mb-6">
                I Gladiatori nasce nel 1985 dal sogno di portare la vera cucina romana tradizionale
                nel cuore della città. Da oltre 35 anni, la nostra famiglia si dedica con passione
                alla preparazione di piatti autentici, utilizzando solo ingredienti freschi e di qualità.
              </p>
              <p className="text-secondary-gray text-lg mb-8">
                La nostra filosofia è semplice: rispettare le tradizioni culinarie romane,
                mantenere alta la qualità degli ingredienti e offrire un'esperienza gastronomica
                che riscaldi il cuore e soddisfi il palato.
              </p>
              <Link to="/about" className="bg-primary-yellow text-primary-black font-bold font-heading px-8 py-4 rounded-full hover:bg-secondary-orange-light transition-all duration-300">
                Scopri di Più
              </Link>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Home;
