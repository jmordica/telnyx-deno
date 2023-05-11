/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Enable use of SRTP or ZRTP for encryption. Valid values are those listed or null. Cannot be set to non-null if the transport_portocol is TLS.
 */
export enum EncryptedMedia {
    SRTP = 'SRTP',
    ZRTP = 'ZRTP',
}
