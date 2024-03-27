import { ISubType } from "@/components/types/subject.t"
import { type NextRequest } from "next/server"

const certTypes: ISubType[] = [
  { id: 1, title: "Studijų pažyma" },
  { id: 2, title: "Akademinės atostogos" },
  { id: 3, title: " Skolos lapelis" },
  { id: 4, title: "Egzamino perlaikymas" },
]

export async function GET(request: NextRequest) {
  return Response.json(certTypes)
}
