import { PsqlTimestamps } from '../Psql'

/** A set of possible options that a user can select from when creating an inspection */
export interface CustomFieldOptionSet extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization that owns this custom field option set.
   * @example 532
   */
  organization_id: number

  /** The name of the custom field option set
   * @example 'Option Set Name'
   */
  name: string

  /** The available options in this option set
   * @example [{'value': 'OPTION_ID', 'name': 'Option Label'}]
   */
  options: Array<{
    /** The value of the option
     * @example 'OPTION_ID'
     */
    value: string

    /** The name of the option
     * @example 'Option Label
     */
    name: string
  }>

  /** The id of the user that created this option custom field option set.
   * @example 894
   */
  created_by_user_id: number

  /** The id of the user that last edited this custom field option set.
   * @example 542
   */
  modified_by_user_id?: number

  /** Whether or not this custom field option set has been soft-deleted
   * @example false
   * @default false
   */
  is_deleted: boolean
}
