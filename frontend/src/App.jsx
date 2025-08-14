import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://ioss-assessment-nft3.onrender.com';

export default function App() {
  const [health, setHealth] = useState('checking...');

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then(r => r.json())
      .then(d => setHealth(d.status))
      .catch(() => setHealth('error'));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">E-Store</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-indigo-500">Home</a>
            <a href="#shop" className="hover:text-indigo-500">Shop</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to E-Store</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Your one-stop shop for the latest and greatest products, delivered right to your doorstep.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section id="shop" className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Featured Products</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: 'Wireless Headphones', price: '$99', img: 'https://via.placeholder.com/300x200' },
            { name: 'Smart Watch', price: '$149', img: 'https://via.placeholder.com/300x200' },
            { name: 'Gaming Mouse', price: '$49', img: 'https://via.placeholder.com/300x200' }
          ].map((product, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                <p className="text-indigo-600 font-bold">{product.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Backend Status */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Backend Health</p>
          <p className="text-lg font-semibold">{health}</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} E-Store. All rights reserved.</p>
          <p>Built with ❤️ and React</p>
        </div>
      </footer>
    </div>
  );
}
