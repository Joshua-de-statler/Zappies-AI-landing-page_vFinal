"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Background } from "@/components/background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Bot, Clock, Zap } from "lucide-react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

export default function LeadMagnetPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = getSupabaseBrowserClient()

      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
      ])

      if (error) throw error

      toast({
        title: "Success! Your free bot is on its way.",
        description: "We'll contact you shortly to set up your AI assistant.",
      })

      setFormData({ name: "", email: "", phone: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Oops! Something went wrong.",
        description: "Please try again or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Background />
      <Toaster />

      {/* Simplified Header for a Focused Landing Page */}
      <nav className="fixed top-0 w-full z-50 py-4 bg-[#200E01]/90 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-[5%] flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#EDE7C7] to-[#C41E3A] bg-clip-text text-transparent cursor-pointer"
          >
            Zappies AI
          </Link>
          <a href="#get-free-bot">
            <Button
              variant="outline"
              className="px-6 py-2 bg-transparent border-[#C41E3A] text-[#EDE7C7] rounded-full font-semibold hover:bg-[#C41E3A] transition-all"
            >
              Get Your Free Bot
            </Button>
          </a>
        </div>
      </nav>

      <main className="min-h-screen flex items-center pt-24 pb-12 px-[5%]">
        <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left Side: 3D Visual */}
          <div className="relative h-[500px] md:h-[600px] w-full md:w-[120%] md:-ml-[10%] animate-[fadeInUp_1s_ease]">
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-HiSgMTTXijvS9MMAxqNvexb4/"
              className="w-full h-full border-none"
              title="3D Robot"
              loading="eager"
            />
          </div>

          {/* Right Side: Content & Lead Capture Form */}
          <div className="z-10 animate-[fadeInUp_1.2s_ease]">
            <div className="inline-block px-5 py-2 bg-[#C41E3A]/20 border border-[#C41E3A] rounded-full text-sm mb-5">
              🤖 Free WhatsApp AI Assistant
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#EDE7C7] text-balance">
              Stop Losing Leads on WhatsApp. Get a Free AI Assistant in 5 Minutes.
            </h1>
            <p className="text-lg text-[#EDE7C7]/70 mb-8 leading-relaxed">
              Instantly answer FAQs, qualify leads, and never miss an opportunity again. Our pre-built AI bot works
              24/7, even while you're on-site.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#C41E3A] mt-1 flex-shrink-0" />
                <p className="text-[#EDE7C7]/90">
                  <span className="font-bold text-[#EDE7C7]">Instant Responses:</span> Answer customer questions in
                  seconds, 24/7.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Bot className="w-6 h-6 text-[#C41E3A] mt-1 flex-shrink-0" />
                <p className="text-[#EDE7C7]/90">
                  <span className="font-bold text-[#EDE7C7]">Pre-built & Ready:</span> No setup required. Just connect
                  your WhatsApp and go.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#C41E3A] mt-1 flex-shrink-0" />
                <p className="text-[#EDE7C7]/90">
                  <span className="font-bold text-[#EDE7C7]">Save 5+ Hours a Week:</span> Let your AI assistant handle
                  the repetitive questions.
                </p>
              </div>
            </div>

            <form id="get-free-bot" onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 px-6 text-lg bg-[#EDE7C7]/10 border-[#C41E3A] text-white rounded-md"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-14 px-6 text-lg bg-[#EDE7C7]/10 border-[#C41E3A] text-white rounded-md"
              />
              <Input
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-14 px-6 text-lg bg-[#EDE7C7]/10 border-[#C41E3A] text-white rounded-md"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-xl bg-gradient-to-r from-[#C41E3A] to-[#8B1538] text-[#EDE7C7] rounded-md font-semibold hover:scale-105 transition-all shadow-lg shadow-[#C41E3A]/30"
              >
                {isSubmitting ? "Sending..." : "Get Your Free Bot"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
