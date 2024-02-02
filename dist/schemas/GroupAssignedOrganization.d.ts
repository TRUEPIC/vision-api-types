import { PsqlTimestamps } from '@/types/Psql'

/** A reference object between a team and a group*/
export interface GroupAssignedOrganization extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of associated group
   * @example 643
   */
  group_id: number

  /** The id of associated organization
   * @example 123
   */
  organization_id: number

  /** The id of associated team
   * @example 609
   */
  team_id: number

  /** An identifier that the organization uses to reference the group in their system.
   * @example 'acura-la-jolla'
   */
  unique_id?: string
}
