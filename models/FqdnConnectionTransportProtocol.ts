/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * One of UDP, TLS, or TCP. Applies only to connections with IP authentication or FQDN authentication.
 */
export enum FqdnConnectionTransportProtocol {
    UDP = 'UDP',
    TCP = 'TCP',
    TLS = 'TLS',
}
