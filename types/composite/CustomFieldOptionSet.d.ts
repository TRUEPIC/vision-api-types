import type { CustomFieldOptionSet } from '../schemas/CustomFieldOptionSet'
import type { InspectionType } from '../schemas/InspectionType'

export type PopulatedCustomFieldOptionSet = CustomFieldOptionSet & {
  /*
   * The inspection types that this custom field option set is associated with
   */

  inspection_types?: Array<Pick<InspectionType, 'id' | 'name'>>
}
