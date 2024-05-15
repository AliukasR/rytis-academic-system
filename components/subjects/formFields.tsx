import { Select } from "../parts/selext"
import { IState } from "../types/shared.t"
import { toSelArr } from "@/utils/form/selectHelper"
import { TextField } from "../parts/textField"
import { SubmitButton } from "../parts/submitButton"
import { useEffect, useMemo, useRef } from "react"
import { useFormState } from "react-dom"
import { ISubType, ISubject } from "../types/subject.t"
import { createSubjects } from "@/app/actions/subjects"

const initialState: IState = {
  message: " ",
  errors: undefined,
  isSaved: false,
}

type IProps = {
  subTypes: ISubType[]
  getSubFromApi: () => void
  setEditSub: (cert?: ISubject) => void
  editSub?: ISubject
}

export function FormFields(props: IProps) {
  const ref = useRef<HTMLFormElement>(null)
  const { subTypes, getSubFromApi, editSub, setEditSub } = props

  const [state, formAction] = useFormState<IState, FormData>(
    createSubjects,
    initialState
  )

  const selProps = useMemo(
    () => ({
      label: "Užsakymo pavadinimas",
      name: "typeId",
      isRequired: true,
      defaultValue: editSub?.typeId ?? 0,
      errors: state?.errors?.typeId && state?.errors?.typeId.join("|"),
    }),
    [editSub, state]
  )

  useEffect(() => {
    if (state.isSaved) {
      getSubFromApi()
    }
  }, [state])

  const handleAction = (data: FormData) => {
    formAction(data)
    ref.current?.reset()
    if (data.has("id")) {
      setEditSub(undefined)
    }
  }
  return (
    <form ref={ref} action={handleAction} className="grid gap-y-5 max-w-md">
      <div className="grid grid-cols-2">
        <Select options={toSelArr(subTypes, "title")} selProps={selProps} />
      </div>
      <div className="grid grid-cols-2">
        <TextField
          label="Pastaba"
          name="company"
          isRequired={true}
          defaultValue={editSub?.company}
          errors={state?.errors?.company}
        />
      </div>
      {editSub?.id && <input type="hidden" name="id" value={editSub.id} />}
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
