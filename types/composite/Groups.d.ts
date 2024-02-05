import { Group } from '../schemas/Group'

export type SerializedGroup = Pick<Group, 'id' | 'name' | 'address'>
