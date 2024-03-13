import { myDB } from "@/app/layout"
import { type NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return Response.json(myDB.certificates)
}

export async function PUT(request: NextRequest) {
  const res = await request.json()
  const myCertificates = myDB.certificates
  res.id = myCertificates.length + 1
  myCertificates.push(res)
  return Response.json({ message: "Duomenys išsaugoti" })
}
