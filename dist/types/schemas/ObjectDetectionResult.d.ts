import { BaseResult } from '@/types/BaseResult'
import { ObjectDetectionResultDetails } from '@/types/composite/ObjectDetection'

/** The result of an object detection test.
 * Automatically detects whether the expected object was found to be in the picture. */
export interface ObjectDetectionResult extends BaseResult {
  /** An object containing the detailed results of an object detection test.  */
  details: ObjectDetectionResultDetails
}
