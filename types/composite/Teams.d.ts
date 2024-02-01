import { Team } from '@/types/schemas/Team'
import { Group } from '@/types/schemas/Group'
import { PopulatedInspectionType } from '@/types/composite/InspectionTypes'
import { PopulatedList } from '@/types/composite/Lists'
import { TeamWebhook } from '@/types/schemas/TeamWebhook'

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
