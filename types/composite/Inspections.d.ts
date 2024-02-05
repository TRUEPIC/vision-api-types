import { Inspection } from '../schemas/Inspection'
import { User } from '../schemas/User'
import { Organization } from '../schemas/Organization'
import { Group } from '../schemas/Group'
import { PopulatedList } from '../composite/Lists'
import { Truepic } from '../schemas/Truepic'
import { Team } from '../schemas/Team'
import { PopulatedInspectionType } from '../composite/InspectionTypes'
import { InspectionStatus } from '../schemas/InspectionStatus'
import { InspectionAlertConfig } from '../schemas/InspectionAlertConfig'
import { TimelineAction } from '../schemas/TimelineAction'
import { Outcome } from '../schemas/Outcome'

/** An inspection object will all related data
 * @internal
 */
export type PopulatedInspection = Inspection & {
  assigned_to_member_user: User
  created_by_member_user: User
  organization: Organization
  organization_team: Team
  inspection_type: PopulatedInspectionType
  group?: Group
  list: PopulatedList
  photos: Truepic[]
  status: InspectionStatus
  timeline: TimelineAction[]
  alert: {
    config: InspectionAlertConfig
  }
  outcome?: Outcome
  photo_counts: any
}

/** The Inspection schema with all properties optional
 * @internal
 */
export type InspectionPartial = Partial<Inspection>
