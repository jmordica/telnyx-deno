/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortoutDetails = {
    id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * Phone numbers associated with this portout
     */
    phone_numbers?: Array<string>;
    /**
     * Name of person authorizing the porting order
     */
    authorized_name?: string;
    /**
     * Carrier the number will be ported out to
     */
    carrier_name?: string;
    /**
     * The current carrier
     */
    current_carrier?: string;
    /**
     * Person name or company name requesting the port
     */
    end_user_name?: string;
    /**
     * City or municipality of billing address
     */
    city?: string;
    /**
     * State, province, or similar of billing address
     */
    state?: string;
    /**
     * Postal Code of billing address
     */
    zip?: string;
    /**
     * The Local Service Request
     */
    lsr?: Array<string>;
    /**
     * Port order number assigned by the carrier the number will be ported out to
     */
    pon?: string;
    /**
     * The reason why the order is being rejected by the user. If the order is authorized, this field can be left null
     */
    reason?: string;
    /**
     * First line of billing address (street address)
     */
    service_address?: string;
    /**
     * ISO 8601 formatted Date/Time of the FOC date
     */
    foc_date?: string;
    /**
     * ISO 8601 formatted Date/Time of the user requested FOC date
     */
    requested_foc_date?: string;
    /**
     * New service provider spid
     */
    spid?: string;
    /**
     * A key to reference this port out request when contacting Telnyx customer support
     */
    support_key?: string;
    /**
     * Status of portout request
     */
    status?: PortoutDetails.status;
    /**
     * Is true when the number is already ported
     */
    already_ported?: boolean;
    /**
     * Identifies the user (or organization) who requested the port out
     */
    user_id?: string;
    /**
     * Telnyx partner providing network coverage
     */
    vendor?: string;
    /**
     * ISO 8601 formatted date of when the portout was created
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date of when the portout was created
     */
    inserted_at?: string;
    /**
     * ISO 8601 formatted date of when the portout was last updated
     */
    updated_at?: string;
};

export namespace PortoutDetails {

    /**
     * Status of portout request
     */
    export enum status {
        PENDING = 'pending',
        AUTHORIZED = 'authorized',
        PORTED = 'ported',
        REJECTED = 'rejected',
        REJECTED_PENDING = 'rejected-pending',
        CANCELED = 'canceled',
    }


}

