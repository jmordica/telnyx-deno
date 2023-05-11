/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * `Latency` directs Telnyx to route media through the site with the lowest round-trip time to the user's connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.
 */
export enum AnchorsiteOverride {
    LATENCY = 'Latency',
    CHICAGO_IL = 'Chicago, IL',
    ASHBURN_VA = 'Ashburn, VA',
    SAN_JOSE_CA = 'San Jose, CA',
    SYDNEY_AUSTRALIA = 'Sydney, Australia',
    AMSTERDAM_NETHERLANDS = 'Amsterdam, Netherlands',
    LONDON_UK = 'London, UK',
    TORONTO_CANADA = 'Toronto, Canada',
    VANCOUVER_CANADA = 'Vancouver, Canada',
    FRANKFURT_GERMANY = 'Frankfurt, Germany',
}
