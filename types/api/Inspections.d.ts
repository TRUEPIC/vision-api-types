import { Inspection } from '../schemas/Inspection'
import { ResponseData, PaginationResult } from '../api/ResponseData'
import { VehicleDetail } from '../schemas/VehicleDetail'
import { InspectionWithUniqueIDs } from '../composite/InspectionWithUniqueIDs'
import {
  PopulatedInspection,
  InspectionPartial,
} from '../composite/Inspections'
import { PopulatedList } from '../composite/Lists'

/** Response Body for GET /inspections */
export type GetInspectionsResult = ResponseData &
  PaginationResult & {
    /** A paginated list of inspections */
    result: Inspection[]
  }

/** Response Body for GET /inspections/{inspectionId} */
export type GetInspectionResult = ResponseData & {
  result: PopulatedInspection
}

/** The properties sent in for a POST /inspections request
 * @internal
 */
type CreateInspectionProps = Pick<
  InspectionWithUniqueIDs,
  | 'assigned_to_member_user_id'
  | 'customer_name'
  | 'customer_first_name'
  | 'customer_last_name'
  | 'custom_field_values'
  | 'team_id'
  | 'inspection_type_id'
  | 'customer_phone_number'
  | 'customer_email_address'
  | 'address_lat'
  | 'address_lng'
  | 'address'
  | 'send_methods'
> & {
  list?: PopulatedList
  /** The message supplement to add to text message and emails */
  message_supplement?: string
  include_list?: boolean
}

/** The required properties for a POST /inspections request
 * @internal
 */
type CreateInspectionRequiredProps =
  | 'customer_first_name'
  | 'customer_last_name'
  | 'custom_field_values'

/** Request Body for POST /inspections */
export type CreateInspectionBody = SomeRequired<
  CreateInspectionProps,
  CreateInspectionRequiredProps
>

/** Response body for POST /inspections */
export type CreateInspectionResult = ResponseData & {
  result: PopulatedInspection
}

/** Request body for POST /inspections/{inspectionId}/export */
export type ExportInspectionPDFBody = {
  /** Whether to perform synchronously (in the request/response cycle) or queue for asynchronous export.\n\nIf `false` (or unspecified), the PDF is exported synchronously and returned in the response. This is the default for backwards-compatibility, but is deprecated in favor of performing asynchronously.\n\nIf `true`, the PDF is queued for asynchronous export and an `Operation` is returned to track its progress. This is recommended.
   * @example true
   */
  async: boolean
  /**  Filters to limit what's included in the PDF. */
  filter: {
    /** Limit the PDF to a subset of photos/videos. A list of IDs of photso/videos to include in the PDF. */
    photos: number[]
  }
}

/** The request body for PUT /inspections/{inspectionId} */
export type UpdateInspectionBody = Pick<
  InspectionPartial,
  | 'customer_name'
  | 'customer_first_name'
  | 'customer_last_name'
  | 'customer_phone_number'
  | 'customer_email_address'
  | 'custom_field_values'
  | 'address'
  | 'address_lat'
  | 'address_lng'
  | 'send_methods'
  | 'inspection_status_id'
  | 'outcome_id'
  | 'outcome_reason'
  | 'assigned_to_member_user_id'
  | 'outcome_id'
  | 'outcome_reason'
>

/** The request body for PUT /inspections/{inspectionId}/inspection-type */
export type ChangeInspectionTypeBody = Pick<Inspection, 'inspection_type_id'>

/** The response body for PUT /inspections/{inspectionId} */
export type UpdateInspectionResult = ResponseData & {
  result: Pick<Inspection, 'id'>
}

/** The response body for GET /inspections/{inspectionId}/{listItemId}/ca/vin/{vinNumber} */
export type GetVehicleDetailsResult = ResponseData & {
  result: Pick<VehicleDetail, 'request_dates' | 'details'>
}

/** The request body for POST /inspections/{inspectionId}/internal-note */
export type CreateInternalNoteBody = {
  /** The note to add to the inspection. */
  note: string
}
export type UpdateInternalNoteBody = CreateInternalNoteBody
