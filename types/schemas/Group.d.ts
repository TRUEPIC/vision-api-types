import { PsqlTimestamps } from '../Psql'

/** A group of users (self initiated inspectors) who can login to the app to create and perform inspections. */
export interface Group extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The name of the group
   * @example 'Acura of La Jolla'
   */
  name: string

  /** The address of the group
   * @example '7817 Ivanhoe Avenue, La Jolla, CA 92037'
   */
  address?: string

  /** The id of the user that creted the group
   * @example 551
   */
  created_by_user_id: number
}
