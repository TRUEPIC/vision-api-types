import { Role } from '../schemas/Role'

/**
 * @internal
 */
export type SerializedRole = Pick<Role, 'id' | 'id_internal' | 'name'>
