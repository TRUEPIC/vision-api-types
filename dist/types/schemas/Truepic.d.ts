import { PsqlTimestamps } from '@/types/Psql'
import { TestResult } from '@/types/enums/Verification'

/** A photo or video (if enabled for the organization) from an inspection request. */
export interface Truepic extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the inspection this Truepic is associated with.
   * @example 6522
   */
  inspection_id: number

  /** The unique alphanumeric identifier of the photo/video.
   * @example 5krgsu22j4fg1k
   */
  verification_code: string

  /** Whether the Truepic is still uploading
   * @example 1
   */
  pending_upload: 1 | 0

  /** Whether the Truepic has been archived
   * @example 1
   */
  archived: 1 | 0

  /** The type of capture
   * @example 'image'
   */
  type?: 'image' | 'video'

  /** The username of the capturer of the Truepic
   * @example 'Apple'
   */
  username: string

  /** The timestamp of the capture of the Truepic
   * @example '2018-08-07 13:16:15'
   */
  ts: string

  /** The localized timestamp of the capture of the Truepic
   * @example '6/14/23 4:02pm EDT'
   */
  local_ts: string

  /** The timezone where the Truepic was taken
   * @example 'America/Phoenix'
   */
  tz: string

  /** The GPS latitude where the photo/video was taken.
   * @example '33.5565051716316'
   * @min -90
   * @max 90
   */
  lat: string

  /** The GPS longitude where the photo/video was taken.
   * @example '33.5565051716316'
   * @min -180
   * @max 180
   */
  lng: string

  /** The accuracy of the GPS coordinates in meters.
   * @example 165
   */
  accuracy: number | null

  /** The unix timestamp of the GPS where the capture was taken.
   * @example '555262184.034417'
   */
  gps_ts: string

  /** The date/time of the device when the photo/video was captured. ISO 8601 format.
   * @example '2018-08-06T15:29:47.000Z'
   * @format date-time
   */
  device_time: string

  /** The status of a blockchain test on this Truepic.
   * @example 'P'
   */
  blockchain_status: TestResult

  /** The status of a picture-of-paper test on this Truepic.
   * @example 'P'
   */
  pop_status: TestResult

  /** The status of a reverse-image-search test on this Truepic.
   * @example 'P'
   */
  ris_status: TestResult

  /** The status of a geolocation test on this Truepic.
   * @example 'P'
   */
  geolocation_status: TestResult

  /** The status of a device integrity test on this Truepic.
   * @example 'P'
   */
  device_integrity_status: TestResult

  /** The status of a datetime test on this Truepic.
   * @example 'P'
   */
  datetime_status: TestResult

  /** The formatted address where the photo/video was taken, based on GPS coordinates.
   * @example '7817 Ivanhoe Avenue, La Jolla, CA 92037'
   */
  formatted_address?: string

  /** The city where the photo/video was taken, based on GPS coordinates.
   * @example 'La Jolla'
   */
  city?: string

  /** The state where the photo/video was taken, based on GPS coordinates.
   * @example 'CA'
   */
  state?: string

  /** The media digest of the Truepic
   * @example '001183fw23f2w3fwergdsghr2q35aaada5wefw234f23rfw23wec13af441e6b'
   */
  media_digest?: string

  /** The platform on which this Truepic was captured
   * @example 'Android'
   */
  sdk_platform?: 'ios' | 'Android'

  /** The version of the SDK on which this Truepic was captured.
   * @example '2.0.6'
   */
  sdk_version?: string

  /** The id of the container this Truepic is part of
   * @example 10
   */
  container_id: number

  /** The md5 hash of the Truepic signature
   * @example '900edbargawerfgaerwgd8a2c76ab2'
   */
  md5_hash?: string

  /** The sha 256 hash of the Truepic signature
   * @example '900edbargawerfgaeawdefq34fawedfgadfghadfghaerghae5rtb2'
   */
  shas256_hash?: string

  /** The comment attached to the Truepic
   * @example 'Hello'
   */
  comment?: string

  /** Whether the device that captured the Truepic is rooted
   * @example 0
   */
  is_rooted: 1 | 0

  /** Whether the status for this Truepic has been overridden
   * @example 0
   */
  status_overridden: 1 | 0

  /** An internal note by a dashboard user attached to this Truepic
   * @example 'Looks damaged.'
   */
  internal_note?: string

  /** The version of the operating system that captured this Truepic
   * @example '11.4.1'
   */
  os?: string

  /** The make of the device that captured this Truepic
   * @example 'Apple'
   */
  make?: string

  /** The model of the device that captured this Truepic
   * @example 'iPhone 7'
   */
  model?: string

  /** The video duration of this Truepic, if it is a video.
   * @example '0:00:30'
   */
  duration?: string

  /** The photo list id this Truepic is a part of
   * @example 5678
   */
  photo_list_id?: number

  /** The direction the device was facing when the photo/video was taken. `0.0` is magnetic north.
   * @example 220.48
   */
  heading?: number

  /** Whether this Truepic has been deleted.
   * @example false
   */
  is_deleted: boolean

  /** The status of a capture integrity test on this Truepic.
   * @example 'P'
   */
  capture_integrity_status: TestResult

  /** The status of a content analysis test on this Truepic.
   * @example 'P'
   */
  content_analysis_status: TestResult

  /** The status of an object detection test on this Truepic.
   * @example 'P'
   */
  object_detection_status: TestResult

  /** Whether the transfer from Lens is complete for this Truepic.
   * @example 1
   */
  lens_transfer_done: 1 | 0

  /** Whether the object detection test is complete for this Truepic.
   * @example true
   */
  object_detection_done?: boolean

  /** The time at which all processing (RIS, Object Detection, Content Analysis ,etc) from Vision and Lens was completed. NULL if incomplete.
   * @example '2018-08-07 13:16:15'
   */
  processing_completed_at?: string
}
