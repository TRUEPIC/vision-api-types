import { PsqlTimestamps } from '../Psql'

/** A mapping between a user, an organization, and a team on that organization. Signifies that this user has access to this team. */
export interface UserAssignedOrganization extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization
   * @example 24
   */
  organization_id: number

  /** The id of the user
   * @example 2623
   */
  user_id: number

  /** The id of the team
   * @example 513
   */
  team_id: number

  /** Whether or not this has been soft-deleted
   * @example 0
   * @default 0
   */
  is_deleted: 1 | 0
}
