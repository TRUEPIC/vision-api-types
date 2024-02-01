import { BaseResult } from '@/types/BaseResult'

/** The result of a date-time test.
 * Ensures the accuracy of the device’s time and date, and confirms that they were not modified. */
export interface DatetimeResult extends BaseResult {
  /** The difference between the date/time on the device a Truepic was captured on and
   * the time captured on the server that signed the Truepic, in seconds.
   * @example '27.641'
   * @min 0
   */
  calculated_delta: string
}
