import { CertType } from "@/models/certType.model"
import { connMongoose } from "@/utils/connect-mongoose"

export class CertTypeService {
  async getAll() {
    await connMongoose()
    const certTypes = await CertType.find()
    return certTypes
  }
}
