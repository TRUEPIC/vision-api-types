import { PsqlTimestamps } from '@/types/Psql'

/** A reference between a Team and an Inspection Type */
export interface TeamInspectionType extends PsqlTimestamps {
  /** The id of the resource
   * @example 1843
   */
  id: number

  /** The id of the team
   * @example 12
   */
  team_id: number

  /** The id of the inspection type
   * @example 42
   */
  inspection_type_id: number

  /** The id of the user that created this reference
   * @example 5122
   */
  created_by_user_id: number
}
