/** The possible statuses for an inspection. */
export var ObjectDetectionCategory;
(function (ObjectDetectionCategory) {
    ObjectDetectionCategory["JEWELRY"] = "jewelry";
    ObjectDetectionCategory["AUTO"] = "auto";
    ObjectDetectionCategory["REAL_ESTATE"] = "real_estate";
    ObjectDetectionCategory["APPLIANCE"] = "appliance";
})(ObjectDetectionCategory || (ObjectDetectionCategory = {}));
export var ObjectDetectionAutomotiveObject;
(function (ObjectDetectionAutomotiveObject) {
    ObjectDetectionAutomotiveObject["TIRE"] = "tire";
    ObjectDetectionAutomotiveObject["VIN_PLATE"] = "vin_plate";
    ObjectDetectionAutomotiveObject["DASHBOARD"] = "dashboard";
    ObjectDetectionAutomotiveObject["LICENSE_PLATE"] = "license_plate";
    ObjectDetectionAutomotiveObject["ODOMETER"] = "odometer";
    ObjectDetectionAutomotiveObject["DOCUMENT"] = "document";
})(ObjectDetectionAutomotiveObject || (ObjectDetectionAutomotiveObject = {}));
export var ObjectDetectionJewelryObject;
(function (ObjectDetectionJewelryObject) {
    ObjectDetectionJewelryObject["NECKLACE"] = "necklace";
    ObjectDetectionJewelryObject["RING"] = "ring";
    ObjectDetectionJewelryObject["WATCH"] = "watch";
    ObjectDetectionJewelryObject["EARINGS"] = "earrings";
    ObjectDetectionJewelryObject["BRACELET"] = "bracelet";
})(ObjectDetectionJewelryObject || (ObjectDetectionJewelryObject = {}));
export var ObjectDetectionRealEstateObject;
(function (ObjectDetectionRealEstateObject) {
    ObjectDetectionRealEstateObject["RISKS"] = "risks";
    ObjectDetectionRealEstateObject["POOL"] = "pool";
    ObjectDetectionRealEstateObject["POOL_CAGE"] = "pool_cage";
    ObjectDetectionRealEstateObject["SWING_SET"] = "swing_set";
    ObjectDetectionRealEstateObject["TRAMPOLINE"] = "trampoline";
    ObjectDetectionRealEstateObject["FENCE"] = "fence";
    ObjectDetectionRealEstateObject["DOG"] = "dog";
    ObjectDetectionRealEstateObject["FIREPLACE"] = "fireplace";
    ObjectDetectionRealEstateObject["WOOD_STOVE"] = "wood_stove";
    ObjectDetectionRealEstateObject["BBQ"] = "bbq";
})(ObjectDetectionRealEstateObject || (ObjectDetectionRealEstateObject = {}));
export var ObjectDetectionApplianceObject;
(function (ObjectDetectionApplianceObject) {
    ObjectDetectionApplianceObject["AIR_CONDITIONER"] = "air_conditioner";
    ObjectDetectionApplianceObject["HEAT_PUMP"] = "heat_pump";
    ObjectDetectionApplianceObject["BOILER"] = "boiler";
    ObjectDetectionApplianceObject["CLOTHES_DRYER"] = "clothes_dryer";
    ObjectDetectionApplianceObject["COOKTOP"] = "cooktop";
    ObjectDetectionApplianceObject["DISHWASHER"] = "dishwasher";
    ObjectDetectionApplianceObject["FURNACE"] = "furnace";
    ObjectDetectionApplianceObject["MICROWAVE"] = "microwave";
    ObjectDetectionApplianceObject["RANGE"] = "range";
    ObjectDetectionApplianceObject["REFRIGERATOR"] = "refrigerator";
    ObjectDetectionApplianceObject["WASHING_MACHINE"] = "washing_machine";
    ObjectDetectionApplianceObject["WATER_HEATER_ELECTRIC"] = "water_heater_electric";
    ObjectDetectionApplianceObject["WATER_HEATER_GAS"] = "water_heater_gas";
})(ObjectDetectionApplianceObject || (ObjectDetectionApplianceObject = {}));
/** The product_type_id for each object supported by Source7 label recognition.
 * Note that some types of appliances require a sub_product_type_id
 */
