"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const result = await subscribeToNewsletter(email)
      if (result.success) {
        setStatus("success")
        setMessage("Thanks for subscribing! Check your inbox for confirmation.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="bg-dark-blue/50 rounded-lg p-8 border border-purple/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
          <p className="text-gray-300">
            Subscribe to receive updates, exam tips, and exclusive content about Kubernetes security.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-purple/60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark-blue/70 border border-purple/30 text-white text-sm rounded-lg focus:ring-purple focus:border-purple block w-full pl-10 p-3"
                placeholder="Enter your email address"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-purple hover:bg-purple-dark text-white font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-center transition-colors disabled:opacity-70"
            >
              {status === "loading" ? (
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Subscribe
            </button>
          </div>

          {status === "success" && (
            <div className="p-3 bg-green-900/30 border border-green-500/30 text-green-300 rounded-lg">{message}</div>
          )}

          {status === "error" && (
            <div className="p-3 bg-red-900/30 border border-red-500/30 text-red-300 rounded-lg">{message}</div>
          )}

          <p className="text-xs text-gray-400 mt-2">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </div>
    </div>
  )
}
