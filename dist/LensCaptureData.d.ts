import { PsqlTimestamps } from '@/types/Psql'
export interface LensCaptureData
  extends PsqlTimestamps,
    TruepicVerificationStatus {
  /** The id of the Lens capture object
   * @example '26432349-953c-23f1-1fg9-ed3a23dfqw8674'
   */
  id: string

  /** The URL of the original capture file. A token/signature is included in the query string that grants access for 10 hours. For a fresh token/signature with a new 10 hour expiration, simply re-fetch the capture.
   * @example 'https://s3.us-east-1.amazonaws.com/lens-captures/26432349-953c-23f1-1fg9-ed3a23dfqw8674.jpg'
   * @format url
   */
  url: string

  /** The type of the Truepic
   * @example 'PHOTO'
   */
  type: 'PHOTO' | 'VIDEO'

  /** The URL of the capture file optimized for the web: 1000x1000px max, keeping aspect ratio intact. For video, this is a photo of the first frame. A token/signature is included in the query string that grants access for 10 hours. For a fresh token/signature with a new 10 hour expiration, simply re-fetch the capture.
   * @example 'https://s3.us-east-1.amazonaws.com/lens-captures/26432349-953c-23f1-1fg9-ed3a23dfqw8674_w.jpg'
   * @format url
   */
  web_url: string

  /** The extracted metadata (EXIF, XMP, etc.). Only included if the metadata service is enabled.
{{group:tag}} mixed Each key is the metadata tag prepended with the group type, such as XMP:Make.
   */
  metadata?: object

  /** The location data of where the Truepic was captured */
  location?: TruepicLocationData

  /** The SHA-256, Base64-encoded hash of the file.
   * @example 'JawedgwernGbtn377d+zcXVTAWERGwerG66iyhwGMyUbojliXQ='
   */
  file_hash: string

  /** The file size, in bytes, of the associated Truepic
   * @example 4126713
   */
  file_size: number

  recapture: RecaptureTestResult

  custom_data: CaptureIntegrityCustomData

  /** The date/time when the last photo/video was processed. ISO 8601 format.
   * @example '2020-05-01T21:44:40.000Z'
   * @format date-time
   */
  processed_at: string

  /** The extracted and verified details about the capture that are cryptographically signed into the file to prevent tampering. Contains multiple nested objects. */
  verification?: TruepicVerificationData

  /** The text detected in the photo. */
  text_detection?: TextDetectionData[]

  /** The labels detected in the photo. */
  label_detection?: LabelDetectionData[]

  /** The objects detected in the photo. */
  object_detection?: ObjectDetectionData[]

  /** The objects detected in the photo. */
  reverse_image_search?: ReverseImageSearchData

  /** The IP address (version 4 or 6) that uploaded the capture.
   * @example '123.532.124.174'
   * @format ipv4, ipv6
   */
  uploaded_by_ip_address: string
}

/** The reverse geocoded address of the verified GPS coordinates. */
export interface BaseTruepicLocationData {
  /** The city component of the address.
   * @example 'Dover'
   */
  city: string

  /** The state component of the address.
   * @example 'DE'
   */
  state: string

  /** The street component of the address.
   * @example '206 Pebble Valley Drive'
   */
  street: string

  /** The ISO 3166-1 two-letter country code component of the address.
   * @example 'US'
   */
  country: string

  /** The verified GPS latitude (in decimal degrees) where the capture was taken.
   * @example 35.2726478
   * @min -90
   * @max 90
   */
  latitude: number

  /** The verified GPS longitude (in decimal degrees) where the capture was taken.
   * @example 89.2764478
   * @min -180
   * @max 180
   */
  longitude: number

  /** The postal code component of the address.
   * @example '19904'
   */
  postal_code: string

  /** The full address formatted appropriately for the locale.
   * @example '206 Pebble Valley Drive, Dover, DE 19904'
   */
  formatted_address: string
}

