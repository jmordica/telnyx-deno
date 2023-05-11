/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MobileOperatorNetwork = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The operator network name.
     */
    name?: string;
    /**
     * TADIG stands for Transferred Account Data Interchange Group. The TADIG code is a unique identifier for network operators in GSM mobile networks.
     */
    tadig?: string;
    /**
     * The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
     */
    country_code?: string;
    /**
     * MCC stands for Mobile Country Code. It's a three decimal digit that identifies a country.<br/><br/>
     * This code is commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.
     */
    mcc?: string;
    /**
     * MNC stands for Mobile Network Code. It's a two to three decimal digits that identify a network.<br/><br/>
     * This code is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.
     */
    mnc?: string;
};

