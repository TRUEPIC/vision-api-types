import { ResponseData } from '@/types/api/ResponseData'
import { Operation } from '@/types/schemas/Operation'

/** The response body for GET /operations/{operationId} */
export type GetOperationResult = ResponseData & {
  result: Operation
}
