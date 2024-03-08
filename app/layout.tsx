import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ICertificate } from "@/components/types/certificate.t"

type IMyDB = { certificates: ICertificate[] }
export const myDB: IMyDB = {
  certificates: [],
}

export const metadata: Metadata = {
  title: "Rycio akademine sistema",
  description: "Studentu pasiekimu vertinimai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lt">
      <body className={"container mx-auto max-w-screen-x1"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
