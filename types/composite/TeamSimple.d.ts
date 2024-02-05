import type { Team } from '../schemas/Team'

/**
 * @internal
 */
export type TeamSimple = Pick<Team, 'id' | 'name'>
