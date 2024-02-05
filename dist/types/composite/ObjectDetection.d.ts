import {
  ObjectDetectionCategory,
  ObjectDetectionObject,
  ObjectDetectionWarningMethodology,
  ApplianceRiskLevel,
} from '@/types/enums/ObjectDetection'

export type ObjectDetectionConfig = {
  /** The category of item expected in this list item
   * @example 'jewelry'
   */
  category: ObjectDetectionCategory

  /** An array of objects (physical items) expected in this Truepic
   * @example ['bracelet', 'watch']
   */
  objects?: ObjectDetectionObject[]

  /** How the object detection result will be calculated, defaults to 'NONE' meaning the user will not be warned if none of the objects are detected.
   * Not applicable when `category` is `appliance`
   * @example: 'NONE'
   */
  warn_if?: ObjectDetectionWarningMethodology
}

export type ObjectDetectionResultDetails = {
  /** The category of object detection used for this test.
   * @example 'auto'
   */
  category: ObjectDetectionCategory

  /** An array of real-world objects that this test tried to detect.
   * Will be null if category is APPLIANCE
   * @example ["license_plate", "tire"]
   */
  objects?: ObjectDetectionObject[]

  /** How the object detection result was calculated, defaults to 'NONE' meaning the user will not be warned if none of the objects are detected
   * @example: 'NONE'
   */
  warn_if?: ObjectDetectionWarningMethodology

  /**
   * If category is REAL_ESTATE, JEWELRY, or AUTO, will be an object containing the found results for each object in the `objects` array
   * If category is APPLIANCE, will be an object containg the appliance details from Source7
   *  */
  results: ObjectDetectionAPIResponse | ApplianceDetectionAPIResponse
}

export type ObjectDetectionAPIResponse = {
  [key in ObjectDetectionObject]: ObjectDetectionSingleObjectResult
}
export type ObjectDetectionSingleObjectResult = {
  /** Whether or not the object was found
   * @example 1
   */
  found: 0 | 1

  /** The confidence, on a scale of 0 to 1, that the object was detected.
   * @example 0.967
   * @min 0
   * @max 1
   */
  confidence: number
}

/** The Appliance Recall data format used by Source7 */
export type ApplianceRecall = {
  exact_match: boolean
  recall_number: string
  hazard: string
  fix: string
  due_to: string
  recall_url: string
  date_started_being_sold: string
  date_stopped_being_sold: string
  date_recalled: string
}

/** The Appliance data format used by Source7 */
export type ApplianceDetectionAPIResponse = {
  appliance_uid: string
  created: string
  updated: string
  brand_id?: number
  brand_name?: string
  property_uid: string
  product_type_id: number
  product_type_name: string
  sub_product_type_id?: number
  sub_product_type_name?: string
  manufactured_year?: number
  manufactured_month?: number
  model_number?: string
  serial_number?: string
  recall_number?: string
  age?: number
  expected_life?: number
  identified_manufactured_dates: {
    years: number[]
    month?: number
  }
  product_type_data: any
  images: [
    {
      id: number
      created: string
      url: string
      is_label: boolean
      description: string
      vision_data: {
        brand_id?: number
        brand_name?: string
        product_type_id: number
        product_type_name: string
        model_number?: string
        serial_number?: string
        review_recommended?: boolean
      }
    },
  ]
  recall_data: ApplianceRecall[]
  remaining_life?: number
  recommendation: {
    action?: string
    message: string
  }
  subscribed: boolean
  appliance_failure_risk_score?: number
  appliance_failure_risk_score_if_recall_fixed?: number
  /** The risk level of the appliance for Vision, based on the appliance_failure_risk_score of range 0 to 7
   * Low is < 3.5
   * Medium is >= 3.5 and < 6
   * High is >= 6
   */
  riskLevel?: ApplianceRiskLevel
}
