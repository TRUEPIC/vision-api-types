import { PsqlTimestamps } from '@/types/Psql'

/** An entry marking an email address that has unsubscribed from emails from a specific organization. */
export interface UnsubscribedEmail extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization that this email has unsubscribed from.
   * @example 532
   */
  organization_id: number

  /** The email address that has unsubscribed.
   * @example 'bob@aol.com'
   * @format email
   */
  email_address: string
}
