import { PsqlTimestamps } from '@/types/Psql'

/** A set of templates used for messages sent via email or text to an app user */
export interface MessageTemplateSet extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the team that this message template set belongs to
   * @example 521
   */
  team_id?: number

  /** The id of the organization that this message template set belongs to
   * @example 521
   */
  organization_id?: number

  /** The name of the message template set
   * @example 'Default Set'
   * @maxLength 255
   */
  name: string

  /** Whether or not this message template set has been soft-deleted
   * @example 0
   * @default 0
   */
  is_deleted: 1 | 0

  /** The message template for messages sent for new inspection requests.
   * @example 'Hi {{OrganizationFirstName}}, this is {{MemberName}} reaching out to request photos. To begin, click on the following link to download the Vision Camera app: {{SmartLink}} Follow the onscreen instructions to capture photos. Please note, this request will expire in {{ExpirationTime}}. {{CustomNote}} Thank you, and please contact us with any questions.'
   */
  new_request: string

  /** The message template for messages sent as reminders for pending inspection requests.
   * @example 'Hi {{OrganizationFirstName}}, this is {{MemberName}} sending a reminder that you have not yet submitted the requested photos. To begin, click on the following link to download the Vision Camera app: {{SmartLink}} Follow the onscreen instructions to capture photos. Please note, this request will expire in {{ExpirationTime}}. {{CustomNote}} Thank you, and please contact us with any questions.'
   */
  request_reminder: string

  /** The message template for messages sent to request additional items on an inspection request.
   * @example 'Hi {{OrganizationFirstName}}, this is {{MemberName}} requesting that you upload additional photos. To begin, click on the following link to download the Vision Camera app: {{SmartLink}} Follow the onscreen instructions to capture photos. Please note, this request will expire in {{ExpirationTime}}. {{CustomNote}} Thank you, and please contact us with any questions.'
   */
  request_more: string

  /** The message template for messages sent as automated replies when an app user sends a message to a member/dashboard-user. Only sent for text messages (not emails)
   * @example "(This is an auto-reply) Thanks for reaching out! We've received your message; if you need immediate assistance, please call us.""
   */
  auto_reply: string

  /** The message template for messages sent as reminders for started, but unfinished inspection requests.
   * @example 'Hi {{OrganizationFirstName}}, this is {{MemberName}} from {{CompanyName}} reminding you that you have {{ExpirationTime}} to finish your inspection. Please tap the following link to open the Vision Camera app and return to your inspection: {{SmartLink}} {{CustomNote}} Thank you, and please call us at {{ClientSupportNumber}} with any questions.'
   */
  finish_reminder?: string

  /** The message template for messages sent for finished inspection requests.
   * @example 'Hi {{OrganizationFirstName}}. Your inspection has been completed and we will reach out with a result shortly. Thank you, and please call us at {{ClientSupportNumber}} with any questions.'
   */
  inspection_finished: string

  /** Whether or not the "inspection finished" message is enabled and will be sent.
   * @example false
   * @default false
   */
  inspection_finished_enabled: boolean

  /** The email subject for messages sent for finished inspection requests.
   * @example 'Inspection Finished for {{OrganizationFirstName}}'
   */
  inspection_finished_subject: string

  /** The email subject for messages sent for new inspection requests.
   * @example 'New Inspection for {{OrganizationFirstName}}'
   */
  new_request_subject: string

  /** The email subject for messages sent as reminders for non-started inspections.
   * @example 'Inspection Reminder for {{OrganizationFirstName}}'
   */
  request_reminder_subject: string

  /** The message template for messages sent as requests for more photos on inspections.
   * @example 'More Photos Requested for {{OrganizationFirstName}}'
   */
  request_more_subject: string

  /** The message template for messages sent as reminders to finish inspections.
   * @example 'Reminder to finish inspection for {{OrganizationFirstName}}'
   */
  finish_reminder_subject: string
}
