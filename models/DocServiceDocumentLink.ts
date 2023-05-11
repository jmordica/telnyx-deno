/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocServiceRecord } from './DocServiceRecord.ts';

export type DocServiceDocumentLink = (DocServiceRecord & {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Identifies the associated document.
     */
    readonly document_id?: string;
    /**
     * The linked resource's record type.
     */
    readonly linked_record_type?: string;
    /**
     * Identifies the linked resource.
     */
    readonly linked_resource_id?: string;
});

