import { PsqlTimestamps } from '@/types/Psql'

/** A long-running background job that can be tracked to monitor its progress, such as a PDF export. */
export interface Operation extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the team that this operation is for
   * @example 551
   */
  team_id: number

  /** The type of the operation
   * @example 'inspections.export_pdf'
   */
  type: string

  /** The current state of the operation
   * @example 'WAITING'
   */
  status: 'WAITING' | 'SUCCESS' | 'ERROR'

  /** The type of resource the operation is primarily working on.
   * @example 'Inspection'
   */
  resource_type: string

  /** The ID of the resource the operation is primarily working on.
   * @example 123
   */
  resource_id: number

  /** The timestamp that the operation finished at.
   * @example '2023-05-25 19:32:02.95'
   * @format date-time
   */
  completed_at?: string

  /** An object containing the result of the operation */
  result?:
    | {
        /** The URL of a PDF export
         * @example 'https://vision-exports-staging.s3.amazonaws.com/pdfs/inspection-941-16164379.pdf
         * @format url
         */
        url?: string

        /** The file size, in bytes, of an exported PDF
         * @example 2399092
         */
        size?: number
      }
    | {
        /** The returned error if a PDF export failed
         * @example 'Error: Failed to launch the browser process'
         */
        error?: string
      }
}
