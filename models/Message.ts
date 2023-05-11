/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Message = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: Message.record_type;
    id?: string;
};

export namespace Message {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        WHATSAPP_MESSAGE_ID = 'whatsapp_message_id',
    }


}

