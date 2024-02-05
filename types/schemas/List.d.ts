import { PsqlTimestamps } from '../Psql'
import { ListType } from '../enums/List'
import { ListItemGroups } from '../composite/Lists'

/** A list of photos/videos and questions to prompt the customer for during an inspection. */
export interface List extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The auto-generated name of the list.
   * @example 'List for Inspection 3527'
   */
  name: string

  /** The id of the organization that this list belongs to
   * @example 52
   */
  organization_id: number

  /** The id of the team that this list belongs to
   * @example 66
   */
  team_id?: number

  /** The id of the inspection that this list belongs to
   * @example 6342
   */
  inspection_id?: number

  /** The id of the user that created this list
   * @example 609
   */
  created_by_member_user_id?: number

  /** Whether or not this list has been soft-deleted
   * @example 0
   * @default 0
   */
  is_deleted: 1 | 0

  /** The type of the list. Must be `EVENT_TEMPLATE`, `EVENT_INSTANCE`, `SURVEY_TEMPLATE`, or `SURVEY_INSTANCE`
   * @example 'EVENT_TEMPLATE'
   */
  type: ListType

  /** The groups of items in the list
   * @example { 'grp1': { name: 'Group 1' }, 'grp1': { name: 'Group 2' } }
   */
  groups?: ListItemGroups
}
