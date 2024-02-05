import { TestResult, TruepicResultReason } from '@/types/enums/Verification'

/** The result of a test. Used as a base schema for other test result types. */
export interface BaseResult {
  /** The id of the result.
   * @example 1843
   */
  id: number

  /** The id of the Truepic this result is for.
   * @example 575
   */
  truepic_id: number

  /** The initial result of the test.
   * @example 'P'
   */
  initial_result: TestResult

  /** The reason for the initial result of the test.
   * @example 'DATA_INVALID'
   */
  initial_reason: TruepicResultReason | null

  /** The date the initial result was given.
   * @example '2022-06-23 14:42:47.06'
   * @format date-time
   */
  initial_date: string

  /** The overwritten result of the test by a member.
   * @example 'P'
   */
  client_override_result?: TestResult

  /** The date that the member overrided the test result.
   * @example '2022-06-23 14:42:47.06'
   * @format date-time
   */
  client_override_date?: string

  /** The user id of the member that overrided the test result.
   * @example 123
   */
  client_override_user_id?: number
}
