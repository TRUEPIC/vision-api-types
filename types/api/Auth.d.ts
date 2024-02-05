import { PopulatedUser } from '../composite/Users'
import { Provider } from '../Provider'
import { Team } from '../schemas/Team'
import { ResponseData } from '../api/ResponseData'

/** The result for GET /auth/user */
export type GetLoggedInUserResult = {
  user: PopulatedUser & {
    teams: Team[]
    provider?: Provider
  }
}

/** The response body for POST /auth/auth0 */
export type CreateAPICredentialsResult = ResponseData & {
  /** The client secret for the organization's Vision API access. */
  client_secret: string
  /** The client id for the organization's Vision API access. */
  client_id: string
  /** The date the API credentials and bot were created.
   * @format datetime
   */
  created_at: string
}

/** The response body for GET /auth/auth0 */
export type GetAPICredentialsResult = CreateAPICredentialsResult
