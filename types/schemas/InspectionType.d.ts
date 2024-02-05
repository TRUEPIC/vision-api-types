import type { PsqlTimestamps } from '../Psql'
import type { CustomField } from '../CustomField'

/** The core resource representing an inspection request */
export interface InspectionType extends PsqlTimestamps {
  /** The id of the inspection type
   * @example 1843
   */
  id: number

  /** The name of the inspection type
   * @example 'My Type'
   */
  name: string

  /** the id of the organization that this inspection type belongs to. References `organizations.id`.
   * @example 14
   */
  organization_id: number

  /** the id of the team that this inspection type belongs to. References `teams.id`. Note that this is no longer used, and inspection types can now be associated with multiple teams
   * @example 124
   * @deprecated
   */
  team_id: number

  /** The id of the list that is used by this inspection type. References `lists.id`
   * @example 3345
   */
  list_id?: number

  /** When true, the list associated with this inspection type cannot be changed
   * @example false
   */
  is_list_locked: boolean

  /** The id of the message template set that is used by this inspection type. References `message_template_sets.id`
   * @example 539
   */
  message_template_set_id: number

  /** The id of the outcome set that is used by this inspection type. References `outcome_sets.id`
   * @example 539
   */
  outcome_set_id?: number

  /** The id of the inspection alert configuration that is used by this inspection type. References `inspection_alert_configs.id`
   * @example 539
   */
  inspection_alert_config_id?: number

  /** the maximum distance away from the configured inspection address that an inspection can be completed in meters.
   * @example 1000
   */
  max_distance_from_address_threshold?: number

  /** Controls whether an address is required for the inspection or not
   * @example 1000
   */
  is_address_required: boolean

  /** When true, there is only one name for the user to fill out rather than a separate first name and last name field
   * @example true
   */
  use_single_name_field: boolean

  /** An array of custom fields that are used by this inspection type
   * @example [{"label":"Reference Number","is_required":true,"entry_method":"ENTRY_METHOD_TEXT"}, "label":"Reference Number 2","is_required":true,"entry_method":"ENTRY_METHOD_TEXT"}]
   */
  custom_fields: Array<CustomField>

  /** Whether this inspection type is deleted
   * @example 0
   */
  is_deleted: 0 | 1

  /** the id of the user who created this inspection type. References `users.id`
   * @example 2343
   */
  created_by_member_user_id?: number

  /** the id of the user who last modified this inspection type. References `users.id`
   * @example 2343
   */
  modified_by_member_user_id?: number
}
