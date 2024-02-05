import { PsqlTimestamps } from '../Psql'

/** A token used to authenticate Truepics sent from app users to the Vision API. */
export interface InspectionToken extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the inspection.
   * @example 51232
   */
  inspection_id: number

  /** The id of the app user performing the inspection.
   * @example 51232
   */
  customer_user_id: number

  /** The id of the organization the inspection belongs to.
   * @example 782
   */
  organization_id: number

  /** The signed JSON web token used to authenticate Truepics sent from app users to the Vision API.
   * @example 'eyJhbGciOiJdeswGwdegewrGerI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNywiaWF0IjoxNTMyMDIxMTAaswdgfasdgfadewgMDZ9.qrsJznOo2-hEDuHyTs4cZnawedgwerGerwgfOMljYA'
   */
  token: string

  /** The id of the team assocaited with the inspection this token is for.
   * @example 526
   */
  team_id?: number

  /** The ISO-8601 datetime stamp that this token expires at
   * @format date-time
   * @example '2023-07-25 16:06:37'
   */
  expires_at: string
}
