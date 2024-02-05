/** Request Body for POST /emails/release-notes */
export type SendReleaseNotesEmailBody = {
  /** The subject for the email (also used as the header in the email content) */
  subject: string
  /** The text body of the email */
  body: string
  /** When true (or excluded), will only send the release notes email to Super Admins. If you want to send it to all Vision Dashboard users, you must explicitly set this to false
   * @default true
   */
  superAdminsOnly: boolean
}
