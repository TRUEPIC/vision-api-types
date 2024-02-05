import { BaseResult } from '@/types/BaseResult'

/** The result of a geolocation test.
 * Ensures the GPS data matches the true location of the image. */
export interface GeolocationResult extends BaseResult {
  /** The accuracy of the GPS coordinates in meters.
   * @example 165
   */
  accuracy: number | null

  /** The unix timestamp (in seconds) that the gps reading was captured
   * @example '5616532460.927248'
   */
  gps_ts: string

  /** The ISO-8601 formatted timestamp that hte gps read was captured
   * @example '2018-09-06 19:43:50'
   * @format datetime
   */
  gps_ts_datetime?: string

  /** The distance in meters of the location where this photo was captured to the specified landmark
   * @example 196052.38
   */
  landmark_distance?: number

  /** The name of the landmark used for this test
   * @example 'Ronald Reagan Presidential Library'
   */
  landmark_name?: string

  /** The confidence that this landmark appears in the Truepic. Between 0 and 1.
   * @example 0.56
   * @min 0
   * @max 1
   */
  landmark_score?: number

  /** The difference between the date/time on the device a Truepic was captured on and
   * the time captured on the server that signed the Truepic, in seconds.
   * @example '27.641'
   * @min 0
   */
  calculated_delta?: string
}
