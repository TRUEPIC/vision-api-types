import { BaseResult } from '../BaseResult'
import { ObjectDetectionResultDetails } from '../composite/ObjectDetection'

/** The result of an object detection test.
 * Automatically detects whether the expected object was found to be in the picture. */
export interface ObjectDetectionResult extends BaseResult {
  /** An object containing the detailed results of an object detection test.  */
  details: ObjectDetectionResultDetails
}
