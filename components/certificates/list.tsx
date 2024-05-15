"use client"
import { PencilIcon } from "@heroicons/react/24/outline"
import { TrashIcon } from "@heroicons/react/24/outline"
import { ICertType, ICertificate } from "@/components/types/certificate.t"

type IProps = {
  certTypes: ICertType[]
  certificates: ICertificate[]
  setEditCert: (cert: ICertificate) => void
  deleteCertFromApi: (cert: ICertificate) => void
  isDeleting: boolean
}

export function CertList(props: IProps) {
  const { certTypes, certificates, setEditCert, deleteCertFromApi } = props

  const findType = (id?: number) => certTypes.find((i) => i.id === id)?.title

  const changeCert = (id?: number) => {
    if (!id) return
    const cert = certificates.find((i) => i.id === id)
    if (!cert) return
    setEditCert(cert)
  }
  const deleteCert = (id?: number) => {
    if (!id) return
    const cert = certificates.find((i) => i.id === id)
    if (!cert) return
    deleteCertFromApi(cert)
    throw new Error("Error message")
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Pavadinimas
          </th>
          <th scope="col" className="px-6 py-3">
            Pastaba
          </th>
          <th scope="col" className="px-6 py-3">
            Veiksmai
          </th>
        </tr>
      </thead>
      <tbody className="bg-white border-b">
        {certificates.map((c) => (
          <tr key={c.id}>
            <td className="px-6 py-4">{findType(c.typeId)}</td>
            <td className="px-6 py-4">{c.company}</td>
            <td className="px-6 py-4">
              <button title="Keisti duomenis" onClick={() => changeCert(c.id)}>
                <PencilIcon className="w-5 h-5 stroke-blue-600" />
              </button>
              <button
                type="button"
                title="Istrinti duomenis"
                onClick={() => deleteCert(c.id)}
              >
                <TrashIcon className="w-5 h-5 stroke-red-600" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
