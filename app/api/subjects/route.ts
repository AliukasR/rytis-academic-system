import { ISubject } from "@/components/types/subject.t"
import { type NextRequest } from "next/server"

const subjectsDb: { [key: string]: ISubject[] } = {
  1: [
    { id: 1, title: "Matematika" },
    { id: 2, title: "Anglų k." },
  ],
  2: [
    { id: 3, title: "Objektinis programavimas" },
    { id: 4, title: "Profesinė kalba" },
  ],
  3: [
    { id: 5, title: "Tinklai" },
    { id: 6, title: "Duomenų bazė" },
  ],
}

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const semesterId = searchParams.get("semesterId") ?? ""
  const subjects = subjectsDb[semesterId] || []
  return Response.json(subjects)
}
