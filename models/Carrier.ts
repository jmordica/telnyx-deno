/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Carrier = {
    /**
     * Region code that matches the specific country calling code if the requested phone number type is mobile
     */
    mobile_country_code?: string;
    /**
     * National destination code (NDC), with a 0 prefix, if an NDC is found and the requested phone number type is mobile
     */
    mobile_network_code?: string;
    /**
     * SPID (Service Provider ID) name, if the requested phone number has been ported; otherwise, the name of carrier who owns the phone number block
     */
    name?: string;
    /**
     * A phone number type that identifies the type of service associated with the requested phone number
     */
    type?: Carrier.type;
    /**
     * Unused
     */
    error_code?: string;
};

export namespace Carrier {

    /**
     * A phone number type that identifies the type of service associated with the requested phone number
     */
    export enum type {
        FIXED_LINE = 'fixed line',
        MOBILE = 'mobile',
        VOIP = 'voip',
        FIXED_LINE_OR_MOBILE = 'fixed line or mobile',
        TOLL_FREE = 'toll free',
        PREMIUM_RATE = 'premium rate',
        SHARED_COST = 'shared cost',
        PERSONAL_NUMBER = 'personal number',
        PAGER = 'pager',
        UAN = 'uan',
        VOICEMAIL = 'voicemail',
        UNKNOWN = 'unknown',
    }


}

