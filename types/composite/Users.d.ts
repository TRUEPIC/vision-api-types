import { User } from '../schemas/User'
import { PopulatedTeam } from '../composite/Teams'
import { SerializedOrganization } from '../composite/Organizations'
import { SerializedRole } from '../composite/Roles'
import { SerializedGroup } from '../composite/Groups'
import { EmailToken } from '../EmailToken'
import { Provider } from '../Provider'

/** The properties that can be attached to the Express req.user object
 * @internal
 */
interface MiddlewareUserProps {
  jwt?: string
  provider?: Provider
  organization?: SerializedOrganization
  teams: number[] | PopulatedTeam[]
  organizationsUserHasAccessTo: number[]
  hasAccessToMultipleOrganizations: boolean
  roles: SerializedRole[]
  isSuperAdmin: boolean
  isMemberAdmin: boolean
  isMemberReport: boolean
  isMemberOwnInspections: boolean
  isViewOnly: boolean
  isActiveUser: boolean
  isGroupMember: boolean
  isCustomer: boolean
  isBot: boolean
  group: SerializedGroup
  decodedToken: EmailToken
}

/** A user object that's been populated with all jwt, organization, team, group, and role info.
 * Usually this has been populated via middleware and is used for express req.user
 * @internal
 */
export type PopulatedUser = Pick<
  User,
  | 'id'
  | 'email'
  | 'phone_number'
  | 'first_name'
  | 'last_name'
  | 'organization_id'
  | 'inspection_id'
> &
  MiddlewareUserProps
