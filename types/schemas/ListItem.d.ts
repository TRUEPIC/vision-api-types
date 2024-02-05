import { PsqlTimestamps } from '../Psql'
import { ObjectDetectionConfig } from '../composite/ObjectDetection'
import { ListItemType } from '../enums/List'

/** A photo/video or question to prompt the customer for during an inspection. */
export interface ListItem extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** A description of the requested photo/video if the `type` is `IMAGE`/`PHOTO`/`VIDEO`,
   * or a question for the customer to answer if the `type` is `QUESTION`.
   * The customer will be presented with this value within the Vision app during the inspection.
   * @example 'Front of car'
   * @maxLength 1500
   */
  name: string

  /** The id of the list that is item is associated with.
   * @example 1256
   */
  list_id: number

  /** The id of the member that created this list item.
   * @example 634
   */
  created_by_member_user_id: number

  /** Whether or not this item has been soft-deleted
   * @example 0
   */
  is_deleted: number

  /** Whether the photo/video/question is required to finish the inspection.
   * @example 0
   */
  is_required: number

  /** The id of the group that this list item is associated with.
   * @example 1256
   */
  group_id?: string

  /** The numerical order of the list item within the list. Starts at `1`.
   * @example 1
   */
  order?: number

  /** Whether or not to accept existing images for this list item.
   * @example false
   */
  accept_existing_images?: boolean

  /** The type of the list item.
   * @example IMAGE
   */
  type: ListItemType

  /** Limit the number of images taken for this list item. Must be positive number
   * @example 11
   * @min 1
   */
  capture_max?: number

  /** An array mapping answers to conditions */
  conditions?: {
    /** The id of the condition
     * @example cond1012548012232609651182624
     */
    id: string

    question: {
      /** The answer that triggers the associated condition
       * @example cond1012548012232609651182624
       */
      answer: string
    }
  }[]

  /** The condition id used to create conditional list items
   * @example cond11032590000000224007387421331069821
   * @maxLength 255
   */
  condition_id?: string

  /** Indicates that the contents of the photo should be analyzed to determine if it contains the correct information. */
  content_analysis?: {
    /** The type of analysis to perform on the photo
     * @example ODOMETER
     */
    type: 'VIN' | 'ODOMETER'

    /** If type is `VIN` will be a string with the expected VIN number for content analysis.
     * If type is `ODOMETER`, will be an object showing the range of valid odometer readings for content analysis.
     */
    expected?:
      | string
      | {
          /** The minimum acceptable odometer reading
           * @example 30000
           */
          min: number

          /** The maximum acceptable odometer reading
           * @example 50000
           */
          max: number
        }

    /** Indicates whether or not an `expected` criteria needs to be entered before sending an inspection */
    expected_required?: boolean
  }

  /** Indicates whether or not an `expected` criteria needs to be entered at the
   * time the inspection is sent.
   * @example true
   */
  expected_required?: boolean

  /** An object containing information about the expected items in a Truepic. */
  object_detection?: ObjectDetectionConfig
}
