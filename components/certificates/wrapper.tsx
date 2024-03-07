"use client"
import { ICertType, ICertificate } from "@/components/types/certificate.t"
import { Form } from "./form"
import { CertList } from "./list"
import { useEffect, useState } from "react"
import { getApi } from "@/utils/serverApi"

type IProps = { certTypes: ICertType[] }

export function Wrapper(props: IProps) {
  const { certTypes } = props
  const [editCert, setEditCert] = useState<ICertificate | underfined>()
  const [certificates, setCertificates] = useState<ICertificate[]>([])

  const getCertFromApi = () => {
    getApi<ICertificate[]>(`/api/certificates`).then((res: ICertificate[]) => {
      setCertificates(res)
    })
  }

  useEffect(() => {
    getCertFromApi()
  }, [])

  return (
    <div className="grid gap-y-9">
      <Form
        certTypes={certTypes}
        getCertFromApi={getCertFromApi}
        setEditCert={setEditCert}
        editCert={editCert}
      />
      <CertList
        certTypes={certTypes}
        certificates={certificates}
        setEditCert={setEditCert}
      />
    </div>
  )
}
