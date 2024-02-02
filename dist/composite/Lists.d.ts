import { List } from '@/types/schemas/List'
import { ListItem } from '@/types/schemas/ListItem'
import { InspectionType } from '@/types/schemas/InspectionType'
import { ListItemQuestion } from '@/types/schemas/ListItemQuestion'

export type ListItemGroups = Record<string, { name: string }>

export interface ListPayload extends List {
  items: ListItemPayload[]
}

export type CreateListPayload = Omit<
  List,
  'id' | 'created_at' | 'is_deleted' | 'updated_at'
>

/** A list with attached list items and or inspection types
 * @internal
 */
export interface PopulatedList extends List {
  items: ListItem[]
  inspection_types: InspectionType[]
}

export interface ListItemPayload extends ListItem {
  question?: ListItemQuestion
}

export type CreateListItemPayload = Omit<
  ListItemPayload,
  'id' | 'created_at' | 'is_deleted' | 'updated_at'
>

/** A list item with attached questions
 * @internal
 */
export interface PopulatedListItem extends ListItem {
  question: ListItemQuestion
}

export type CreateListItemQuestionPayload = Omit<
  ListItemQuestion,
  'id' | 'created_at' | 'updated_at'
>
