import { Truepic } from '@/types/schemas/Truepic'
import { TestResult } from '@/types/enums/Verification'
import { Container } from '@/types/schemas/Container'
import { DatetimeResult } from '@/types/schemas/DatetimeResult'
import { GeolocationResult } from '@/types/schemas/GeolocationResult'
import { RisResult } from '@/types/schemas/RisResult'
import { PopResult } from '@/types/schemas/PopResult'
import { ContentAnalysisResult } from '@/types/schemas/ContentAnalysisResult'
import { ObjectDetectionResult } from '@/types/schemas/ObjectDetectionResult'

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
