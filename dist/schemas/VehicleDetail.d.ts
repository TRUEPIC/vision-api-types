/** Additional details about a motor vehicle that appears in an inspection. */
export interface VehicleDetail {
  /** The id of the inspection that this vehicle appears in.
   * @example 1843
   */
  inspection_id: number

  /** The VIN number of the vehicle
   * @example 'MD3GAK120PT070Y13'
   */
  vin: string

  /** The total number of calls made to the VIN API service
   * @example 2
   */
  call_count: number

  /** The timestamp that the most recent VIN API service call was made
   * @example '2023-05-12 18:14:34.871'
   * @format date-time
   */
  most_recent_call: string

  /** The timestamps of all of the requests to the VIN API service
   * @example ["2022-09-28 20:21:07.96","2022-09-28 20:22:10.73","2022-09-29 11:30:50.298"]
   * @format date-time[]
   */
  request_dates: string[]

  /** Further vehicle details, format defined by vendor */
  details: object
}
