"use client"
import { ICertType, ICertificate } from "@/components/types/certificate.t"
import { Form } from "./form"
import { CertList } from "./list"
import { useEffect, useState } from "react"
import { getApi, deleteApi } from "@/utils/serverApi"

type IProps = { certTypes: ICertType[] }

export function Wrapper(props: IProps) {
  const { certTypes } = props
  const [editCert, setEditCert] = useState<ICertificate | undefined>()
  const [certificates, setCertificates] = useState<ICertificate[]>([])
  const [isDeleting, setIsDeleting] = useState<boolean>(false) // State for deletion operation

  const getCertFromApi = () => {
    getApi<ICertificate[]>(`/api/certificates`).then((res: ICertificate[]) => {
      setCertificates(res)
    })
  }

  useEffect(() => {
    getCertFromApi()
  }, [])

  const deleteCertFromApi = (cert: ICertificate) => {
    if (!cert || !cert.id) {
      console.error("Cannot delete ")
      return
    }
    setIsDeleting(true) // Set deletion state to true
    deleteApi(`/api/certificates/${cert.id}`)
      .then(() => {
        getCertFromApi()
        setIsDeleting(false) // Reset deletion state on successful deletion
      })
      .catch((error) => {
        console.error("Error deleting certificate", error)
        setIsDeleting(false) // Reset deletion state if deletion fails
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
        isDeleting={isDeleting} // Pass deletion state to the CertList component
      />
    </div>
  )
}
