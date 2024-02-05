import type { Team } from '@/types/schemas/Team'

/**
 * @internal
 */
export type TeamSimple = Pick<Team, 'id' | 'name'>
