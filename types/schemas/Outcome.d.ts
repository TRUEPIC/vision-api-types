import { PsqlTimestamps } from '../Psql'

/** A possible outcome for an inspection */
export interface Outcome extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the outcome set that this outcome belongs to
   * @example 111
   */
  outcome_set_id: number

  /** The order that this outcome is listed in. Starts at 1
   * @example 111
   * @min 1
   */
  order: number

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
