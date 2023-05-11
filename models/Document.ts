/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The media object containing a document reference
 */
export type Document = {
    /**
     * The media object ID returned when the media is successfully uploaded to the media endpoint.
     */
    id?: string;
    /**
     * The protocol and URL of the media to be sent. Use only with HTTP/HTTPS URLs. Either id or link must be provided, not both.
     */
    link?: string;
    /**
     * Describes the specified media.
     */
    caption?: string;
    /**
     * Describes the filename for the specific document.
     */
    filename?: string;
};

