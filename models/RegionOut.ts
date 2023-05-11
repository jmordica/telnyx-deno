/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegionOut = {
    /**
     * The region interface is deployed to.
     */
    region_code?: string;
    region?: {
        /**
         * Region code of the interface.
         */
        code?: string;
        /**
         * Region name of the interface.
         */
        name?: string;
        /**
         * Identifies the type of the resource.
         */
        readonly record_type?: string;
    };
};

