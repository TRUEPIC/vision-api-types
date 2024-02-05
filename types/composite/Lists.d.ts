import { List } from '../schemas/List'
import { ListItem } from '../schemas/ListItem'
import { InspectionType } from '../schemas/InspectionType'
import { ListItemQuestion } from '../schemas/ListItemQuestion'

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
