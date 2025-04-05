'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Optional: redirect authenticated users to dashboard
    const isLoggedIn = false // Replace with real auth check
    if (isLoggedIn) {
      router.push('/dashboard')
    }
  }, [router])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100 font-sans">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
        <p className="text-gray-600">Please sign in or sign up to continue.</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/signin"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  )
}
