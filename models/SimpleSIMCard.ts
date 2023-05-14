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

import { SIMCardCurrentBillingPeriodConsumedData } from '../models/SIMCardCurrentBillingPeriodConsumedData.ts';
import { SIMCardStatus } from '../models/SIMCardStatus.ts';
import { SimpleSIMCardDataLimit } from '../models/SimpleSIMCardDataLimit.ts';
import { HttpFile } from '../http/http.ts';

export class SimpleSIMCard {
    /**
    * Identifies the resource.
    */
    'id'?: string;
    'recordType'?: string;
    'status'?: SIMCardStatus;
    /**
    * The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card\'s memory and are also engraved or printed on the SIM card body during a process called personalization. 
    */
    'iccid'?: string;
    /**
    * SIM cards are identified on their individual operator networks by a unique International Mobile Subscriber Identity (IMSI). <br/> Mobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR). 
    */
    'imsi'?: string;
    /**
    * Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/> MSISDN is defined by the E.164 numbering plan. It includes a country code and a National Destination Code which identifies the subscriber\'s operator. 
    */
    'msisdn'?: string;
    /**
    * The group SIMCardGroup identification. This attribute can be <code>null</code> when it\'s present in an associated resource.
    */
    'simCardGroupId'?: string;
    /**
    * Searchable tags associated with the SIM card
    */
    'tags'?: Array<string>;
    'dataLimit'?: SimpleSIMCardDataLimit;
    'currentBillingPeriodConsumedData'?: SIMCardCurrentBillingPeriodConsumedData;
    /**
    * ISO 8601 formatted date-time indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date-time indicating when the resource was updated.
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SIMCardStatus",
            "format": ""
        },
        {
            "name": "iccid",
            "baseName": "iccid",
            "type": "string",
            "format": ""
        },
        {
            "name": "imsi",
            "baseName": "imsi",
            "type": "string",
            "format": ""
        },
        {
            "name": "msisdn",
            "baseName": "msisdn",
            "type": "string",
            "format": ""
        },
        {
            "name": "simCardGroupId",
            "baseName": "sim_card_group_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dataLimit",
            "baseName": "data_limit",
            "type": "SimpleSIMCardDataLimit",
            "format": ""
        },
        {
            "name": "currentBillingPeriodConsumedData",
            "baseName": "current_billing_period_consumed_data",
            "type": "SIMCardCurrentBillingPeriodConsumedData",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimpleSIMCard.attributeTypeMap;
    }

    public constructor() {
    }
}
