import { PsqlTimestamps } from '@/types/Psql'

/** A type of action that can occur an inspection. */
export interface TimelineActionType extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The code-parseable identifier of the action.
   * @example 'ACTION_INSPECTION_CREATED'
   */
  id_internal?: string

  /** The human-readable name of the action.
   * @example 'Inspection created'
   */
  name?: string
}
