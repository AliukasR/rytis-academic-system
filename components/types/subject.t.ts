export interface ISubType {
  id: number
  title: string
}

export interface ISubject {
  id?: number
  typeId: number
  company: string
  isCreated?: boolean
}
