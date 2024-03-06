import { ISemester } from "@/components/types/semester.t"
import { type NextRequest } from "next/server"

const semestersDb: ISemester[] = [
  { id: 1, name: "Akademinės atostogos" },
  { id: 2, name: "Studijų pažymos" },
  { id: 3, name: "Skolos lapeliai" },
  { id: 4, name: "Egzamino perlaikymai" },
  { id: 5, name: "Viskas" },
]

export function GET(request: NextRequest) {
  return Response.json(semestersDb)
}
