import { PsqlTimestamps } from '@/types/Psql'

/** A type of action that can occur an inspection. */
export interface InspectionStatus extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The code-parseable identifier of the status.
   * @example 'STATUS_READY_FOR_REVIEW'
   */
  id_internal?: string

  /** The human-readable name of the status.
   * @example 'Ready for Review'
   */
  name?: string
}
