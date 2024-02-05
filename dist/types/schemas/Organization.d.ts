import { PsqlTimestamps } from '@/types/Psql'

/** An organization that uses Truepic to create inspections. */
export interface Organization extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The name of the organization.
   * @example 'Quality Capital'
   */
  name?: string

  /** Whether or not this organization has been soft-deleted.
   * @example 0
   * @default 0
   */
  is_deleted: 1 | 0

  /** The id of the user that created this organization.
   * @example 1413
   */
  created_by_user_id: number

  /** The organization_slug of the organization used to access Vision.
   * @example 'vision-test'
   */
  organization_slug?: string

  /** Whether multi-factor authentication is required for user login.
   * @example 0
   * @default 0
   */
  is_mfa_required: number

  /** A configuration object showing the features that are enabled for this organization. */
  enabled_features?: {
    /** Whether vehicle detection is enabled for this organization.
     * @example true
     */
    vehicle_details: boolean

    /** A configuration object showing the content analysis features that are enabled for this organization. */
    content_analysis?: {
      /** Whether VIN detection is enabled for this organization
       * @example true
       */
      VIN: boolean

      /** Whether odometer detection is enabled for this organization
       * @example true
       */
      ODOMETER: boolean
    }

    /** A configuration object showing the object detection features that are enabled for this organization. */
    object_detection?: {
      /** Whether the automotive object detection feature is enabled for this organization
       * @example true
       */
      auto: boolean

      /** Whether the jewelry detection feature is enabled for this organization
       * @example true
       */
      jewelry: boolean

      /** Whether the real estate object detection feature is enabled for this organization
       * @example true
       */
      real_estate: boolean
    }
  }
}
