/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardOrder = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The amount of SIM cards requested in the SIM card order.
     */
    quantity?: number;
    /**
     * An object representing the total cost of the order.
     */
    cost?: {
        /**
         * A string representing the cost amount.
         */
        amount?: string;
        /**
         * Filter by ISO 4217 currency string.
         */
        currency?: string;
    };
    /**
     * An object representing the address information from when the order was submitted.
     */
    readonly order_address?: {
        /**
         * Uniquely identifies the address for the order.
         */
        id?: string;
        /**
         * The first name of the shipping recipient.
         */
        first_name?: string;
        /**
         * The last name of the shipping recipient.
         */
        last_name?: string;
        /**
         * The name of the business where the address is located.
         */
        business_name?: string;
        /**
         * The name of the street where the address is located.
         */
        street_address?: string;
        /**
         * Supplemental field for address information.
         */
        extended_address?: string;
        /**
         * The name of the city where the address is located.
         */
        locality?: string;
        /**
         * State or province where the address is located.
         */
        administrative_area?: string;
        /**
         * The mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
         */
        country_code?: string;
        /**
         * Postal code for the address.
         */
        postal_code?: string;
    };
    /**
     * The URL used to get tracking information about the order.
     */
    tracking_url?: string;
    /**
     * The current status of the SIM Card order.<ul> <li><code>pending</code> - the order is waiting to be processed.</li> <li><code>processing</code> - the order is currently being processed.</li> <li><code>ready_to_ship</code> - the order is ready to be shipped to the specified <b>address</b>.</li> <li><code>shipped</code> - the order was shipped and is on its way to be delivered to the specified <b>address</b>.</li> <li><code>delivered</code> - the order was delivered to the specified <b>address</b>.</li> <li><code>canceled</code> - the order was canceled.</li> </ul>
     */
    status?: SIMCardOrder.status;
    /**
     * ISO 8601 formatted date-time indicating when the resource was last created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was last updated.
     */
    readonly updated_at?: string;
};

export namespace SIMCardOrder {

    /**
     * The current status of the SIM Card order.<ul> <li><code>pending</code> - the order is waiting to be processed.</li> <li><code>processing</code> - the order is currently being processed.</li> <li><code>ready_to_ship</code> - the order is ready to be shipped to the specified <b>address</b>.</li> <li><code>shipped</code> - the order was shipped and is on its way to be delivered to the specified <b>address</b>.</li> <li><code>delivered</code> - the order was delivered to the specified <b>address</b>.</li> <li><code>canceled</code> - the order was canceled.</li> </ul>
     */
    export enum status {
        PENDING = 'pending',
        PROCESSING = 'processing',
        READY_TO_SHIP = 'ready_to_ship',
        SHIPPED = 'shipped',
        DELIVERED = 'delivered',
        CANCELED = 'canceled',
    }


}

