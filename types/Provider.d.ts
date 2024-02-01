/** Auth0 IDP information */
export interface Provider {
  /** Auth0 connection name */
  connection: string
  /** Whether social login was used */
  isSocial: boolean
  /** The type of provider used */
  provider: string
  /** The identifier for the user */
  user_id: string
}
