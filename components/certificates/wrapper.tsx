"use client"
import { ICertType, ICertificate } from "@/components/types/certificate.t"
import { Form } from "./form"
import { CertList } from "./list"
import { useEffect, useState } from "react"
import { getApi } from "@/utils/serverApi"

type IProps = { certTypes: ICertType[] }

export function Wrapper(props: IProps) {
  const { certTypes } = props
  const [editCert, setEditCert] = useState<ICertificate | undefined>()
  const [certificates, setCertificates] = useState<ICertificate[]>([])

  const getCertFromApi = () => {
    getApi<ICertificate[]>(`/api/certificates`).then((res: ICertificate[]) => {
      setCertificates(res)
    })
  }

  useEffect(() => {
    getCertFromApi()
  }, [])

  const deleteCertFromApi = (certificate: ICertificate) => {
    fetch(`/api/certificates/${certificate.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          getCertFromApi()
        } else {
          throw new Error("Nepavyko ištrinti sertifikato įrašo")
        }
      })
      .catch((error) => {
        console.error("Klaida ištrinant sertifikato įrašą: ", error)
      })
  }

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
        deleteCertFromApi={deleteCertFromApi}
      />
    </div>
  )
}
