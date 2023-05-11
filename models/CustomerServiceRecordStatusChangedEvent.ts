/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomerServiceRecordStatusChangedEvent = {
    /**
     * Uniquely identifies the callback event.
     */
    id?: string;
    /**
     * The type of the callback event.
     */
    event_type?: CustomerServiceRecordStatusChangedEvent.event_type;
    payload?: {
        /**
         * Uniquely identifies the customer service record.
         */
        id?: string;
        /**
         * The phone number of the customer service record.
         */
        phone_number?: string;
        /**
         * The status of the customer service record
         */
        status?: CustomerServiceRecordStatusChangedEvent.status;
        /**
         * ISO 8601 formatted date indicating the last time where the resource was updated.
         */
        updated_at?: string;
    };
    /**
     * ISO 8601 formatted date indicating when the callback event occurred.
     */
    occurred_at?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: CustomerServiceRecordStatusChangedEvent.record_type;
};

export namespace CustomerServiceRecordStatusChangedEvent {

    /**
     * The type of the callback event.
     */
    export enum event_type {
        CUSTOMER_SERVICE_RECORD_STATUS_CHANGED = 'customer_service_record.status_changed',
    }

    /**
     * The status of the customer service record
     */
    export enum status {
        PENDING = 'pending',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        EVENT = 'event',
    }


}

