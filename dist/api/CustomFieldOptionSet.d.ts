import { CustomFieldOptionSet } from '@/types/schemas/CustomFieldOptionSet'
import { PopulatedCustomFieldOptionSet } from '@/types/composite/CustomFieldOptionSet'
import { PaginationResult, ResponseData } from '@/types/api/ResponseData'

export type GetCustomFieldOptionSetsResult = ResponseData &
  PaginationResult & {
    /** A paginated list of Custom Field Option Sets with associated Inspection Types */
    result: Array<PopulatedCustomFieldOptionSet>
  }

export type GetCustomFieldOptionSetResult = ResponseData & {
  /** A paginated list of Custom Field Option Sets with associated Inspection Types */
  result: PopulatedCustomFieldOptionSet
}

export type CreateCustomFieldOptionSetProps = Pick<
  CustomFieldOptionSet,
  'name' | 'options'
>
