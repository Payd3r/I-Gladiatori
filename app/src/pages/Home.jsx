import React from 'react';
import { Link } from 'react-router-dom';
import pizze from '../data/pizze.json';

// Import images
import heroBg from '../assets/1.jpg';
import aboutImg from '../assets/5.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const pizzaImages = [img2, img3, img4];

function Home() {
  const bestSellers = pizze.filter(p => p.best_seller);

  return (
    <div className="bg-primary-black">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="font-heading text-6xl md:text-8xl text-primary-yellow drop-shadow-lg">I Gladiatori</h1>
          <p className="font-body text-xl md:text-2xl mt-4">La vera pizza romana, cotta a legna.</p>
          <Link 
            to="/pizzeria" 
            className="mt-8 inline-block bg-primary-yellow text-primary-black font-bold font-heading py-3 px-8 rounded-full text-lg hover:bg-secondary-orange-light transition-transform transform hover:scale-105"
          >
            Scopri il Menù
          </Link>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-secondary-dark-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center text-primary-yellow mb-12">Le Pizze più Amate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bestSellers.map((pizza, index) => (
              <div key={index} className="bg-primary-black rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img src={pizzaImages[index % pizzaImages.length]} alt={pizza.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-primary-yellow">{pizza.name}</h3>
                  <p className="text-secondary-gray-light mt-2">{pizza.ingredients}</p>
                  <p className="font-bold text-xl text-white mt-4">{pizza.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary-yellow mb-6">La Nostra Passione</h2>
              <p className="text-lg mb-4">
                Da I Gladiatori, la nostra missione è portare in tavola il sapore autentico della tradizione romana. Usiamo solo ingredienti freschi e di prima qualità, e il nostro forno a legna è il cuore pulsante della nostra cucina.
              </p>
              <p className="text-lg">
                Venite a trovarci per un'esperienza indimenticabile, dove ogni pizza racconta una storia di passione e sapore.
              </p>
            </div>
            <div>
              <img src={aboutImg} alt="Interno del ristorante" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
