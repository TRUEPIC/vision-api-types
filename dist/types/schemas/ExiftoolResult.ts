/** The result of an exif test. */
export interface ExiftoolResult {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the Truepic this test was performed on.
   * @example 51252
   */
  truepic_id: number

  /** The exif data examined in this text */
  exif: object
}
