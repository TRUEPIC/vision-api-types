import { PsqlTimestamps } from '@/types/Psql'

/** A Team that exists under an organization in Vision that sends out inspection requests */
export interface Team extends PsqlTimestamps {
  /** The id of the resource
   * @example 1843
   */
  id: number

  /** The url slug used to acquire the team's assets
   * @example 'coca-cola'
   */
  theme_slug?: string

  /** The Twilio phone number used to send text messages for inspection requests.
   * @example '15162711526'
   * @format phone
   */
  twilio_contact_number?: string

  /** The phone number attached to text messages for app users to contact for customer support.
   * @example '15162711526'
   * @format phone
   */
  customer_support_number?: string

  /** The id of the organization this team belongs to.
   * @example 123
   */
  organization_id: number

  /** The id of the user that created this team.
   * @example 123
   */
  created_by_user_id: number

  /** Whether or not this config has been soft-deleted
   * @example 0
   */
  is_deleted: 1 | 0

  /** The amount of time before an inspection request token expires.
   * Any format supported by https://github.com/vercel/ms is valid.
   * @example '120h'
   * @default '480h'
   */
  jwt_customer_expiry: string

  /** The amount of time before an admin member's login token when switching teams expires.
   * Any format supported by https://github.com/vercel/ms is valid.
   * @example '10h'
   * @default '72h'
   */
  jwt_agent_admin_expiry: string

  /** A comma-separated list of email addresses to notify of inspection request updates.
   * @example 'team@qualitylending.com,support@qualitylending.com'
   */
  ready_for_review_recipients?: string

  /** The primary hex color code used for branding in the app.
   * @example '#0F7EC1'
   */
  color_primary?: string

  /** The label displayed for contacting support in the app.
   * @example 'Contact Us'
   */
  customer_support_label?: string

  /** The word for an "item" in the context of the team.
   * @example 'jewelry'
   */
  customer_item_label?: string

  /** The accuracy threshold that GPS coordinates must not exceed in meters.
   * @example 1500
   */
  gps_threshold?: number

  /** The company name to display in the app.
   * @example 'Quality Capital'
   */
  customer_app_label?: string

  /** The combined URL-friendly name of the organization and team.
   * @example 'quality-capital-claims'
   */
  shortname?: string

  /** The name of the team.
   * @example 'Claims'
   */
  name?: string

  /** The URL-friendly name of the team.
   * @example 'claims'
   */
  slug?: string

  /** Whether to include the inspection type's list by default with new inspection requests.
   * @example 1
   */
  include_list?: 1 | 0

  /** Whether video is enabled as a capture method in the app.
   * @example 1
   */
  video_enabled?: 1 | 0

  /** The message displayed to the customer on completion of the inspection.
   * @example 'We'll review them and reach out to you shortly.'
   */
  app_success_message?: string

  /** The label to describe the identifier that the organization uses to reference the group in their system.
   * @example 'Dealer ID'
   */
  group_id_label?: string

  /** The default methods to send the inspection request to the customer who will be completing the inspection. */
  send_methods?: {
    /** Whether to send the inspection request via text.
     * @example true
     */
    text: boolean

    /** Whether to send the inspection request via email.
     * @example true
     */
    email: boolean
  }

  /** The callback URL we send a request to on action / change in status of an inspection request
   * @example 'https://api.qualitycapital.com/hooks/truepic'
   */
  status_callback_url?: string

  /** The amount of time until an auto-reminder is sent for inspections without photos/videos/question answers. `null` means auto-reminders are disabled.
   * Any format supported by https://github.com/vercel/ms is valid.
   * @example '72h'
   */
  auto_reminder_duration?: string

  /** Whether to notify the member who created the inspection request of updates.
   * @example 1
   */
  notify_inspection_creator?: 1 | 0

  /** The distance (in meters) from the customer's address a photo/video can be taken before being flagged.
   * `null` can be set to disable the flag.
   * @example 1500
   */
  distance_from_customer_address_threshold?: number

  /** Whether to allow app users to delete images during an inspection.
   * @example true
   * @default true
   */
  allow_image_deletes?: boolean

  /** Whether app users should have a maximum limit of captures per list item.
   * @example true
   * @default false
   */
  allow_list_item_capture_max?: boolean

  /** The maximum number of captures an app user can create for a list item in an inspection.
   * Only used if allow_list_item_capture_max is `true`
   * @example 20
   */
  default_list_item_capture_max?: number

  /** A configuration object showing the the features that are enabled for this team. */
  enabled_features?: {
    /** Whether this team can respond to text messages from the Vision dashboard
     * @example true
     */
    respond_to_text_messages: boolean

    /** Whether this team's inspections should be performed using the web camera.
     * @example true
     */
    web_camera: boolean
  }

  /** The amount of time until an auto-reminder is sent for incomplete inspections that have some photos/videos/question answers. `null` means auto-reminders are disabled.
   * Any format supported by https://github.com/vercel/ms is valid.
   * @example '72h'
   */
  auto_finish_reminder_duration?: string
}
