import { ISubject } from "@/components/types/subject.t"
import { type NextRequest } from "next/server"

const subjectsDb: { [key: string]: ISubject[] } = {
  1: [
    { id: 1, title: "Akademinių atostogų prašymas 2025-11-30" },
    { id: 2, title: "Akademinių atostogų prašymas 2012-10-15" },
    { id: 3, title: "Akademinių atostogų prašymas 2024-05-09" },
  ],
  2: [{ id: 4, title: "Studijų pažymos užsakymas" }],
  3: [{ id: 5, title: "Skolos lapelių užsakymas" }],
  4: [{ id: 6, title: "Prašymas dėl egzamino perlaikymo datos" }],
  5: [
    { id: 7, title: "Akademinių atostogų prašymas 2025-11-30" },
    { id: 8, title: "Akademinių atostogų prašymas 2012-10-15" },
    { id: 9, title: "Akademinių atostogų prašymas 2024-05-09" },
    { id: 10, title: "Studijų pažymos užsakymas" },
    { id: 11, title: "Skolos lapelių užsakymas" },
    { id: 12, title: "Prašymas dėl egzamino perlaikymo datos" },
  ],
}

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const semesterId = searchParams.get("semesterId") ?? ""
  const subjects = subjectsDb[semesterId] || []
  return Response.json(subjects)
}
