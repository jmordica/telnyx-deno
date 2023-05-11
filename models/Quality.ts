/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The quality of the fax. The `ultra` settings provides the highest quality available, but also present longer fax processing times. `ultra_light` is best suited for images, wihle `ultra_dark` is best suited for text.
 */
export enum Quality {
    NORMAL = 'normal',
    HIGH = 'high',
    VERY_HIGH = 'very_high',
    ULTRA_LIGHT = 'ultra_light',
    ULTRA_DARK = 'ultra_dark',
}
