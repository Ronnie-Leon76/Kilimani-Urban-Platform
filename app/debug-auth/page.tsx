"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"

export default function DebugAuthPage() {
  const { data: session, status } = useSession()
  const [apiResult, setApiResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testUserAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/test-user')
      const data = await response.json()
      setApiResult(data)
    } catch (error) {
      setApiResult({ error: 'Failed to call API', details: error })
    } finally {
      setLoading(false)
    }
  }

  const forceCreateUser = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/test-user', { method: 'POST' })
      const data = await response.json()
      setApiResult(data)
    } catch (error) {
      setApiResult({ error: 'Failed to create user', details: error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Authentication Debug Page</h1>
      
      <div className="space-y-6">
        {/* Session Status */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Session Status</h2>
          <p><strong>Status:</strong> {status}</p>
        </div>

        {/* Session Data */}
        {session && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Session Data</h2>
            <pre className="text-sm bg-white p-3 rounded border overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        )}

        {/* Test Buttons */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Debug Actions</h2>
          <div className="space-x-4">
            <button
              onClick={testUserAPI}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Test User API'}
            </button>
            <button
              onClick={forceCreateUser}
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Force Create User'}
            </button>
          </div>
        </div>

        {/* API Result */}
        {apiResult && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">API Result</h2>
            <pre className="text-sm bg-white p-3 rounded border overflow-auto">
              {JSON.stringify(apiResult, null, 2)}
            </pre>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Make sure you're logged in to see session data</li>
            <li>Click "Test User API" to check if your user exists in the database</li>
            <li>If user doesn't exist, click "Force Create User" to create it manually</li>
            <li>Check the browser console for detailed auth flow logs</li>
            <li>Check the server logs for database operations</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
