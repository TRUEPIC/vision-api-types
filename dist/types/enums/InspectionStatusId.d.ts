/** The possible statuses for an inspection. */
export declare enum InspectionStatusId {
    /** The inspection has been created by a member. */
    STATUS_INSPECTION_CREATED = 1,
    /** The inspection is ready for review by a member. */
    STATUS_READY_FOR_REVIEW = 2,
    /** The inspection has been started by the app user. */
    STATUS_INSPECTION_STARTED = 3,
    /** The inspection is in-progress by the app user. */
    STATUS_INSPECTION_IN_PROGRESS = 4,
    /** The inspection has been closed. */
    STATUS_INSPECTION_CLOSED = 5,
    /** The inspection has been canceled. */
    STATUS_CANCELED = 6
}
