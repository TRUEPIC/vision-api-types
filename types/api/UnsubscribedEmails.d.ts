import { ResponseData, PaginationResult } from '../api/ResponseData'
import { UnsubscribedEmail } from '../schemas/UnsubscribedEmail'

/** Response Body for GET /emails/unsubscribed-email */
export type GetUnsubscribedEmailsResult = ResponseData &
  PaginationResult & {
    /** A paginated list of emails */
    result: UnsubscribedEmail[]
  }
