/** The possible verification results for an inspection. Acts as a collation of all photos/videos in an inspection */
export enum VerificationResult {
  /** All photos/videos have passed verification */
  pass = 'pass',
  /** At least 1 photo/video has failed verification */
  fail = 'fail',
  /** At least 1 photo/video has a warning */
  warn = 'warn',
}

/** The possible results of a single test on a Truepic (blurriness, geo, ris, etc.) */
export enum TestResult {
  /** Pass */
  Pass = 'P',
  /** Warn */
  Warn = 'W',
  /** Fail */
  Fail = 'F',
  /** Unknown */
  Unknown = 'U',
  /** Not Applicable */
  NotApplicable = 'N',
}

/** The possible reasons for Truepic test results */
export enum TruepicResultReason {
  /** The customer's device has an operating system that has been modified from its original form, which allows for the installation of unathorized software. It is possible that this image has been manipulated. */
  DEV_ROOTED = 'DEV_ROOTED',
  /** GPS signal accuracy was greater than 1500m and image location cannot be verified. */
  GPS_ACC_FAIL = 'GPS_ACC_FAIL',
  /** GPS signal accuracy was greater than 300m and this image location should be manually reviewed. */
  GPS_ACC_WARN = 'GPS_ACC_WARN',
  /** The subject matter of this image shows signs of a known landmark that does not match the image's geolocation. */
  LANDMARK_DIST_WARN = 'LANDMARK_DIST_WARN',
  /** The image was too blurry or distorted to be tested for picture of picture. It should be manually reviewed. */
  POP_BLURRY = 'POP_BLURRY',
  /** At this time, Image Analysis tests cannot be reliably run on the device used to capture this image (Samsung Galaxy S6). Truepic is actively working to address the issue. In the meantime, please manually review to make a final determination. */
  POP_GALAXY = 'POP_GALAXY',
  /** The image contained too little information to test for picture of picture. It should be manually reviewed. */
  POP_NO_INFO = 'POP_NO_INFO',
  /** This image's orientation suggests it may be a re-captured photo from printed material. Please manually review to make a final determination. */
  POP_ORIENTATION = 'POP_ORIENTATION',
  /** This image appears to be a re-captured photo of a screen or a printout. */
  POP_SCREEN_DOOR = 'POP_SCREEN_DOOR',
  /** This image shows signs of a photo re-captured from a screen. Please manually review to make a final determination. */
  POP_SCREEN_DOOR_WARN = 'POP_SCREEN_DOOR_WARN',
  /** A reverse image search has returned these images with visual similarities as possible matches from the internet. */
  REPROCESS_REVERSE_IMAGE_FAIL = 'REPROCESS_REVERSE_IMAGE_FAIL',
  /** This image shows no signs of being a pre-existing image on the internet. */
  REPROCESS_REVERSE_IMAGE_PASS = 'REPROCESS_REVERSE_IMAGE_PASS',
  /** A reverse image search has returned these images with visual similarities as possible matches from the internet. */
  REVERSE_IMAGE_MATCH = 'REVERSE_IMAGE_MATCH',
  /** A reverse image search has returned the following images with visual similarities as possible matches from the internet. Please manually review to make a final determination. */
  REVERSE_IMAGE_WARN = 'REVERSE_IMAGE_WARN',
  /** The device's time and date did not match our server time and date when the image was uploaded, or the metadata for this image was not uploaded in a timely fashion and may have been tampered with. */
  TIME_FAIL = 'TIME_FAIL',
  /** The device's time and date were likely modified. Please review the image details for other inconsistencies. */
  TIME_CERT_FAIL = 'TIME_CERT_FAIL',
  /** Server time was not accessible at the point of capture. Please manually review the time and date. */
  TIME_WARN = 'TIME_WARN',
  /** Images captured offline do not have server time comparison. */
  TIME_OFFLINE = 'TIME_OFFLINE',
  /** There is missing capture data. */
  DATA_MISSING = 'DATA_MISSING',
  /** One or more details could not be verified when signing the file. The photo can still be used but is not tamper-proof. */
  DATA_INVALID = 'DATA_INVALID',
  /** A member or administrator has overridden the value of this test result. */
  USER_OVERRIDE = 'USER_OVERRIDE',
  /** Odometer reading not detected. */
  CA_ODOMETER_MISSING = 'CA_ODOMETER_MISSING',
  /** The odometer reading is out of range. */
  CA_ODOMETER_WRONG = 'CA_ODOMETER_WRONG',
  /** VIN not detected. */
  CA_VIN_MISSING = 'CA_VIN_MISSING',
  /** Some characters did not match the expected VIN. */
  CA_VIN_WRONG = 'CA_VIN_WRONG',
  /** We were not able to perform object detection on this image */
  OBJECT_DETECTION_FAILED = 'OBJECT_DETECTION_FAILED',
  /** Source7 was unable to recognize an appliance label in the given image. */
  APPLIANCE_DETECTION_FAILED = 'APPLIANCE_DETECTION_FAILED',
  /** The calculated risk level for the appliance was medium or high */
  APPLIANCE_DETECTION_RISK_SCORE = 'APPLIANCE_DETECTION_RISK_SCORE',
  /** Source7 returned multiple manufacturing years. */
  APPLIANCE_DETECTION_MULTIPLE_MANUFACTURE_YEARS = 'APPLIANCE_DETECTION_MULTIPLE_MANUFACTURE_YEARS',
}
/** The possible result statuses for a picture-of-paper test */
export enum PopResultStatus {
  LOW_RESOLUTION = 'LOW_RESOLUTION',
  DISTORTION = 'DISTORTION',
  WARNING = 'WARNING',
  SLOW_SHUTTERSPEED = 'SLOW_SHUTTERSPEED',
  FOCUS_ON_CLOSE_OBJECT = 'FOCUS_ON_CLOSE_OBJECT',
  BLURRY = 'BLURRY',
  EMPTY = '',
  ORIENTATION = 'ORIENTATION',
  UNKNOWN = 'UNKNOWN',
  GALAXY = 'GALAXY',
  LOW_ENTROPY = 'LOW_ENTROPY',
  RECAPTURE = 'RECAPTURE',
  PASS = 'PASS',
  SCREEN_DOOR_EFFECT = 'SCREEN_DOOR_EFFECT',
}

/** The possible results for a Safesearch of an image. See https://cloud.google.com/vision/docs/reference/rpc/google.cloud.vision.v1#google.cloud.vision.v1.SafeSearchAnnotation */
export enum SafesearchResult {
  /** Unknown likelihood */
  UNKNOWN = 'UNKNOWN',
  /** The most negative likelihood safesearch result */
  VERY_UNLIKELY = 'VERY_UNLIKELY',
  /** The second-most negative likelihood safesearch result */
  UNLIKELY = 'UNLIKELY',
  /** The non-positive non-negative likelihood safesearch result */
  POSSIBLE = 'POSSIBLE',
  /** The second most-positive likelihood safesearch result */
  LIKELY = 'LIKELY',
  /** The most-positive safesearch likelihood result */
  VERY_LIKELY = 'VERY_LIKELY',
}
