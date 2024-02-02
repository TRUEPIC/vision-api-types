/** A generic type for the fields applied to every table in the PSQL database. */
export interface PsqlTimestamps {
  /** The date/time the resource was created
   * @example '2020-05-01T21:44:40.000Z'
   * @format date-time
   */
  created_at: string
  /** The date/time the resource was last updated
   * @example '2020-05-01T21:44:40.000Z'
   * @format date-time
   */
  updated_at: string
}
