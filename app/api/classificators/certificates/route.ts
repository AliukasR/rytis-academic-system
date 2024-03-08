import { ICertType } from "@/components/types/certificate.t"
import { type NextRequest } from "next/server"

const certTypes: ICertType[] = [
  { id: 1, title: "Studijų pažyma" },
  { id: 2, title: "Akademinės atostogos" },
  { id: 3, title: " Skolos lapelis" },
]

export async function GET(request: NextRequest) {
  return Response.json(certTypes)
}
