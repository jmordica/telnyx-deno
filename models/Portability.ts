/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Portability = {
    /**
     * Local Routing Number, if assigned to the requested phone number
     */
    lrn?: string;
    /**
     * Indicates whether or not the requested phone number has been ported
     */
    ported_status?: Portability.ported_status;
    /**
     * ISO-formatted date when the requested phone number has been ported
     */
    ported_date?: string;
    /**
     * Operating Company Name (OCN) as per the Local Exchange Routing Guide (LERG) database
     */
    ocn?: string;
    /**
     * Type of number
     */
    line_type?: string;
    /**
     * SPID (Service Provider ID)
     */
    spid?: string;
    /**
     * Service provider name
     */
    spid_carrier_name?: string;
    /**
     * Service provider type
     */
    spid_carrier_type?: string;
    /**
     * Alternative SPID (Service Provider ID). Often used when a carrier is using a number from another carrier
     */
    altspid?: string;
    /**
     * Alternative service provider name
     */
    altspid_carrier_name?: string;
    /**
     * Alternative service provider type
     */
    altspid_carrier_type?: string;
    /**
     * City name extracted from the locality in the Local Exchange Routing Guide (LERG) database
     */
    city?: string;
    state?: string;
};

export namespace Portability {

    /**
     * Indicates whether or not the requested phone number has been ported
     */
    export enum ported_status {
        Y = 'Y',
        N = 'N',
        = '',
    }


}

