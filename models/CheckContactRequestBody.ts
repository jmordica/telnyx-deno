/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckContactRequestBody = {
    /**
     * The sender's WhatsApp ID.
     */
    whatsapp_user_id: string;
    /**
     * Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).
     */
    blocking?: CheckContactRequestBody.blocking;
    /**
     * Array of contact phone numbers. The numbers can be in any standard telephone number format.
     */
    contacts: Array<string>;
};

export namespace CheckContactRequestBody {

    /**
     * Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).
     */
    export enum blocking {
        NO_WAIT = 'no_wait',
        WAIT = 'wait',
    }


}

