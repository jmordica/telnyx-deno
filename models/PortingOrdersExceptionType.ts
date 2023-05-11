/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrdersExceptionType = {
    /**
     * Identifier of an exception type
     */
    code?: PortingOrdersExceptionType.code;
    /**
     * Description of an exception type
     */
    description?: string;
};

export namespace PortingOrdersExceptionType {

    /**
     * Identifier of an exception type
     */
    export enum code {
        ACCOUNT_NUMBER_MISMATCH = 'ACCOUNT_NUMBER_MISMATCH',
        AUTH_PERSON_MISMATCH = 'AUTH_PERSON_MISMATCH',
        BTN_ATN_MISMATCH = 'BTN_ATN_MISMATCH',
        ENTITY_NAME_MISMATCH = 'ENTITY_NAME_MISMATCH',
        FOC_EXPIRED = 'FOC_EXPIRED',
        FOC_REJECTED = 'FOC_REJECTED',
        LOCATION_MISMATCH = 'LOCATION_MISMATCH',
        LSR_PENDING = 'LSR_PENDING',
        MAIN_BTN_PORTING = 'MAIN_BTN_PORTING',
        OSP_IRRESPONSIVE = 'OSP_IRRESPONSIVE',
        OTHER = 'OTHER',
        PASSCODE_PIN_INVALID = 'PASSCODE_PIN_INVALID',
        PHONE_NUMBER_HAS_SPECIAL_FEATURE = 'PHONE_NUMBER_HAS_SPECIAL_FEATURE',
        PHONE_NUMBER_MISMATCH = 'PHONE_NUMBER_MISMATCH',
        PHONE_NUMBER_NOT_PORTABLE = 'PHONE_NUMBER_NOT_PORTABLE',
        PORT_TYPE_INCORRECT = 'PORT_TYPE_INCORRECT',
        PORTING_ORDER_SPLIT_REQUIRED = 'PORTING_ORDER_SPLIT_REQUIRED',
        POSTAL_CODE_MISMATCH = 'POSTAL_CODE_MISMATCH',
        RATE_CENTER_NOT_PORTABLE = 'RATE_CENTER_NOT_PORTABLE',
        SV_CONFLICT = 'SV_CONFLICT',
        SV_UNKNOWN_FAILURE = 'SV_UNKNOWN_FAILURE',
    }


}

