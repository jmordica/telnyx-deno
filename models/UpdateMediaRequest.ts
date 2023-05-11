/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMediaRequest = {
    /**
     * The URL where the media to be stored in Telnyx network is currently hosted. The maximum allowed size is 20 MB.
     */
    media_url?: string;
    /**
     * The number of seconds after which the media resource will be deleted, defaults to 2 days. The maximum allowed vale is 630720000, which translates to 20 years.
     */
    ttl_secs?: number;
};

