/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardDeviceDetails = {
    readonly record_type?: string;
    /**
     * IMEI of the device where the SIM card is being used in.
     */
    readonly imei?: string;
    /**
     * Brand of the device where the SIM card is being used in.
     */
    readonly model_name?: string;
    /**
     * Brand of the device where the SIM card is being used in.
     */
    readonly brand_name?: string;
    /**
     * Type of the device where the SIM card is being used in.
     */
    readonly device_type?: string;
    /**
     * Operating system of the device where the SIM card is being used in.
     */
    readonly operating_system?: string;
};

