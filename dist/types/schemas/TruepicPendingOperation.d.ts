/** A resource detailing pending operations in the Lens system as they relate to inspections in the Vision system */
export interface TruepicLensId {
  /** The uuid of the Truepic entry in Lens
   * @example 00022423-cgba-486a-bddb-236b73417d7
   */
  lens_id: string

  /** The id of the inspection in Vision
   * @example 8651
   */
  inspection_id: number

  /** An object detailing the operations that are still pending within the Lens system */
  pending_operation: {
    is_deleted?: boolean
    photo_list_id?: number
    comment?: string
    comment_deleted?: string
  }

  /** Whether the operation is complete
   * @example false
   */
  completed: boolean
}
