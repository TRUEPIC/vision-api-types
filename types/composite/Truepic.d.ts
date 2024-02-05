import { Truepic } from '../schemas/Truepic'
import { TestResult } from '../enums/Verification'
import { Container } from '../schemas/Container'
import { DatetimeResult } from '../schemas/DatetimeResult'
import { GeolocationResult } from '../schemas/GeolocationResult'
import { RisResult } from '../schemas/RisResult'
import { PopResult } from '../schemas/PopResult'
import { ContentAnalysisResult } from '../schemas/ContentAnalysisResult'
import { ObjectDetectionResult } from '../schemas/ObjectDetectionResult'

/** A truepic object with all related data
 * @internal
 */
export type PopulatedTruepic = Truepic & {
  ris_result?: Omit<RisResult, 'id'>
  object_detection_result?: Omit<ObjectDetectionResult, 'id'>
  content_analysis_result?: Omit<ContentAnalysisResult, 'id'>
  content_analysis_status?: TestResult
  container?: Container
  datetime_result?: DatetimeResult
  geolocation_result?: GeolocationResult
  pop_result?: PopResult
}
