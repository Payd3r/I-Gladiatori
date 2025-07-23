import React from 'react';
import pizze from '../data/pizze.json';
import bannerImg from '../assets/5.jpg'; // Using the banner image for pages

// MenuItem component, redesigned with Tailwind
const MenuItem = ({ name, ingredients, price }) => (
  <div className="py-4 border-b border-dashed border-secondary-gray">
    <div className="flex justify-between items-baseline">
      <h3 className="font-heading text-2xl text-primary-yellow">{name}</h3>
      <p className="font-bold text-xl text-white ml-4">{price}</p>
    </div>
    <p className="text-secondary-gray-light mt-1">{ingredients}</p>
  </div>
);

function Pizzeria() {
  const leClassiche = pizze.filter(p => p.category === 'Le Classiche');
  const leSpeciali = pizze.filter(p => p.category === 'Le Speciali');

  return (
    <div className="bg-primary-black">
      {/* Banner */}
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="h-full w-full bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="font-heading text-5xl text-center text-primary-yellow mb-8">Le Nostre Pizze</h1>

        {/* Special Doughs Alert */}
        <div className="bg-secondary-orange-dark text-white text-center p-4 rounded-lg mb-12">
          <p>Tutte le nostre pizze sono disponibili anche con impasto <strong>Pinsa</strong>, <strong>Integrale</strong> o <strong>Senza Glutine</strong> (con un supplemento).</p>
        </div>

        {/* Menu Sections */}
        <div>
          <h2 className="font-heading text-4xl text-white mb-6">Le Classiche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {leClassiche.map((pizza, index) => (
              <MenuItem key={index} {...pizza} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-4xl text-white mb-6">Le Speciali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {leSpeciali.map((pizza, index) => (
              <MenuItem key={index} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizzeria;