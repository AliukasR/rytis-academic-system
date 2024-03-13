"use client"
import { IState } from "@/components/types/shared.t"
import { useFormState } from "react-dom"
import { ICertType, ICertificate } from "@/components/types/certificate.t"
import { SubmitButton } from "@/components/parts/submitButton"
import { createCertificates } from "@/app/actions/certificates"
import { useEffect, useMemo, useRef, useState } from "react"
import { Select } from "../parts/selext"
import { toSelArr } from "@/utils/form/selectHelper"
import { TextField } from "../parts/textField"
import { IOption } from "../types/form.t"

type IProps = {
  certTypes: ICertType[]
  getCertFromApi: () => void
  setEditCert: (cert?: ICertificate) => void
  editCert?: ICertificate
}

const initialState: IState = {
  message: "",
  errors: undefined,
  isSaved: false,
}

export function Form(props: IProps) {
  const { certTypes, getCertFromApi, editCert, setEditCert } = props
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState<IState, FormData>(
    createCertificates,
    initialState
  )

  const selProps = useMemo(
    () => ({
      label: "Pažymos pavadinimas",
      name: "typeId",
      isRequired: true,
      defaultValue: editCert?.typeId ?? 0,
      error: state?.errors?.typeId && state?.errors?.typeId.join(" | "),
    }),
    [editCert, state]
  )
  useEffect(() => {
    if (state.isSaved) {
      getCertFromApi()
    }
  }, [state])
  const handleAction = (data: FormData) => {
    formAction(data)
    ref.current?.reset()
    if (data.has("id")) {
      setEditCert(undefined)
    }
  }
  //line 60 selProps was changed to selProp, reminder if the site doesn't work properly.
  return (
    <form ref={ref} action={handleAction} className="grid gap-y-5 max-w-md">
      <div className="grid grid-cols-2">
        <Select options={toSelArr(certTypes, "title")} selProps={selProps} />
      </div>
      <div className="grid grid-cols-2">
        <TextField
          label="Pastaba"
          name="company"
          isRequired={true}
          defaultValue={editCert?.company}
          errors={state?.errors?.company}
        />
      </div>
      {editCert?.id && (
        <input type="hidden" name="id" value={String(editCert?.id)} />
      )}
      <div
        className={`my-2 text-sm italic p-1 ${
          state?.errors ? "bg-red-100" : state?.message ? "bg-green-100" : ""
        }`}
      >
        {state?.message}
      </div>
      <div className="mt-1 w-14">
        <SubmitButton />
      </div>
    </form>
  )
}
