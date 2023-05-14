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

import { HttpFile } from '../http/http.ts';

export class SIMCardDeviceDetails {
    'recordType'?: string;
    /**
    * IMEI of the device where the SIM card is being used in.
    */
    'imei'?: string;
    /**
    * Brand of the device where the SIM card is being used in.
    */
    'modelName'?: string;
    /**
    * Brand of the device where the SIM card is being used in.
    */
    'brandName'?: string;
    /**
    * Type of the device where the SIM card is being used in.
    */
    'deviceType'?: string;
    /**
    * Operating system of the device where the SIM card is being used in.
    */
    'operatingSystem'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "imei",
            "baseName": "imei",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "modelName",
            "baseName": "model_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "brandName",
            "baseName": "brand_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "deviceType",
            "baseName": "device_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatingSystem",
            "baseName": "operating_system",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SIMCardDeviceDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
