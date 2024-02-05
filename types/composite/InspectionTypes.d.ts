import type { MessageTemplateSet } from '../schemas/MessageTemplateSet'
import type { PopulatedList } from '../composite/Lists'
import type { InspectionTypeWithUniqueIDs } from '../composite/InspectionTypeWithUniqueIDs'
import type { TeamSimple } from '../composite/TeamSimple'
import type { OutcomeSet } from '../schemas/OutcomeSet'
import type { InspectionAlertConfig } from '../schemas/InspectionAlertConfig'
import type { PopulatedCustomField } from '../CustomField'

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
