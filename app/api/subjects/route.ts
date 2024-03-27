import { myDB } from "@/app/layout"
import { type NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return Response.json(myDB.subjects)
}

export async function POST(request: NextRequest) {
  console.log("-----")
  const res = await request.json()
  const mySubjects = myDB.subjects
  res.id = mySubjects.length + 1
  mySubjects.push(res)
  return Response.json({ message: "Duomenys išsaugoti" })
}
