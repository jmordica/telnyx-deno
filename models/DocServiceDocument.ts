/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocServiceRecord } from './DocServiceRecord.ts';

export type DocServiceDocument = (DocServiceRecord & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The document's content_type.
     */
    readonly content_type?: string;
    /**
     * Indicates the document's filesize
     */
    readonly size?: {
        /**
         * Identifies the unit
         */
        readonly unit?: string;
        /**
         * The number of bytes
         */
        readonly amount?: number;
    };
    /**
     * Indicates the current document reviewing status
     */
    readonly status?: DocServiceDocument.status;
    /**
     * The document's SHA256 hash provided for optional verification purposes.
     */
    readonly sha256?: string;
    /**
     * The filename of the document.
     */
    filename?: string;
    /**
     * Optional reference string for customer tracking.
     */
    customer_reference?: string;
});

export namespace DocServiceDocument {

    /**
     * Indicates the current document reviewing status
     */
    export enum status {
        PENDING = 'pending',
        VERIFIED = 'verified',
        DENIED = 'denied',
    }


}

