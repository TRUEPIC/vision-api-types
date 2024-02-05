import { CreateInspectionProps } from '../api/Inspections'
import { ResponseData } from '../api/ResponseData'

/** The request body for PUT /text/welcome */
export type SendWelcomeTextBody = Pick<
  CreateInspectionProps,
  'message_supplement'
> & {
  /** The id of the inspection
   * @example 123
   */
  inspection_id: number
}

/** The response body for PUT /text/welcome */
export type SendWelcomeTextResult = ResponseData & {
  /** The Vision App link generated for the user */
  result: string
}

/** The response body for PUT /text/request */
export type SendRequestMoreTextResult = SendWelcomeTextResult

/** The request body for PUT /text/request */
export type SendRequestMoreTextBody = SendWelcomeTextBody

/** The response body for PUT /text/reminder */
export type SendReminderTextResult = SendWelcomeTextResult

/** The request body for PUT /text/reminder */
export type SendReminderTextBody = SendWelcomeTextBody
