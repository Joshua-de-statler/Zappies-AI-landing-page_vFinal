"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Background } from "@/components/background"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Check } from "lucide-react"

export default function LeadMagnetPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // This simulates sending the data to your email marketing service
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Success! Your Guide is on its way.",
      description: "Please check your inbox for the download link.",
    })

    setIsSubmitting(false)
    setEmail("")
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
          {/* --- CHANGE IS HERE --- */}
          {/* This now links directly to your Calendly page */}
          <a href="https://calendly.com/zappiesai1/30min" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-6 py-2 bg-transparent border-[#C41E3A] text-[#EDE7C7] rounded-full font-semibold hover:bg-[#C41E3A] transition-all"
            >
              Book a Demo
            </Button>
          </a>
        </div>
      </nav>

      <main className="min-h-screen flex items-center pt-24 pb-12 px-[5%]">
        <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: 3D Visual */}
          <div className="relative h-[500px] md:h-[600px] w-full animate-[fadeInUp_1s_ease]">
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
              📘 Free Builder's Playbook
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#EDE7C7] text-balance">
              The AI Playbook: 5 Strategies to Automate Leads & Streamline Projects
            </h1>
            <p className="text-lg text-[#EDE7C7]/70 mb-8 leading-relaxed">
              Stop losing high-value clients and letting admin slow you down. This exclusive guide reveals the AI
              strategies top South African builders are using to scale their operations.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#C41E3A] mt-1 flex-shrink-0" />
                <p className="text-[#EDE7C7]/90">
                  <span className="font-bold text-[#EDE7C7]">Instantly Qualify Leads:</span> Identify high-ticket
                  clients 24/7, even while you're on-site.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#C41E3A] mt-1 flex-shrink-0" />
                <p className="text-[#EDE7C7]/90">
                  <span className="font-bold text-[#EDE7C7]">Automate Client Updates:</span> Save 10+ hours a week by
                  automating communication without losing the personal touch.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#C41E3A] mt-1 flex-shrink-0" />
                <p className="text-[#EDE7C7]/90">
                  <span className="font-bold text-[#EDE7C7]">Unlock a Competitive Edge:</span> Implement the exact AI
                  workflow that gives you an unfair advantage in a crowded market.
                </p>
              </div>
            </div>

            <a
              href="https://calendly.com/zappiesai1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="h-16 px-12 text-xl bg-gradient-to-r from-[#C41E3A] to-[#8B1538] text-[#EDE7C7] rounded-md font-semibold hover:scale-105 transition-all shadow-lg shadow-[#C41E3A]/30">
                Book Your Free Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
