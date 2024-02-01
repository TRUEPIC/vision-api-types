import { Group } from '@/types/schemas/Group'

export type SerializedGroup = Pick<Group, 'id' | 'name' | 'address'>
