/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocServiceDocumentUploadURL = {
    /**
     * If the file is already hosted publicly, you can provide a URL and have the documents service fetch it for you.
     */
    url: string;
    /**
     * The filename of the document.
     */
    filename?: string;
    /**
     * Optional reference string for customer tracking.
     */
    customer_reference?: string;
};

