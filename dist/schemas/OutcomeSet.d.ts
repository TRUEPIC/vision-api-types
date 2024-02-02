import { PsqlTimestamps } from '@/types/Psql'

/** A set of outcomes possible when closing an inspection. Specific to each organization. */
export interface OutcomeSet extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization that owns this outcome set.
   * @example 532
   */
  organization_id: number

  /** The name of the outcome set
   * @example 'Default'
   */
  name: string

  /** The id of the user that created this outcome set.
   * @example 894
   */
  created_by_user_id: number

  /** The id of the user that last edited this outcome set.
   * @example 542
   */
  modified_by_user_id?: number

  /** Whether or not this outcome set has been soft-deleted
   * @example false
   * @default false
   */
  is_deleted: boolean
}
