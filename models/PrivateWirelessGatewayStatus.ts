/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The current status or failure details of the Private Wireless Gateway.
 */
export type PrivateWirelessGatewayStatus = {
    /**
     * The current status or failure details of the Private Wireless Gateway. <ul>
     * <li><code>provisioning</code> - the Private Wireless Gateway is being provisioned.</li>
     * <li><code>provisioned</code> - the Private Wireless Gateway was provisioned and able to receive connections.</li>
     * <li><code>failed</code> - the provisioning had failed for a reason and it requires an intervention.</li>
     * <li><code>decommissioning</code> - the Private Wireless Gateway is being removed from the network.</li>
     * </ul>
     * Transitioning between the provisioning and provisioned states may take some time.
     */
    readonly value?: PrivateWirelessGatewayStatus.value;
    /**
     * This attribute provides a human-readable explanation of why a failure happened.
     */
    readonly error_description?: string;
    /**
     * This attribute is an <a href="https://developers.telnyx.com/docs/api/v2/overview#errors">error code</a> related to the failure reason.
     */
    readonly error_code?: string;
};

export namespace PrivateWirelessGatewayStatus {

    /**
     * The current status or failure details of the Private Wireless Gateway. <ul>
     * <li><code>provisioning</code> - the Private Wireless Gateway is being provisioned.</li>
     * <li><code>provisioned</code> - the Private Wireless Gateway was provisioned and able to receive connections.</li>
     * <li><code>failed</code> - the provisioning had failed for a reason and it requires an intervention.</li>
     * <li><code>decommissioning</code> - the Private Wireless Gateway is being removed from the network.</li>
     * </ul>
     * Transitioning between the provisioning and provisioned states may take some time.
     */
    export enum value {
        PROVISIONING = 'provisioning',
        PROVISIONED = 'provisioned',
        FAILED = 'failed',
        DECOMMISSIONING = 'decommissioning',
    }


}