export var ApplianceSource7ProductTypeID;
(function (ApplianceSource7ProductTypeID) {
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["air_conditioner"] = 1] = "air_conditioner";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["heat_pump"] = 1] = "heat_pump";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["boiler"] = 2] = "boiler";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["clothes_dryer"] = 3] = "clothes_dryer";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["cooktop"] = 4] = "cooktop";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["dishwasher"] = 5] = "dishwasher";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["furnace"] = 7] = "furnace";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["microwave"] = 9] = "microwave";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["range"] = 11] = "range";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["refrigerator"] = 10] = "refrigerator";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["washing_machine"] = 12] = "washing_machine";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["water_heater_electric"] = 14] = "water_heater_electric";
    ApplianceSource7ProductTypeID[ApplianceSource7ProductTypeID["water_heater_gas"] = 14] = "water_heater_gas";
})(ApplianceSource7ProductTypeID || (ApplianceSource7ProductTypeID = {}));
/** The possible risk level for an appliance */
export var ApplianceRiskLevel;
(function (ApplianceRiskLevel) {
    ApplianceRiskLevel["LOW"] = "low";
    ApplianceRiskLevel["MEDIUM"] = "medium";
    ApplianceRiskLevel["HIGH"] = "HIGH";
})(ApplianceRiskLevel || (ApplianceRiskLevel = {}));
/** The sub_product_type_id for each object supported by Source7 label recognition.
 * Note that not all objects will have a sub_product_type_id
 */
export var ApplianceSource7SubProductTypeID;
(function (ApplianceSource7SubProductTypeID) {
    ApplianceSource7SubProductTypeID[ApplianceSource7SubProductTypeID["air_conditioner"] = 6] = "air_conditioner";
    ApplianceSource7SubProductTypeID[ApplianceSource7SubProductTypeID["heat_pump"] = 7] = "heat_pump";
    ApplianceSource7SubProductTypeID[ApplianceSource7SubProductTypeID["water_heater_electric"] = 1] = "water_heater_electric";
    ApplianceSource7SubProductTypeID[ApplianceSource7SubProductTypeID["water_heater_gas"] = 2] = "water_heater_gas";
})(ApplianceSource7SubProductTypeID || (ApplianceSource7SubProductTypeID = {}));
/** The possible statuses for an inspection. */
export var ObjectDetectionWarningMethodology;
(function (ObjectDetectionWarningMethodology) {
    /** Warn the user if none of the selected objects are detected */
    ObjectDetectionWarningMethodology["NONE"] = "NONE";
    /** Warn the user if any of the selected objects are not detected */
    ObjectDetectionWarningMethodology["ANY"] = "ANY";
})(ObjectDetectionWarningMethodology || (ObjectDetectionWarningMethodology = {}));
export const ObjectDetectionObjectsByCategory = {
    [ObjectDetectionCategory.AUTO]: ObjectDetectionAutomotiveObject,
    [ObjectDetectionCategory.JEWELRY]: ObjectDetectionJewelryObject,
    [ObjectDetectionCategory.REAL_ESTATE]: ObjectDetectionRealEstateObject,
    [ObjectDetectionCategory.APPLIANCE]: ObjectDetectionApplianceObject,
};
export const ObjectDetectionRealEstateRisks = [
    ObjectDetectionRealEstateObject.POOL,
    ObjectDetectionRealEstateObject.SWING_SET,
    ObjectDetectionRealEstateObject.TRAMPOLINE,
    ObjectDetectionRealEstateObject.DOG,
    ObjectDetectionRealEstateObject.WOOD_STOVE,
    ObjectDetectionRealEstateObject.FIREPLACE,
    ObjectDetectionRealEstateObject.BBQ,
];
