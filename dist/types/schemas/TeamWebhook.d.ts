import { PsqlTimestamps } from '@/types/Psql'
import { VisionAPIVersion } from '@/types/enums/VisionAPIVersion'

/** A configuration object for a webhook triggered for a team when an inspection is updated */
export interface TeamWebhook extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the organization.
   * @example 1
   */
  organization_id: number

  /** The id of the team.
   * @example 12
   */
  team_id: number

  /** The url that the POST request is sent to when an inspection is updated.
   * @example 'https://webhook.site/7a126f8d-6f8d-486f-8116-c92088360fe7'
   * @format url
   */
  url: string

  /** The encrypted string sent with webhook POST requests. Used for authentication with the organization's receiving service.
   * @example 'WMHadsfgYQ+348BEPcoyucKSaerwgq34gq34grstXp62P0Svn5VyEAGCKXM+CKcaw=='
   */
  secret_encrypted?: string | null

  /** The timestamp when this webhook was disabled.
   * @example '2023-06-01 17:12:20.097233+00'
   * @format date-time
   */
  disabled_at?: string | null

  /** Whether or not to use Mutual TLS when sending the webhook POST request.
   * @example false
   * @default false
   */
  mutual_tls: boolean

  /** An object containing any custom headers that should be sent in the webhook POST request.
   * @example {"x-api-resource": "truepic"}
   */
  custom_headers?: object

  /** The API version used to send the webhook POST request. Determines the terminology (v2 or v3) sent.
   * @example 'v3'
   * @default 'v3'
   */
  vision_api_version: VisionAPIVersion
}
