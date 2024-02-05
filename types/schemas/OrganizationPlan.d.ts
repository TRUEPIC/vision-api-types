import { PsqlTimestamps } from '../Psql'

/** The plan an organization has for with Truepic Vision.  */
export interface OrganizationPlan extends PsqlTimestamps {
  /** The id of the organization
   * @example 1235
   */
  organization_id: number

  /** The type of plan the organization has for Truepic Vision
   * @example 'ENTERPRISE'
   */
  plan: 'ENTERPRISE' | 'TRIAL' | 'PRO'

  /** The maximum number of inspections an organization can create. `null` if there is no limit.
   * @example 500
   */
  inspection_limit?: number

  /** The datetime the organization plan began at
   * @example '2020-05-01T21:44:40.000Z'
   * @format date-time
   */
  cycle_started_at?: string

  /** The Stripe id of the organization for this plan's payment processing
   * @example 'cus_G8qff3656do4A'
   */
  stripe_customer_id?: string

  /** The Stripe subscription id for this plan's payment processing
   * @example 'sub_G8qff3g23yho4A'
   */
  stripe_subscription_id?: string
}
