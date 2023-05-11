/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UploadFileMessagingHostedNumberOrderRequest = {
    /**
     * Must be a signed LOA for the numbers in the order in PDF format.
     */
    loa?: Blob;
    /**
     * Must be the last month's bill with proof of ownership of all of the numbers in the order in PDF format.
     */
    bill?: Blob;
};

