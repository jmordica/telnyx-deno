/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMediaMultipartRequest = {
    /**
     * The file you want to upload. The maximum allowed size is 20 MB.
     */
    media?: Blob;
    /**
     * The number of seconds after which the media resource will be deleted, defaults to 2 days. The maximum allowed vale is 630720000, which translates to 20 years.
     */
    ttl_secs?: number;
};

