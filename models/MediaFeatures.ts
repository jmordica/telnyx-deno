/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The media features settings for a phone number.
 */
export type MediaFeatures = {
    /**
     * When RTP Auto-Adjust is enabled, the destination RTP address port will be automatically changed to match the source of the incoming RTP packets.
     */
    rtp_auto_adjust_enabled?: boolean;
    /**
     * When enabled, Telnyx will accept RTP packets from any customer-side IP address and port, not just those to which Telnyx is sending RTP.
     */
    accept_any_rtp_packets_enabled?: boolean;
    /**
     * Controls whether Telnyx will accept a T.38 re-INVITE for this phone number. Note that Telnyx will not send a T.38 re-INVITE; this option only controls whether one will be accepted.
     */
    t38_fax_gateway_enabled?: boolean;
};

