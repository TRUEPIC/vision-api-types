import { Inspection } from '@/types/schemas/Inspection'
import { User } from '@/types/schemas/User'
import { Organization } from '@/types/schemas/Organization'
import { Group } from '@/types/schemas/Group'
import { PopulatedList } from '@/types/composite/Lists'
import { Truepic } from '@/types/schemas/Truepic'
import { Team } from '@/types/schemas/Team'
import { PopulatedInspectionType } from '@/types/composite/InspectionTypes'
import { InspectionStatus } from '@/types/schemas/InspectionStatus'
import { InspectionAlertConfig } from '@/types/schemas/InspectionAlertConfig'
import { TimelineAction } from '@/types/schemas/TimelineAction'
import { Outcome } from '@/types/schemas/Outcome'

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
