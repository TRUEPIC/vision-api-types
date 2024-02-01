/** The generic format for Vision API responses */
export interface ResponseData {
  /** The HTTP status code of the response
   * @example 200
   * @asType integer
   */
  response_code: number
  /** The human readable-status of the response
   * @example 'Success'
   */
  message: string
  /** The current version number of the Vision API
   * @example '2.2.8'
   */
  api_version: string
}

export interface SuccessfulCreationResponseData extends ResponseData {
  /** The ID of the newly created resource
   * @example 5
   */
  id: number
}

/** General format for paginated API results */
export interface PaginationResult {
  /** The items returned. Could be an array of any type, depending on the request. */
  result: any[]
  /** The total number of results for the given query
   * @example 251
   */
  totalResults: number
  /** The total number of results for the given page
   * @example 25
   */
  total: number
  /** The total number of pages for the given query
   * @example 12
   */
  pageCount: number
}

/** General format for paginated queries to limit the number of results returned. */
export interface PaginationQuery {
  /** The page number to return.
   * @default 1
   * @example 1
   */
  number: number

  /** The number of results to return per page.
   * @default 20
   * @max 100
   * @example 25
   */
  size: number
}

/** General format for sorting results. The order of properties given is important, as sorting is applied in the order specified. */
export interface PaginationSorting {
  /** The key is the property name to sort by. 'asc' to sort ascending. 'desc' to sort descending. */
  [key: string]: 'asc' | 'desc'
}

/** General format for filtering results.  */
export interface PaginationFiltering {
  /** The key is the property name to filter by. */
  [key: string]: {
    /** Value must equal this */
    '='?: string
    /** Value must be at least one of these */
    in?: string[]
    /** Value must be this. */
    is?: string
    /** Value must not be this. */
    'is not'?: string
    /** Value must be less than or equal to this. */
    '<='?: string
    /** Value must be less than this. */
    '<'?: string
    /** Value must be greater or equal to than this. */
    '>='?: string
    /** Value must be greater than this. */
    '>'?: string
  }
}
