import { BaseResult } from '../BaseResult'

/** The result of a device test.
 * Identifies compromised devices which could allow for image tampering. */
export interface DeviceIntegrityResult extends BaseResult {
  /** Whether or not the capture device is rooted.
   * @example 0
   */
  is_rooted: 1 | 0
}