/** The reverse geocoded address of the verified GPS coordinates. */
export interface TruepicLocationData {
  /** The results of calculating the distance between the verified GPS coordinates and another location, if enabled in the location service options. */
  comparison: {
    /** The original value specified in the location service options.
     * @example '206 Pebble Valley Drive, Dover DE 19905'
     */
    address: string

    /** The distance in meters between the verified GPS coordinates and the geocoded address. This does not take into account the accuracy of the GPS reading. null is returned if the address could not be geocoded to coordinates.
     * @example 1000
     */
    distance: number

    /** The distance in meters adjusted higher to account for the accuracy of the GPS reading.
     * @example 50
     */
    distance_max_accuracy: number

    /** The distance in meters adjusted lower to account for the accuracy of the GPS reading. The floor is 0 and does not go negative.
     * @example 10
     * @min 0
     */
    distance_min_accuracy: number

    /** The original value specified in the location service options.
     * @example 20
     */
    distance_threshold: number

    /** Whether the distance_max_accuracy is greater than the distance_threshold. Only included if distance_threshold is set.
     * @example false
     */
    distance_threshold_exceeded: boolean

    /** The same top-level location attributes such as city, state, etc., but for the comparison address. */
    location: BaseTruepicLocationData
  }
}

/** Whether the photo was detected as a recapture. Only included if the recapture service is enabled */
export interface RecaptureTestResult {
  /** The result of a recapture test
   * @example 'PASS'
   */
  status:
    | 'PASS'
    | 'BLURRY'
    | 'LOW ENTROPY'
    | 'CAPTURE'
    | 'PAPER_CAPTURE'
    | 'LOW_RESOLUTION'
    | 'SLOW_SHUTTERSPEED'

  /** A measure of the sharpness/blurriness of the photo using the variance of a Laplacian kernel. Typically in the range of 0 to 3,000, but there is no hard upper limit. A score <= 40 is considered blurry and sets the status to BLURRY.
   * @example 104
   */
  blur_score: number

  /** A measure of the entropy of the photo. A “flat” photo with no features (like a wall or ceiling without texture) has low entropy, while a photo with many features has high entropy. Typically in the range of 0 to 1.5, but there is no hard upper limit. A score < 0.02 is considered low entropy and sets the status to LOW_ENTROPY.
   * @example 0.81
   */
  entropy_score: number

  /** A measure of the probability that the photo is a recapture. The range is 0 to 1. A score > 0.5 is considered a recapture and sets the status to RECAPTURE. If the score is borderline, but a screen was detected in the photo, then the status is set to WARNING.
   * @example 0
   */
  recapture_score: number
}

/** Custom data associated with the capture, such as an identifier to connect the capture to after processing. Any JSON-encodable values are allowed. */
export interface CaptureIntegrityCustomData {
  /** The timezone the capture device was in when the Truepic was captured.
   * @example 'America/New_York'
   */
  tz: string

  /** Additional params for the custom data */
  params: {
    /** The system the capture device was running on when the Truepic was captured.
     * @example 'Android 29'
     */
    device_api: string

    /** The manufacturer of the capture device.
     * @example 'samsung'
     */
    device_make: string

    /** The model of the capture device.
     * @example 'SM-G986U3'
     */
    device_model: string
  }

  /** The username used on the capture device.
   * @example 'AndroidVision'
   */
  username: string

  /** Whether or not the capture device is rooted.
   * @example false
   */
  is_rooted: boolean

  /** The inspection token used to authenticate the associated Truepic was an inspection in Vision.
   * @example 'eyJhbGciOiJIUzI1wqewf455cDI6IkpXVCJ9.eyJ1c2VyX2asdgwekxOSwiY3VzdG9tZXJfaWQiOjMxOCwiY3VzdG9tZXJfc2V0dXBfaWQiOjM4NCwiY3VzdG9tZXJfc2V0dXBzIjpbMzg0XSwiaWF0IjoxNjYxMTk3Mjk2LCJleHAiOjE2NjE1NDI3OTYsImlzcyI6ImxvY2FsIn0.Xfn1hnxp4GFR9eH1wADvfdSUT5kdp4-WR5997NHo2YB'
   */
  inspection_token: string

