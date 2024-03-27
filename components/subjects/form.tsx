"use client"
import { useEffect, useState } from "react"
import { Modal } from "../modal"
import { FormFields } from "./formFields"
import { PlusIcon } from "@heroicons/react/24/outline"
import { ISubject } from "../types/subject.t"
import { ISubType } from "../types/subject.t"

type IProps = {
  subTypes: ISubType[]
  getSubFromApi: () => void
  setEditSub: (sub?: ISubject) => void
  editSub?: ISubject
}

export function Form(props: IProps) {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { subTypes, getSubFromApi, editSub, setEditSub } = props

  useEffect(() => {
    if (editSub?.id) setOpenModal(true)
  }, [editSub])

  return (
    <div>
      <button
        className="flex gap-x-1 ring-1 ring-blue-300 hover:ring-blue-600 rounded-lg py-1 px-3"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        <PlusIcon className="h-6 w-6 stroke-blue-600" /> Pridėti
      </button>
      {openModal ? (
        <Modal {...{ openModal, setOpenModal }} title="Užsakymų forma">
          <FormFields {...{ subTypes, getSubFromApi, editSub, setEditSub }} />
        </Modal>
      ) : null}
    </div>
  )
}
