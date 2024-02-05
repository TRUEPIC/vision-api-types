/** An email token used for unsubscribing and resubscribing from emails */
export interface EmailToken {
  /** The id of the organization that this token will unsubscribe the email from.
   * @example 123
   */
  organization_id: number

  /** The inspection id for the email this token will be attached to.
   * @example 542
   */
  inspection_id: number

  /** The email address that this token will unsubscribe/resubscribe
   * @example bob@aol.com
   * @format email
   */
  email_address: string

  /** The unix timestamp when this token expires.
   * @example 5102023224
   */
  exp: number
}
