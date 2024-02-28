"use client"
import { useState } from "react"
import { SemesterDropdown } from "./parts/semesterDropdown"
import { SubjectList } from "./parts/subjectList"

export function SemesterSubjects() {
  const [semesterId, setSemesterId] = useState<number>(0)

  return (
    <div className="grid grid-flow-row gap-y-8 max-w-sm">
      <SemesterDropdown setSemesterId={setSemesterId} />
      <SubjectList semesterId={semesterId} />
    </div>
  )
}
