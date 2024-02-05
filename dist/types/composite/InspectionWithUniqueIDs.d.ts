import type { Inspection } from '@/types/schemas/Inspection'

/**
 * This type represents an Inspection Type with the old Inspection Type fields for compatibility
 * Once v2 is deprecated this type should disappear
 * @internal
 */
export interface InspectionWithUniqueIDs extends Inspection {
  /** An identifier that you use to reference the customer in your system.
   * @example 'abc123'
   * @deprecated
   * @maxLength 255
   */
  customer_unique_id?: string

  /** A second identifier that you can use to reference the customer in your system.
   * @example 'def123'
   * @deprecated
   * @maxLength 255
   */
  customer_unique_id_2?: string
}
