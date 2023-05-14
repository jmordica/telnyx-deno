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

export class SimCardUsageDetailRecord {
    /**
    * Unique identifier for this SIM Card Usage
    */
    'id'?: string;
    /**
    * Event creation time
    */
    'createdAt'?: Date;
    /**
    * Event close time
    */
    'closedAt'?: Date;
    /**
    * Ip address that generated the event
    */
    'ipAddress'?: string;
    /**
    * Number of megabytes downloaded
    */
    'downlinkData'?: number;
    /**
    * International Mobile Subscriber Identity
    */
    'imsi'?: string;
    /**
    * Mobile country code
    */
    'mcc'?: string;
    /**
    * Mobile network code
    */
    'mnc'?: string;
    /**
    * Telnyx account currency used to describe monetary values, including billing cost
    */
    'currency'?: string;
    /**
    * Unit of wireless link consumption
    */
    'dataUnit'?: string;
    /**
    * Currency amount per billing unit used to calculate the Telnyx billing cost
    */
    'dataRate'?: string;
    /**
    * Sim group name for sim card
    */
    'simGroupName'?: string;
    /**
    * Unique identifier for SIM card
    */
    'simCardId'?: string;
    /**
    * Unique identifier for SIM group
    */
    'simGroupId'?: string;
    /**
    * User-provided tags
    */
    'simCardTags'?: string;
    /**
    * Telephone number associated to SIM card
    */
    'phoneNumber'?: string;
    /**
    * Number of megabytes uploaded
    */
    'uplinkData'?: number;
    /**
    * Data cost
    */
    'dataCost'?: number;
    'recordType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "closedAt",
            "baseName": "closed_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "downlinkData",
            "baseName": "downlink_data",
            "type": "number",
            "format": ""
        },
        {
            "name": "imsi",
            "baseName": "imsi",
            "type": "string",
            "format": ""
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string",
            "format": ""
        },
        {
            "name": "mnc",
            "baseName": "mnc",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataUnit",
            "baseName": "data_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataRate",
            "baseName": "data_rate",
            "type": "string",
            "format": "monetary_value"
        },
        {
            "name": "simGroupName",
            "baseName": "sim_group_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "simCardId",
            "baseName": "sim_card_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "simGroupId",
            "baseName": "sim_group_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "simCardTags",
            "baseName": "sim_card_tags",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "uplinkData",
            "baseName": "uplink_data",
            "type": "number",
            "format": ""
        },
        {
            "name": "dataCost",
            "baseName": "data_cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimCardUsageDetailRecord.attributeTypeMap;
    }

    public constructor() {
    }
}
