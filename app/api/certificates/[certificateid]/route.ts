import { myDB } from "@/app/layout"
import { type NextRequest } from "next/server"
import { ICertType } from "@/components/types/certificate.t"
import { ICertificate } from "@/components/types/certificate.t"
import { parse } from "url"

export async function PUT(request: NextRequest) {
  const res: ICertificate = await request.json()

  const myCertificate = myDB.certificates

  const index = myCertificate.findIndex((i) => i.id === res.id)

  if (index === -1)
    return Response.json({ message: "Nepavyko pakeisti duomenų" })

  myCertificate.splice(index, 1, res)
  return Response.json({ message: "Pakeitimas sėkmingai įvykdytas" })
}
export async function DELETE(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { certificateId } = parse(pathname, true).query
  const myCertificate = myDB.certificates

  const index = myCertificate.findIndex((i) => i.id === certificateId)

  if (index === -1) return Response.json({ message: "Įrašas nerastas" })

  myCertificate.splice(index, 1)
  return Response.json({ message: "Įrašas sekmingai ištrintas" })
}
