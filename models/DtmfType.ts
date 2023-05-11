/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.
 */
export enum DtmfType {
    RFC_2833 = 'RFC 2833',
    INBAND = 'Inband',
    SIP_INFO = 'SIP INFO',
}
