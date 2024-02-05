import { PsqlTimestamps } from '@/types/Psql'

/** An alert configuration for an organization.
 * Notifies an organization when an list items on an inspection do not pass the configured tests.
 */
export interface InspectionAlertConfig extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization.
   * @example 531
   */
  organization_id: number

  /** The name of the alert.
   * @example 'Fraud Detection Alert'
   * @maxLength 255
   */
  name: string

  /** The id of the user that created the alert.
   * @example 123
   */
  created_by_user_id: number

  /** The id of the user that last edited the alert.
   * @example 124
   */
  modified_by_user_id?: number

  /** Whether or not this alert has been soft-deleted
   * @example false
   * @default false
   */
  is_deleted: boolean

  /** The number of tests that need to fail for this alert to be triggered with a "fail" recommendation.
   * @example 3
   * @min 1
   * @max 999
   */
  fail_threshold: number

  /** The number of tests that need to have warnings for this alert to be triggered with a "warn" recommendation.
   * @example 3
   * @min 1
   * @max 999
   */
  warn_threshold: number

  /** Whether or not to include the blurriness test in this alert.
   * @example true
   */
  test_blurriness: boolean

  /** Whether or not to include the VIN test in this alert.
   * @example true
   */
  test_content_analysis_vin: boolean

  /** Whether or not to include the odometer test in this alert.
   * @example true
   */
  test_content_analysis_odometer: boolean

  /** Whether or not to include the capture integrity test in this alert.
   * @example true
   */
  test_capture_integrity: boolean

  /** Whether or not to include the datetime test in this alert.
   * @example true
   */
  test_datetime: boolean

  /** Whether or not to include the device integrity test in this alert.
   * @example true
   */
  test_device_integrity: boolean

  /** Whether or not to include the distance-from-address test in this alert.
   * @example true
   */
  test_distance_from_address: boolean

  /** Whether or not to include the geolocation test in this alert.
   * @example true
   */
  test_geolocation: boolean

  /** Whether or not to include the pop test in this alert.
   * @example true
   */
  test_pop: boolean

  /** Whether or not to include the ris test in this alert.
   * @example true
   */
  test_ris: boolean

  /** Whether or not to include the object detection test in this alert.
   * @example true
   * @default true
   */
  test_object_detection: boolean
}
