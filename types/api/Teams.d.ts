import { PopulatedTeam } from '../composite/Teams'
import { PaginationResult, ResponseData } from '../api/ResponseData'

export type GetTeamsResult = ResponseData &
  PaginationResult & {
    /** A paginated list of Teams with group information */
    result: PopulatedTeam[]
  }
/** The path parameters for the POST /{organizationId}/teams/{teamId}/assets endpoint
 * @in path
 */
export type UploadTeamAssetsPathParams = {
  /** The ID of the organization this team belongs to */
  organizationId: number
  /** The ID of the team to upload these assets for */
  teamId: number
}
