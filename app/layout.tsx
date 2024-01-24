import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fylo Data Storage Component",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${raleway.className} flex min-h-screen flex-col items-center justify-center bg-neutral-very-dark-blue bg-[url('/images/bg-mobile.png')] bg-cover bg-bottom bg-no-repeat text-white lg:bg-[url('/images/bg-desktop.png')] lg:bg-contain`}
      >
        {children}
      </body>
    </html>
  )
}
