/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrderDocument = {
    /**
     * Uniquely identifies the document in the porting order
     */
    id?: string;
    /**
     * The type of document
     */
    document_type?: PortingOrderDocument.document_type;
    /**
     * Uniquely identifies a document uploaded via the <code><a href="https://developers.telnyx.com/docs/api/v2/documents/Documents#createDocument">/v2/documents</a></code> endpoint.
     */
    document_id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * ISO 8601 formatted date/time when document was associated for the porting order.
     */
    created_at?: string;
};

export namespace PortingOrderDocument {

    /**
     * The type of document
     */
    export enum document_type {
        LOA = 'loa',
        INVOICE = 'invoice',
        OTHER = 'other',
    }


}

