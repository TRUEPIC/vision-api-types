import type { MessageTemplateSet } from '@/types/schemas/MessageTemplateSet'
import type { PopulatedList } from '@/types/composite/Lists'
import type { InspectionTypeWithUniqueIDs } from '@/types/composite/InspectionTypeWithUniqueIDs'
import type { TeamSimple } from '@/types/composite/TeamSimple'
import type { OutcomeSet } from '@/types/schemas/OutcomeSet'
import type { InspectionAlertConfig } from '@/types/schemas/InspectionAlertConfig'
import type { PopulatedCustomField } from '@/types/CustomField'

/** An inspection type with attached list and message template set data
 * @internal
 */
export type PopulatedInspectionType = Modify<
  InspectionTypeWithUniqueIDs & {
    /**
     * The list associated with this Inspection Type
     */
    list: PopulatedList

    /**
     * The message template set associated with this Inspection Type
     */
    message_template_set: MessageTemplateSet

    /**
     * The the teams that use this inspection type.
     */
    teams?: TeamSimple[]

    /**
     * The outcome set that is used by this inspection type.
     */
    outcome_set?: OutcomeSet

    /**
     * The alert configuration that is used by this inspection type.
     */
    inspection_alert_config?: InspectionAlertConfig
  },
  {
    /**
     * The custom fields associated with this Inspection Type with any custom field values
     */
    custom_fields: PopulatedCustomField[]
  }
>
