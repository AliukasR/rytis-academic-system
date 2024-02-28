import { ISubject } from "@/components/types/subject.t"
import { propagateServerField } from "next/dist/server/lib/render-server"
import { useEffect, useState } from "react"

type IProps = { semesterId: number }

export function SubjectList(props: IProps) {
  const { semesterId } = props
  const [subjects, setSubjects] = useState<ISubject[]>([])
  useEffect(() => {
    if (!semesterId) {
      setSubjects([])
      return
    }
    fetch("/api/subjects?semesterId= ${semesterId}")
      .then((res) => res.json())
      .then((r) => setSubjects(r))
  }, [semesterId])

  return (
    <ul className="font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
      {subjects.map((subject) => (
        <li
          key={subject.id}
          className="px-4 py-2 border-b border-gray-200 rounded-t-lg"
        >
          {subject.title}
        </li>
      ))}
    </ul>
  )
}
