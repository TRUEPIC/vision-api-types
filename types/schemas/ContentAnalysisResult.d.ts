import { BaseResult } from '../BaseResult'
import { ContentAnalysisResultDetails } from '../composite/ContentAnalysis'

/** The result of a content analysis test: A Truepic test that detects whether the image contained characters that were expected to be in the image. */
export interface ContentAnalysisResult extends BaseResult {
  /** Details on the results of the Content Analysis Test. Used for Both VIN and Odometer tests.   */
  details: ContentAnalysisResultDetails
}
