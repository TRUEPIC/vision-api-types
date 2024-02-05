import { List } from '@/types/schemas/List'
import { PopulatedList } from '@/types/composite/Lists'
import { PaginationResult, ResponseData } from '@/types/api/ResponseData'

/** The response body for GET /lists */
export type GetListsResult = ResponseData &
  PaginationResult & {
    result: List[]
  }

/** The response body for GET /lists/{listId} */
export type GetListResult = ResponseData & {
  result: PopulatedList
}
