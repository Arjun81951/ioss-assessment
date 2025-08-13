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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-2">iOSS Assessment Starter</h1>
        <p className="text-gray-600 mb-6">Flask API + React + Docker</p>

        {/* Your name card */}
        <div className="p-4 rounded-xl border bg-blue-50 text-center">
          <div className="text-lg font-semibold text-blue-700">Arjun Manoj</div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="p-4 rounded-xl border">
            <div className="text-sm text-gray-500">Backend health</div>
            <div className="text-lg font-semibold">{health}</div>
          </div>

          <div className="p-4 rounded-xl border">
            <div className="text-sm text-gray-500">Example message</div>
            <div className="text-lg font-semibold">{msg}</div>
          </div>

          <div className="p-4 rounded-xl border">
            <div className="text-sm text-gray-500">Env</div>
            <code className="text-xs break-all">{API_URL}</code>
          </div>
        </div>
      </div>
    </div>
  )
}
