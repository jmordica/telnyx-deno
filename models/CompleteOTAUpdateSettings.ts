/**
 * Telnyx API
 * SIP trunking, SMS, MMS, Call Control and Telephony Data Services.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@telnyx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MobileOperatorNetworkPreferencesResponse } from '../models/MobileOperatorNetworkPreferencesResponse.ts';
import { HttpFile } from '../http/http.ts';

/**
* A JSON object representation of the operation. The information present here will relate directly to the source of the OTA request.
*/
export class CompleteOTAUpdateSettings {
    /**
    * A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.
    */
    'mobileOperatorNetworksPreferences'?: Array<MobileOperatorNetworkPreferencesResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mobileOperatorNetworksPreferences",
            "baseName": "mobile_operator_networks_preferences",
            "type": "Array<MobileOperatorNetworkPreferencesResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CompleteOTAUpdateSettings.attributeTypeMap;
    }

    public constructor() {
    }
}
