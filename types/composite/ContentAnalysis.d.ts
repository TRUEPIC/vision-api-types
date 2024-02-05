import { ContentAnalysisType } from '../enums/ContentAnalysis'

export type ContentAnalysisResultDetails = {
  /** The type of the content analysis test. Must be VIN or ODOMETER .
   * @example 'VIN'
   */
  type: ContentAnalysisType

  /** The result of the content analysis test.
   * Will be a number representing the number on the vehicle odometer for ODOMETER tests.
   * Will be a string representing the VIN number on the vehicle for VIN tests.
   * @example 80381 'VN2396239GERG64SDF'
   */
  result: number | string | null

  /** The expected result of the content analysis test.
   * Will be an object specifiying a min and mix on the vehicle odometer for ODOMETER tests.
   * Will be a string representing the expected VIN number on the vehicle for VIN tests.
   * @example 'DG1FGA21D4TD173601'
   */
  expected:
    | string
    | null
    | {
        /** The minimum number expected on the odometer reading.
         * @example 30000
         */
        min: number | null
        /** The maximum number expected on the odometer reading.
         * @example 35000
         */
        max: number | null
      }
}
