import { Wrapper } from "@/components/subjects/wrapper"
import { ISubType } from "@/components/types/subject.t"
import { getApi } from "@/utils/serverApi"

export default async function SubjectsPage() {
  const subTypes = await getApi<ISubType[]>(`/api/classificators/subjects`)

  return <Wrapper subTypes={subTypes} />
}
