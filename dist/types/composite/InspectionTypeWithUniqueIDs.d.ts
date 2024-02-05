import type { InspectionType } from '@/types/schemas/InspectionType'
import type { CustomField } from '@/types/CustomField'
import type { TeamSimple } from '@/types/composite/TeamSimple'

import { CustomFieldEntryMethods } from '@/types/enums/CustomFieldEntryMethods'

/**
 * This type represents an Inspection with the deprecated Unique ID fields for compatibility
 * @internal
 */
export interface InspectionTypeWithUniqueIDs extends InspectionType {
  /** The entry method for the customer unique id field. This field still works in v2 but for v3 you must use `custom_fields` instead.
   * @example "Custom ID"
   * @deprecated
   */
  customer_unique_id_label?: string

  /** The label for the customer unique id field. This field still works in v2 but for v3 you must use `custom_fields` instead.
   * @example ENTRY_METHOD_TEXT
   * @deprecated
   */
  entry_method?: CustomFieldEntryMethods

  /** The details about customer unique id 2. This field still works in v2 but for v3 you must use `custom_fields` instead.
   * @example { label: 'Custom ID 2', entry_method: 'ENTRY_METHOD_TEXT', is_required: false, is_enabled: true }
   * @deprecated
   */
  customer_unique_id_2?: UniqueID2
}

type InspectionTypePayload = Modify<
  InspectionTypeWithUniqueIDs,
  {
    /** An array of the team ids that this inspection type should be related to
     * @example [12,24,534]
     */
    teams: TeamSimple[]
  }
>

export interface UniqueID2 extends CustomField {
  /** When true, the user must supply a value for this custom field in order to create an inspection
   * @example true
   */
  is_enabled: boolean
}
