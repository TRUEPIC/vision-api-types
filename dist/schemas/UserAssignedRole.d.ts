import { PsqlTimestamps } from '@/types/Psql'

/** A mapping between a user, an organization, and a role. Signifies that this user has this role on this organization. */
export interface UserAssignedRole extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization
   * @example 24
   */
  organization_id?: number

  /** The id of the user
   * @example 2623
   */
  user_id: number

  /** The id of the role
   * @example 4
   */
  role_id: number
}
