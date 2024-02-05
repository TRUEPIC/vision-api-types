import { PsqlTimestamps } from '../Psql'

/** An action that occurred on an inspection.
 * These appear in the inspection timeline and some will trigger webhooks for the team associated with the inspection.
 */
export interface TimelineAction extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the action type
   * @example 12
   */
  timeline_action_type_id?: number

  /** Any additional information, such as a member's custom message or more descriptive text.
   * @example New Truepic uploaded from 206 Pebble Valley Drive, Dover DE 19904
   */
  details?: number

  /** The id of the inspection this action occurred on
   * @example 4335
   */
  inspection_id: number

  /** The id of the dashboard user that performed this action
   * @example 4335
   */
  member_user_id?: number

  /** The id of the app user that performed this action
   * @example 4335
   */
  customer_user_id?: number

  /** Whether or not this action has been soft-deleted
   * @example 0
   * @default 0
   */
  is_deleted?: 1 | 0

  /** Any meta information, such as the URL when a new smart link is generated.
   * @example https://truepicvision.com/ghefwef3543feb
   */
  meta?: string

  /** An object containing any additional data related to the action. */
  data?: {
    /** Whether the full message was sent
     * @example true
     */
    is_details_full_message?: boolean

    /** The id of the associated list item
     * @example 12345
     */
    list_item_id?: number

    /** The Sendgrid email message id of the associated message
     * @example 'DGnO3FNol23452ewf9v-7786453638cc-xx435l-1-646B123C-53.0'
     */
    message_id?: string

    /** The id of the associated Truepic
     * @example 12345
     */
    truepic_id?: number
  }
}
