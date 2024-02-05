import { BaseResult } from '../BaseResult'
import { PopResultStatus } from '../enums/Verification'

/** The result of a picture-of-paper test.
 * Using a series of image forensics tests ensures that the image was not re-captured from a pre-existing photo on a screen or a printout. */
export interface PopResult extends BaseResult {
  /** The status of the Picture-of-Paper response
   * @example 'PASS'
   */
  response_status: PopResultStatus

  /** Whether or not the capture had low entropy
   * @example 1
   */
  response_low_entropy: 1 | 0

  /** The API version of the Picture-of-Picture service.
   * @example 'v2.2'
   */
  pop_api_version?: string

  /** A stringified JSON object containing the detailed score information of the POP service response */
  response_detail?: string
}
