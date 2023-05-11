/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Date/time by component
 */
export type DateTimeComponent = {
    /**
     * Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.
     */
    day_of_week?: DateTimeComponent.day_of_week;
    /**
     * The day of month
     */
    day_of_month?: number;
    /**
     * The year
     */
    year?: number;
    /**
     * The month
     */
    month?: number;
    /**
     * The hour
     */
    hour?: number;
    /**
     * The minute
     */
    minute?: number;
};

export namespace DateTimeComponent {

    /**
     * Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.
     */
    export enum day_of_week {
        MONDAY = 1,
        TUESDAY = 2,
        WEDNESDAY = 3,
        THURSDAY = 4,
        FRIDAY = 5,
        SATURDAY = 6,
        SUNDAY = 7,
    }


}

