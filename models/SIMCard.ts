/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SIMCardStatus } from './SIMCardStatus.ts';

export type SIMCard = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    readonly record_type?: string;
    status?: SIMCardStatus;
    /**
     * The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card's memory and are also engraved or printed on the SIM card body during a process called personalization.
     *
     */
    readonly iccid?: string;
    /**
     * SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/>
     * Mobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR).
     *
     */
    readonly imsi?: string;
    /**
     * Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>
     * MSISDN is defined by the E.164 numbering plan. It includes a country code and a National Destination Code which identifies the subscriber's operator.
     *
     */
    readonly msisdn?: string;
    /**
     * The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.
     */
    sim_card_group_id?: string;
    /**
     * Searchable tags associated with the SIM card
     */
    tags?: Array<string>;
    /**
     * The SIM card individual data limit configuration.
     */
    data_limit?: {
        amount?: string;
        unit?: SIMCard.unit;
    };
    /**
     * The SIM card consumption so far in the current billing cycle.
     */
    readonly current_billing_period_consumed_data?: {
        amount?: string;
        unit?: string;
    };
    /**
     * List of IMEIs authorized to use a given SIM card.
     */
    authorized_imeis?: Array<string>;
    /**
     * IMEI of the device where a given SIM card is currently being used.
     */
    readonly current_imei?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
    /**
     * The SIM's address in the currently connected network. This IPv4 address is usually obtained dynamically, so it may vary according to the location or new connections.
     *
     */
    readonly ipv4?: string;
    /**
     * The SIM's address in the currently connected network. This IPv6 address is usually obtained dynamically, so it may vary according to the location or new connections.
     *
     */
    readonly ipv6?: string;
    /**
     * Current physical location data of a given SIM card. Accuracy is given in meters.
     */
    readonly current_device_location?: {
        latitude?: string;
        longitude?: string;
        accuracy?: number;
        accuracy_unit?: string;
    };
    /**
     * Mobile Network Code of the current network to which the SIM card is connected. It's a two to three decimal digits that identify a network.<br/><br/>
     * This code is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.
     */
    readonly current_mnc?: string;
    /**
     * Mobile Country Code of the current network to which the SIM card is connected. It's a three decimal digit that identifies a country.<br/><br/>
     * This code is commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.
     */
    readonly current_mcc?: string;
    /**
     * Indicates whether the device is actively connected to a network and able to run data.
     */
    readonly live_data_session?: SIMCard.live_data_session;
};

export namespace SIMCard {

    export enum unit {
        MB = 'MB',
        GB = 'GB',
    }

    /**
     * Indicates whether the device is actively connected to a network and able to run data.
     */
    export enum live_data_session {
        CONNECTED = 'connected',
        DISCONNECTED = 'disconnected',
        UNKNOWN = 'unknown',
    }


}

