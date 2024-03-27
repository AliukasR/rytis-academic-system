import { myDB } from "@/app/layout"
import { type NextRequest } from "next/server"
import { ISubType } from "@/components/types/subject.t"
import { ISubject } from "@/components/types/subject.t"
import { parse } from "url"

export async function PUT(request: NextRequest) {
  const res: ISubject = await request.json()

  const mySubjects = myDB.subjects

  const index = mySubjects.findIndex((i) => i.id === res.id)

  if (index === -1)
    return Response.json({ message: "Nepavyko pakeisti duomenų" })

  mySubjects.splice(index, 1, res)
  return Response.json({ message: "Pakeitimas sėkmingai įvykdytas" })
}
export async function DELETE(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { certificateId } = parse(pathname, true).query
  const mySubjects = myDB.subjects

  const index = mySubjects.findIndex((i) => i.id === certificateId)

  if (index === -1) return Response.json({ message: "Įrašas nerastas" })

  mySubjects.splice(index, 1)
  return Response.json({ message: "Įrašas sekmingai ištrintas" })
}
