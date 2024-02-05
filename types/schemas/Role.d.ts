import { PsqlTimestamps } from '../Psql'
import { VisionRole } from '../enums/VisionRole'

/** A authorization role in the Vision system */
export interface Role extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The code-parseable identifier of the role.
   * @example 'VISION_AGENT_ADMIN'
   */
  id_internal: VisionRole

  /** The human-readable name of the role.
   * @example 'Administrator'
   */
  name: string
}
