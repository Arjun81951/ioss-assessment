import { useEffect, useState } from 'react';
import { ActivityIndicator } from './components/ActivityIndicator'; // Optional small spinner

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-xl w-full p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl transition-all hover:scale-[1.01]">
        
        {/* Name */}
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800 tracking-tight">
          Arjun Manoj
        </h1>

        {/* Story */}
        <p className="text-gray-700 mb-8 text-center leading-relaxed text-lg">
          "Once upon a time, there was a sleek red sports car named <span className="font-semibold text-red-500">Blaze</span>.
          It loved racing through winding roads, feeling the wind rush past, and dreaming of one day
          becoming a champion."
        </p>

        {/* Backend Status Card */}
        <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 shadow-md">
          <div className="text-sm text-gray-500 uppercase tracking-wide">
            Backend Health
          </div>
          <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            {health === 'checking...' ? (
              <>
                <ActivityIndicator size="small" /> Checking...
              </>
            ) : (
              health
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
