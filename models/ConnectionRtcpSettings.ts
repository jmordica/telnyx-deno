/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConnectionRtcpSettings = {
    /**
     * RTCP port by default is rtp+1, it can also be set to rtcp-mux
     */
    port?: ConnectionRtcpSettings.port;
    /**
     * BETA - Enable the capture and storage of RTCP messages to create QoS reports on the Telnyx Mission Control Portal.
     */
    capture_enabled?: boolean;
    /**
     * RTCP reports are sent to customers based on the frequency set. Frequency is in seconds and it can be set to values from 5 to 3000 seconds.
     */
    report_frequency_secs?: number;
};

export namespace ConnectionRtcpSettings {

    /**
     * RTCP port by default is rtp+1, it can also be set to rtcp-mux
     */
    export enum port {
        RTCP_MUX = 'rtcp-mux',
        RTP_1 = 'rtp+1',
    }


}

