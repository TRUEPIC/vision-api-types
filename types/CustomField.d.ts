import { CustomFieldEntryMethods } from '@/types/enums/CustomFieldEntryMethods'

export interface CustomField {
  /** The label for the custom field
   * @example My Custom Field
   */
  label?: string

  /** The entry method for the custom field
   * @example ENTRY_METHOD_TEXT
   */
  entry_method: CustomFieldEntryMethods

  /** The id of the custom field option set used by this custom field when the entry method is ENTRY_METHOD_SELECTABLE
   * @example ENTRY_METHOD_TEXT
   */
  custom_field_option_set_id?: number

  /** When true, the user must supply a value for this custom field in order to create an inspection
   * @example true
   */
  is_required: boolean
}

export interface PopulatedCustomField extends CustomField {
  /** An array of custom field options used by this custom field when the entry method is ENTRY_METHOD_SELECTABLE
   * @example [{'label': 'My Custom Field Option', 'value': 'OPTION_VALUE'}]
   */
  custom_field_options?: Array<CustomFieldOption>
}

export interface CustomFieldOption {
  /**
   * The label for the custom field option
   * @example "My Custom Field Option"
   */
  label: string

  /**
   * The value for the custom field option
   * @example "OPTION_VALUE"
   */
  value: string
}
