/** Extended odometry information about a Truepic */
export interface TruepicExtended {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the Truepic in the Vision system
   * @example 7563
   */
  truepic_id: number

  /** Extended odometry information about a Truepic
   * @example aefgaerwgaewrga34t3qw4fgarGq345tgaefDgaer5
   */
  odometry: string
}
