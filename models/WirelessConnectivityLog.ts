/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This object represents a wireless connectivity session log that happened through a SIM card. It aids in finding out potential problems when the SIM is not able to attach properly.
 */
export type WirelessConnectivityLog = {
    readonly record_type?: string;
    /**
     * Uniquely identifies the session.
     */
    readonly id?: number;
    /**
     * The identification UUID of the related SIM card resource.
     */
    sim_card_id?: string;
    /**
     * The type of the session, 'registration' being the initial authentication session and 'data' the actual data transfer sessions.
     */
    readonly log_type?: WirelessConnectivityLog.log_type;
    /**
     * SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/>
     * Mobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR).
     *
     */
    readonly imsi?: string;
    /**
     * The International Mobile Equipment Identity (or IMEI) is a number, usually unique, that identifies the device currently being used connect to the network.
     */
    readonly imei?: string;
    /**
     * It's a three decimal digit that identifies a country.<br/><br/>
     * This code is commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.
     */
    readonly mobile_country_code?: string;
    /**
     * It's a two to three decimal digits that identify a network.<br/><br/>
     * This code is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.
     */
    readonly mobile_network_code?: string;
    /**
     * ISO 8601 formatted date-time indicating when the session started.
     */
    readonly start_time?: string;
    /**
     * ISO 8601 formatted date-time indicating when the session ended.
     */
    readonly stop_time?: string;
    /**
     * ISO 8601 formatted date-time indicating when the record was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the last heartbeat to the device was successfully recorded.
     */
    readonly last_seen?: string;
    /**
     * The Access Point Name (APN) identifies the packet data network that a mobile data user wants to communicate with.
     */
    readonly apn?: string;
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
     * The radio technology the SIM card used during the session.
     */
    readonly radio_access_technology?: string;
    /**
     * The state of the SIM card after when the session happened.
     */
    readonly state?: string;
    /**
     * The cell ID to which the SIM connected.
     */
    readonly cell_id?: string;
};

export namespace WirelessConnectivityLog {

    /**
     * The type of the session, 'registration' being the initial authentication session and 'data' the actual data transfer sessions.
     */
    export enum log_type {
        REGISTRATION = 'registration',
        DATA = 'data',
    }


}

