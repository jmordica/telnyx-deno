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

export class Portability {
    /**
    * Local Routing Number, if assigned to the requested phone number
    */
    'lrn'?: string;
    /**
    * Indicates whether or not the requested phone number has been ported
    */
    'portedStatus'?: PortabilityPortedStatusEnum;
    /**
    * ISO-formatted date when the requested phone number has been ported
    */
    'portedDate'?: string;
    /**
    * Operating Company Name (OCN) as per the Local Exchange Routing Guide (LERG) database
    */
    'ocn'?: string;
    /**
    * Type of number
    */
    'lineType'?: string;
    /**
    * SPID (Service Provider ID)
    */
    'spid'?: string;
    /**
    * Service provider name
    */
    'spidCarrierName'?: string;
    /**
    * Service provider type
    */
    'spidCarrierType'?: string;
    /**
    * Alternative SPID (Service Provider ID). Often used when a carrier is using a number from another carrier
    */
    'altspid'?: string;
    /**
    * Alternative service provider name
    */
    'altspidCarrierName'?: string;
    /**
    * Alternative service provider type
    */
    'altspidCarrierType'?: string;
    /**
    * City name extracted from the locality in the Local Exchange Routing Guide (LERG) database
    */
    'city'?: string;
    'state'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lrn",
            "baseName": "lrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "portedStatus",
            "baseName": "ported_status",
            "type": "PortabilityPortedStatusEnum",
            "format": ""
        },
        {
            "name": "portedDate",
            "baseName": "ported_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "ocn",
            "baseName": "ocn",
            "type": "string",
            "format": ""
        },
        {
            "name": "lineType",
            "baseName": "line_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "spid",
            "baseName": "spid",
            "type": "string",
            "format": ""
        },
        {
            "name": "spidCarrierName",
            "baseName": "spid_carrier_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "spidCarrierType",
            "baseName": "spid_carrier_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "altspid",
            "baseName": "altspid",
            "type": "string",
            "format": ""
        },
        {
            "name": "altspidCarrierName",
            "baseName": "altspid_carrier_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "altspidCarrierType",
            "baseName": "altspid_carrier_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Portability.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PortabilityPortedStatusEnum = "Y" | "N" | "" ;
