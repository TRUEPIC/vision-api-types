import { Team } from '../schemas/Team'
import { Group } from '../schemas/Group'
import { PopulatedInspectionType } from '../composite/InspectionTypes'
import { PopulatedList } from '../composite/Lists'
import { TeamWebhook } from '../schemas/TeamWebhook'

/** A team with attached info for that team
 * @internal
 */
export type PopulatedTeam = Team & {
  inspection_types: PopulatedInspectionType[]
  groups?: Pick<Group, 'id' | 'name' | 'address'>
  list?: PopulatedList[]
}

type TeamWebhookExpanded = TeamWebhook & {
  secret: string | null
  has_secret: boolean
  is_disabled: boolean
}

export type TeamWebhookResponse = Omit<
  TeamWebhookExpanded,
  'secret_encrypted' | 'secret'
>

export type TeamWebhookPayload = Omit<
  TeamWebhookExpanded,
  'id' | 'created_at' | 'updated_at'
>
