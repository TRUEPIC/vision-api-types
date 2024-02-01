/** The possible statuses for an inspection. */
export enum ObjectDetectionCategory {
  JEWELRY = 'jewelry',
  AUTO = 'auto',
  REAL_ESTATE = 'real_estate',
  APPLIANCE = 'appliance',
}

export enum ObjectDetectionAutomotiveObject {
  TIRE = 'tire',
  VIN_PLATE = 'vin_plate',
  DASHBOARD = 'dashboard',
  LICENSE_PLATE = 'license_plate',
  ODOMETER = 'odometer',
  DOCUMENT = 'document',
}

export enum ObjectDetectionJewelryObject {
  NECKLACE = 'necklace',
  RING = 'ring',
  WATCH = 'watch',
  EARINGS = 'earrings',
  BRACELET = 'bracelet',
}

export enum ObjectDetectionRealEstateObject {
  RISKS = 'risks',
  POOL = 'pool',
  POOL_CAGE = 'pool_cage',
  SWING_SET = 'swing_set',
  TRAMPOLINE = 'trampoline',
  FENCE = 'fence',
  DOG = 'dog',
  FIREPLACE = 'fireplace',
  WOOD_STOVE = 'wood_stove',
  BBQ = 'bbq',
}
export enum ObjectDetectionApplianceObject {
  AIR_CONDITIONER = 'air_conditioner',
  HEAT_PUMP = 'heat_pump',
  BOILER = 'boiler',
  CLOTHES_DRYER = 'clothes_dryer',
  COOKTOP = 'cooktop',
  DISHWASHER = 'dishwasher',
  FURNACE = 'furnace',
  MICROWAVE = 'microwave',
  RANGE = 'range',
  REFRIGERATOR = 'refrigerator',
  WASHING_MACHINE = 'washing_machine',
  WATER_HEATER_ELECTRIC = 'water_heater_electric',
  WATER_HEATER_GAS = 'water_heater_gas',
}

/** The product_type_id for each object supported by Source7 label recognition.
 * Note that some types of appliances require a sub_product_type_id
 */
export enum ApplianceSource7ProductTypeID {
  'air_conditioner' = 1,
  'heat_pump' = 1,
  'boiler' = 2,
  'clothes_dryer' = 3,
  'cooktop' = 4,
  'dishwasher' = 5,
  'furnace' = 7,
  'microwave' = 9,
  'range' = 11,
  'refrigerator' = 10,
  'washing_machine' = 12,
  'water_heater_electric' = 14,
  'water_heater_gas' = 14,
}

/** The possible risk level for an appliance */
export enum ApplianceRiskLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'HIGH',
}

/** The sub_product_type_id for each object supported by Source7 label recognition.
 * Note that not all objects will have a sub_product_type_id
 */
export enum ApplianceSource7SubProductTypeID {
  air_conditioner = 6,
  heat_pump = 7,
  water_heater_electric = 1,
  water_heater_gas = 2,
}

/** The possible statuses for an inspection. */
export enum ObjectDetectionWarningMethodology {
  /** Warn the user if none of the selected objects are detected */
  NONE = 'NONE',
  /** Warn the user if any of the selected objects are not detected */
  ANY = 'ANY',
}

export type ObjectDetectionObject =
  | ObjectDetectionAutomotiveObject
  | ObjectDetectionJewelryObject
  | ObjectDetectionRealEstateObject
  | ObjectDetectionApplianceObject

export const ObjectDetectionObjectsByCategory = {
  [ObjectDetectionCategory.AUTO]: ObjectDetectionAutomotiveObject,
  [ObjectDetectionCategory.JEWELRY]: ObjectDetectionJewelryObject,
  [ObjectDetectionCategory.REAL_ESTATE]: ObjectDetectionRealEstateObject,
  [ObjectDetectionCategory.APPLIANCE]: ObjectDetectionApplianceObject,
}

export const ObjectDetectionRealEstateRisks = [
  ObjectDetectionRealEstateObject.POOL,
  ObjectDetectionRealEstateObject.SWING_SET,
  ObjectDetectionRealEstateObject.TRAMPOLINE,
  ObjectDetectionRealEstateObject.DOG,
  ObjectDetectionRealEstateObject.WOOD_STOVE,
  ObjectDetectionRealEstateObject.FIREPLACE,
  ObjectDetectionRealEstateObject.BBQ,
]
