import { ResponseData } from '../api/ResponseData'
import { Operation } from '../schemas/Operation'

/** The response body for GET /operations/{operationId} */
export type GetOperationResult = ResponseData & {
  result: Operation
}
