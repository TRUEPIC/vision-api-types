import { PsqlTimestamps } from '../Psql'

/** A user of Vision. This could be a Vision website user or mobile app user. */
export interface User extends PsqlTimestamps {
  /** The id of the user
   * @example 1843
   */
  id: number

  /** The email address of the user.
   * @example 'kylorenxninja@potato.com'
   * @format email
   */
  email?: string

  /** The phone number of the user.
   * @example '5558675309'
   * @format phone
   */
  phone_number?: string

  /** The first name of the user.
   * @example 'Kylo'
   */
  first_name?: string

  /** The last name of the user.
   * @example 'Ren'
   */
  last_name?: string

  /** The id of the organization this user belongs to.
   * @example 117
   */
  organization_id?: number

  /** The id of the inspection this user belongs to. Indicates this is a mobile app user performing an inspection. References `inspections.id`
   * @example 2412
   */
  inspection_id?: number

  /** The id of the team this user belongs to.
   * @example 521
   */
  team_id?: number

  /** The auth identifier of the user.
   * @example 'wawqZ8nABRWEpxjZKegwe@clients'
   */
  auth_id?: string

  /** Search terminology for indexing the user
   * @example "'member':2 'bob':1 'bob@aol.com':3"
   */
  search?: string
}
