import { VerificationResult } from '@/types/enums/Verification'
import { InspectionStatusId } from '@/types/enums/InspectionStatusId'
import { PsqlTimestamps } from '@/types/Psql'

/** The core resource representing an inspection request */
export interface Inspection extends PsqlTimestamps {
  /** The id of the inspection request
   * @example 1843
   */
  id: number

  /** The id of the organization this inspection is for.
   * @example 117
   */
  organization_id: number

  /** The values for the custom fields defined in the inspection type. The order of the values must match the order of the custom fields defined in the inspection type.  If the value is optional then you can provide null for that value.
   * @example ['abc123','def123']
   */
  custom_field_values: string[]

  /** The full name of the customer who will be completing the inspection. If specified, then `customer_first_name` and `customer_last_name` will not be provided.
   * @example 'Kylo Ren'
   * @maxLength 255
   */
  customer_name?: string

  /** The IP address of the customer, recorded during the most recent photo capture inspection.
   * @example '123.532.124.174'
   * @format ipv4, ipv6
   * @maxLength 255
   */
  customer_ip_address?: string

  /** The first name of the customer completing the inspection.
   * @example 'Kylo'
   * @maxLength 255
   */
  customer_first_name?: string

  /** The last name of the customer completing the inspection.
   * @example 'Ren'
   * @maxLength 255
   */
  customer_last_name?: string

  /** The mobile number of the customer completing the inspection. Required if `send_methods.text` is `true`.
   * @example '3028675309'
   * @format phone
   * @pattern /^[\d]{10}$/
   */
  customer_phone_number?: string

  /** The email address of the customer completing the inspection. Required if `send_methods.email` is `true`.
   * @example 'kylorenxninja@gmail.com'
   * @format email
   * @maxLength 255
   */
  customer_email_address?: string

  /** The id of the member that created this inspection.
   * @example 43
   */
  created_by_member_user_id: number

  /** Represents if the inspection has been soft-deleted
   * @example false
   * @default false
   */
  is_deleted: boolean

  /** The physical address where the inspection is expected to take place
   * @example '532 Mission Street, Santa Clara, CA, USA'
   * @format address
   */
  address?: string

  /** The latitude of `address` if set, otherwise `null`.
   * @example '40.0612708'
   * @min -90
   * @max 90
   */
  address_lat?: string

  /** The longitude of `address` if set, otherwise `null`.
   * @example '40.0612708'
   * @min -90
   * @max 90
   */
  address_lng?: string

  /** The aggregate verification result of all photos/videos
   * @example 'pass'
   */
  verification_result?: VerificationResult

  /** The date/time when the last photo/video was uploaded. ISO 8601 format.
   * @example '2020-05-01T21:44:40.000Z'
   * @format date-time
   */
  photo_uploaded_at?: string

  /** Whether the Vision app has been opened by the customer
   * @example true
   * @default false
   */
  app_opened: boolean

  /** The id of the team this inspection is for.
   * @example 182
   */
  team_id: number

  /** Whether the inspection has expired
   * @example false
   * @default false
   */
  is_expired: boolean

  /** The id of the group this inspection is for.
   * @example 23
   */
  group_id?: number

  /** The id of the inspection type this inspection is for.
   * @example 12
   */
  inspection_type_id: number

  /** The id of the inspection status this inspection is in.
   * @example 4
   * @min 1
   * @max 6
   */
  inspection_status_id: InspectionStatusId

  /** The method(s) to send the inspection request to the customer completing the inspection. */
  send_methods: {
    /** When true, will send text messages to the customer_phone_number
     * @example true
     */
    text: boolean

    /** When true, will send text messages to the customer_email_address
     * @example false
     */
    email: boolean
  }

  /** The id of the user this inspection is assigned to.
   * @example 19
   */
  assigned_to_member_user_id: number

  /** Times to send automated reminders
   * @example ["10m","20m","30m"]
   */
  sent_auto_reminders?: string[]

  /** Times to send automated finish reminders
   * @example ["10m","20m","30m"]
   */
  sent_auto_finish_reminders?: string[]

  /** The datetime an sms automated reply was sent
   * @example "2023-01-04 15:11:39.642"
   * @format date-time
   */
  sms_auto_reply_sent?: string

  /** The id of the outcome of this inspection.
   * @example 29
   */
  outcome_id?: number

  /** The reason for the outcome of this inspection
   * @example "Customer cancelled their service with our company"
   */
  outcome_reason?: string

  /** The maximum distance, in meters, from the address that the photos/videos must be taken in order to be valid
   * @example 1000
   * @asType integer
   */
  max_distance_from_address_threshold?: number

  /** The Source7 `property_uid` for this inspection.
   * Used to identify map appliances to a common location (business or residence) for appliance object detection tests.
   * @example "23523f23-23f23f23-f23f23f23-r23t33f"
   */
  property_uid?: string
}
