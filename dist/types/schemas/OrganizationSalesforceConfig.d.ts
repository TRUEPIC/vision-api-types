import { PsqlTimestamps } from '@/types/Psql'

/** Configuration settings for an organization's Salesforce integration */
export interface OrganizationSalesforceConfig extends PsqlTimestamps {
  /** The id of the resource
   * @example 1843
   */
  id: number

  /** The id of the organization
   * @example 123
   */
  organization_id: number

  /** The id of the user that created this config
   * @example 53
   */
  created_by_user_id?: number

  /** The id of the user that last edited this config
   * @example 56
   */
  modified_by_user_id?: number

  /** Whether or not this config has been soft-deleted
   * @example 0
   */
  is_deleted: 1 | 0

  /** The Salesforce organization id
   * @example '10D0S0001231AL9'
   */
  salesforce_org_id: string

  /** The Salesforce organization url
   * @example 'https://cs54.lightning.force.com/'
   */
  salesforce_org_url: string

  /** The Salesforce organization url
   * @example 'bobbyks-g2d5@force.com.qa'
   */
  salesforce_user?: string
}
