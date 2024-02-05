import { LensCaptureData } from '../LensCaptureData'
import { BaseResult } from '../BaseResult'

/** The result of a capture integrity test. Ensures the details that are
 * cryptographically signed into the file are verified and confirms
 * that they were not modified. */
export interface CaptureIntegrityResult extends BaseResult {
  /** Capture data from Lens */
  lens_details: LensCaptureData
}
