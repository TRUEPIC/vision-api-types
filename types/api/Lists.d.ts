import { List } from '../schemas/List'
import { PopulatedList } from '../composite/Lists'
import { PaginationResult, ResponseData } from '../api/ResponseData'

/** The response body for GET /lists */
export type GetListsResult = ResponseData &
  PaginationResult & {
    result: List[]
  }

/** The response body for GET /lists/{listId} */
export type GetListResult = ResponseData & {
  result: PopulatedList
}
