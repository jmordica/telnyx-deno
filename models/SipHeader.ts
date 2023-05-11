/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SipHeader = {
    /**
     * The name of the header to add.
     */
    name: SipHeader.name;
    /**
     * The value of the header.
     */
    value: string;
};

export namespace SipHeader {

    /**
     * The name of the header to add.
     */
    export enum name {
        USER_TO_USER = 'User-to-User',
    }


}

