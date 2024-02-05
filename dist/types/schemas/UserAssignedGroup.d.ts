import { PsqlTimestamps } from '@/types/Psql'

/** A mapping between a user and a group. Signifies that this user has access to this group. */
export interface UserAssignedGroup extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the rgoup
   * @example 242
   */
  group_id: number

  /** The id of the user
   * @example 2623
   */
  user_id: number

  /** Whether or not this has been soft-deleted
   * @example 0
   * @default 0
   */
  is_deleted: 1 | 0
}
