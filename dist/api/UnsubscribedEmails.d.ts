import { ResponseData, PaginationResult } from '@/types/api/ResponseData'
import { UnsubscribedEmail } from '@/types/schemas/UnsubscribedEmail'

/** Response Body for GET /emails/unsubscribed-email */
export type GetUnsubscribedEmailsResult = ResponseData &
  PaginationResult & {
    /** A paginated list of emails */
    result: UnsubscribedEmail[]
  }