  /** The id of the list in Vision this Truepic is associated with.
   * @example '88301'
   */
  photo_list_id: string
}

export interface AssertionStatusData {
  /** The validation status of a Truepic assertion
   * @example 'VALID'
   */
  status: 'VALID' | 'INVALID'

  /** The status details if the `status` is `INVALID`
   * @example Could not validate because...
   */
  status_reason: string
}

/** The extracted and verified details about the capture that are cryptographically signed into the file to prevent tampering. Only included if the verification service is enabled. */
export interface TruepicVerificationStatus {
  /** The status of a Truepic verification process
   * @example 'SUCCESS'
   */
  status: 'SUCCESS' | 'FAILURE'
}

/** The verification data of a Truepic */
export interface TruepicVerificationData extends TruepicVerificationStatus {
  /** The details about the software that produced the assertions. */
  producer: AssertionStatusData & {
    /** The name and version of the software that produced the assertions
     * @example 'Truepic Lens SDK libc2pa vv1.0.0.182'
     */
    name: string
  }

  /** The details about the signing of the assertions */
  signature: AssertionStatusData & {
    /** The name of the signer that signed the Truepic
     * @example 'Truepic'
     */
    name: string
  }

  /** The assertions that are cryptographically signed into the file to prevent tampering. */
  assertions: {
    /** The assertion details about the hash of the capture “contents” (pixels, etc.). */
    hash: AssertionStatusData

    /** The assertion details about the device */
    device: AssertionStatusData & {
      /** The manufacturer of the device that captured the Truepic.
       * @example 'Apple'
       */
      make: string
      /** The model of the device that captured the Truepic.
       * @example 'iPhone10,1'
       */
      model: string
    }

    /** The assertion details about the location */
    location: AssertionStatusData & {
      /** The accuracy of the location data
       * @example 10
       */
      accuracy: number | null

      /** The altitude where the Truepic was captured
       * @example 132.6
       */
      altitude: number

      /** The latitude of where this Truepic was captured.
       * @example 35.2726478
       * @min -90
       * @max 90
       */
      latitude: number

      /** The longitude of where this Truepic was captured.
       * @example 89.2764478
       * @min -180
       * @max 180
       */
      longitude: number

      /** The timestamp of when the Truepic was captured
       * @example '2020-05-01T21:44:40.000Z'
       * @format date-time
       */
      timestamp: string
    }

    /** Odometry information for the Truepic. Used for photos of odometers in vehicles. */
    odometry: AssertionStatusData & {
      /** The heading value of the odometer
       * @example 78
       */
      heading: number
    }

    /** The assertion details about the date/time of capture. */
    date_time: AssertionStatusData & {
      /** The timestamp of when the Truepic was captured
       * @example '2020-05-01T21:44:40.000Z'
       * @format date-time
       */
      timestamp: string
    }
    /** The assertion details about the thumbnail. */
    thumbnail: AssertionStatusData & {
      /** The url of the thumbnail
       * @example 'https://s3.us-east-1.amazonaws.com/lens-captures/b9asdgf9f-628b-42f9-879e-eb534adfgera742_t.jpg'
       * @format url
       */
      url: string
    }
  }

  /** Whether the capture was signed when the device had low or no connectivity and was unable to reach the TSA.
   * @example false
   */
  is_offline: boolean

  /** The details about the certificate and associated public/private key pair used to sign the assertions. */
  certificate: AssertionStatusData & {
    /** The common name of the certificate’s issuer.
     * @example 'IOSClaimSigningCA'
     */
    issuer_name: string

    /** The common name from the certificate’s subject DN.
     * @example 'Truepic Lens SDK v3.2.4.302 in TestVision v3.2.4.302'
     */
    name: string

    /** The organization name from the certificate’s subject DN.
     * @example 'Truepic'
     */
    org: string

    /** The organizational unit’s name from the certificate’s subject DN.
     * @example 'Truepic'
     */
    org_unit: string

    /** The date/time from which the certificate is valid
     * @example '2020-05-01T21:44:40.000Z'
     * @format date-time
     */
    valid_from: string

    /** The date/time until which the certificate is valid.
     * @example '2020-05-02T21:44:40.000Z'
     * @format date-time
     */
    valid_to: string
  }

