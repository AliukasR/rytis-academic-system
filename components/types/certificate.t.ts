export interface ICertType {
  id: number
  title: string
}

export interface ICertificate {
  id?: number
  typeId: number
  company: string
  isCreated?: boolean
}
