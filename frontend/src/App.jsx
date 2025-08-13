import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'https://ioss-assessment-nft3.onrender.com';

export default function App() {
  const [msg, setMsg] = useState('Loading...')
  const [health, setHealth] = useState('checking...')

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then(r => r.json())
      .then(d => setHealth(d.status))
      .catch(() => setHealth('error'))

    fetch(`${API_URL}/api/example`)
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('error'))
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1502877338535-766e1452684a')"
      }}
    >
      <div className="max-w-xl w-full p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">Arjun Manoj</h1>
        <p className="text-gray-600 mb-6 text-center italic">
          "Once upon a time, there was a sleek red sports car named Blaze.
          It loved racing through winding roads, feeling the wind
          rush past, and dreaming of one day becoming a champion."
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border bg-white bg-opacity-80">
            <div className="text-sm text-gray-500">Backend health</div>
            <div className="text-lg font-semibold">{health}</div>
          </div>

          <div className="p-4 rounded-xl border bg-white bg-opacity-80">
            <div className="text-sm text-gray-500">Example message</div>
            <div className="text-lg font-semibold">{msg}</div>
          </div>

          <div className="p-4 rounded-xl border bg-white bg-opacity-80">
            <div className="text-sm text-gray-500">Env</div>
            <code className="text-xs break-all">{API_URL}</code>
          </div>
        </div>
      </div>
    </div>
  )
}
