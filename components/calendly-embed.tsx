"use client"

import { InlineWidget } from "react-calendly"

export function CalendlyEmbed() {
  return (
    <div className="rounded-lg overflow-hidden border border-[#C41E3A]/30">
      <InlineWidget
        url="https://calendly.com/zappiesai1/30min"
        styles={{
          height: "800px",
        }}
        pageSettings={{
          backgroundColor: "200e01",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "c41e3a",
          textColor: "ede7c7",
        }}
      />
    </div>
  )
}
