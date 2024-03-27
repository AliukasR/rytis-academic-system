"use client"
import { PencilIcon } from "@heroicons/react/24/outline"
import { TrashIcon } from "@heroicons/react/24/outline"
import { ISubject } from "../types/subject.t"
import { ISubType } from "../types/subject.t"

type IProps = {
  subTypes: ISubType[]
  subjects: ISubject[]
  setEditSub: (sub: ISubject) => void
}

export function SubList(props: IProps) {
  const { subTypes, subjects, setEditSub } = props

  const findType = (id?: number) => subTypes.find((i) => i.id === id)?.title

  const changeSub = (id?: number) => {
    if (!id) return
    const sub = subjects.find((i) => i.id === id)
    if (!sub) return
    setEditSub(sub)
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Pavadinimas
          </th>
          <th scope="col" className="px-6 py-3">
            Pastaba
          </th>
          <th scope="col" className="px-6 py-3">
            Veiksmai
          </th>
        </tr>
      </thead>
      <tbody className="bg-white border-b">
        {subjects.map((sub) => (
          <tr key={sub.id}>
            <td className="px-6 py-4">{findType(sub.typeId)}</td>
            <td className="px-6 py-4">{sub.company}</td>
            <td className="px-6 py-4">
              <button title="Keisti duomenis" onClick={() => changeSub(sub.id)}>
                <PencilIcon className="w-5 h-5 stroke-blue-600" />
              </button>
              <button type="button" title="Istrinti duomenis">
                <TrashIcon className="w-5 h-5 stroke-red-600" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
