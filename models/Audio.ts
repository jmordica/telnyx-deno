/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The media object containing audio details.
 */
export type Audio = {
    /**
     * The media object ID returned when the media is successfully uploaded to the media endpoint.
     */
    id?: string;
    /**
     * The protocol and URL of the media to be sent. Use only with HTTP/HTTPS URLs. Either id or link must be provided, not both.
     */
    link?: string;
};

