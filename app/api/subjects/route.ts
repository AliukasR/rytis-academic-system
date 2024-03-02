import { ISubject } from "@/components/types/subject.t"
import { type NextRequest } from "next/server"

const subjectsDb: { [key: string]: ISubject[] } = {
  1: [
    { id: 1, title: "Matematika" },
    { id: 2, title: "Anglų k." },
    { id: 3, title: "Programavimas" },
    { id: 4, title: "Operacinės sistemos" },
    { id: 5, title: "Kompiuterių architektūra" },
    { id: 6, title: "Praktinė informatika" },
  ],
  2: [
    { id: 7, title: "Objektinis programavimas" },
    { id: 8, title: "Profesinė kalba" },
    { id: 9, title: "Profesinė komunikacija" },
    { id: 10, title: "Matematika" },
    { id: 11, title: "Internetinės technologijos" },
  ],
  3: [
    { id: 12, title: "Tinklai" },
    { id: 13, title: "Duomenų bazė" },
    { id: 14, title: "Duomenų struktūra ir algoritmai" },
    { id: 15, title: "Taikomoji matematika" },
  ],
}

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const semesterId = searchParams.get("semesterId") ?? ""
  const subjects = subjectsDb[semesterId] || []
  return Response.json(subjects)
}
