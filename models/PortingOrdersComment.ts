/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrdersComment = {
    id?: string;
    /**
     * Body of comment
     */
    body?: string;
    porting_order_id?: string;
    /**
     * Indicates whether this comment was created by a Telnyx Admin, user, or system
     */
    user_type?: PortingOrdersComment.user_type;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
};

export namespace PortingOrdersComment {

    /**
     * Indicates whether this comment was created by a Telnyx Admin, user, or system
     */
    export enum user_type {
        ADMIN = 'admin',
        USER = 'user',
        SYSTEM = 'system',
    }


}

