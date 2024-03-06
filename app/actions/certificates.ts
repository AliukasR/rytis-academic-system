"use server"
import { IState } from "@/types/shared.t"
import { postApi, putApi } from "@/utils/serverApi"
import { z } from "zod"

export async function createCertificates(
  prevState: IState,
  formData: FormData
): Promise<IState> {
  const schema = z.object({
    id: z.coerce.number().optional(),
    typeId: z.coerce.number(),
    company: z.string().min(2),
  })
  const rawFormData = {
    id: formData.get("id"),
    typeId: formData.get("typeId"),
    company: formData.get("company"),
  }

  const parse = schema.safeParse(rawFormData)

  if (!parse.success) {
    return {
      errors: parse.error.flatten().fieldErrors,
      message: "Blogai užpildyti laukeliai!",
      isSaved: false,
    }
  }

  const dto = parse.data
  if (!dto?.id) {
    await postApi(`/api/certificates`, dto)
    return { message: "Duomenys sėkmingai išsiųsti", isSaved: true }
  }
  await putApi(`/api/certificates/${dto.id}`, dto)
  return { message: "Atnaujinti duomenys sėkmingai", isSaved: true }
}
