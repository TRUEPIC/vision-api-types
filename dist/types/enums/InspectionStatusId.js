/** The possible statuses for an inspection. */
export var InspectionStatusId;
(function (InspectionStatusId) {
    /** The inspection has been created by a member. */
    InspectionStatusId[InspectionStatusId["STATUS_INSPECTION_CREATED"] = 1] = "STATUS_INSPECTION_CREATED";
    /** The inspection is ready for review by a member. */
    InspectionStatusId[InspectionStatusId["STATUS_READY_FOR_REVIEW"] = 2] = "STATUS_READY_FOR_REVIEW";
    /** The inspection has been started by the app user. */
    InspectionStatusId[InspectionStatusId["STATUS_INSPECTION_STARTED"] = 3] = "STATUS_INSPECTION_STARTED";
    /** The inspection is in-progress by the app user. */
    InspectionStatusId[InspectionStatusId["STATUS_INSPECTION_IN_PROGRESS"] = 4] = "STATUS_INSPECTION_IN_PROGRESS";
    /** The inspection has been closed. */
    InspectionStatusId[InspectionStatusId["STATUS_INSPECTION_CLOSED"] = 5] = "STATUS_INSPECTION_CLOSED";
    /** The inspection has been canceled. */
    InspectionStatusId[InspectionStatusId["STATUS_CANCELED"] = 6] = "STATUS_CANCELED";
})(InspectionStatusId || (InspectionStatusId = {}));
