/** A mapping between a Truepic with the Vision system and it's matching entry in the Lens system */
export interface TruepicLensId {
  /** The uuid of the Truepic entry in Lens
   * @example 00022423-cgba-486a-bddb-236b73417d7
   */
  lens_id: string

  /** The id of the Truepic in the Vision system
   * @example 7563
   */
  truepic_id?: number
}
