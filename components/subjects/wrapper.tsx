"use client"
import { ISubType, ISubject } from "@/components/types/subject.t"
import { Form } from "./form"
import { SubList } from "./list"
import { useEffect, useState } from "react"
import { getApi, deleteApi } from "@/utils/serverApi"

type IProps = { subTypes: ISubType[] }

export function Wrapper(props: IProps) {
  const { subTypes } = props
  const [editSub, setEditSub] = useState<ISubject | undefined>()
  const [subjects, setSubjects] = useState<ISubject[]>([])
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const getSubFromApi = () => {
    getApi<ISubject[]>(`/api/subjects`).then((res: ISubject[]) => {
      setSubjects(res)
    })
  }

  useEffect(() => {
    getSubFromApi()
  }, [])

  const deleteSubFromApi = (sub: ISubject) => {
    if (!sub || !sub.id) {
      console.error("Cannot delete ")
      return
    }
    setIsDeleting(true)
    deleteApi(`/api/subjects/${sub.id}`)
      .then(() => {
        getSubFromApi()
        setIsDeleting(false)
      })
      .catch((error) => {
        console.error("Error deleting subjects", error)
        setIsDeleting(false)
      })
  }

  return (
    <div className="grid gap-y-9">
      <Form
        subTypes={subTypes}
        getSubFromApi={getSubFromApi}
        setEditSub={setEditSub}
        editSub={editSub}
      />
      <SubList
        subTypes={subTypes}
        subjects={subjects}
        setEditSub={setEditSub}
      />
    </div>
  )
}
