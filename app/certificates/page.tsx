import { Wrapper } from "@/components/certificates/wrapper"
import { ICertType } from "@/components/types/certificate.t"
import { getApi } from "@/utils/serverApi"

export default async function CertificatePage() {
  const certTypes = await getApi<ICertType[]>(
    `/api/classificators/certificates`
  )

  return <Wrapper certTypes={certTypes} />
}
