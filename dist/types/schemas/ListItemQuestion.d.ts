import { PsqlTimestamps } from '@/types/Psql'

/** A question on a list item */
export interface ListItemQuestion extends PsqlTimestamps {
  /** The id of the resource.
   * @example 1843
   */
  id: number

  /** The id of the list item this question is for
   * @example 643
   */
  list_item_id: number

  /** The type of question this list item is. Must me `MULTIPLE_CHOICE` or `TEXT`
   * @example 'TEXT'
   */
  type: 'MULTIPLE_CHOICE' | 'TEXT'

  /** If type is `TEXT`, will be the app user's text string answer to the question.
   * If type is `MULTIPLE_CHOICE`, will be an array containing a list of selected answers.
   * Will be `null` if the question has not yet been answered.
   */
  answer?:
    | null
    | string
    | {
        /** A selected answer to the question.
         * @example 'Excellent'
         */
        name: string
        /** The user's custom text answer. Used for answer options where `allow_custom` is `true`
         * @example 'I don't own a car.'
         */
        custom?: string
      }[]

  /**
   * If type is `MULTIPLE_CHOICE`, will be an array containing a list of possible answers.
   * Will be `null` if the type is `TEXT`
   */
  options?: null | {
    /** The list of answers the app user has chosen for the question */
    choices: ListItemQuestionChoice[]
    /** Whether to allow the app user to select multiple answers.
     * @example true
     */
    allow_multiple: boolean
  }
}

export type ListItemQuestionChoice = {
  /** A possible answer to the question.
   * @example 'Excellent'
   */
  name: string
  /** Whether to allow custom text input for this possible answer option.
   * @example true
   */
  allow_custom: boolean
}