  /** The details about when the capture was signed, according to a trusted timestamp authority (TSA). */
  trusted_timestamp: {
    /** The date/time of signing. null if the status is OFFLINE, as the capture was signed when the device had low or no connectivity and was unable to reach the TSA.
     * @example '2020-05-02T21:44:40.000Z'
     * @format date-time
     */
    timestamp: string

    /** The validation status of the timestamp.
     * @example 'VALID'
     */
    status: 'VALID' | 'INVALID' | 'OFFLINE' | 'WARNING'

    /** The status details if the status is OFFLINE, INVALID, or WARNING.
     * @example 'Could not validate because...'
     */
    status_reason: string
  }
}

/** The text detected in the photo. Only included if the text_detection service is enabled. */
export interface TextDetectionData {
  /** The string of text detected in the capture
   * @example 'McDonald's'
   */
  text: string

  /** The language code for the locale of the text, or an empty string if undetermined.
   * @example 'en'
   */
  locale: string

  /** The bounding polygon where the text is located in the photo. Each object is a vertex representing a 2D point that’s relative to the original photo. For example, an x/y value of 0.5 is a point at the exact center of the original photo. Returns two attributes, x and y, both numbers, which represent the horizontal and vertical coordinates, respectively, relative to the original photo. The range for both is 0 to 1. */
  bounding_polygon: {
    /** The x-coordinate of the bounding polyogn
     * @example 0.006944444444444444
     * @min 0
     * @max 1
     */
    x: number

    /** The y-coordinate of the bounding polyogn
     * @example 0.2244543650793651
     * @min 0
     * @max 1
     */
    y: number
  }
}

/** The labels detected in the photo. Only included if the label_detection service is enabled. */
export interface LabelDetectionData {
  /** The label detected in the photo
   * @example 'Television'
   */
  label: string

  /** A measure of confidence in the label actually being what the computer thinks it sees. The range is 0 to 1.
   * @example 0.877743124961853
   * @min 0
   * @max 1
   */
  score: number
}

/** The objects detected in the photo. Only included if the object_detection service is enabled. */
export interface ObjectDetectionData {
  /** The name of the object detected in the photo
   * @example 'Shoe'
   */
  name: string

  /** A measure of confidence in the object actually being what the computer thinks it sees. The range is 0 to 1.
   * @example 0.8615186214447021
   * @min 0
   * @max 1
   */
  score: number

  /** The bounding polygon where the object is located in the photo. Each object is a vertex representing a 2D point that’s relative to the original photo. For example, an x/y value of 0.5 is a point at the exact center of the original photo. Returns two attributes, x and y, both numbers, which represent the horizontal and vertical coordinates, respectively, relative to the original photo. The range for both is 0 to 1. */
  bounding_polygon: {
    /** The x-coordinate of the bounding polyogn
     * @example 0.006944444444444444
     * @min 0
     * @max 1
     */
    x: number

    /** The y-coordinate of the bounding polyogn
     * @example 0.2244543650793651
     * @min 0
     * @max 1
     */
    y: number
  }
}

/** Whether a matching photo was found on the internet. Only included if the reverse_image_search service is enabled. */
export interface ReverseImageSearchData {
  /** returns MATCH if a matching photo was found, otherwise NO_MATCH.
   * @example 'MATCH'
   */
  status: string

  /** If status is MATCH, returns URL of the matching photo, if NO_MATCH, returns null.
   * @example 'https://google.com/images/wfq32123d23f23.jpg'
   * @format url
   */
  url?: string
}
